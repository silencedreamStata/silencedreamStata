import{_ as a,c as t,a as i,l as s,a1 as n,o as p}from"./chunks/framework.ZVjbeeCo.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PythonPakage/fraction（分数）模块.md","filePath":"PythonPakage/fraction（分数）模块.md"}'),h={name:"PythonPakage/fraction（分数）模块.md"},l=s("h2",{id:"fraction-分数-模块",tabindex:"-1"},[i("fraction（分数）模块 "),s("a",{class:"header-anchor",href:"#fraction-分数-模块","aria-label":'Permalink to "fraction（分数）模块"'},"​")],-1),e=s("div",{style:{"text-align":"center"}},[s("div",{style:{border:"2px solid #ccc",padding:"10px",display:"inline-block"}},[s("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1Wo4y1e745&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"750px",height:"450px"}})])],-1),k=n(`<p>🔢️ <strong>介绍</strong></p><p>今天，我们要分享 Python 中的分数模块。这个模块在实际应用中非常有用，因为我最近在刷题的时候遇到了一个问题：同学们提交的答案各种各样，有些是未化简的分数，有些是化简到一半的分数，有些是化简到最后的一个分数，有些是直接算出来的小数形式。这样的话，核对起来会很麻烦。于是，我想找一个 Python 的方法来解决这个问题，结果发现 Python 中确实有这个模块！</p><p>🔢️ <strong>使用 fraction 模块</strong></p><p>首先，我们来看一下 <code>fraction</code> 模块的表达方式。可以从官方文档了解更多信息。这个分数有不同的写法，例如：</p><ul><li>输入 <code>0.5</code>，调用 <code>fraction</code> 函数，它会自动转化成分数格式，例如：</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> factions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fraction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x1)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 1/2</span></span></code></pre></div><ul><li>直接指定数字，用逗号将数字分割开，生成一个分数，例如：</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x2)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 1/2</span></span></code></pre></div><p>在这种情况下，我们可以访问它的分子和分母，例如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x2.numerator)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x2.denominator)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 2</span></span></code></pre></div><p>下面的两种写法也是一样的，例如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fraction1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fraction.Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fraction1)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 1/2</span></span></code></pre></div><p>关键是，如果输入的是没有化简的分数，例如四分之二，那么它会自动化简成最简单的分子分母格式，例如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fraction2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fraction.Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fraction2)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 1/2</span></span></code></pre></div><p>这对我来说非常有帮助，至少我可以看一下它到底有没有弄错。如果输入的是一个比较复杂的情况，例如：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fraction3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fraction3)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output: 3200/12345</span></span></code></pre></div><p>如果我希望它将分子分母化简，可以这样做：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fraction3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fraction(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).limit_denominator(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fraction3)</span></span></code></pre></div><p>这样就可以限制分母的大小，让它尽可能逼近输入的小数。</p><p>以上就是今天分享的 Python 中的分数模块，主要是用来判断某些给出的分数答案或者是小数转分数这种东西。视频到这里就结束了，感谢大家的观看！</p><hr>`,21);function r(d,o,c,E,g,y){return p(),t("div",null,[l,e,i(" # 分数（Fraction）模块 "),k])}const C=a(h,[["render",r]]);export{F as __pageData,C as default};
