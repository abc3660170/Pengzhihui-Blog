title: 基于高速视觉的乒乓球机器人
date: 2017-04-25 18:47:29
tags:
- 项目
---

![加载失败,请刷新](/img/pingpong01.jpg)

# **关于这个项目**

---

个人很喜欢打乒乓球，想当年高中的时候每天中午挤出午休时间在学校挥洒汗水，连觉都不睡了😲，但是上大学以后打球的时间就比较少了，一是由于学习工作时间有限，二是学校里球友越来越少，很少碰到水平相当又志趣相投的同学了。

记得去年在网上看到一个kuka机械臂跟波尔对战的视频，虽然说这个视频是kuka推的广告，也有充分的摆拍嫌疑，但是我觉得让机器人打乒乓球其实还是非常可行的。毕竟乒乓球不像围棋之类的智力竞赛，打乒乓球并不需要很高的人工智能水平（心机婊机器人选手不算😉），而是对机电控制水平要求较高（高速度，高精度），这方面已经有了工业机器人行业这么多年的积淀，应该说难度并不是非常大的，最大的难点在于视觉算法。

<!--more-->

<br />

    KUKA机械臂对战波尔的视频↓

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XNjg0MDg2ODY0" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

当然了，工业机械臂属于重型装备，价格也不是一般消费者能承受的起的（数十万以上），如果要想实现一套低成本的类似设备，我归纳了一下，大致需要如下几个功能模块：

* 高速双目视觉系统
* 自由度机械臂（可用舵机，降低成本）
* 高速移动滑台（类似雕刻机的导轨，用于快速移动，因为舵机的响应速度不够所以需要这一项来补偿）
* 一套巧妙的算法



更详细一些来说，我们先要使用两个高速相机组成双目视觉系统，用来实时捕获乒乓球的位置和速度，并计算出预判的击球点位置和速度，然后控制机械臂和滑台快速移动到击球点准确击球。整个循环过程的周期将不会超过10ms，考虑乒乓球的运动速度可以达到7m/s左右，10ms的时间足够使其运动7cm了，所以对于预判来说，高速的摄像机是必须的。**



# **技术路线**

---

具体的技术路线我总结如下，其中击球策略要等到硬件软件框架完成后再实际确定，实际方案也会在边研发的过程中边修改，后面就是逐步实现导图中的功能了。

![加载失败,请刷新](/img/pingpong02.png)



# **项目动态（未完结）**

---
## **2017.4.25**

> 目前高速摄像头已经到位，我选择的是某款工业摄像机配合广角镜头，帧率可以达到320fps，应该说对于本项目是非常理想的😘（不过根据测试该相机的驱动稍微有些复杂，由于并不是免驱摄像头，特别是同时开启两个摄像头的情况下需要定制一些驱动，好在这个问题我已经解决）。

![加载失败,请刷新](/img/pingpong03.jpg)

> 然后机械臂的设计也已经基本完成，使用四个舵机加一个步进电机驱动，下一步是进行相关金属件的加工和3D打印

![加载失败,请刷新](/img/pingpong04.jpg)



## **2017.4.27**

> 加工的机械臂零件基本都到了，把机械臂组装了一下。经简单测试，很可惜底部舵机的力矩不够，准备换用更大力矩的型号，顺便改进一下结构。

![加载失败,请刷新](/img/pingpong05.jpg)



## **2017.4.29**

> 双目视觉方面，相机的立体标定和重投影计算已经完成了，各种投影坐标变换还是有点复杂，做了个可视化的demo，视频中标定板的三维坐标被摄像头定位并实时显示到3D场景中。这里有少许延迟是因为通信原因和渲染耗时，另外显示器的刷新率也只有60hz所以本身是无法显示高速图像的，最终应用到系统中时帧率会控制在150fps左右，延迟在ms级。

> 下一步是着重解决乒乓球识别的问题，用传统机器学习或者神经网络的方法当然是可以很好地识别物体，但是运算量的开销是本系统所无法承受的（即使提前训练好模型，一帧运算时间也差不多在秒级别），所以肯定还是寻求更加简洁有效的识别算法，比如光流，差帧等；一个更麻烦的问题是，除了识别乒乓球，还需要识别机械臂和人，因为在摄像头机的视野中，这些东西都是在运动的，而乒乓球是其中最小的物体，所以如何做好滤波算法也非常重要，类似卡尔曼之类的跟踪器是很有必要被引进的。

```
标定板姿态解算↓
```

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjczNDc4MjY2NA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

## **2017.5.4**

**劳动节光荣地放了几天假~**

> 机械的金属件都加工完成了，机械臂已经组装好，更换了结构和舵机之后力矩已经满足要求，速度也是没什么问题的。

> 在组装的时候突然想到个方案：其实可以在机械臂关节之间添加一个扭簧，用来抵消机械臂的重力，这样舵机只需要很小的力矩用来克服惯性力就行，响应肯定会好很多，下一版尝试一下这个方案。

![加载失败,请刷新](/img/pingpong06.jpg)

