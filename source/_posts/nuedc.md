---
title: 奖状是怎么炼成的—我的电赛狂魔之旅
date: 2019-06-18 21:32:25
tags:
- 感悟
---

两年一度的全国大学生电子设计竞赛马上又要来啦，想当年我也参与过这一盛大的赛事，很是怀念啊~

回想一下，我是从大二开始参加的各种电子设计竞赛和编程竞赛，也是同年参加的全国大学生电赛（得有五六年前了），在本科至研究生期间还是积攒了不少荣誉奖项的～大概数一数共获得的国际奖项有两项，国家级奖项大概有四五项，省级奖项近十项，校级的就数不胜数啦哈哈~

> 部分获奖证书

![img](/img/nuedc.jpg)



虽然本科毕业之后我就从EE硬件方向转了CS（纯粹因为个人兴趣），目前工作也是算法岗跟硬件无关了，但是作为本科出名的电赛狂魔，我对折腾硬件的爱好一直保留至今，也很理解从一个纯菜鸟逐渐走到大家口中所谓的大牛需要什么样的一些经历，因此来分享一些参赛经验，大家可以各取所需～

那么进入正题，如何准备电赛，我分三个阶段给出建议，分别是：赛前准备，比赛进行时，和赛后总结。

<!--more-->

## **赛前准备：**

说到比赛前的准备，大家肯定联想到知识技能的准备，其实还有个问题可能很少有人提到，那就是心理上的准备。参加电赛不是没有代价的，你需要投入大量精力准备比赛，这可能会影响到你的课程学习，也需要你做出一部分经济支出（虽然并不多），周末寒暑假也会少了很多跟大家出去浪的时间...有的学校为了鼓励学生参加竞赛会给出一些奖励政策，比如我们学校可以根据竞赛获奖情况转换成课程相应的打分，所以哪怕平时无法兼顾课程和比赛，也是可以正常拿到学分的。但是对于没有这样政策的学校，其实这里面临的选择是比较痛苦的。

所以我的建议还是尽早入坑，尽早找清楚方向，发现自己擅长做的事情，才能顺利地从入门到放肆。

全国大学生电子设计竞赛每两年一度，每届有上万个团队参加，是全国高校电子类最大的赛事之一。电赛的题目跟我们高考写作文一样，属于戴着镣铐跳舞，赛前会公布几个限定的题目供选择，涵盖各个方向比如电源、射频、控制等等。我个人最熟悉的是控制类，当年参赛选择的也是这个方向（我记得当年题目应该是可控倒立摆），控制类题目也是很有代表性的一类题，因为涉及的范围很广，形式也是最多样的，关于往届都有一些什么样的题目，可以参考文章末尾的资源链接。

在知识储备上，首先，毫无疑问基础理论知识像是电路分析数电模电等课程大家都应该在课堂上好好学习掌握。但是，如果很不幸地，你每次上课都不小心开了小差（大学生嘛，大家都懂的~），那也不用太过担心，电赛跟课程考试还是有区别的，比赛中考验的更多地是实际运用能力，理论知识只是保证你在应用中不会出现太大的认知偏差，而很多的应用方面的知识是可以在实践过程中慢慢补充的，经验也很重要。

面向应用的话，对于绝大多数赛题来说，单片机是个绕不过去的点，这是必须熟练掌握的，有的赛题还会有规定你使用某款mcu能加分的情况。对于单片机，个人建议是，一旦学习了C语言基础就马上开始学习单片机， 一方面有一个平台可以把C语言实际应用进去有益于加深对编程的理解，另一方面单片机是最好的软硬件过渡项目，从单片机的学习过程中你会逐渐理解程序和实际电路之间的联系。

对于大多数人来说（包括我自己），学校里推荐的单片机课程可能都是从51、MSP430等型号入门，如果学习没有太大障碍的话，这是没有问题的，因为其实只要有一款平台能熟练使用，再切换到其他平台其实并不是很困难的事情。但是就电赛中的应用而言，我强烈建议大家去学习了解一下两款MCU平台：Arduino和STM32。

