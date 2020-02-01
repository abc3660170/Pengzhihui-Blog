---
title: 如何制作一支带逗比功能的笔
date: 2019-06-01 15:30:45
tags:
- 项目
typora-root-url: ..
---
![doubibot01](/img/doubibot01.jpg)

**一年一度的六一儿童节又到啦（划掉）过完啦，这年头谁还不是个宝宝！各位超龄儿童有没有收到礼物呀~**

![doubibot02](/img/doubibot02.jpg)



**没有礼物也没关系，今天教大家制作一个小孩看了会尖叫，大人看了想剁手的高科技玩具，有教程有源码，有手就能做~**

![doubibot03](/img/doubibot03.jpg)

逗比钟的创意原型最早来源于国外的一个Arduino项目，当时我看完也是深深地被其由内而外散发的沙雕气息所折服，所以就顺着它的思路自己设计了一个，改进了一下结构，增加了一些额外的功能。制作这个逗比钟的绝大部分材料都可以在网上买到（包括零件加工），成本的话也不高，在下面的教程中我使用的主控电路板是自己设计加工的，对于小白一点的同学，如果不想自己制作焊接PCB的话，可以直接购买下面推荐型号的开发板，也是可以实现完全一样的功能的。

那么首先说明一下，由于是电子DIY项目，所以最好需要你有一丢丢的电子基础：会Arduino的话就完美了；不会也没有关系，电路的连线不超过10根，代码都已经提供好了一键下载即可。至于更加详细完全面向小白的教程，我希望有热心的同学能在尝试过制作成功之后分享一下下不~

来看一下最终成品的效果：

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNDIxNDE4MDA3Mg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br /> 

我们从需要准备的材料入手：

- 9g舵机3个 **共10元**
- 白板笔1支 **共3元**
- NodeMcu ESP8266开发板一块 **15元**
- 舵机拉杆 1.2MM Z字钢丝 **1元**
- M3x3 平头螺丝若干
- M3 螺母若干
- M3x12 螺丝若干
- M3x6 T型对接螺丝若干
- 亚克力激光切割零件一批 **根据跟加工店老板的熟悉程度0~100元不等**

<!--more-->

上面的材料除了最后的亚克力零件外都是可以直接在某宝买到的，亚克力可以去某宝搜索亚克力激光切割的店铺，然后把我文章末尾链接中给出的cut文件发过去进行切割加工，颜色还可以自由挑选

至于NodeMcu，长这样↓

![doubibot05](/img/doubibot05.jpg)

这是一个带WiFi功能的开发板，支持Arduino编程。

原版的方案是使用Arduino UNO来做的，但是很麻烦需要添加RTC时钟模块来进行走时和校准，所以我把代码移植到了性能更强也性价比更高的ESP8266平台，这样既可以利用WiFi连接互联网实现自动校时，也可以通过网络功能实现更多有意思的应用

**比如天气预报↓**

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNDIxNDE4MDA3Mg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  

<br /> 

**毕竟手写时钟一分钟一顿操作，机器人还是很累的，人工智障保护协会表示强烈谴责！**

改成写天气的话，每个小时从网络获取当地天气情况，如果天气有变的话就把它画出来，听起来不但不沙雕，甚至还觉得它有点可爱了呢。

## 那么东西准备好了，接下来就是制作过程了：

拿到材料之后，可以照着3D模型文件自己组装起来，组装很简单，但是有的地方要注意一下顺序。

可能有的同学不知道怎么查看3D模型文件，这里说明一下，很简单的

Windows 10其实就自带3D文件查看器，如图以下的几个软件都是可以用来打开STL格式的3D文件的↓

![doubibot06](/img/doubibot06.jpg)

这里推荐使用3D Builder来查看，打开后可以自由旋转缩放查看细节↓