> 用买的舵机驱动板试了下机械臂的效果，如图（只驱动了下面两个舵机，末端的舵机没有上电，因为舵机板只有两个输出）。

![加载失败,请刷新](/img/pingpong07.gif)

> 另外，机械臂的控制电路部分，PCB已经画好了正在打样，估计下周就能撸起来啦~

![加载失败,请刷新](/img/pingpong08.jpg)

> * 下位机主控电路采用的是一块STM32主处理器+AVR协处理器，因为系统对实时性要求很高，所以使用两块主控分别处理控制部分和通信部分，提高效率。
> * 最底部的导轨使用的是交流伺服电机，这电机通体乌黑，摸着甚爽，输出暴力，居家创客必备啊😉

![加载失败,请刷新](/img/pingpong09.jpg)



## **2017.5.7**

> 继续调了下视觉算法，目前已经可以准确识别乒乓球了，偶尔有遮挡的情况也不怕；下一步是加入卡尔曼滤波，让轨迹跟踪更稳定可靠，等PCB板子来了就开始软硬件联调啦。


```
单摄像头乒乓球识别跟踪算法↓
```

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjc0OTE1ODMyOA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

## **2017.5.9**

> * 整合双目和目标识别写了个3D可视化程序，跟踪效果还是不错的，这里还没有加任何的滤波算法，所以后期还有提升的空间
> * 遇到的一点小问题是，由于乒乓球太小，因此当球处于远桌处的时候会变成一个小点，这时候可能会被当作噪声被滤除...解决这个问题有几个思路，一是添加形态学处理，也就是膨胀，这样可以在不改变目标中心位置的情况下扩大目标面积，二是靠观察器跟踪球的位置，简单的说就是现实物理世界中的运动一定是连续的，这样在摄像头帧率足够高的情况下，得到的相邻两帧的距离不会太远，基于这个先验知识就可以判断出噪声和球的区别了。


```
双目乒乓球识别跟踪算法↓
```

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjc1MTc4Mjk2MA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />



## **2017.5.10**

> PCB到了，迅速焊了一片样板，主控采用的是STM32主处理器和一片Arduino作为协处理器；经过一番惊心动魄的测试，除了钽电容焊反放了次烟花以外，其他部分都工作正常。。

![加载失败,请刷新](/img/pingpong10.jpg)



## **2017.5.11**

> 偷个懒。。。不务正业做了个主控板外壳，正在SLA打印中↓

![加载失败,请刷新](/img/pingpong11.png)

![加载失败,请刷新](/img/pingpong12.png)



## **2017.5.19**

**有点其他事情忙耽误了几天，重新开始续更啦~**

> 光固化打印好的主控外壳↓

![加载失败,请刷新](/img/pingpong13.jpg)



> 昨天测试了一下焊好的驱动主控板，板子倒是没什么问题，驱动，通信各部分都正常。拍了个演示视频，到时候会实时同步电机运动状态到3D场景中，方便记录数据进行场景重放，好定量分析参数的影响。

```
嵌入式驱动板演示↓
```

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjc3MjI3NzI2NA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

> 伺服电机还是很给力的，响应速度和扭矩都不错。不过头痛的是，上面的机械臂效果还是没那么理想，虽然之前已经更改过一次结构，但是测试中快速运动的时候还是容易出现震荡的情况。
>
> 无解，继续改结构吧。。。

## **2017.6.6**
> 最近事情太多了。。不过还是有些小进展的，机械臂改版马上就完成了；视觉算法改动较大，翻看了不少国内外视觉跟踪相关论文，产生了一些新想法，经验证还是很有效的，进一步增强了鲁棒性，看视频效果↓

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjgwNjY4MjU0NA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />


## **2017.6.9**
> 机械臂改版完成了，新版设计把几乎所有舵机多下置到底部，通过同步带传动,小伙伴帮忙设计的新结构，非常给力~
> 这样设计好处有很多：
>
> * 首先降低了机械臂负重，可以减轻舵机扭矩需求
>
> * 其次由于装在底部空间足够，可以换用更大型号的舵机
>
> * 最后由于使用同步带和同步轮传动，可以在同步轮出再加一级减速，进一步增大力矩，减小惯量（和减速比的平方成反比）
>
>   
>
>   总的来说现在力矩是完全足够了，速度也比较理想，看视频：↓

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjgxNDEwNTg3Ng" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

> 机械臂主要负责垂直方向的运动，而水平方向则由更为灵活的高度滑轨实现，现在滑轨还在加工，预计过几天就可以完全组装好了。

## **2017.6.11**
> 导轨加工完成，速度飞快；机械臂可能还需要大改，脑阔疼...

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjgxODU2NTA1Mg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />


## **2017.6.13**
> 整合各个模块，简单写了个导轨跟踪程序测试了下，效果还是不错的，下一步是优化速度，加上轨迹规划函数减小抖动

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjkxNjkzMTcyMA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

> 结合硬件控制的效果，机械臂还有些问题待改进，这里只控制滑轨的运动

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMjgyMjU0Mjk5Ng" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>  

<br />

