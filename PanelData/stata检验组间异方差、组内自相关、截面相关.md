## Stata面板数据处理——stata检验组间异方差、组内自相关、截面相关
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1KZ4y1x7uR&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
Stata 面板数据处理 - 检验组间异方差、组内自相关、截面相关
================================================

大家好！今天，我们要分享的主题是组间异方差、组内自相关和截面相关的检验，这些检验可以帮助我们判断数据集中是否存在这些问题。相关视频已经放在我的链接中，欢迎直接观看。本视频也将使用一些命令，如果在命令安装过程中遇到问题，可以参考我之前与大家分享的视频。

话不多说，我们开始今天的主题。首先，我们调用一个示例数据集，如下所示：

```stata
webuse grunfeld ,clear
xtset company year 
```



我们对数据集进行面板数据的设定，第一个是个体变量，第二个是时间变量。

组间异方差的检验
----------------

如果我们要进行组间异方差的检验，我们需要先运行 FE（固定效应模型）。运行完固定效应模型后，我们再运行 `xtset`，如下所示：

```stata
xtreg invest mvalue kstock , fe
xttest3
```

这时，它会给我们进行一个检验，原假设是一个同方差的原假设。如果我们的 P 值小于 0.1，我们就会认为它存在相关的问题。

组内自相关的检验
---------------

组内自相关的检验可以使用以下命令进行：

```stata
xtserial invest mvalue kstock
xtserial invest mvalue kstock i.company
tab comapny , gen(_id)
xtserial invest mvalue kstock id_*
```

这时，它会进行一个组内自相关的检验。如果结果显著，我们就会拒绝原假设，即存在组内自相关。

截面相关的检验
--------------

截面相关的检验可以使用 `xttest2` 命令进行，如下所示：

这时，它会显示检验结果，如果 P 值显著，我们就会拒绝原假设，即存在截面相关。

需要注意的是，`xttest2` 命令存在一些缺陷，只适用于长面板数据，即 t 比较大的情况。为了弥补这个缺陷，我们可以使用 `xtcst` 命令进行检验，如下所示：

```stata
xtreg invest mvalue kstock , fe
xttest2

* ssc install xtcsd ,replace 
xtreg invest mvalue kstock , fe
xtcsv ,pes
xtcsd , fri
```



总结
==

今天，我们分享了三个检验的内容，分别是检验组间异方差、组内自相关和组件同期相关的检验。下期视频，我们将分享如果出现这样的问题，我们该如何修正模型。今天的视频到这里就结束了，感谢大家的观看！
