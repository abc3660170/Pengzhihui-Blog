---
title: 蛋黄和Nano - 全球最迷你的自平衡机器人
date: 2015-12-9 20:31:08
tags:
- 项目
- Arduino
- Android
- Rhino
typora-root-url: ..
---
![加载失败,请刷新](/img/nano01.jpg)

# 关于Nano
***Nano***是一个小巧可爱的机器人，身高大约10公分，特点是平衡感好，长得很白以及善于卖萌。作为全球最迷你的自平衡机器人，Nano身材虽小，但配置有丰富的传感器 — *陀螺仪，超声波，Motion sensor*，如果喜欢的话你可以让它*自主巡线，跟踪，避障*…更重要的是，它是完全开源的，从硬件到软件的资料都会在下文中提供下载。如果您耐心看完本教程，并觉得有用，可以转载给更多朋友以示支持，但同时请注意注明文章出处。

***（视频较多，点击more继续阅读 ->）***
<!--more-->

# Nano的功能演示
<font color="#4590a3" size = "4px">自平衡站立</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XOTY1Mzk2NTQ4" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br />  

<font color="#4590a3" size = "4px">自平衡行走转向</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTI1MTgzNDY2MA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br />  

<font color="#4590a3" size = "4px">手机APP遥控及交互</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTI1NDk0ODMzMg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br /> 

<font color="#4590a3" size = "4px">超声波感应</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTI1MzQ3MTAyOA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br />

<font color="#4590a3" size = "4px">摄像头目标跟踪</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XOTY1NjA0NDMy" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br />  

<font color="#4590a3" size = "4px">卖萌</font>  
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTI1NTU3OTk3Mg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br /> 

# Nano与蛋黄
***Nano***的创意始于2013年暑假，那时候它还叫“*蛋黄*”，当时的想法是制作一个入门级的自平衡小车（因为赶上学校飞思卡尔比赛，当时报的平衡组，当预习功课了），初步的设想是：基于Arduino制作，可以用PS2手柄遥控，能平衡能走，最好还会卖萌。

其实那也是我第一次接触和使用Arduino，当时少年穷…买了一块国产的mini pro裸板，感觉有点开心，然后没多久就被我瞎接电源给霍霍了…

![加载失败,请刷新](/img/nano02.jpg)

最初版的蛋黄就是用mini pro做的，由于当时还没有3D打印机可供差遣，所以所有部件连接基本都是靠万能的万能胶，整体结构十分的粗犷，怎么说呢，这也许就是蒸汽朋克风吧（并不是）。

当时做的一个小视频***《蛋黄物语》***：
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNjAwNDY5NjQ0" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>  
<br />  

蛋黄的资料发在论坛之后引起了不少关注，很多同学被顺利地带进了自平衡小车的坑…一年多时间还不断有人问我相关的问题，也正因如此，羞愧于靠着这么点干货应付大家许久，加之个人对自平衡系统有了更深刻的理解…于是决定改进初代蛋黄的诸多不足，着手设计制作蛋黄的2.0版本。

当时对于初代的不满情绪主要集中体现在<font color="#4590a3" size = "3px">外表</font>（毕竟颜值就是战斗力），<font color="#4590a3" size = "3px">速度控制</font>（当时几乎没有用上速度环，只能靠不断手动调节平衡点进行移动），<font color="#4590a3" size = "3px">扩展性</font>（初代的外设太简陋，没有完全发挥处理器的性能），以及<font color="#4590a3" size = "3px">外表</font>（可以看出我真的很在意…）。

最后就有了Nano啦~  
![加载失败,请刷新](/img/nano03.jpg)

# 制作教程
好啦接下来会介绍制作一只Nano的详细教程，其中包括一些有关自动控制的原理和个人遇到的一些问题和经验总结。另外值得说明的是，**实现自平衡机器人的完整控制需要大量的参数调试过程**，因此本教程会尽量以通俗的方式介绍原理和调试方法，但还是需要您拥有一定的电子制作基础、熟悉Arduino的使用、较强的动手能力，以及坚定的极客精神，祝成功:-)

