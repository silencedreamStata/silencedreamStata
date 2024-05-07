## stata分组计算(by,bysort)
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1kJ411b7Nj&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
# 

大家好！今天，我想分享如何在 Stata 中实现分组计算。在数据处理过程中，我们常常需要计算不同组别或不同类别的平均值、标准差或其他统计变量。为了更好地说明分组计算的概念和应用方法，我们将使用一个包含车辆价格、制造商和其他特征（例如是国内还是国外制造商）的数据集。

假设我们对的研究题目是：国外制造的车辆的价格是否比国内制造的车辆的价格更高？为了实现这个简单的目的，我们需要计算国内车辆的平均价格和国外车辆的平均价格。

要实现分组计算，我们可以使用 Stata 中的 `by` 命令。`by` 命令的语法非常简单，只需要在 `by` 后面跟上分类变量，例如我们这里的 `foreign` 变量，它表示汽车是国内生产还是国外生产的。然后，我们可以使用 `egen` 命令（`generate` 命令的简写）来计算平均值。

```stata
bysort foreign : egen mean_price = mean(price)
```

上面的命令首先按照 `foreign` 变量分组，然后计算 `price` 的平均值，并将其生成为一个新的变量 `mean_price`。

现在，我们可以运行上面的命令，并查看输出结果。在数据表中，我们可以看到生成了一个新的变量 `mean_price`。我们可以看到，对于同一组别的平均值是相同的，但不同组别的平均值有差距。例如，国外车辆的平均价格是 6384，而国内车辆的平均价格只有 6072。这也间接证明了国外生产的价格比国内的更高。

如果我们想计算其他统计量，例如标准差和中位数，我们可以继续使用 `egen` 命令。

```stata
bysort foreign : egen std_price = sd(price)
bysort foreign: egen median_price = median(price)
```

上面的命令分别计算 `price` 的标准差和中位数，并将其生成为新的变量 `std_price` 和 `median_price`。我们可以看到，使用中位数可以更清晰地区分不同组别，并且我们也可以计算出它们的标准差。

由于 `egen` 命令没有直接生成方差的命令，我们可以直接使用标准差的平方来计算方差。

```stata
gen variance_price = (std_price)^2
```

现在，我们已经计算出了三个分组的统计量。但是，如果我们想按照国内/国外以及制造商这两个变量来分组，该如何做？我们可以使用 `bysort` 命令，它将 `sort` 和 `by` 命令合并在一起。

```stata
bysort foreign make: egen mean_price = mean(price)
```

上面的命令首先按照 `foreign` 和 `make` 变量排序，然后计算 `price` 的平均值，并将其生成为新的变量 `mean_price`。我们可以看到，使用 `bysort` 命令可以更加简单地实现分组计算。

总之，通过简单的 `by` 和 `bysort` 命令，我们可以轻松实现 Stata 的分组计算。
- - - - - -
