## fraction（分数）模块
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1Wo4y1e745&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
# 分数（Fraction）模块

🔢️ **介绍**

今天，我们要分享 Python 中的分数模块。这个模块在实际应用中非常有用，因为我最近在刷题的时候遇到了一个问题：同学们提交的答案各种各样，有些是未化简的分数，有些是化简到一半的分数，有些是化简到最后的一个分数，有些是直接算出来的小数形式。这样的话，核对起来会很麻烦。于是，我想找一个 Python 的方法来解决这个问题，结果发现 Python 中确实有这个模块！

🔢️ **使用 fraction 模块**

首先，我们来看一下 `fraction` 模块的表达方式。可以从官方文档了解更多信息。这个分数有不同的写法，例如：

* 输入 `0.5`，调用 `fraction` 函数，它会自动转化成分数格式，例如：

```python
from factions import Fraction
x1 = Fraction(0.5)
print(x1)  # Output: 1/2
```

* 直接指定数字，用逗号将数字分割开，生成一个分数，例如：

```python
x2 = Fraction(1, 2)
print(x2)  # Output: 1/2
```

在这种情况下，我们可以访问它的分子和分母，例如：

```python
print(x2.numerator)  # Output: 1
print(x2.denominator)  # Output: 2
```

下面的两种写法也是一样的，例如：

```python
fraction1 = fraction.Fraction(2, 4)
print(fraction1)  # Output: 1/2
```

关键是，如果输入的是没有化简的分数，例如四分之二，那么它会自动化简成最简单的分子分母格式，例如：

```python
fraction2 = fraction.Fraction(0.5)
print(fraction2)  # Output: 1/2
```

这对我来说非常有帮助，至少我可以看一下它到底有没有弄错。如果输入的是一个比较复杂的情况，例如：

```python
fraction3 = Fraction(3200, 15**2)
print(fraction3)  # Output: 3200/12345
```

如果我希望它将分子分母化简，可以这样做：

```python
fraction3 = Fraction(3200, 15**2).limit_denominator(100)
print(fraction3)
```

这样就可以限制分母的大小，让它尽可能逼近输入的小数。

以上就是今天分享的 Python 中的分数模块，主要是用来判断某些给出的分数答案或者是小数转分数这种东西。视频到这里就结束了，感谢大家的观看！
- - - - - -