<font color="#4590a3" size = "5px">原理篇</font> 
自平衡小车是一种典型的*倒立摆控制模型*，什么是倒立摆呢，普通的钟摆相信大家都见过

![加载失败,请刷新](/img/nano04.jpg)

当物体离开垂直的平衡位置之后，便会受到重力与悬线的作用合力，驱动重物回复平衡位置，这个力称之为回复力，其大小为  

`F = − mg*sinθ`

在偏移角度 θ很小的情况下， sinθ ≈ θ ，所以回复力与***偏移的角度***之间大小成正比关系, ***方向相反***，在此恢复力作用下，单摆便进行周期运动。

而考虑在空气中运动的单摆，由于受到空气的阻尼力， 单摆最终会停止在垂直平衡位置。空气的阻尼力与单摆运动的***角速度***成正比， ***方向相反***。阻尼力越大，单摆越会尽快在垂直位置稳定下来。

现在来看这样一个等效模型  
![加载失败,请刷新](/img/nano05.jpg)  
我们的车模其实就相当于一个倒立的钟摆，可以看到，这时候重力对于物体的作用是向下的，也就是当物体偏移了一点角度之后，重力作用会和偏移角度方向相同，如果车轮不运动的话，摆就会很快倒下。

为了解决这个问题， 使得倒立摆能够像单摆一样，稳定在垂直位置，我们有两个办法：  
	1. 改变重力的方向  
	2. 增加额外的受力，使得恢复力与位移方向相反。

显然能够做到的只有第二种方法，为此我们根据摆的偏移角度控制车轮加减速运动，这样在小车的坐标系（非惯性系）里，摆就会受到额外的惯性力作用，最终让摆平衡起来。

再通俗一点说，就是<font color="#4590a3" size = "3px">当我们发现小车向前倒的时候就赶紧让它轮子加速向前，发现小车向后倒的时候就赶紧让它轮子加速向后，只要这个过程做得足够精确和快速，就能实现小车的自平衡。</font>  

<font color="#4590a3" size = "5px">硬件篇</font> 
原理里面说了我们要根据小车偏移的角度来控制轮子的加减速，那么根据需求这里面需要用到的模块就有：

**1.Arduino主控板  | 选任何一块你熟悉的就行，推荐nano，小巧，下载方便   
2.陀螺仪加速度计模块 | 用来测量倾角，推荐MPU6050，便宜，使用方便   
3.减速电机 | 尺寸自定，但最终输出转速为300rpm左右会比较合适，值得注意的是电机必须带编码器或者码盘来测速，单相或者两相的都可以  
4.电机驱动 | 普通尺寸的电机推荐TB6612驱动芯片，比L298的效率高不易发热（平均电流1.2A左右，功率更大请选L298或其他驱动）；迷你电机用L9110s模块即可，便宜也很小巧  
5.蓝牙模块 | 用于和手机通信，从模块或者主从一体的都可以  
6.按键 | 任何两个脚的按键都可以，用来进行一些设置  
7.电池 | 如果是用高于5V的锂电供电的话就可以直接使用，但如果做迷你车用3.7v的小电池供电，就需要注意得额外加一个DC升压模块，否则Arduino可能无法正常工作在16MHz  **


额外扩展的模块可以有：  
**1.超声波模块  | 可用于测距和避障，SR04比较常用，更小巧一点的有RCW-0001，当然更小的还可以买收发一体的自己DIY  
2.距离传感器 | 夏普的一系列传感器，比超声模块贵一些，但效果也更好  
3.OLED显示屏 | 用来显示状态数据当然少不了屏幕，0.96寸的分辨率128×64效果非常好，注意最好买SPI接口的，因为I2C可能跟MPU6050有冲突（可能是个例，按理说地址是不冲突的，具体原因没有深究）  
4.蜂鸣器 | 让小车发声，往往比盯着一个LED看效果更好，推荐使用有源蜂鸣器  
5.摄像头 Motion Sensor| 准确的说是红外光传感器，由于Arduino的性能不足以进行图像处理所以无法使用一般的摄像头**

