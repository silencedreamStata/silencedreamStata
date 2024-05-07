## do(dta)文件乱码怎么办？
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1ME411j7bT&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
do(dta)文件乱码的解决方法
=====================

大家好！今天，我们要分享的话题是，当你打开一个do文件或dta文件，发现它是乱码时，你应该如何解决这个问题？

我从中国工业经济网站上下载了一个do文件，但是打开后发现它是乱码，这时该怎么办？

为什么会出现乱码？
-----------------

首先，我们需要了解一下为什么会出现乱码。

简单来说，就是因为编码方案的问题。比如，我使用英文写的内容，但是你却用中文打开，就会出现乱码，因为使用了不同的编码格式。

举B站为例，空耳唱的歌曲，如果用中文理解，就会产生新的意思。因此，我们理解了为什么会出现乱码。

解决乱码的方法
------------

既然知道了原因，那么解决方法就很简单了，因为我们只需要用中文写，用中文读，就可以解决这个问题。

因此，我们需要做的第一步是，将储存路径改到需要分析的路径下。

比如，我的do文件放在这个路径下，如果我要翻译这个程序，我需要将路径改到这个地方。

我使用cd命令将路径改到了这个地方，大家可以将它复制粘贴过来。

接下来，我们需要使用unicode命令，这个unicode analyze信号表示一个通配符，也就是说在这个路径下的所有的do文件，我都要做一个分析。

我们先改变一下路径，然后我们再框选主控制加D，可以看到的是这个地方它就会报一个结果。

我们需要Encode，指定我们的编码格式，这个GB18030就是我们中文的一个编码格式，也就是说我们让它用中文去读取。我们再通过这个地方去把这个程序给它打开，这样就实现了一个转椅。

如果你的文件是dta格式，也就是说你的数值，比如说标签是一个乱码，你也可以通过这样的代码去实现一个转移。

```stata
cd E:\论文参考代码
clear
unicode analyze *.do
unicode encoding set "GB18030"
unicode translate *.do
clear
unicode anslyze *.dta
unicode encoding set "GB18030"
unicode translate *.dta
```

