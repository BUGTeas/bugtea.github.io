loadInfo = "<h1>Hello HMCL! Launcher (HHML) Official document</h1>\
<p><a href='itemDir/en.js'>English</a> <a href='itemDir/cn.js'>简体中文</a> <a href='https://github.com/BUGTeas/HHML/'>GitHub</a></p>\
<p>Document applicable version：3.5.3.229 Update 1 (latest)</p>\
<h3>HHML introduce</h3>\
<p>Hello HMCL! Launcher（below referred to as HHML）is a command script (support Windows only now), look from the name, this is a launcher written for the launcher.</p>\
<p>This script use to resolve the HMCL launcher (Hello Minecraft! Launcher) put some related config file and runtime to user directory in system, resulting in the need for reconfiguration on another system. The script will restore the downloaded runtime and global to user directory in system and back it up when exiting.</p>\
<p>in addition, the HHML can also make HMCL detect and auto select Java under the current diredtory, needn't install or add manually</p>\
<h2>Simple usage</h2>\
<ul style='list-style-type:decimal'>\
    <li>Download a Java archive (not the installer, can be OpenJDK) of the required version of the MC version you are playing and unzip it, and download latest version of HMCL in JAR format on the <a href='https://hmcl.huangyuhui.net/download/'>HMCL official webside</a> or the <a href='https://github.com/huanghongxun/HMCL/releases/'>official GitHub releases</a>, an download Latest HHML script from Github Pages：<br>Windows Chinese simplified editon: <a href='/HHML/Windows/HHML-SC-GB2312.bat'>HHML-SC-GB2312.bat</a></br>Windows English editon: <a href='/HHML/Windows/HHML-EN.bat'>HHML-EN.bat</a><br>if you using a non-Chinese simplified Windows or UTF-8 global language support has been enabled, please select the English edition, Otherwise garbled characters will appear, even cause errors!</li>\
    <li>put the HMCL JAR file and HHML script and unzipped java archive (multiple different versions can be placed) in the same directory (can be on a flash drive or hard disk)</li>\
    <li>run the HHML script, the script will secrch all Java archive in current directory automatic and pick the latest Java version to launch HMCL JAR file, soon the interface of HMCL will appear, but sometime also it's download runtimes (JavaFX) automatic, it puts it in the system by default, it is very troublesome to download it again after changing computers. So HHML can back it up to current directory in preparation for restoring to the system on another computer, saving time to download again.</li>\
    <li>With the help of HHML script, the HMCL not only can search installed Java in the system automatic, but also can search unzipped Java in current directory automatic. This mains you don't need to manually add a non-installed Java version path to custom path (unlike PCL2, only one custom Java path can be added in HMCL)</li>\
    <li>After that, HMCL should be launched via the HHML script instead of opening the JAR file directly. To speed up the game startup, you can enable \"Do not check game integrity\" option in advanced settings, because the intergrity check before the game launch requires a large amount of data to be copied to the system disk, if the game is on a flash disk, it will take a lot of time to complete this step.</li>\
</ul>\
<h2>Advenced usage</h2>\
<h3>Custom Java path (relative path can be used)</h3>\
<p>Create a text file under the same directory as the script and named \"customPath.txt\". The text content is one Java path per line, like this:</p>\
<textarea>\
C:\\Users\\Administrator\\Desktop\\jdk\\archive\\openlogic-openjdk-8u372-b07-windows-64\n\
.\\..\\..\\jdk\\jdk-11.0.12\n\
\\software\\jdk\\archive\\jdk-17.0.8+7\
</textarea>\
<p>note: The Java path is not the directory where the Java binary is located, but the directory where the \"bin\" folder is located, which is equivalent to the JAVA_HOME variable.<p>\
<h3>Config file</h3>\
<p>create a text file and named \"config.txt\". There can be no comments or blank lines in the file, and the format is \"configuration=parameter\", like this:</p>\
<textarea>\
searchInCustPath=2\n\
backupGlobalConfig=0\n\
checkJava=0\n\
use64java=1\
</textarea>\
<h3>Auto backup/restore/remove configuration</h3>\
<p>Note: runtime here refers to AuthLib-Injector (external login dependencies) and Java FX (graphic interface dependencies), while global config here refers to config.json (user license) and accounts.json (global user list).</p>\
<p>auto backup/restore/remove the runtime and the globel configuration. They are all located at user directory in system, since it's all on the hard drive, and don't have to change computers, is it still need to backup?</p>\
<p>So I provided some option about backup/restore/remove (they all parameter is 1): </p>\
<p><b>Restore runtime</b><br>Configuration name: restoreRunTime<br>Parameter: </p>\
<textarea>\
0: Never restore\n\
1: Restore AuthLib，restore JavaFX if Java version is 11 or later and HMCL version is 3.3.183 or later\n\
2: Always restore authlib and JavaFX (ignore the Java and HMCL version)\
</textarea>\
<p><b>Backup runtime</b><br>Configuration name: backupRunTime<br>Parameter: </p>\
<textarea>\
0: Never backup\n\
1: backup when \"restoreRunTime\" is enabled and need download runtime by HMCL. \n\
2: Always backup (even if it has been backed up)\
</textarea>\
<p><b>Remove runtime</b><br>Configuration name: removeRunTime<br>Parameter: </p>\
<textarea>\
0: Never remove\n\
1: Remove if they are both restored\n\
2: Always remove (even if they are not restored)\
</textarea>\
<p><b>Restore global config</b><br>Configuration name: restoreGlobalConfig<br>Parameter: </p>\
<textarea>\
0: Never restore\n\
1: Restore if they are both found in user directory in system\n\
2: Always restore (even if it already exists before launch)\
</textarea>\
<p><b>Backup global config</b><br>Configuration name: backupGlobalConfig<br>Parameter: </p>\
<textarea>\
0: Never backup\n\
1: If they already exist before launch, a pop-up window after the HMCL is closed allows the user to confirm whether to backup, otherwise the backup is automatically available\n\
2: Always backup without user confirm  (even if it already exists before launch)\
</textarea>\
<p><b>Remove global config</b><br>Configuration name: removeGlobalConfig<br>Parameter: </p>\
<textarea>\
0: Never remove\n\
1: Remove if it already restore\n\
2: Always remove (even if it already exists before launch)\
</textarea>\
<h3>Default Java search range configuration</h3>\
<p>You can set up script search in some range through this configuration, all parameter are follow:</p>\
<textarea>\
0: Never search in this range\n\
1: Search this range if Java are not found at previous range\n\
2: Always search (even if Java has been found)\
</textarea>\
<p><b>Search custom path</b><br>Configuration name: searchInCustPath<br>Default parameter: 2<br>Java found in this range will add to temporary environment variable so that HMCL to detect it.</p>\
<p><b>Search current directory</b><br>Configuration name: searchInCD<br>Default parameter: 2<br>Java found in this range will add to temporary environment variable so that HMCL to detect it.</p>\
<p><b>Search list of installed application</b><br>Configuration name: searchInInstApp<br>Default parameter: 1<br>Note: by default, search Java this range is only because it is not found at previous range, because it need traverse a lot of registry, it is too slow.<br>If you installed Java that can't be detected by HMCL, you can set the parameter of this configuration to 2, Java found in this range will add to temporary environment variable so that HMCL to detect it.</p>\
<h3>Default Java detect & exclude configuration</h3>\
<p>You can set the Java detection rules with this option:</p>\
<p><b>Detect Java version</b><br>Configuration name: checkJava<br>Default parameter: 2<br>Parameter: </p>\
<textarea>\
0: Select last Java in the file order, not check Java version and bitness (not recommended, you need set bitness through \"use64Java\" configuration, the Java version will be proposed as 11)\n\
1: Select last Java in the file order, and check its version and bitness\n\
2: detect version and bitness of any founded Java and pick the latest version\
</textarea>\
<p><b>Use Java 8 preferred (only valid when parameter of checkJava is 2)</b><br>Default parameter: 0<br>Configuration name: useJava8First<br>Parameter: </p>\
<textarea>\
0: pick latest version Java by version order\n\
1: pick Java 8 preferred by version order, pick latest version if its not found\
</textarea>\
<p><b>Set Java bitness (only valid when parameter of checkJava is 0)</b><br>Configuration name: use64java<br>Default parameter: x<br>Parameter: </p>\
<textarea>\
0: 32 Bit Java（X86）\n\
1: 64 Bit Java（X64）\
</textarea>\
<p><b>Exclude some versions of Java (only valid when parameter of checkJava is 2)</b><br>Configuration name: verBlackList<br>Usage: enter unwanted version number in the parameter (can be multiple, use comma to separated between each version), corresponding version will be excluded during version detecting.<br>Default parameter: none<br>Parameter demo: </p>\
<textarea>\
verBlackList=1.8.0_272,17.0.1\
</textarea>\
"