此外除一般焊接工具和手工工具外，一把热熔胶枪会成为你DIY的得力助手。至于结构件，有3D打印机的同学可以直接下载后面的STL文件自行打印，没有打印机的同学也可以到万能的橙色网站找到3D打印服务店。还有一点需要说明的是我当时使用的小电机，是自己改装过的，原本是一个数码相机的变焦马达所以非常小巧而且可以装码盘，改了减速比和增加出轴之后就拿来做小车了，只不过现在好像没有这款卖了…  

不过后来无意找到一款更合适的N20减速小电机，性能比自己改装的那款好很多，虚位和摩擦损耗都会更好，出轴也能直接接轮子，而且配备了霍尔测速，长这样：

![加载失败,请刷新](/img/nano06.jpg)

有意做超迷你平衡车的同学可以选用这款。TB链接就不发了…橙网搜 “N20减速电机 迷你”就能找到的  

<font color="#4590a3" size = "5px">软件篇</font>  
软件篇主要介绍***PID算法***，可以说PID是整个项目程序的核心，其使用的好坏决定了你的小车能不能自平衡，以及平衡得稳定不稳定。PID的算法和理论分析网络上有很多介绍，这里就不详细讲解了大家可以自行搜索。基于数学模型的介绍有点不好理解，本文从控制学的角度简单讲解一下PID及其使用方法。

所谓PID就是***比例-积分-微分***的英文缩写，但并不是必须同时具备这三种算法，也可以是 ***PD***, ***PI***,甚至只有 ***P***算法控制，下面分别介绍每个参数的含义：

首先需要明确一个事实就是，要实现PID算法，必须在硬件上具有闭环控制，就是得有反馈。比如控制一个电机的转速，就得有一个测量转速的传感器，并将结果反馈到控制器中，而在自平衡系统中，常用的有三个控制环 — ***角度环、速度环、转向环***  

大家可以想象出每个闭环的反馈元件分别是什么吗，对就是上面元件清单里面包含的 ***IMU（陀螺仪+加速度计）、编码器、摄像头（或者其他可以确定方位的元件比如陀螺仪，磁场计等）***

<font color="#4590a3" size = "3px">P（比例）</font>：以小车巡线为例，现在需要让小车跟随一条轨迹前进，用PID算法控制方向环，反馈传感器就假设为摄像头。那么小车行进中有这么几种情况：  
**1.车通过摄像头发现自己处在轨迹的左边，位置误差值为正，那么就需要向右转向，转向值为正  
2.车通过摄像头发现自己处在轨迹的右边，位置误差值为负，那么就需要向左转向，转向值为负  
3.车通过摄像头发现自己处在轨迹的正中间，位置误差值为0，很欢快地笔直前行，转向值为0  **

于是我们发现，小车转向值的输出可以简单地通过把位置误差乘以一个系数就得到了，而且显然，误差越大，得到的转向值也越大，符合需求。这里面这个系数，就是P了，而系数具体的大小，需要根据实际情况调试确定。  
我们有了第一个公式：  
```
P_term = kP * error
```

<font color="#4590a3" size = "3px">D（微分）</font>：还是以小车巡线为例，依然是那车那线那比例。那么小车行进中有这么几种情况：
在P参数的作用下：  
**1.小车从左边向中间逐渐靠拢，终于它到达了中点……然而，由于惯性，它根本停不下来！于是小车又到了线的右边  
2.小车从右边向中间逐渐靠拢，终于它到达了中点……然而，由于惯性，它根本停不下来！于是小车又到了线的左边  
3. …**

这跟说好的不一样！于是这个时候D出场了，想想我们期待的效果是啥，我们希望小车到达中点，此时不光位置误差为0，还要转向速度误差也为0。  

那么我们设定期望的转向速度为0，此时如果小车转向速度向右的话误差为+，向左为-，再看前面的情况1，小车的转向速度误差为+，我们应该在P之外再给它一个向左的转向力，才能保证它在到达中点时速度不会那么快；情况2类似，此时需要向右的转向力  