Arduino的话可能很多人已经在用了，不得不说在比赛中使用Arduino有种开挂的感觉，海量传感器模块的开源库和即插即用的模块化设计，简直就是为比赛而造的。在四天三夜这样紧张的赛程中，花上一整天时间调试一个传感器驱动，对比Arduino几分钟下载一个库连例程都给你准备好了，可以说在起手阶段就拉开了差距。当然了Arduino也是有缺点的，就是性能不是很强，而这一点正好是STM32的强项。STM32就不用我多介绍了，在电赛圈的应该没有人不知道，32位Cortex-M架构的代名词，编程比Arduino复杂一些，但是自由度更大（现在ST推出了CubeMX之后其实编程也很简单了），可以参考Arduino的库函数来实现同样的功能。

总结来说，就是如果已经掌握STM32，那么就以STM32为主战平台，顺便很快上手了解一下Arduino；如果没有的话，那么可以以Arduino为单片机入门平台了解开发流程后再学习STM32。

剩下的具体准备的技能方向需要根据你最擅长的领域来定，最好赛前做过一些相关的项目尝试，比如控制类的话，最好尝试做个小车熟悉H桥、PWM、PID、ADC、中断等等概念和应用；电源类的话各种BUCK/BOOST电路必须得尝试实现一遍等等。

到了临近赛前，除了技能点之外，物资上的准备也很重要。比赛时间有限，三天四夜的时间不会等你现场缺元器件了去网上购买，这一点的话有的学校会提供资源有集中场地和物资支持，那是最理想的，不过也不能保证你要的模块都能有。所以建议赛前多囤一些电子元器件和模块，其实花不了太多钱，几百块足矣，简单概括就是四个字未雨绸缪。我一般是做任何项目只要购买器件，都会在同一家店里看看有没有我感兴趣的电子模块顺便一起买回来，然后根据资料自己试用一遍，没有问题之后就整理好相应都文档和使用心得，这样在后面要用的这个模块都时候就可以很快进行整合。

物资方面除了元器件，红牛咖啡工具睡袋等也是需要考虑的，这个相信大家都懂～

赛前准备基本上就是这些了，还值得说的一点就是组队。电赛是三人一组参加（如果现在规则没变的话），如何组队也是对比赛过程影响很大的一个因素，一般来说除非团队中有个实力很强的灵魂大腿，否则都是推荐三人分工协作，负责不同的领域，比如一个人负责电路硬件、一个人负责写代码、一个人负责收集资料整理项目报告，总的来说，还是为了最大限度地利用好四天三夜的时间。

## **比赛进行时：**

比赛时其实反而没有太多要说的，只要前面准备的好，赛中基本就是七分靠实力三分靠运气了。拿到题目之后，首先充分理解题目的要求，然后判断自己是否有熟悉的解决方案，如果没有，去网上搜索相关的项目和资料，这一过程可能会花去半天的时间。半天的时间内建议一定要确定下方案来，开始动手设计制作。

整个时间安排建议是：半天时间审题和确定方案，一天半时间实现方案，一天至一天半时间调试，半天至一天时间整理资料完善技术报告。

对于要不要在比赛中制作PCB这个问题，如果你们队伍有人熟悉PCB设计制作，而且前期方案很快就定下来了，那么可以加急制作，一般比赛的第二天晚上可以拿到板子了，但是还是存在一些风险比如运输延误、板子设计失误等等。其他情况下，就非常不建议比赛过程中使用PCB了，因为时间实在太短，使用洞洞板加模块的方式是更为稳妥的。

## **赛后总结：**

比赛时间结束，作品提交完等待测试评审，结果肯定是几家欢喜几家忧。对于成绩好的同学，恭喜你们解锁了人生的一个小成就，不要停，向着更高的山峰挺进吧～对于没有取得很好成绩的同学，也不用气馁，前面说了，电赛也是三分靠运气的，好好准备整理经验，还有很多其他赛事等你挑战，飞思卡尔、robomaster等等都是有趣又有料的竞赛。

**最后再回答一个问题进行总结，那就是为什么要参加电赛，有什么好处？**

