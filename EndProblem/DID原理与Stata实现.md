## DID原理与Stata实现
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1JJ41187gp&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
DID原理与Stata实现
================

DID原理与Stata实现
================

DID（Difference in Differences）可能听起来很高端，但它实际上是一种解决特定问题的数学方法。在我们深入探讨DID的数学公式之前，首先让我们了解一下它想要解决的问题。

### DID想解决什么问题？

DID是一种评估“时间”和“干预（治疗）”对目标变量影响的工具。为了更好地理解它，我们通过一个简单的故事来说明：

假设小明的成绩随着时间的推移而提高。但当他开始谈恋爱后，成绩提升的速度比以前更快。如果我们仅观察这一变化，可能会得出结论认为“恋爱对成绩有正面影响”。

但是，作为反论者，我们可能会提出反对意见：如果小明没有谈恋爱，他的成绩可能会提高得更多。因此，我们需要一个对照组来评估“恋爱”对成绩的实际影响。

### DID的思想

在研究计量经济学时，经济学家想出了一个方法：找一个与小明情况类似但没有谈恋爱的学生B。我们观察B同学的成绩趋势，并将其与小明的趋势进行比较。这种思想即是DID的核心：它不仅考虑了实验效应（如谈恋爱），还考虑了时间流逝或个人成长带来的影响。

### DID模型

现在我们已经了解了DID的基本思想，下一步是如何构建一个模型来描述这种影响？DID模型其实非常简单：

1. 将“未谈恋爱”的同学设为0，而“谈恋爱”的同学设为1，即将“谈恋爱”这一变量视为treatment变量。
3. 时间变量（Post）设置为：0表示谈恋爱前，1表示谈恋爱后。

使用成绩（如GPA）来表示，模型可以简化为：
$$
\text{GPA} = \beta_0 + \beta_1 \text{Treatment} + \beta_2\text{Post} + \beta_3\text{Treatment} \times \text{Post} + \beta_4 \text{Control}
$$
在这个模型中，系数 \(\beta_3\)（Treatment × Time的系数）表示DID估计出的效应。



- - - - - -
