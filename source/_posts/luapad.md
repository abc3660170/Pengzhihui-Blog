title: 让STM32运行Lua脚本
date: 2016-10-10 20:56:57
tags:
- 项目
- ARM
- LUA
---

    突然想起来还做了个小板子一直没时间玩,把资料先放出来...

![加载失败,请刷新](/img/luapad1.jpg)

>• Lua是一个基于C的小巧的脚本语言,由标准C编写而成，所以可以很方便地移植到几乎在所有操作系统和平台上.Lua和Python有些类似,但在目前所有脚本引擎中，Lua的速度是最快的,这一切都决定了Lua是作为嵌入式脚本的最佳选择.此前非常火的nodeMCU(基于ESP8266)就是运行的Lua脚本.
>
>• 关于这次做的板子,因为之前有看到过在STM32F4上运行Python的项目(叫做MicroPython,可以自行搜索),可以实现用Python语言来控制单片机.代码直接保存为文本即插即用,相当于可以在SD卡里储存很多小应用程序来选择运行,感觉这个点子还是很有意思的,所以打算做个类似的平台,Python已经有人做了,我就瞄准Lua啦.板子的硬件很早就弄好了,底层的驱动也基本完成,所有文件(STM32固件,原理图,PCB文件)都托管在coding上,有兴趣的可以自己去投板制作,这样既可以一起开发LuaPad,也可以单纯当做STM32的迷你开发板来用.板载的资源有电位器,RGBLed,MPU6050,SD卡槽,以及按键,大部分的IO都已经引出来,coding仓库地址在后文给出链接.

![加载失败,请刷新](/img/luapad2.jpg)

![加载失败,请刷新](/img/luapad3.jpg)

![加载失败,请刷新](/img/luapad4.jpg)

coding仓库地址：[LuaPad](https://git.coding.net/pengzhihui/LuaPad.git)

