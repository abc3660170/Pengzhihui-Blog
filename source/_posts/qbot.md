title: 迷你巡线机器人QBot
date: 2015-11-5 20:45:08
tags:
- 项目
- Arduino
- Android
- Altium Designer
---
![加载失败,请刷新](/img/qbot1.jpg)

Qbot是今年暑假实习的时候跟同事一起构思的一个项目，主要起因是看到这个会解迷宫的巡线小机器人[3pi](http://v.youku.com/v_show/id_XMzU4MTQ4NzIw.html)，觉得很搞笑，想弄一个耍耍，但是这玩意国内并不好买，于是打算自己动手...

![加载失败,请刷新](/img/qbot2.png)

仔细想想这东西的可DIY性还是挺高的，除了巡线外，解谜宫，遥控，对战等玩法还有很多，要是基于Arduino开源当然就更合适啦。
***（点击more继续阅读->）***
<!--more-->
最后选定的主控芯片方案是Mega32U4，主要是因为自带串口BootLoader，可以直接通过USB下载程序。对比于3pi增加了：

- 128x64分辨率的OLED显示屏
- 两个可编程配置的炫彩RGB尾灯
- 可以直接USB充电的锂电池
- 陀螺仪模块用来识别一些手势
- 以及当然更小巧的机身。

软件方面比较简单，前期实现了APP遥控和巡线，以及ADC显示，迷宫的算法是已经构思好了的，但是之后没多久就实习结束回学校了...然后一开学各种事情扑面而来...于是Qbot的项目就一直被搁置到现在

看一下视频演示

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTM4MTEwMzQxMg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br /> 
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTM4MTEwMTYwNA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br /> 
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTM4MTA5OTg2OA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br /> 
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTM4MTEyMjk0MA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br /> 
个人还是很喜欢这个小车的，等之后有空我会继续完成剩下的工作，然后看大家喜欢的话就发布出来

先把原理图也放出来吧，有能力动手的同学也可以自己先尝试做一下

![加载失败,请刷新](/img/qbot3.png)


