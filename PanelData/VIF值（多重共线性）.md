## Stata面板数据处理——VIF值（多重共线性）
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1jk4y1z7Fx&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
Stata面板数据处理——VIF值（多重共线性）
====================================

大家好！今天，我们要分享的主题是面板数据处理中的一个问题，即计算VIF值，以检验数据中是否存在严重的多重贡献性问题。如果您想了解更多关于多重贡献性的知识，可以查看之前我们分享的视频。

面板数据的VIF值计算方法
------------------

在人大经济论坛上，我们找到了林老师关于这个问题的一个回答，她非常清晰地指出，在面板数据中，比较少去做VIF的检验。一般情况下，都是报告一个相关系数的矩阵。但是，如果非常看重这个问题，一般会采用与截面数据相同的处理方式，即在rig之后，打上estat vif命令，然后得到以下结果：

```vbnet
reg price mpg weight length
estat vif

```

如何解释这个结果？
--------------

一般情况下，如果VIF值小于10，我们认为数据中没有存在严重的多重贡献性问题。更严格的要求是要求我们的VIF值小于5。

如果出现多重贡献性，应该怎么处理？
------------------

如果出现多重贡献性，我们之前已经分享过应该如何处理了，因此这里就不再过多重复之前讲过的内容。今天的视频就到这里结束了，感谢您的观看！
- - - - - -

