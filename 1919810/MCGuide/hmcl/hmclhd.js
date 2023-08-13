var hmclCfg1 = hmclCfg2 = false;
var usd = true;
var hmclCfg = loadJS(srcFnt + "hmclCfg.js");
var checkInfo = function(){
    if(hmclCfg1 && hmclCfg2){
        loadInfo = "<h1>HMCL 快速入门 (安装、添加游戏和账户)</h1><h3>下载 HMCL (Windows)</h3><p>打开链接<a href='https://github.com/huanghongxun/HMCL/releases'>showLink</a>，找到带有“Latest”标志的版本 (最新版)，在“Assets”中找到“.exe”后缀的文件，点击下载。</p><img src='./HMCLDnEXE.gif'/><h3>安装 HMCL</h3><p>与其他启动器不同的是，HMCL 启动器主体也基于 Java 开发，这意味着需要在进入启动器之前就必须将 Java 安装好。<a href=''>Java 下载和安装指南</a></p><p>在刚才下载好的文件其实就是软件本体，HMCL 是免安装的。建议将它放到一个空文件夹中 (路径及名称最好不要带中文)，因为部分配置文件和游戏文件会放在软件所在的同一目录下，然后就可以双击它启动了。</p><img src='./HMCLMkDir.gif'/><p>初次启动可能需要下载依赖库，请确保网络环境良好。</p><img src='./HMCLDepDn.png'/><p>但有时候也会抛出如下错误，一般关闭再重新打开即可，如果还是不行请检查网络环境。</p><img src='./HMCLDepErr.png'/><p>依赖库下载完成后便会进入主界面，点击“同意”同意用户协议。</p>" + hmclCfg1 + hmclCfg2;
    } else setTimeout(function(){checkInfo()},0);
}
checkInfo();