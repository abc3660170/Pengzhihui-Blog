title: 智能红外遥控
date: 2016-04-21 14:29:08
tags:
- 项目
---
![加载失败,请刷新](/img/IRemote2.jpg)
教研室在做一个机房监控的项目，其中貌似要求所有相关监测设备IP化，对于空调而言，实现通过网络远程控制的方案已经见怪不怪了，比如之前有点火的broadlink：

***（点击more继续阅读 ->）***
<!--more-->
![加载失败,请刷新](/img/IRemote4.jpg)
本质上就是WiFi模块加上一个红外发射头，但是局限是只能使用他家的APP控制。而老师希望能够自己定制数据的协议格式，于是跟厂家那边沟通，但是无果...遂让我自己造个轮子

东西倒是不复杂，功能也没啥特点，加上设计电路板大概前后花了3天时间，就是完全仿造broadlink的功能－－读取温湿度，远程控制红外遥控等，其中一个比较有意思的功能是克隆遥控键码，也就是所谓的遥控学习功能，有这个功能之后就不需要联网获取每个设备遥控编码了，而且可以控制所有红外遥控的设备。

WiFi方面，有ESP8266这样的神器，当然是轻松得抠脚...

![加载失败,请刷新](/img/IRemote3.png)

![加载失败,请刷新](/img/IRemote1.jpg)

视频演示了红外遥控的功能：
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTU0NDEwMDk4OA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br />


总之就是这样，这次的东西不好玩...


