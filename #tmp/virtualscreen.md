---
title: 混合现实虚拟显示器
date: 2018-11-28 18:05:19
tags:
---
入职有一个月左右了，由于工作岗位是做AI算法（目前主要在做自研的深度学习计算框架），读文献的时候经常能发现一些很好玩的AI应用，这个小项目就是上周周末基于某个人体关键点检测网络做的一个小软件，大家感受一下~

原理是用传统cv的maker tracker方法和基于深度学习的关键点检测，分别进行二维码和body landmark的定位；solvePNP之后转换到虚拟三维坐标系；用游戏引擎检测碰撞并且实时渲染模型出来。大概就是这样，没有用到depth camera，只需要一个rgb摄像头，虽然目前帧率还不高且有抖动。

landmark的检测使用的训练数据集是COCO，手部检测模型介绍可以参考CVPR2017的这篇论文《Hand Keypoint Detection in Single Images using Multiview Bootstrapp》
```
看一下具体的演示视频↓
```
<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMzk0MDkzMDM4OA" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>

</div>  

<br />