也就是说，D相当于给了小车一个转向的阻力，而这个力，又恰好可以通过简单地把转向速度误差乘以一个系数得到，显然，转向速度误差越大，得到的阻力越大，符合需求（值得注意的是这里的转向速度是相对中点的，并不是指小车输出的转向速度，可以理解为“位置变化的速度”）  
我们有了第二个公式：  
```
D_term = kD* (error- last_error)
```

如果上面的例子还是不好理解的话，考虑前面的单摆模型：  
P相当于重力的作用，让摆左右往复运动，而D则相当于空气阻力，让摆慢慢停在中点。D的大小很理想的情况下，应该是大概摆动左右各一下之后就停在中点，想象把摆放在水中摆动的情况。

<font color="#4590a3" size = "3px">I（积分）</font>：有的时候我们会发现，系统中存在一些固定的阻力，例如，我们用PID控制一个电机的转速，当给定的目标速度很小的时候，就会出现这样的情况：  
根据`P_term = kP * error`，由于`error`很小，P的输出也很小，而由于摩擦力的存在，此时并不能让电机转动起来；又由`D_term = kD* (error- last_error)`，由于电机没有转动，显然`(error- last_error)`始终为0于是D输出也为0，那么问题来了，除非改变目标值，否则电机就永远转不起来了…  
I的作用就是消除这样的静态误差，它会将每次的误差都积累起来，然后同样也是乘以一个系数之后作为输出。比如上面的情况，虽然误差很小，但却不是0，于是在每一轮的计算中，I项把error逐渐累积，直到超过临界值让电机转起来；而在误差为0的情况下，I项却又不会帮倒忙。  
第三个公式：`I_term = kI*（I_term + error）`
<br />  
以上就是PID的全部计算了，最后三者加起来就得到了：  
```
PID_output = P_term + I_term + D_term
```
每隔一段固定时间把它运行一遍，就是PID算法了。

可以看出，PID的算法实现其实非常简单，不过只有几行代码而已，所以非常建议自己实现一遍PID代码。Arduino平台上也是有PID库的，但库的名字叫什么我不告诉你，自己去找哦。

<br />  
<font color="#4590a3" size = "5px">制造篇</font> 

如果上面的都可以理解的话就可以开始动手制作啦，这里会以Nano的制作过程为例，但是大家可以根据实际情况自行调整。

