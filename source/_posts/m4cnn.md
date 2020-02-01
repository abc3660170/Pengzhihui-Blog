---
title: 在STM32上跑神经网络做手势检测
date: 2019-07-20 20:37:12
tags:
- 项目
typora-root-url: ..
---
**推理一个CNN模型最低需要什么性能的硬件呢？**

最近想试试把以前搞嵌入式单片机的一些经验和最近在做的深度学习结合起来，正好前段时间看到新闻说新款iPhone和下一代Pixel似乎都要加入隔空手势识别功能，所以idea就来啦。

为了在Cortex-M的MCU上成功跑起CNN，用的模型是一个不到10层FCN网络，但是即便如此，对于主频只有不到100MHz，SRAM只有不到100K的单片机来说依然是极其吃力的，模型不做量化的话肯定无法做到实时的。

实现细节等有空整理好资料再来详细介绍，先来看看最终效果，整个代码包括量化工具都是纯手撸hardcode，没做成框架，主要是因为，我懒🤫。

<div style="height: 0;padding-bottom:65%;position: relative;">
<iframe width="760" height="510"  
        src="//player.bilibili.com/player.html?aid=61175015&cid=106431941&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="" style="position: absolute;height: 105%;width: 100%;"> </iframe>
</div>  


<br />

