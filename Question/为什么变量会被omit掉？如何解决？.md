## 【常见问题】为什么变量会被omit掉？如何解决？
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1GM4y1A7xw&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
【常见问题】为什么变量会被omit掉？如何解决？
================================

大家好，今天我们来分享一个常见的问题：在回归分析中，有时会发现某些变量被omit掉了，这篇文章就来解释这个问题以及如何解决它。

为什么会有变量被omit掉？
-----------------------

一般来说，有两种情况会导致变量被omit掉：

1. **完全的多重共线性**：一个变量能够被其他变量完美的表示出来。

   例如，变量 $x_1$ 可以表示为两倍的 $x_2$，即：
   $$
   x_1 = 2x_2
   $$
   或者 $x_1$ 等于两倍的 $x_2$ 加上 $x_3$，即：
   $$
   x_1 = 2x_2 + x_3
   $$
   这种情况下，如果将这两个变量放入同一个回归模型中，STATA会默认帮你扔掉一个变量。

   ```
   sysuse auto,clear
   gen gear2 = 2 * gear_ratio
   reg price weight grea_ratio gear2
   ```

2. **固定效应模型**中的OMIT掉：在固定效应模型中，如果一个变量在某个变量中不随时间而变化，那么在使用固定效应模型后这个变量会被omit掉。

   下面是一个模拟数据的例子，我们观察到变量a在时间上没有变化。在这种情况下，如果我们使用固定效应模型，这个变量就不会有回归结果，会被STATA omitted掉。


如何解决变量被omit掉的问题？
------------------------

1. **多重共线**的情况下，解决方法很简单，就是去掉多重共线的变量。

2. **固定效应模型**中的OMIT掉，可以采用随机效应模型来解决。需要根据研究变量和文献来决定使用哪种方法。

总之，如果你的变量不随时间而变化，并且你采用了固定效应模型，那么这个变量很可能会被omit掉。在这种情况下，固定效应模型或个体固定效应模型可能不太适用于你的研究。需要参考已有的研究文献，看他们是如何实证的。

- - - - - -
