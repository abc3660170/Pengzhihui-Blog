title: HIDuino
date: 2016-10-16 15:58:39
tags:
- 项目
- Arduino
---
![加载失败,请刷新](/img/hiduino1.jpg)


>**HIDuino**是最近做的一块基于**Arduino**的**USB-HID**开源开发板,板载Mega32U4和MAX3421E芯片,使用Arduino IDE开发,配合配套Host库可以方便地读取几乎一切USB设备 -- <font color="#4590a3" size = "3px">鼠标,键盘,游戏手柄,U盘,串口模块,USB蓝牙,Wii手柄,Xbox手柄,PS4手柄...</font>  

![加载失败,请刷新](/img/hiduino2.jpg)


>主控使用了Leonardo的bootloader,直接选择Leonardo板子通过micro-usb下载程序,也预留了串口和I2C接口,可以实现***"USB任何东西"***转***"串口"***,然后供Arduino或者其他设备读取...

    功能演示视频

<div style="height: 0;padding-bottom: 61%;position: relative;">
<iframe width="560" height="315" src="http://player.youku.com/embed/XMTc2MjQzOTI3Mg" frameborder="0" allowfullscreen="" style="position: absolute;height: 100%;width: 100%;"></iframe>
</div>

<br />



![加载失败,请刷新](/img/hiduino3.jpg)

coding仓库地址：[HIDuino](https://git.coding.net/pengzhihui/HIDuino.git)