对我个人来说是兴趣，电赛获奖有一些实际的好处，不同学校的情况不一样，有的能加分保研，有的有丰厚的奖金，这些当然喜闻乐见；但是据我多年的参赛经验来看，那些真正热爱参加比赛并且全身心投入到其中的同学里，很多人在后面的科研工作生涯中都更容易比别人取得更大的成就。我更倾向于比赛只是一个手段而不是最终目的，通过电赛学习完整的项目流程，体验团队合作与攻坚，激发今后钻研深造的兴趣，这些不正是现今各种企业所看重的**工作经验**吗？这也是参加电赛带给你最大的财富，哪怕没有获奖，也会让你受益终身。而且，知识其实是可以迁移的，好比虽然我如今工作的方向，已经完全用不上电子设计方面的知识了，但是当年参加那些比赛锻炼出来的自我学习能力，让我能在遇到一个陌生领域的时候很快地学习成长起来，这是一种认知能力和思维方式的提升，我认为也是参加比赛的最大价值所在。

所以有了这样的心态，才能最轻松地面对比赛～最后祝大家都学有所成，取得好成绩。

------

## **一些额外的参考资料：**

**历届竞赛回顾** [1999年](https://www.nuedc-training.com.cn/index/review/details/id/17.html) [2001年](https://www.nuedc-training.com.cn/index/review/details/id/16.html) [2003年](https://www.nuedc-training.com.cn/index/review/details/id/15.html) [2005年](https://www.nuedc-training.com.cn/index/review/details/id/14.html) [2007年](https://www.nuedc-training.com.cn/index/review/details/id/13.html) [2009年](https://www.nuedc-training.com.cn/index/news/details/new_id/29) [2011年](https://www.nuedc-training.com.cn/index/news/details/new_id/28) [2013年](https://www.nuedc-training.com.cn/index/review/details/id/10.html) [2015年](https://www.nuedc-training.com.cn/index/review/details/id/9.html) [2017年](https://www.nuedc-training.com.cn/index/review/details/id/7.html)

**往届真题题目分类** 

**1.电源类：简易数控直流电源、直流稳压电源** 

简易数控直流电源（1994年A） 

直流稳压电源（1997年A） 

数控恒流源 （2005年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/116) 

三相正弦波变频电源（2005年G） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/117) 

开关电源设计（2007年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/105) 

光伏并网发电模拟装置（2009年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/91) 

电能收集充电器（2009年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/96) 

开关电源模块并联供电系统（2011年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/83) 

单相AC-DC变换电路（2013年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/73) 

直流稳压电源及漏电保护装备（2013年L） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/82) 

双向DC-DC变换器（2015年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/63) 

LED闪光灯电源（高职 - 2015年H） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/70) 

微电网模拟系统（2017年A）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/5) 

**2.信号源类：实用信号源的设计和制作、波形发生器、电压控制LC振荡器等** 

实用信号源的设计与制造（1995年B） 

波形发生器（2001年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/124) 

正弦信号发生器（2005年A）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/111) 

**3.高频无线电类：简易无线电遥控系统、调幅广播收音机、短波调频接收机、调频收音机等** 

无线电接收机设计 调幅广播收音机（1997年D） 

短波调频收音机（1999年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/133) 

调频收音机（2001年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/129) 

LC谐振放大器（接收机中放电路）（2011年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/86) 

调幅信号处理实验电路（2017年F）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/9) 

无线电发射机的设计 电压控制LC振荡器（2003年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/118) 

正弦信号发生器设计（2005年A）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/111) 

无线电收发系统设计 简易无线电遥控系统（1995年C） 

单工无线呼叫系统（2005年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/114) 

无线识别装置（2007年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/102) 

无线环境监测模拟装置（2009年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/95) 

红外光通信装置（2013年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/78) 

短距视频信号无线通信网络（2015年G） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/69) 

可见光室内定位装置（2017年I）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/11) 

**4.放大器类：实用低频功率放大器、高效率音频功率放大器、宽带放大器等** 

实用低频功率放大器（1995年A） 

测量放大器（1999年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/130) 

高效率音频功率放大器（2001年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/127) 

宽带放大器（2003年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/119) 

程控滤波器（2007年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/104) 

可控放大器（高职 - 2007年） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/109) 

