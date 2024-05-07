import{_ as a,c as t,a as i,l as s,a1 as e,o as h}from"./chunks/framework.ZVjbeeCo.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"StataDraw/饼图.md","filePath":"StataDraw/饼图.md"}'),p={name:"StataDraw/饼图.md"},l=s("h2",{id:"stata绘图——饼图",tabindex:"-1"},[i("Stata绘图——饼图 "),s("a",{class:"header-anchor",href:"#stata绘图——饼图","aria-label":'Permalink to "Stata绘图——饼图"'},"​")],-1),n=s("div",{style:{"text-align":"center"}},[s("div",{style:{border:"2px solid #ccc",padding:"10px",display:"inline-block"}},[s("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1AE411F79B&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"750px",height:"450px"}})])],-1),k=e(`<p>🍰 如何在 Stata 中绘制一个饼图？</p><p>在本文中，我们将会使用一个视力数据集来演示如何在 Stata 中绘制一个饼图。</p><p>首先，我们需要加载视力数据集：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sysuse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> auto,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">clear</span></span></code></pre></div><p>饼图的命令为 <code>graph pie</code>，因此，我们可以直接在命令行中输入以下命令来绘制一个饼图：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie ,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foreigner)</span></span></code></pre></div><p>但是，这个饼图并不是很直观，我们可以通过添加一些选项来使其更加清晰。例如，我们可以为每个扇区添加一个标签，并在标签中显示百分比：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie ,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foreigner) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_all percent)</span></span></code></pre></div><p>如果我们希望在标签中显示数字而不是百分比，我们可以将 <code>percent</code> 替换为 <code>sum</code>：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie ,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foreigner) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_all sum)</span></span></code></pre></div><p>我们还可以通过调整颜色和大小等方式进一步增强饼图的可读性。例如，我们可以将某个扇区的颜色设置为黄色：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie ,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foreigner) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_all name)</span></span></code></pre></div><p>最后，我们可以将饼图保存到桌面：</p><div class="language-stata vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stata</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">graph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foreigner) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">plabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_all percent ,color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yellow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ///</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,explode </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(green)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ///</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">legend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;国内&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;国外&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;饼图&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span></code></pre></div><hr>`,15);function r(d,g,E,o,c,y){return h(),t("div",null,[l,n,i(" # Stata 绘图——饼图 "),k])}const u=a(p,[["render",r]]);export{C as __pageData,u as default};
