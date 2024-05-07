## OS模块；批量修改文件名【python入门】
<div style="text-align: center;">
  <div style="border: 2px solid #ccc; padding: 10px; display: inline-block;">
<iframe src="//player.bilibili.com/player.html?bvid=BV1qg411f7RJ&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 750px; height: 450px;"></iframe>  </div>
</div>
# OS 模块；批量修改文件名（Python 入门）
## 概述
大家好，继续分享Python入门的内容。随着大家陆续返回学校和工作岗位，我们也从放松的假期模式，逐渐回归到忙碌的工作状态。

## 平台更新：b站的新变化
-----------------
b站最近取消了分批上传视频的设置，改为通过合集的形式展示系列视频。这意味着我将把相关视频放入一个合集中，方便大家连续观看。

## 更新动机
-------
虽然市面上已有众多类似的Python教学视频，如小甲鱼等优质内容，我也在忙于博士论文之中，这让我暂时停下了视频制作。但经过思考，我认为还是应该继续制作视频，分享我的独到见解和使用经验。

## 今日主题：OS模块
-----------------
在Python的学习过程中，我们已经介绍了基础语法、列表、字典、循环和条件判断等内容。今天，我们将探讨`os`模块，这是Python中一个非常实用的模块，用于操作文件和目录。

### OS模块简介
`os`模块可以视为一个工具箱，它提供了一系列用于文件和目录管理操作的函数。我们可以利用这些工具来执行如文件重命名、目录遍历等任务。例如，`os.listdir`函数可以列出指定目录下的所有文件，这对于我们需要批量处理文件时非常有用。

### 实用示例：批量修改文件名
假设你下载了多个文件，现在需要对这些文件进行重命名。我们可以使用`os`模块来实现这一需求。以下是一段简单的代码示例，演示了如何批量重命名目录中的PNG文件：

```python
import os
allfiles = os.listdir(r"C:\Users\MI\Desktop\1")
i = 0
for eachfile in allfiles:
    if "图片" in eachfile:
        os.rename(r"C:\Users\MI\Desktop\1\\" + eachfile,r"C:\Users\MI\Desktop\1\\" + 
"%s.png" % i)
        i = i + 1
        
   
```

- - - - - -