宽带直流放大器（2009年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/93) 

数字幅频均衡功率放大器（2009年F） - 数字幅频 [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/97) 

低频功率放大器（高职 - 2009年G） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/98) 

射频宽带放大器（2013年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/76) 

增益可控射频放大器（2015年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/66) 

自适应滤波器（2017年E）：一般理解的滤波器是模拟的方式来实现，目前也越来越多地通过数字信号处理的方式来实现，此题的解决方式也是通过FPGA来实现  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/8) 

5.**仪器仪表类：简易电阻、电容和电感测试仪、简易数字频率计、频率特性测试仪、数字式工频有效值多用表、简易数字存储示波器、低频数字式相位测量仪、简易逻辑分析仪** 

信号源  实用信号源的设计与制造（1995年B） 

波形发生器（2001年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/124) 

正弦信号发生器（2005年A）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/111) 

元器件参数测量仪 简易电阻、电容和电感测量仪（1995年D） 

集成运放测量仪（2005年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/112) 

简易自动电阻测试优化（高职-2011年G）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/89) 

电气参数测量仪 数字式工频有效值测量仪（1999年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/131) 

积分式直流数字电压表（高职 - 2007年G） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/107) 

简易照明线路探测（高职 - 2013年K）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/81) 

时域测量仪 简易数字频率计设计（1997年B） 

低频数字式相位测量仪（2003年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/120) 

简易数字存储示波器设计（2001年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/125) 

数字示波器（2007年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/103) 

数字频率计（2015年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/68) 

直流电动机测速（高职 - 2017年O）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/61) 

频域测量仪 频率特性测量仪（1999年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/132) 

简易频谱仪设计（2005年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/113) 

音频信号分析仪（2007年A） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/101) 

简易频率特性测试仪（2013年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/77) 

80MHz-100MHz频谱仪（2015年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/67) 

远程幅频特性测试装置（2017年H）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/10) 

数据域测试仪 简易逻辑分析仪（2003年D） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/121) 

简易数字信号传输性能分析仪（2011年E）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/87) 

**6.数据采集与处理类：多路数据采集系统、数字化语音存储与回放系统、数据采集与传输系统** 

多路数据采集系统（1994年B） 

数字化语音存储与回放系统（1999年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/134) 

数据采集与传输系统（2001年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/128) 

LED点阵书写显示屏（2009年） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/99) 

波形采集、存储、回放系统（高职 - 2011年H） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/90) 

自适应滤波器（2017年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/8) 

单相用电器分析监测装置（2017年K） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/12) 

简易水情检测系统（高职 - 2017年P）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/62) 

**7.控制类：水温控制系统、自动往返电动小汽车、简易智能电动车、液体点滴速度监控装置** 

水温控制系统（1997年C） 

自动往返小车（2001年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/126) 

简易智能电动车（2003年E） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/122) 

液体点滴速度监控装置（2003年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/123) 

悬挂运动控制系统（2005年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/115) 

电动车跷跷板（2007年F和J） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/106) 

声音引导系统（2009年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/92) 

模拟路灯控制系统（高职 - 2009年I） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/100) 

基本自由摆的平板控制系统（2011年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/84) 

智能小车（2011年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/85) 

帆板控制系统（高职 - 2011年F） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/88) 

四旋翼自主飞行器（2013年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/74) 

简易旋转倒立摆及控制装置（2013年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/75) 

手写绘图板（2013年H） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/79) 

电磁控制运动装置（高职 - 2013年J） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/80) 

风力摆控制系统（2015年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/64) 

多旋翼自主飞行器（2015年C） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/65) 

风板控制系统（高职 - 2015年I） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/71) 

小球滚动控制（2015年J） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/72) 

滚球控制系统（2017年B） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/6) 

四旋翼自主飞行器探测跟踪系统（2017年C） 真题下载 

自动泊车系统（高职 - 2017年L） [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/59) 

管道内钢珠运动测量装置（2017年M）  [真题下载](https://www.nuedc-training.com.cn/index/download/uploadbook/id/60)



>  顺便安利一个微信公众号 **【电子森林】** ，里面挺多电赛相关的资源可供参考的