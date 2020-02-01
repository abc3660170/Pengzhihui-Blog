title: 在Eclipse中使用Processing
date: 2015-12-29 14:23:17
tags:
- JAVA
---
# 关于Processing
Processing是一个非常优秀的JAVA图形库框架，我们可以很容易地用它来实现一些交互式程序。尽管Processing功能很强大，但是它的IDE做的确实不够走心...你几乎找不到除了编译和运行之外的任何功能，代码补全，函数跳转，完善的调试功能等等（新出的3.x版本加入了调试功能，但依然非常原始）。
MIT的本意应该是想把Processing设计为一个速写本，你可以打开应用程序，马上就开始编码代码，然后立刻看到你的作品运行，这对于初学者的确非常简洁高效。但正如我最近花更多的时间工作的一个项目，随着代码量的增长和越来越复杂的结构，我感觉到非常需要IDE缺乏的一些特性。
幸运的是，Processing基于JAVA，而JAVA下有个异常强大的IDE Eclipse，所以这篇教程将介绍怎么把Processing的程序挪到Eclipse中运行，并展示如何使用它的一些强大的功能，如代码自动补全，代码提示，快速修复，断点调试等等。


# 相关下载
- 去官网或者百度下载并安装Eclipse，推荐Eclipse IDE for Java Developers，Windows版Eclipse是绿色软件，下载完解压就能使用了非常方便
- Processing3.x，去官网下载吧，都是免费的 [Processing.org](https://processing.org/download/)(本教程基于3.X版本)

### 提取核心库文件

我是在Mac中操作，Windows下也是一样的步骤。  
解压Processing压缩包之后进入core/library文件夹（mac的话右键显示包内容），找到export.txt文件，这里面有详细说明每个平台所需的库文件  

![加载失败,请刷新](/img/p5-1.png)  
<!--more-->
可以看到，对于windows 32位系统，你将需要：

- core.jar
- jogl-all.jar
- gluegen-rt.jar
- jogl-all-natives-windows-i586.jar
- gluegen-rt-natives-windows-i586.jar

把以上文件复制一份出来，一会儿需要添加到JAVA工程当中。

### 新建JAVA项目

启动Eclipse，并创建一个新的Java项目
文件 -> 新建 -> Java项目  

![加载失败,请刷新](/img/p5-2.png)  

项目名称随便命名然后点next，点击libraries标签  

![加载失败,请刷新](/img/p5-3.png)    

点Add Library  

![加载失败,请刷新](/img/p5-4.png)  

选择User Library  

新建一个库，点new然后将库命名为P5-core（名字随意）  

![加载失败,请刷新](/img/p5-5.png)  

确定之后点击`add external jars`，将之前复制出来的jar都添加进来，现在processing的运行环境就基本配置好了，但是先别急着点确定，我们可以将设置好的库文件导出，这样以后再新建项目就只需要包含这一个文件就可以了，方法是在刚刚选择`add external jars`的窗口选择export。

### 添加启动类

在Package Explorer中选择新创建的项目，并创建一个新的Java类

右键项目 -> 新建 -> 类（class），并将其命名为MainApp，该文件将在src目录中创建，打开文件，就可以进行代码编辑了

在Eclipse中，我们将使用JAVA语言来编写程序，但Eclipse并不认识Processing的那些函数，所以我们需要让这个类继承PApplet类。

```
public class MainApp extends PApplet
{

}
```
这里会提示找不到PApplet类，因为我们没有导入相关的包，Eclipse可以非常智能地帮你完成包的导入，只需要按快捷键ctrl＋shift＋o

```
import processing.core.PApplet;

public class Main extends PApplet
{

}
```
我们刚刚导入的所有Processing核心功能，所以我们的应用程序现在可以访问Processing的方法了，但为了顺利运行程序还有最后一步需要加工

```
import processing.core.PApplet;

public class Main extends PApplet
{
	public static void main(String[] args)
	{
		PApplet.main("MainApp");
	}

	public void settings()
	{
		super.settings();
		size(800, 600, P3D);
	}

	public void setup()
	{
	
	}

	public void draw()
	{
	
	}
}
```
说明一下上面的代码
`PApplet.main("MainApp")`是为了让我们的程序可以以JAVA应用程序的方式运行，而不是Applet程序，其中双引号之间的内容是类的名称，注意如果类在包中泽需要包含完整的类名，如`xx.xxx.MainApp`  
Processing3中要求窗口的初始化在`setting`函数中运行，所以`size`或者`fullScreen`函数放在这里面，剩下的就完全跟Processing中一致了，编写`setup`和`draw`函数就行了。

这里给一个测试程序

```
import processing.core.*;

public class MainApp extends PApplet 
{
	public static void main(String[] args)
	{
		PApplet.main("MainApp");
	}

	public void settings()
	{
		super.settings();
		size(800, 600);
	}
	
	public void draw() 
	{
		ellipse(width * 0.5f, height * 0.5f, 100, 200);
	}
}
```
点击工具栏绿色的三角形运行按钮，就可以看到程序顺利运行了，如果需要调试则点击运行按钮边上的小虫子图标即可。

### 自动补全代码

默认情况下的Eclipse在键入.后会自动弹出剩下字符，但我们可以让它更方便一些，打开Eclipse的设置选项窗口，在搜索栏搜索`content assist`，选择左边java项，然后右边在最下面Auto activation triggers for java中输入`.qwertyuiopasdfghjklzxcvbnm`，点击确定，现在回到编辑器，看看是不是随便输入任何字符都可以自动补全了。关于自动补全还有一个快捷键是alt＋／，也可以调出补全菜单。  

Eclipse的快捷键非常多，可以按ctrl＋shift＋L来调出快捷键菜单查看所有快捷键，也可以在设置里搜索keys更改快捷键。

### 调试代码
在任何一行代码的左侧双击可以设置断点，在debug模式下就可以方便地调试程序了  

![加载失败,请刷新](/img/p5-6.png)  

有关IDE更多的功能可以搜索Eclipse的使用技巧