网盘老是链接失效，所有文件***（源代码+STL模型文件+APP）***都发在与非[电路城](http://www.cirmall.com/circuit/2022/NANO~~%E4%B8%9C%E5%8D%8A%E7%90%83%E6%9C%80%E5%B0%8F%E7%9A%84%E8%87%AA%E5%B9%B3%E8%A1%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%EF%BC%88%E7%A1%AC%E4%BB%B6%2B%E6%BA%90%E7%A0%81%2B3D%E6%96%87%E4%BB%B6%EF%BC%89#/details)上（收1元当请我吃辣条了…）

对里面文件说明一下：  

* STL文件是Nano头部和身体的结构件，底座由于大家使用电机不同需要自己确定，按照自己买到的电机的情况制作一个带两个电机的底座就行，有热熔胶枪的帮助应该挺简单的
* 源码建议用1.6.5版本的IDE编译，旧版本的库文件有些区别

先看看原理图（点击可以打开大图）  
![加载失败,请刷新](/img/nano07.jpg)

需要说明的是图里面的电源线是没有连接的（一正一负大家都知道），另外IO大家可自己调换，只要在程序里改一下宏定义就行；另外编码器分为单相和AB相的，我这里用的是单相，只能测转速不能测方向，所以其实方向的检测是通过给电机的PWM方向近似模拟的，有条件的话还是用双向的更好。单相编码器的话直接把信号线接到D2，D3脚，分别属于中断0和中断1；AB相的话则是一根线接到D2或D3另一根线接到一个普通IO用来判断方向（这时候需要修改程序最后的***ENCODER_L()***和 ***ENCODER_R()***函数内容）。

然后就开始按图连接模块到外壳里

![加载失败,请刷新](/img/nano08.jpg)  

文件打印好之后按原理图组合，头部里面装了超声波，Arduino nano板（不带排针），蓝牙模块，两个LED，摄像头以及蜂鸣器，注意把所有的IO都用导线引出到脖子部位

![加载失败,请刷新](/img/nano09.jpg)

正面的样子

![加载失败,请刷新](/img/nano10.png)

头部模块都塞完之后先别急着粘合，之后还有身体的导线要连接到主控板，里面的部件可以先用热熔胶固定一下。对了导线选择的话如果技术好可以用漆包线最省空间，没有把握的话就用这种FC排线，比较软去皮容易，比较细而且是整排一起的会美观一些，杜邦线真的很不好用…  

![加载失败,请刷新](/img/nano11.png)

身体部分主要放舵机（如果要用的话），OLED，电机驱动板及升压板，OLED塞的时候注意不要用蛮力不然屏幕玻璃易碎（不要问我怎么知道的…）  

![加载失败,请刷新](/img/nano12.png)

![加载失败,请刷新](/img/nano13.png)

如果上面装头部的时候有把导线引出这时就可以焊在屏幕上了
MPU6050在底部，也用502或者热熔胶固定

![加载失败,请刷新](/img/nano14.png)

然后是舵机，舵机用的是最常见的9g舵机，虽然也有更小的但是怕力矩不够，可以看到由舵机摆臂推动脖子的连接杆就可以让头部运动了。舵机不是很建议采用，一个是小机器人的电池功率比较小，舵机在堵转的时候容易造成死机，另一个头部重量还是相对比较大，所以运动的时候重心变化容易干扰平衡，参数设置会更复杂

![加载失败,请刷新](/img/nano15.png)

然后是装身体部分侧面，先把升压板用热熔胶固定在一边，然后盖上盖板用502粘合（红色圈住的是一块DC-DC升压板）

![加载失败,请刷新](/img/nano16.png)

这时候主体就已经快完成啦

![加载失败,请刷新](/img/nano17.png)

这时可以开始制作电机底座了，一个参考方案是，用一张废弃的电话卡或者银行卡剪裁一下作为基板，然后把两个电机用热熔胶固定在基板上，这样基板就可以用胶和身体粘合起来了

![加载失败,请刷新](/img/nano18.png)

现在可以装电机驱动了，我用的是*L9110S*，直接盖在身体背面

![加载失败,请刷新](/img/nano19.png)

装上背盖整个身体部分就完成啦

![加载失败,请刷新](/img/nano20.png)

最后是电池包，找块轻薄一点的电池直接粘在背部就行，也可以加上电池盖

![加载失败,请刷新](/img/nano21.png)

侧面的样子

![加载失败,请刷新](/img/nano22.png)

![加载失败,请刷新](/img/nano23.png)

小Nano完成了！

当然现在它还不会动，这时候还是先别急着把头部粘合，先写几个小程序逐个测试一下每个模块的工作状态，比如超声波是否工作，6050有没有数据，这些程序直接去各个库里面找到例程改一下定义的引脚运行看效果就行。
当确定没有问题之后，用热熔胶仔细地固定好每个部位，准备开始程序调试工作了。

打开源程序文件夹里任意一个文件，就可以看到整个工程代码  

![加载失败,请刷新](/img/nano24.png)

首先需要修改的是引脚定义，把引脚改成你实际连接的情况

```
/*********************引脚定义*********************/
#define LFT 0
#define RHT 1
#define BUZZER 4 //蜂鸣器
#define BUTTON 5 //按钮
#define LED 11 //脸颊LED
//#define SERVO 13 //舵机,小机器人不推荐使用,电流易过载
#define TRIG_PIN 8 //超声波模块触发脚
#define ECHO_PIN 7 //超声波模块接收脚
```

然后再最上面的调试选项中，取消IMU_OUTPUT的注释，像这样  

```
/*****************************调试选项********************************/
//#define TIMING_DEBUG   //PID周期调试,开启后打印时间信息
//#define PARAM_DEBUG    //PID参数调试,关闭后用宏取代变量值节省动态内存
#define IMU_OUTPUT  //输出6050数据
//#define SONIC_OUTPUT  //输出超声波数据
//#define SPEED_LOOP       //速度环开关
//#define MOTOR_ENABLE     //电机使能
//#define SONIC_ENABLE     //超声波使能
//#define CAMERA_ENABLE  //摄像头使能
```

下载程序到主控里，打开串口监视器，按一下按键，就可以看到输出的角度数据了。
如果数据不正常的话需要检查前面哪里出问题了，这一步是为了获取机器人平衡的自然角度：手动把机器人放正，就是大概在自然重心的平衡角度，读取串口的角度数据，记录下这个值就是`angle_setpoint`的值了，把66行的`angle_setpoint = 0`改成你得到的值。

下一步把*IMU_OUTPUT*重新注释掉，开启*MOTOR_ENABLE*的注释，然后用 *Motor(char LR, int SPEED)*这个函数放在*setup()*的最后面来检测电机的正负极是否正确，也就是当给*Motor(LFT,100)*时左轮正转，*Motor(LFT,-100)*时左轮反转，*Motor(RHT,100)*时右轮正转，*Motor(RHT,-100)*时右轮反转。

上一步也检测成功之后，就可以开始调节角度环的PID参数了  

```
/***************PID变量定义**********************/
#ifdef PARAM_DEBUG  //角度环数据
double  P_angle = 0, I_angle = 0, D_angle = 0;
#else
#define P_angle  0
#define I_angle  0
#define D_angle  0
#endif
double  angle_setpoint = 0, angle_output, angle_integral;
uint32_t angle_PID_timer;

#ifdef PARAM_DEBUG  //速度环数据
double  P_speed = 0, I_speed = 0;
#else
#define P_speed  0
#define I_speed  0
#endif
double  speed_setpoint = 0, speed_output, speed_integral;
uint32_t speed_PID_timer;
```

说明一下这里用宏定义了一遍参数的原因是，如果用的mega328p的芯片的话由于整个程序代码量还是挺大的所以会提示动态内存紧张，所以在调试完参数之后就把它们用宏固化了节省SRAM

总体的参数整定原则是：  

* 先P后D，如果电机响应慢（比如减速级很多的电机），再调I，如果PD效果足够好的话则不需要I
* 单一变量法，即调整一个参数的时候其他参数都固定不变
  先定量级再定数值，比如调整P的时候，先从0.0001开始，查看小车反应，没有效果的话改为0.001，以此类推，直到确定一个合适的数量级，然后才开始在这个数量级里微调，这样其实就已经把调整的范围缩小到很小了
* 先超调再减小，即所有参数都先尽量加大，直到系统震荡，然后再取这个值的小一点的值作为最合适参数
* 调试过程中尽量让车处于自然状态没有额外的力作用，即尽量用无线调试，有线的话找根软一些的线  

好那么调节过程中小车什么表现才算是***“好”***呢？  
在角度环中，当P逐渐增大，小车会开始有恢复力作用，也就是当手扶着往前倒的时候小车也能大概跟着往前走，但是还是走的很“软”，再逐渐增大参数，恢复力越来越大，直到大到一定程度，小车开始前后自主剧烈抖动，电机性能好一点的小车即使手不扶着也能大概站立了。  

稍微减小刚刚震荡的参数，作为P值固定在程序里，开始调节D值，依然是确定量级之后逐渐增大，在增大的过程中会发现小车的震荡频率逐渐降低了，增大到一定程度小车基本不再震荡，这个值就是需要的D值了  

也会有一部分情况下由于电机性能原因上面PD的调整过程中始终无法达到很好的效果，那么此时需要加入I，在调完P值之后，D值置0，增加 I值，直到小车的恢复力变得比较“硬”，然后稍微减小P值，直到出现比较理想的直立效果；最后再加D，视效果增加到震荡为止，再减小到70%左右，这样角度环PID所有参数就整定完成了。  

角度环调好了，小车可以稳定平衡了，可是为啥它一直往一边跑呢？  
因为角度环的任务就是维持小车的角度，除此之外就是它能力范围之外了，角度环是不关心小车是静止着平衡的，还是边跑边平衡的 — 如果恰好目标平衡点和小车重心平衡点重合，那么小车可以大概静止，而如果不是，那小车就会在平衡中不断加速，直到轮子的速度超出了电机所能提供的转速，于是小车还是会倒下。  

所以我们需要添加一个速度环，用编码器测量速度来作为反馈

在速度环中，首先确定编码器获取的数值是正确的，在程序中分别是*count_L*和*count_R*储存计数，打印输出一下转动轮子看数据对不对，正确的话，在调节好角度环的基础上，就可以添加速度环了。  

在调试选项中取消*SPEED_LOOP*的注释，然后这次我们不需要D，速度环单纯靠PI调节，而且先调 I再调P，对应的表现如下：

先给一个比较小的P值（因为I是P的累加，如果P为0的话I也就没有意义了），随着I值逐渐增大，用手轻推小车，小车会前进之后慢慢后退，就说明参数起作用了。此时你可以决定到底给一个更大的 I值还是小的 I值，越大的 I 值对应了更快的恢复速度，在偏离之后会更剧烈地后退，在更短的距离内回到原点，但是当然这样也会降低小车的稳定性，而小的参数则于此相反，需要在前进更长的距离之后才会慢慢回到原点，但是也使得抗干扰能力增强，也就是不会被轻易推倒。  

只用 I 值的话小车的回复会是往复的，逐渐逼近原点，加上P值则可以消除这种来回震荡，与角度环调节D值的过程一样，逐渐增加直到推了之后可以在前后各摆动一次就回复到原点静止，此时这个P值便是对应于那个 I值的最合适参数。

这里有个我之前做的一个大车的抗干扰视频，该车的电机性能非常暴力，因此可以看到其平衡性能非常好

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTQyMTU5OTA4OA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div> 

<br/>

PID参数的调整过程大概如此，总之这是一项既需要细心调整，但自由度也很大的工作，所谓“大胆假设，小心求证”，在多尝试几种参数组合之后，你会找到适合你的小车的***magic point***的~ 

关于参数的调整本来还有很多可以说，比如调整的形式上，大家可以在小车上加上几个电位器用analogRead读取后作为参数值，这样就可以方便而直观地观察到参数连续变化带来的影响；又比如无线调试的话使用SSH终端的串口协议方式控制会比使用串口助手方便很多等等。但我想对于参数理解最有效的方式还是亲手去操作，多尝试多对比，这里也有一个更详细的参数整定视频教程，非常推荐大家继续观看，方向环的调试这里面也有详细介绍：



<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMzUzMzE1MDI4 " frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe></div>

<br/>


# 总结
Nano完成是在今年6月，这篇教程则一直拖了大半年才姗姗来迟，主要还是因为懒一直没动力来写…如果有来世的话我希望做一坨云…回到项目本身，虽说是蛋黄2.0，但现在来看其实还是有很多地方可以改进的，也许会有3.0版本呢谁知道，那么到时应该会向着更高整合度的方向改进吧，使用自己绘制的PCB而不再使用模块了，机械设计上做得有更大的兼容性，APP会有更多花样可以玩，整合最新的树莓派zero也是很值得尝试的。  

说到APP，这一篇里面并没有介绍APP的使用方式，但是使用方法其实是很直观的，点开APP你就会用了。此外是因为我之后会编写一个和APP对应的Arduino库文件，到时候就可以在任何一个项目中使用我的APP啦，所以APP的教程会在库完成之后一起放出的。  

感谢你耐心阅读到这里，第一次写这么详细的教程，行文不足之处还请见谅，希望本文对你的机器人项目带来了一些帮助 ~  

顺便预告下，Nano是个人***new balance***系列制作的第二款作品（第一款磁浮），今后有空的话这个系列还会有更多有意思的作品，下一个应该会是“一轮”，敬请期待 ~

END.