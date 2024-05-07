import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base : '/silencedreamStata/' ,
  title: "Silencedream",
  description: "一个分享想法与知识的小网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stata', 
        items: [
          { text: 'Stata入门', link: '/StataIntro/导入数据' },
          { text: 'Stata绘图', link: '/StataDraw/制作年度分布图' },
          { text: 'Stata Putdocx', link: '/Stataputdocx/stata_putdocx' },
        ]
      },
      { text: 'Python', 
        items: [
          { text: '入门操作', link: '/PythonIntro/Python的简单介绍' },
          { text: '文本分析', link: '/PythonTextAnalysis/关于文本分析的简单介绍' },
          { text: '网页爬虫', link: '/PythonSpider/简单理解爬虫' },
          { text: '包的应用', link: '/PythonPakage/fraction（分数）模块' },
        ]
      },
      { text: 'SPSS', 
        items: [
          { text: 'SPSS入门', link: '/SPSSintro/前言' },
        ]
      },
      { text: '计量模型', 
        items: [
          { text: '面板数据', link: '/PanelData/什么是面板数据？' },
          { text: '回归模型', link: '/Model/二值选择模型（logit与probit）' },
          { text: '内生性处理', link: '/EndProblem/简单理解内生性' },
          { text: '调节与中介', link: '/MedMod/调节效应与Stata实现' },
          
        ]
      },

      { text: '其他内容', 
        items: [
          { text: '常见问题', link: '/Question/什么叫估计量的无偏性？一致性？有效性？' },
          { text: '论文写作', link: '/Writing/chatgpt学术使用' },
          { text: '个人分享', link: '/SelfIntro/_UTD24FT50_是什么？' },
          { text: '常用工具', link: '/Tools/复制知网HTML网页中的文本' },
        ]
      },

    ],

    sidebar: {
    
      '/StataIntro/': [{
        text: 'Stata入门',
        collapsed: true,
        items: [
          { text: '导入数据', link: '/StataIntro/导入数据' },
          { text: 'webuse报错', link: '/StataIntro/webuse报错' },
          { text: '处理重复样本', link: '/StataIntro/处理重复样本' },
          { text: '对比两个数据集的差异', link: '/StataIntro/对比两个数据集的差异' },
          { text: '合并数据(merge)', link: '/StataIntro/合并数据(merge)' },
          { text: '纵向合并数据(append)', link: '/StataIntro/纵向合并数据(append)' },
          { text: '样本的保留与删除', link: '/StataIntro/样本的保留与删除' },
          { text: '缩尾截尾', link: '/StataIntro/缩尾截尾' },
          { text: '快速了解数据集(describe,sumarize,tabulate)', link: '/StataIntro/快速了解数据集(describe,sumarize,tabulate)' },
          { text: '基础运算', link: '/StataIntro/基础运算' },
          { text: '基础运算(egen,均值标准差等)', link: '/StataIntro/基础运算(egen,均值标准差等)' },
          { text: '给数据贴标签(label)', link: '/StataIntro/给数据贴标签(label)' },
          { text: 'Wind(万得)数据转化为面板格式', link: '/StataIntro/Wind(万得)数据转化为面板格式' },
          { text: '数据格式转换(format)', link: '/StataIntro/数据格式转换(format)' },
          { text: '字符串的截取', link: '/StataIntro/字符串的截取' },
          { text: '字符串的替换与分割', link: '/StataIntro/字符串的替换与分割' },
          { text: '字符串类型与数值类型的转换', link: '/StataIntro/字符串类型与数值类型的转换' },
          { text: '生成虚拟变量', link: '/StataIntro/生成虚拟变量' },
          { text: '分组计算', link: '/StataIntro/分组计算' },
          { text: '(多个)条件判断', link: '/StataIntro/(多个)条件判断' },
          { text: '面板差分(今年减去年)', link: '/StataIntro/面板差分(今年减去年)' },
          { text: '排序', link: '/StataIntro/排序' },
          { text: '多元回归(reg)', link: '/StataIntro/多元回归(reg)' },
          { text: '看懂Stata多元回归(reg)结果', link: '/StataIntro/看懂Stata多元回归(reg)结果' },
          { text: '(分行业，分年份，分企业性质)分组回归', link: '/StataIntro/(分行业，分年份，分企业性质)分组回归' },
          { text: '(分组)获取回归的拟合值与残差项', link: '/StataIntro/(分组)获取回归的拟合值与残差项' },
          { text: 'xi,i.,回归中自动生成虚拟变量', link: '/StataIntro/xi,i.,回归中自动生成虚拟变量' },
          { text: '制作分组描述性统计表格', link: '/StataIntro/制作分组描述性统计表格' },
          { text: '导出结果(1)描述性统计', link: '/StataIntro/导出结果(1)描述性统计' },
          { text: '导出结果(2)相关系数表', link: '/StataIntro/导出结果(2)相关系数表' },
          { text: '导出结果(3)T检验表格', link: '/StataIntro/导出结果(3)T检验表格' },
          { text: '导出结果(4)回归结果表格', link: '/StataIntro/导出结果(4)回归结果表格' },
          { text: '导出两阶段工具变量回归的回归结果', link: '/StataIntro/导出两阶段工具变量回归的回归结果' },
        ]
      }
    ],

    '/StataDraw/': [{
        text: 'Stata绘图',
        collapsed: true,
        items: [
          { text: '制作年度分布图', link: '/StataDraw/制作年度分布图' },
          { text: '折线图', link: '/StataDraw/折线图' },
          { text: '散点图', link: '/StataDraw/散点图' },
          { text: '散点图加拟合线', link: '/StataDraw/散点图加拟合线' },
          { text: '核密度图', link: '/StataDraw/核密度图' },
          { text: '直方图', link: '/StataDraw/直方图' },
          { text: '绘制双Y轴图像', link: '/StataDraw/绘制双Y轴图像' },  
          { text: '绘制箱线图', link: '/StataDraw/绘制箱线图' },        
          { text: '饼图', link: '/StataDraw/饼图' },
        ]
      },],

      '/Stataputdocx/': [{
        text: 'Stataputdocx',
        collapsed: true,
        items: [
          { text: 'stata_putdocx', link: '/Stataputdocx/stata_putdocx' },

        ]
      },]

    ,
    '/PythonIntro/': [{ 
      text: 'Python入门',
      collapse: false,
      items: [
        { text: 'Python的简单介绍', link: '/PythonIntro/Python的简单介绍' },
        { text: 'Python的安装', link: '/PythonIntro/Python的安装' },
        { text: '安装包;pip', link: '/PythonIntro/安装包;pip【python入门】' },
        { text: '数值类型介绍，文本与数值', link: '/PythonIntro/数值类型介绍，文本与数值' },
        { text: 'list列表', link: '/PythonIntro/list列表' },
        { text: 'dict字典', link: '/PythonIntro/dict字典' },
        { text: 'Ifelse条件判断', link: '/PythonIntro/Ifelse条件判断' },
        { text: 'Forwhile循环', link: '/PythonIntro/Forwhile循环' },
        { text: '函数 ', link: '/PythonIntro/函数' },
        { text: 'OS模块；批量修改文件名', link: '/PythonIntro/OS模块；批量修改文件名' },
        { text: '一个Python的网页笔记', link: '/PythonIntro/一个Python的网页笔记' },
        ]
      },
      ],


    '/PythonTextAnalysis/': [{ 
        text: 'Python入门',
        collapse: false,
        items: [
          { text: '关于文本分析的简单介绍', link: '/PythonTextAnalysis/关于文本分析的简单介绍' },
          { text: '获取Txt文件的编码格式', link: '/PythonTextAnalysis/获取Txt文件的编码格式' },
          { text: '字符的全半角转换', link: '/PythonTextAnalysis/字符的全半角转换' },
          { text: '简体与繁体转换', link: '/PythonTextAnalysis/简体与繁体转换' },
          { text: 'Python实现pdf转txt', link: '/PythonTextAnalysis/Python实现pdf转txt' },
          { text: '年报文本处理', link: '/PythonTextAnalysis/年报文本处理' },
          { text: '利用搜狗扩展分词词库', link: '/PythonTextAnalysis/利用搜狗扩展分词词库' },
          { text: 'TF-IDF值是什么？', link: '/PythonTextAnalysis/TF-IDF值是什么？' },
          { text: '文本余弦相似度计算', link: '/PythonTextAnalysis/文本余弦相似度计算' },

          ]
        },
        ],

    '/PythonSpider/': [{ 
          text: 'Python爬虫',
          collapse: false,
          items: [
            { text: '简单理解爬虫', link: '/PythonSpider/简单理解爬虫' },
            { text: '简单理解网页结构(html)', link: '/PythonSpider/简单理解网页结构(html)' },
            { text: '用python获取网页代码', link: '/PythonSpider/用python获取网页代码' },
            { text: '用python获取网页代码（2）', link: '/PythonSpider/用python获取网页代码（2）' },
            { text: '提取网页需要的内容', link: '/PythonSpider/提取网页需要的内容' },
            { text: '爬虫的注意事项', link: '/PythonSpider/爬虫的注意事项' },

            ]
          },
          ],
          

    '/PythonPakage/': [{ 
            text: 'Python包的使用',
            collapse: false,
            items: [
              { text: 'fraction（分数）模块', link: '/PythonPakage/fraction（分数）模块' },
              { text: 'numpy与线性代数', link: '/PythonPakage/numpy与线性代数' },
              { text: 'Python_win32com包的使用PPTX转PNGJPG', link: '/PythonPakage/Python_win32com包的使用PPTX转PNGJPG' },
              { text: 'Python.win32com处理word论文格式排版', link: '/PythonPakage/Python.win32com处理word论文格式排版' },
              { text: '微信截图获取鼠标指针位置pyautogui', link: '/PythonPakage/微信截图获取鼠标指针位置pyautogui' },
              { text: 'Python实现微软_文本转语音Edge-tss', link: '/PythonPakage/Python实现微软_文本转语音Edge-tss' },
              { text: '自动识别讲座、访谈录音whisper语音识别', link: '/PythonPakage/自动识别讲座、访谈录音whisper语音识别' },
              { text: 'Python中的12小节蓝调musicpy', link: '/PythonPakage/Python中的12小节蓝调musicpy' },
              { text: 'Python画出疫情的传播路线图', link: '/PythonPakage/Python画出疫情的传播路线图' },
              { text: '读取较大的excel文件', link: '/PythonPakage/读取较大的excel文件' },
              { text: 'Python与Stata实现三种T检验', link: '/PythonPakage/Python与Stata实现三种T检验' },
              { text: 'python与stata实现固定效应', link: '/PythonPakage/python与stata实现固定效应' },
              { text: 'Python(stata)实现OLS回归(稳健标准误)', link: '/PythonPakage/Python(stata)实现OLS回归(稳健标准误)' },
              { text: '用Python模拟检验OLS的性质', link: '/PythonPakage/用Python模拟检验OLS的性质' },
              { text: 'python中介中心性计算', link: '/PythonPakage/python中介中心性计算' },
              { text: 'Python度中心性', link: '/PythonPakage/Python度中心性' },
              { text: 'python亲近中心性计算', link: '/PythonPakage/python亲近中心性计算' },
              { text: 'Stata与Python交互', link: '/PythonPakage/Stata与Python交互' },
              { text: '在Python中调用stata', link: '/PythonPakage/在Python中调用stata' },
              ]
            },
            ],

    '/SPSSintro/': [{ 
      text: 'SPSS入门',
      collapse: false,
      items: [
        { text: '前言', link: '/SPSSintro/前言' },
        { text: '导入与创建数据 ', link: '/SPSSintro/导入与创建数据 ' },
        { text: '变量的重新编码 ', link: '/SPSSintro/变量的重新编码 ' },
        { text: '描述性统计 ', link: '/SPSSintro/描述性统计 ' },
        { text: '频率统计 ', link: '/SPSSintro/频率统计 ' },
        { text: '分组描述性统计 ', link: '/SPSSintro/分组描述性统计 ' },
        { text: '分组统计 ', link: '/SPSSintro/分组统计 ' },
        { text: '按照单个变量排序 ', link: '/SPSSintro/按照单个变量排序 ' },
        { text: '按照多个变量排序 ', link: '/SPSSintro/按照多个变量排序 ' },
        { text: '算术运算（计算变量） ', link: '/SPSSintro/算术运算（计算变量） ' },
        { text: '逻辑运算', link: '/SPSSintro/逻辑运算' },
        { text: '关系表达式 ', link: '/SPSSintro/关系表达式 ' },
        { text: '满足条件的计算 ', link: '/SPSSintro/满足条件的计算 ' },
        { text: '单样本T检验 ', link: '/SPSSintro/单样本T检验 ' },
        { text: '独立样本T检验 ', link: '/SPSSintro/独立样本T检验 ' },
        { text: '个案排秩 ', link: '/SPSSintro/个案排秩 ' },
        { text: '秩的绑定值 ', link: '/SPSSintro/秩的绑定值 ' },
        ]
      },
      ],





      '/PanelData/': [{

        text: 'PanelData',
        collapse: false ,
        items: [
          { text: '什么是面板数据？', link: '/PanelData/什么是面板数据？' },
          { text: '非平衡面板', link: '/PanelData/非平衡面板' },
          { text: '行业效应、地区效应、时间固定效应', link: '/Pan,elData/行业效应、地区效应、时间固定效应' },
          { text: '面板数据的三种估计方法', link: '/PanelData/面板数据的三种估计方法' },
          { text: '三种估计方法的Stata操作', link: '/PanelData/三种估计方法的Stata操作' },
          { text: 'VIF值（多重共线性）', link: '/PanelData/VIF值（多重共线性）' },
          { text: '滞后变量回归', link: '/PanelData/滞后变量回归' },
          { text: '面板(xt)LogitProbit', link: '/PanelData/面板(xt)LogitProbit' },
          { text: '面板数据工具变量法', link: '/PanelData/面板数据工具变量法' },
          { text: '简单理解组间异方差、组内自相关、截面相关', link: '/PanelData/简单理解组间异方差、组内自相关、截面相关' },
          { text: 'stata检验组间异方差、组内自相关、截面相关', link: '/PanelData/stata检验组间异方差、组内自相关、截面相关' },
          { text: '修正组间异方差、组内自相关、截面相关(操作)', link: '/PanelData/修正组间异方差、组内自相关、截面相关(操作)' },
          { text: '面板数据移动平均数计算', link: '/PanelData/面板数据移动平均数计算' },
          { text: 'Repeated_time_values_within_panel报错', link: '/PanelData/Repeated_time_values_within_panel' },
          ]
        },
      ],
      '/Model/': [{ 
        text: 'Python入门',
        collapse: false,
        items: [
          { text: '二值选择模型（logit与probit）', link: '/Model/二值选择模型（logit与probit）' },
          { text: 'Probit和Logit模型的边际效应与stata实现', link: '/Model/Probit和Logit模型的边际效应与stata实现' },
          { text: 'Probit模型在论文中的应用—以《什么样的杠杆率有利于企业创新》为例', link: '/Model/Probit模型在论文中的应用—以《什么样的杠杆率有利于企业创新》为例' },
          { text: '有序logit(ologit)与Stata实现', link: '/Model/有序logit(ologit)与Stata实现' },
          { text: 'TOBIT模型与Stata实现', link: '/Model/TOBIT模型与Stata实现' },
          { text: '计数模型(泊松回归)', link: '/Model/计数模型(泊松回归)' },
          { text: '零膨胀泊松模型', link: '/Model/零膨胀泊松模型' },
          { text: '关于倒U型关系的形成机制', link: '/Model/关于倒U型关系的形成机制' },
          { text: 'Stata验证倒U或者U型关系', link: '/Model/Stata验证倒U或者U型关系' },
          ]
        },
        ],
      
      '/EndProblem/': [{ 
      text: '内生性处理',
      collapse: false,
      items: [
        { text: '简单理解内生性', link: '/EndProblem/简单理解内生性' },
        { text: '(1) 工具变量法', link: '/EndProblem/(1) 工具变量法' },
        { text: '(工具变量法)如何寻找工具变量', link: '/EndProblem/(工具变量法)如何寻找工具变量' },
        { text: '(1)+(2) 面板数据工具变量法', link: '/EndProblem/(1)+(2) 面板数据工具变量法' },
        { text: '(2) 固定效应模型', link: '/EndProblem/(2) 固定效应模型' },
        { text: '(3) 倾向性得分匹配(PSM)', link: '/EndProblem/(3) 倾向性得分匹配(PSM)' },
        { text: '(3) PSM操作', link: '/EndProblem/(3) PSM操作' },
        { text: '(3) 逐年PSM', link: '/EndProblem/(3) 逐年PSM' },
        { text: '如何用PSM(倾向性得分)匹配的样本进行回归', link: '/EndProblem/如何用PSM(倾向性得分)匹配的样本进行回归' },
        { text: '(4) Heckman两阶段回归', link: '/EndProblem/(4) Heckman两阶段回归' },
        { text: '(4) Heckman两阶段Stata操作', link: '/EndProblem/(4) Heckman两阶段Stata操作' },
        { text: '如何区分样本选择与样本自选择问题', link: '/EndProblem/如何区分样本选择与样本自选择问题' },
        { text: '(5) DID(双重差分)', link: '/EndProblem/(5) DID(双重差分)' },
        { text: 'DID原理与Stata实现', link: '/EndProblem/DID原理与Stata实现' },
        { text: 'PSM+DID', link: '/EndProblem/PSM+DID' },
        { text: '(5) 多时点DID', link: '/EndProblem/(5) 多时点DID' },
        { text: '(5) 多时点(多期)DID的Stata实现', link: '/EndProblem/(5) 多时点(多期)DID的Stata实现' },
        { text: '(5) DID共同趋势检验及Stata实现', link: '/EndProblem/(5) DID共同趋势检验及Stata实现' },
        { text: '(6) 简单理解广义矩估计(GMM)', link: '/EndProblem/(6) 简单理解广义矩估计(GMM)' },
        { text: '(7) 断点回归(RDD)', link: '/EndProblem/(7) 断点回归(RDD)' },
        { text: '内生性处理方式总结', link: '/EndProblem/内生性处理方式总结' },
 
        ]
      },
      ],

      '/MedMod/': [{ 
        text: '调节与中介',
        collapse: false,
        items: [
          { text: '中介效应与Stata实现', link: '/MedMod/中介效应与Stata实现' },
          { text: 'Stata实现面板数据的中介效应', link: '/MedMod/Stata实现面板数据的中介效应' },
          { text: '中介效应检验存在的问题', link: '/MedMod/中介效应检验存在的问题' },
          { text: '调节效应与Stata实现', link: '/MedMod/调节效应与Stata实现' },
          { text: '(调节效应)交互项与分组回归有什么区别？', link: '/MedMod/(调节效应)交互项与分组回归有什么区别？' },
          { text: '理解调节效应的结果', link: '/MedMod/理解调节效应的结果' },
          { text: '调节效应——需要注意的问题', link: '/MedMod/调节效应——需要注意的问题' },
          { text: '绘制调节作用图', link: '/MedMod/绘制调节作用图' },
          { text: '绘制二次项的调节作用图', link: '/MedMod/绘制二次项的调节作用图' },
          { text: '直接绘制二次项调节作用图——Stata', link: '/MedMod/直接绘制二次项调节作用图_——Stata绘图' },

          ]
        },
        ],

      '/Question/': [{ 
        text: '常见问题',
        collapse: false,
        items: [
          { text: '什么叫估计量的无偏性？一致性？有效性？', link: '/Question/什么叫估计量的无偏性？一致性？有效性？' },
          { text: 'P值？T值？假设检验', link: '/Question/P值？T值？假设检验' },
          { text: '虚拟变量', link: '/Question/虚拟变量' },
          { text: '条件期望,E(Yx)', link: '/Question/条件期望,E(Yx)' },
          { text: '异方差及其后果、检验与处理', link: '/Question/异方差及其后果、检验与处理' },
          { text: '相关系数、回归系数符号不一致——如何处理', link: '/Question/相关系数、回归系数符号不一致——如何处理' },
          { text: '相关系数为正与回归系数为负，发生了什么？', link: '/Question/相关系数为正与回归系数为负，发生了什么？' },
          { text: '模型中加入无关变量会怎么样？', link: '/Question/模型中加入无关变量会怎么样？' },
          { text: '控制变量不显著可以删去吗？', link: '/Question/控制变量不显著可以删去吗？' },
          { text: '关于控制变量', link: '/Question/关于控制变量' },
          { text: 'Bootstrap(自助法)', link: '/Question/Bootstrap(自助法)' },
          { text: 'cluster？robust？关于标准误的选取', link: '/Question/cluster？robust？关于标准误的选取' },
          { text: '如何对标准误进行两次聚类', link: '/Question/如何对标准误进行两次聚类' },
          { text: '关于稳健性检验', link: '/Question/关于稳健性检验' },
          { text: '经济学上的安慰剂检验', link: '/Question/经济学上的安慰剂检验' },
          { text: '豪斯曼检验_(Hausman_test)出现负数结果怎么办？', link: '/Question/豪斯曼检验(Hausman_test)_出现负数结果怎么办？' },
          { text: '寻找工具变量的几种逻辑', link: '/Question/寻找工具变量的几种逻辑' },
          { text: '模型的R2偏小是一个问题吗？', link: '/Question/模型的R2偏小是一个问题吗？' },
          { text: '为什么变量会被omit掉？如何解决？', link: '/Question/为什么变量会被omit掉？如何解决？' },
          { text: '理论假设与实证结果相反', link: '/Question/理论假设与实证结果相反' },
          { text: '论文回归结果不显著怎么办？', link: '/Question/论文回归结果不显著怎么办？' },
          { text: '为什么存在医患矛盾——委托代理理论', link: '/Question/为什么存在医患矛盾——委托代理理论' },
          { text: '0,1变量需要中心化吗？', link: '/Question/0,1变量需要中心化吗？' },
          { text: '为什么会乱码？', link: '/Question/为什么会乱码？' },
          { text: 'do(dta)文件乱码怎么办？', link: '/Question/do(dta)文件乱码怎么办？' },

          { text: '管理学研究中文本分析常用数据库', link: '/Question/管理学研究中文本分析常用数据库' },
          { text: '深度学习与管理学应用——个人分享', link: '/Question/深度学习与管理学应用——个人分享' },
          { text: '回答私信里常问的问题', link: '/Question/回答私信里常问的问题' },

          ]
        },
        ],
  
            
      '/Writing/': [{ 
        text: '论文写作',
        collapse: false,
        items: [
          { text: 'chatgpt学术使用', link: '/Writing/chatgpt学术使用' },
          { text: '关于论文的选题', link: '/Writing/关于论文的选题' },
          { text: 'Endnote的入门', link: '/Writing/Endnote的入门介绍如何写论文' },
          { text: 'word中画逻辑图', link: '/Writing/word中画逻辑图' },
          { text: '关于文献的检索', link: '/Writing/关于文献的检索' },
          { text: '关于论文排版的工具', link: '/Writing/关于论文排版的工具' },
          { text: '区分问题与主题', link: '/Writing/区分问题与主题' },
          { text: '在word中通过键盘快速输入公式', link: '/Writing/在word中通过键盘快速输入公式' },
          { text: '搜狗语言输入与自动纠错效率工具', link: '/Writing/搜狗语言输入与自动纠错效率工具' },
          { text: '朗读论文检查错误基于微软文本转语音_的实践', link: '/Writing/朗读论文检查错误基于微软文本转语音_的实践' },
          { text: '管理类本科实证毕业论文简介与指南', link: '/Writing/管理类本科实证毕业论文简介与指南' },
          { text: '让AI辅助你写论文_StataPython_Latex__in_ChatGPT', link: '/Writing/让AI辅助你写论文_StataPython_Latex__in_ChatGPT' },
          { text: '识别英语常用搭配Linggle.com', link: '/Writing/识别英语常用搭配Linggle.com' },
    

          ]
        },
        ],

        '/SelfIntro/': [{ 
          text: '个人分享',
          collapse: false,
          items: [
            { text: '_UTD24FT50_是什么？', link: '/SelfIntro/_UTD24FT50_是什么？' },
            { text: '常用的数据来源', link: '/SelfIntro/常用的数据来源' },
            { text: '计量经济学常用资料查找方式', link: '/SelfIntro/计量经济学常用资料查找方式' },
            { text: '推荐的python入门视频', link: '/SelfIntro/推荐的python入门视频' },
            { text: 'Stata入门与进阶的资料', link: '/SelfIntro/Stata入门与进阶的资料' },
            { text: 'R、Stata、Python区别与选择', link: '/SelfIntro/R、Stata、Python区别与选择' },
            { text: '关于编程语言的一些理解(python,stata)', link: '/SelfIntro/关于编程语言的一些理解(python,stata)' },
            { text: '机器学习计量经济学关系与区别', link: '/SelfIntro/机器学习计量经济学关系与区别' },
            { text: '还是要好好掌握计量理论', link: '/SelfIntro/还是要好好掌握计量理论' },
            { text: '计量经济学教材推荐', link: '/SelfIntro/计量经济学教材推荐' },
            { text: 'Stata、实证_GPT_prompt（指令）编写指南', link: '/SelfIntro/Stata、实证_GPT_prompt（指令）编写指南' },
            { text: '有关企业高管的研究', link: '/SelfIntro/有关企业高管的研究' },
            { text: '高管研究的经典文献The_Organization_as_a_Reflection_of_Its_Top_Managers（1984）', link: '/SelfIntro/高管研究的经典文献The_Organization_as_a_Reflection_of_Its_Top_Managers（1984）' },
            { text: '更新了一下我的网络小站', link: '/SelfIntro/更新了一下我的网络小站' },
            { text: '新年快乐，也立点Flag！今年好好更新视频', link: '/SelfIntro/新年快乐，也立点Flag！今年好好更新视频' },
  
            ]
          },
          ],

          '/Tools/': [{ 
            text: '常用工具',
            collapse: false,
            items: [
              { text: '复制知网HTML网页中的文本', link: '/Tools/复制知网HTML网页中的文本' },
              { text: '获取PPT中所有图片', link: '/Tools/获取PPT中所有图片' },
              { text: '文本纠错', link: '/Tools/文本纠错' },
              { text: '屏幕标注软件Zoomit;Gink', link: '/Tools/屏幕标注软件Zoomit;Gink' },
              { text: 'GithubDesktop做stata版本管理', link: '/Tools/GithubDesktop做stata版本管理' },
    
              ]
            },
            ],

              
    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/9840842?spm_id_from=333.1007.0.0' }
    ]
  }
}})
