---
title: 自制超迷你模组化Linux卡片电脑【Project Quantum】
date: 2019-12-20 20:34:47
tags:
---

## 这又是个啥？

大家知道，我大概两年前在学校的时候仿造“树莓派”设计过一款硬币大小的Linux卡片电脑，叫MiniPi：[如何自制一块“树莓派”--DIY ARM-Linux卡片电脑](http://www.pengzhihui.xyz/2018/04/08/minipi/)

![加载失败,请刷新](/img/MiniPi12-1579751787178.jpg)

但是时过境迁当我再度审视这款作品的时候，又发现了很多可改进之处：

* 首先Mini-PCIE的封装接口IO数有限，使得大部分的IO都没能从核心板引出
* 其次大家可以发现其实这块核心板的固定方式比较尴尬，由于USB插口处一侧没有螺丝孔位，所以只能靠一个打印的塑料卡扣来固定板子
* 再有就是虽然核心板很小，但是必须加上底板才能作为完整的卡片电脑使用，而一旦加上底板，整个卡片电脑的尺寸就变得一点也不Mini了…

于是今年8月份的时候，我用邮`票孔核心板`+`底板`的方式重新设计了一款卡片电脑，取名为`Linux-Card`，**演示视频如下↓**

<div style="height: 0;padding-bottom:65%;position: relative;">
<iframe width="760" height="510"  
        src="//player.bilibili.com/player.html?aid=65365123&cid=113440040&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="" style="position: absolute;height: 105%;width: 100%;"> </iframe>
</div>  



<br />

> 可以看到整个板子的体积有了质的变化，在板载`USB-Type-C`、`USB串口`、`2个USB-A口`、`WiFi模块`、`OLED屏幕`和`SD插槽`的情况下，整体体积（包括厚度）几乎控制到了极限。

![img](/img/v2-f4f986711bc44f375e64d16d85bddd26_hd.jpg)

### 然后你们以为事情就结束了吗？

并没有！**某男子业余制造卡片电脑得寸进尺，竟还想集成更多功能！**

光增加功能还不算，我掐指一想：既然都已经把核心板压缩到这个程度了，为何不把其他模块和外设也做成邮票孔的形式以实现更紧凑的布局呢？

我们知道软件开发里面有`封装`、`抽象`、`解耦`等概念，我为什么不试试把硬件设计也来个`High-Level-PCB-Design`呢？通过这样模块化的PCB设计，以后我想基于这款卡片电脑做任何项目的时候，岂不是就都能拼积木一般easy了？

**说干就干！**

于是**【Project Quantum】**量子计划就诞生了！直接看下面的视频介绍↓

<div style="height: 0;padding-bottom:65%;position: relative;">
<iframe width="760" height="510"  
        src="//player.bilibili.com/player.html?aid=79918470&cid=136773359&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="" style="position: absolute;height: 105%;width: 100%;"> </iframe>
</div>  



<br />

> 更多的项目细节我会在后面完成项目的过程中逐渐补充，怕错过的同学可以关注我的**知乎**和**B站**获取最新动态（在本博客标题下面有链接）。