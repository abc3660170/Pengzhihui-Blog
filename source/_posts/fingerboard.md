---
title: 如何制作一个带指纹识别的机械键盘
date: 2019-05-14 23:36:15
tags:
- 项目
- Arduino
typora-root-url: ..
---

![加载失败,请刷新](/img/fingerboard00.jpg)

在Windows 10发布时，除了使用传统的登陆密码，操作系统还支持三种Windows Hello类型： **PIN**，**面部识别，**和**指纹识别。**

也许我们在各种智能手机上已经习惯于手指一按或者盯着屏幕就可以解锁直奔主题的感觉，但是对于PC来说，生物识别的普及速度似乎慢了不止半拍。

这其中有很多原因，可以归结于电脑的使用方式不像手机需要频繁解锁，也可以认为PC行业作为老消费电子业创新力匮乏各大厂商没有动力跟进最新技术（只有各大RGB灯厂依然蓬勃发展哈哈），但总之现状就是Windows Hello出现了这么久市面上能够适配的配件依然寥寥可数。

嘛，作为一个呆萌极客，遇到这种问题肯定是要挺身而出的，反正让我敲一长串密码我就难受，连指纹人脸都没有的电脑能算得上是神机吗？我表示强烈摇头。

**今天就来教大家如何强势改造自己的键盘，给它添加上指纹模块，一键登录美滋滋。**

<!--more-->

开始之前，先介绍一下本次DIY的背景，其实个人自己用的台式机是支持人脸识别的，我很早（从RealSense发布的时候）就开始关注Windows Hello了。那时候能买的RealSense摄像头都很贵（现在也不便宜），我最早选择的是SR300这个型号，用是挺好用的，但是故障率奇高，半年时间内用坏了两个，所以当罗技也推出了支持人脸登录的Webcam之后，我毫不犹豫入手了一个，就是下面这个玩意↓

![加载失败,请刷新](/img/fingerboard01.jpg)

来到公司之后，在公司的电脑上我自然也想设置相同的人脸解锁功能，但是很可惜，**出于信息安全考虑，公司的电脑登录设置被策略组限制，只能使用密码而无法设置PIN**

![加载失败,请刷新](/img/fingerboard02.jpg)

而在使用Windows Hello在设备上启用生物识别之前，必须选择PIN作为初始解锁方式。所以经过一番搜索后，对于是否可以在不设置PIN的情况下使用Windows Hello解锁这个问题，这里的答案是**否定**的，没有办法禁用PIN，且只有设置PIN后，才可以根据需要添加生物识别。

在Windows 10中，PIN登录是新Microsoft Passport功能的一部分，并且比传统密码更安全，下面的链接是微软官方的介绍↓

[PIN 优于密码的原因](https://docs.microsoft.com/zh-cn/windows/security/identity-protection/hello-for-business/hello-why-pin-is-better-than-password)

**道理我都懂，但是这种情况下我要怎么愉快地在公司___呢？**

当然难不倒我，既然软件上无法支持，那我们就来造一个物理外挂：**直接用Arduino模拟成一个HID键盘，再通过指纹模块来做身份验证。**

原理图如下↓

![加载失败,请刷新](/img/fingerboard03.jpg)

其实非常简单，就是在键盘的USB线中间插入了一个USB-Hub，然后Hub的一个口接键盘原来的USB线，一个口接我们的Arduino（这里用的是Micro，因为带USB模拟功能）

![加载失败,请刷新](/img/fingerboard04.jpg)

> 一拖二的USB-Hub

Arduino这边，选择了一个串口指纹模块，型号是FPM3X，长下面这样↓

![加载失败,请刷新](/img/fingerboard05.jpg)

然后就是键盘的拆解和改造了，这一步比较考验手工，总之就是找一个能塞下模块的位置钻个和传感器一样大小的窟窿。我用的键盘是某宝买的一个茶轴机械键盘（程序员必备），每个按键都带独立可控背光，还很便宜只要不到200块，具体型号就不说了避免广告。

![加载失败,请刷新](/img/fingerboard06.jpg)

> 键盘原始状态

![加载失败,请刷新](/img/fingerboard07.jpg)

> 脱下马甲

![加载失败,请刷新](/img/fingerboard08.jpg)

> 找到一个合适的位置放置指纹传感器

![加载失败,请刷新](/img/fingerboard09.jpg)

> 标记好孔位尺寸

![加载失败,请刷新](/img/fingerboard10.jpg)

> 开始打孔...

![加载失败,请刷新](/img/fingerboard11.jpg)

![加载失败,请刷新](/img/fingerboard12.jpg)

> 冒着生命危险

![加载失败,请刷新](/img/fingerboard13.jpg)

> 把指纹传感器嵌入，用热熔胶固定

![加载失败,请刷新](/img/fingerboard14.jpg)

接下来就是电路部分了，我买了最小的Arduino Micro，因为这个电路实在太简单，所有没有必要自己做PCB，飞几根线即可

![加载失败,请刷新](/img/fingerboard15.jpg)

![加载失败,请刷新](/img/fingerboard16.jpg)

> 为了避免短路，用热缩管把电路部分封装好

![加载失败,请刷新](/img/fingerboard17.jpg)

> 把所有电路都塞进去固定好

![加载失败,请刷新](/img/fingerboard18.jpg)

> 完成品的效果

最后插上电脑，电脑识别出一个键盘，一个Arduino串口，硬件无误~

下一步是编程，Arduino Micro上的Mega32U4芯片本身就带USB接口，所以官方也提供了USB库可以模拟成键盘和鼠标，这里通过模拟成键盘来实现读取到正确的指纹数据后输入一串密码的功能

![加载失败,请刷新](/img/fingerboard19.jpg)

> VS下对Arduino进行编程

经验证，效果完美，而且不仅如此，由于我们可以录入多个指纹，所以可以轻松用代码实现不同指纹输入不同内容的功能；如果在Arduino上添加一些额外传感器，那么还能实现更多自定义宏的触发功能，简直一颗赛艇。

![加载失败,请刷新](/img/v2-2c8ae42c94e90fd29b09792f42312102_b.gif)

### 结束语

本次DIY主要是解决了无法使用PIN的情况下使用WIndows Hello的问题。对于大家自己的电脑，其实完全可以不需要Arduino这一块板子，直接在Hub的一口接入USB指纹模块即可，也是可以完美兼容的~

Arduino的代码在这里，传感器的链接和引脚的接法都在代码里，需要的同学可以自行尝试，记得给个星星~

[**[Github] FingerBoard**](https://github.com/david-pzh/FingerBoard)