![doubibotgif](https://pic4.zhimg.com/v2-357e0a68914005d5046175d4ec68edf7_b.gif)

> 这里也给出一个爆炸图视频供大家参考：

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNDIxNDE3OTMxMg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  

<br />

以下是我加工回来的一堆亚克力↓![doubibot07](/img/doubibot07.jpg)

> 这里有大概3套零件

先拼装好舵机臂，注意机身有的地方是用螺丝和螺母固定，有的地方可能需要使用502胶水来粘合。舵机的摆向不要弄错了↓

> 左右臂舵机

![doubibot08](/img/doubibot08.jpg)

然后安装龙门架和抬笔舵机↓

![doubibot09](/img/doubibot09.jpg)

再安装左右臂，手臂的铰链是通过上面写的材料中的对接螺丝固定的，大小臂都是3mm厚度所以对接螺母的长度是6mm刚好；大臂和舵机之间是通过舵机附赠的连接件和502胶水粘合的↓

![doubibot10](/img/doubibot10.jpg)

这里需要注意的是上面圈出的手臂和舵机轴的螺丝先不要上，因为后面还有一个舵机角度的校准过程，校准完毕之后再上固定螺丝。

> 把舵机臂装上架子之后的样子，两者的连接铰链使用的也是机臂上的对接螺丝

![doubibot11](/img/doubibot11.jpg)

抬笔舵机和机臂的连接使用的是一根舵机连杆铁丝，需要自己用尖嘴钳弯折一下，跟机臂舵机一样，摆臂塑料件的固定螺丝先不上，等下载程序校准好之后再固定

![doubibot12](/img/doubibot12.jpg)

最终完成品的样子，背面用透明的亚克力切割的，因为PCB上加了一个光敏电阻，后面可以实现关灯之后自动停止工作。

![doubibot13](/img/doubibot13.jpg)

ok~硬件组装完毕，接下来是电路的连接，如上图所示我使用的是自己设计的一个小PCB电路板，这个PCB的原理图和PCB文件我都开源了，提供在文章末尾的链接中，大家可以各取所需。

![doubibot14](/img/doubibot14.jpg)

如果不想自己加工PCB，那么我来介绍一下使用NodeMcu的电路连接方法：

> 舵机和NodeMcu的连线示意图

![doubibot15](/img/doubibot15.jpg)

如图，左、右、抬笔舵机的黄色信号线分别连接NodeMcu的D1、D5、D6引脚，舵机的黑色Gnd线都接Gnd也就是电源负极，红色Vcc线都接电源正极输入。

没有其他需要连接的了，nice & easy~

下一步是给开发板上传程序，如果使用过Arduino的话，应该没有任何压力，首先安装好ESP8266的板卡包，以及项目需要的两个库文件（都在文章末尾的链接里，ESP8266板卡的支持包安装方法可以百度一下）

打开Arduino IDE，选择好板卡和串口点击上传即可，IDE配置如下，其中的端口根据你们自己的实际端口选择↓

![doubibot16](/img/doubibot16.jpg)

这里解释一下代码里面的一些东西：

```text
//#define DRAW_WEATHER
//#define DRAW_TIME
```

这两行被注释了，所以下载完程序之后默认是没有任何动作的，如果需要手写时间则删除第二行前面的//，如果要画天气则删除第一行的//

```text
const char* SSID = "***";		// 要连接的WiFi的名称
const char* PASSWORD = "***";		// 要连接的WiFi的密码
const char* CITY = "shanghai";
```

这个大家都看得懂，改成你家的WiFi名称和密码即可，使用天气的话下面的CITY改成你在的城市的小写拼音

```text
// uncommet this to do calibration, code will be blocked here
control.Calibrate();
```

上面这一行比较关键，前面说的校准就是在这里设置的，首先按照上面的说明修改好代码之后，下载完第一次运行的时候舵机会上电转到一个位置之后固定不动，因为代码会在这一步卡住。这时候需要你调整三个舵机的塑料摆臂的位置，变成如下状态↓

![doubibot17](/img/doubibot17.jpg)

![doubibot18](/img/doubibot18.jpg)

全部调整好了之后，把这一句注释掉：

```text
// uncommet this to do calibration, code will be blocked here
// control.Calibrate();
```

再次上传程序，就可以看到机器人开始画东西了，大功告成~

下面这个是视频演示的是通过电脑端串口助手发送命令到逗比钟让它执行的效果，注意白板的左下角是零点坐标。

> 上位机命令模式

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNDIxNDE3OTc0OA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  

<br /> 

详细的代码注释大家可以参考我给出的工程文件，祝大家玩得开心。



## **项目文件的Github地址：**

[DoubiBot](https://github.com/david-pzh/DoubiBot)

