(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{415:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return f}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(111),r=a(421),o=a(71);a(245);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),c=l("AnchorLinks"),s=l("AnchorLink"),m=l("Row"),d=l("Column"),u=l("Aside"),h=l("InlineNotification"),j={_frontmatter:p},O=r.a;function f(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(O,i({},j,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"This “quick start” guide will provide an overview of ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"}),"’s capabilities."),Object(n.b)("p",null,"Use the links below to jump to a section, or just ",Object(n.b)("a",{href:"#install"},"install ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"}))," and get moving!")),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(s,{mdxType:"AnchorLink"},"Install"),Object(n.b)(s,{mdxType:"AnchorLink"},"Generate a Diagnostic Report"),Object(n.b)(s,{mdxType:"AnchorLink"},"Redact Secrets From a Report"),Object(n.b)(s,{mdxType:"AnchorLink"},"Compare Two Reports"),Object(n.b)(s,{mdxType:"AnchorLink"},"Detect Problems within a Report"),Object(n.b)(s,{mdxType:"AnchorLink"},"Transforming a Report"),Object(n.b)(s,{mdxType:"AnchorLink"},"Further Reading")),Object(n.b)("h2",{id:"install"},"Install"),Object(n.b)("p",null,"Unsurprisingly, to use ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"}),", you must install it."),Object(n.b)("h3",{id:"prerequisite-nodejs-v1180-or-newer"},"Prerequisite: Node.js v11.8.0 or newer"),Object(n.b)("p",null,"For the purposes of this guide, ",Object(n.b)("em",{parentName:"p"},"you must be running Node.js version v11.8.0 or newer"),"; the ",Object(n.b)("a",i({parentName:"p"},{href:"https://nodejs.org/api/report.html"}),"Diagnostic Reports")," API referenced in this guide will reflect its state at version v11.8.0."),Object(n.b)("p",null,"Here are some options for installation:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Recommended:")," An official package from ",Object(n.b)("a",i({parentName:"li"},{href:"https://nodejs.org"}),"nodejs.org")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"macOS"),": ",Object(n.b)("a",i({parentName:"li"},{href:"https://brew.sh"}),"Homebrew")," (",Object(n.b)("inlineCode",{parentName:"li"},"brew install node"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Linux"),": ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/nodesource/distributions"}),"NodeSource Binary Distributions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows"),": ",Object(n.b)("a",i({parentName:"li"},{href:"https://chocolatey.org/"}),"Chocolatey")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Linux/macOS"),": A version manager like ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"nvm"))),Object(n.b)("h3",{id:"package-installation"},"Package Installation"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(d,{colMd:5,colLg:8,mdxType:"Column"},Object(n.b)("p",null,"Use your favorite Node.js package manager to install; ",Object(n.b)("a",i({parentName:"p"},{href:"https://docs.npmjs.com/cli-documentation/"}),Object(n.b)("inlineCode",{parentName:"a"},"npm"))," comes packaged with most Node.js distributions."),Object(n.b)("p",null,"For this guide, it’s recommended to install ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," ",Object(n.b)("em",{parentName:"p"},"globally"),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"$ npm install report-toolkit --global\n"))),Object(n.b)(d,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(n.b)(u,{mdxType:"Aside"},Object(n.b)("p",null,"See npm’s guide on ",Object(n.b)("a",i({parentName:"p"},{href:"https://docs.npmjs.com/downloading-and-installing-packages-globally"}),"installing packages globally")," for other options and troubleshooting.")))),Object(n.b)("h2",{id:"generate-a-diagnostic-report"},"Generate a Diagnostic Report"),Object(n.b)("p",null,"To do much of anything with ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"}),", you must generate a diagnostic report."),Object(n.b)(h,{kind:"info",mdxType:"InlineNotification"},Object(n.b)("p",null,"If you already have a diagnostic report file you intend to use, you can skip\nahead to the ",Object(n.b)("a",i({parentName:"p"},{href:"#redact-secrets-from-a-report"}),"next section"),".")),Object(n.b)("p",null,"At the time of this writing (2019-09-23), the diagnostic report functionality is “hidden” behind a flag to the ",Object(n.b)("inlineCode",{parentName:"p"},"node")," executable; ",Object(n.b)("inlineCode",{parentName:"p"},"--experimental-report"),"."),Object(n.b)("p",null,"The quickest way to generate a report is to evaluate an inline script, like so:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'node --experimental-report --report-filename report.json --eval "process.report.writeReport()"\n')),Object(n.b)("p",null,"You’ll see this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"Writing Node.js report to file: report.json\nNode.js report completed\n(node:18881) ExperimentalWarning: report is an experimental feature. This feature could change at any time\n")),Object(n.b)("p",null,"Breaking down the arguments to ",Object(n.b)("inlineCode",{parentName:"p"},"node"),", we have:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"--experimental-report"),"; enables diagnostic report functionality"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"--report-filename report.json"),"; whenever a diagnostic report is written to disk, use this filename"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},'--eval "process.report.writeReport()"'),"; instead of a ",Object(n.b)("inlineCode",{parentName:"li"},".js")," file, execute the double-quoted string as a script, then exit. The script calls ",Object(n.b)("a",i({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_report_writereport_filename_err"}),"process.report.writeReport()"),", which writes a report file to disk.")),Object(n.b)("p",null,"Next, you'll see how ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," enables safe storage and transmission of report files."),Object(n.b)("h2",{id:"redact-secrets-from-a-report"},"Redact Secrets From a Report"),Object(n.b)("p",null,"Open ",Object(n.b)("inlineCode",{parentName:"p"},"report.json")," in your favorite editor (or use ",Object(n.b)("inlineCode",{parentName:"p"},"cat")," or ",Object(n.b)("inlineCode",{parentName:"p"},"less")," or whathaveyou). Scroll down to—or search for—the ",Object(n.b)("inlineCode",{parentName:"p"},"environmentVariables")," property."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"environmentVariables")," is a top-level property of a report file. It contains a complete dump of the environment at the time the report was created. You might notice API keys, cloud provider tokens, credentials, or other session identifiers; in other words, ",Object(n.b)("em",{parentName:"p"},"secrets"),"."),Object(n.b)("p",null,"Depending on your filesystem permissions, ",Object(n.b)("inlineCode",{parentName:"p"},"report.json")," might even be readable by other users who couldn’t otherwise see your environment. This is a potential leak, and we should plug it. ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," to the rescue!"),Object(n.b)("p",null,"The ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," package provides command-line utility, ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"}),"."),Object(n.b)("p",null,"Assuming ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," is installed globally, run:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk --help\n")),Object(n.b)("p",null,"You should see:"),Object(n.b)(o.a,{name:"cli-output",mdxType:"EmbedCode"}),Object(n.b)("p",null,"We see ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"})," provides ",Object(n.b)("em",{parentName:"p"},"commands"),"; the command we want is ",Object(n.b)("inlineCode",{parentName:"p"},"redact"),"."),Object(n.b)("p",null,"By default, the ",Object(n.b)("inlineCode",{parentName:"p"},"redact")," command will print its output to ",Object(n.b)("inlineCode",{parentName:"p"},"STDOUT")," (the terminal). Instead, let’s use the ",Object(n.b)("inlineCode",{parentName:"p"},"--output")," option to write to a new file (smarties may also ask their shell to redirect the output to a file):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk redact --output report-redacted.json report.json\n")),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(d,{colMd:5,colLg:8,mdxType:"Column"},Object(n.b)("p",null,"Now, open ",Object(n.b)("inlineCode",{parentName:"p"},"report-redacted.json")," in your editor (or otherwise display it). Search for the ",Object(n.b)("inlineCode",{parentName:"p"},"environmentVariables")," property. Within this object, you will see ",Object(n.b)("inlineCode",{parentName:"p"},"[REDACTED]")," wherever ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," found a secret."),Object(n.b)("p",null,"Here’s an example ",Object(n.b)("em",{parentName:"p"},"excerpt")," from ",Object(n.b)("inlineCode",{parentName:"p"},"report-redacted.json"),":")),Object(n.b)(d,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(n.b)(u,{mdxType:"Aside"},Object(n.b)("p",null,"If ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," ",Object(n.b)("em",{parentName:"p"},"didn’t")," catch all your secrets, fear not; you can customize its behavior to suit your environment. See the ",Object(n.b)("a",i({parentName:"p"},{href:"/report-toolkit/configuration-guide"}),"Configuration Guide")," for more information.")))),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-json",metastring:"path=report-redacted.json",path:"report-redacted.json"}),'{\n "environmentVariables": {\n    "TERM_SESSION_ID": "[REDACTED]",\n    "SSH_AUTH_SOCK": "[REDACTED]",\n    "Apple_PubSub_Socket_Render": "[REDACTED]",\n    "COLORFGBG": "15;0",\n    "ITERM_PROFILE": "yoyodyne"\n }\n')),Object(n.b)("p",null,"If you wish, delete your original ",Object(n.b)("inlineCode",{parentName:"p"},"report.json"),"; ",Object(n.b)("inlineCode",{parentName:"p"},"report-redacted.json")," is now safe to share or send across the wire."),Object(n.b)("p",null,"A design goal of ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," is ",Object(n.b)("em",{parentName:"p"},"strong security defaults"),". It will ",Object(n.b)("em",{parentName:"p"},"always")," automatically redact ",Object(n.b)("em",{parentName:"p"},"all")," reports which it ingests. You can disable this via a flag—see the detailed ",Object(n.b)("a",i({parentName:"p"},{href:"/report-toolkit/cli-guide"}),"CLI Guide")," for more information."),Object(n.b)("p",null,"Next, you’ll see how ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"})," can provide a quick comparison of two reports using its ",Object(n.b)("inlineCode",{parentName:"p"},"diff")," command."),Object(n.b)("h2",{id:"compare-two-reports"},"Compare Two Reports"),Object(n.b)("p",null,"If you’re having trouble tracking down the difference between two running ",Object(n.b)("inlineCode",{parentName:"p"},"node")," processes—say, on two machines that ",Object(n.b)("em",{parentName:"p"},"should")," have identical environments—diagnostic reports and ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," can help."),Object(n.b)("p",null,"As you may have deduced, we’ll need two (2) reports to proceed."),Object(n.b)(h,{mdxType:"InlineNotification"},Object(n.b)("p",null,"If you’ve completed the ",Object(n.b)("a",i({parentName:"p"},{href:"#redact-secrets-from-a-report"}),"previous section"),", you can re-use ",Object(n.b)("inlineCode",{parentName:"p"},"report-redacted.json"),"; use this filename whenever this section refers to ",Object(n.b)("inlineCode",{parentName:"p"},"report-1.json"),". Skip ahead to ",Object(n.b)("a",i({parentName:"p"},{href:"#create-the-second-report"}),"creating the second report"),".")),Object(n.b)("h3",{id:"create-the-first-report"},"Create the First Report"),Object(n.b)("p",null,"To create the first report, named ",Object(n.b)("inlineCode",{parentName:"p"},"report-1.json"),", execute:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'node --experimental-report --report-filename report-1.json \\\n  --eval "process.report.writeReport()"\n')),Object(n.b)("p",null,"You’ll see:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-plain",metastring:"wrap=true",wrap:"true"}),"Writing Node.js report to file: report-1.json\nNode.js report completed\n(node:18881) ExperimentalWarning: report is an experimental feature. This feature could change at any time\n")),Object(n.b)("h3",{id:"create-the-second-report"},"Create the Second Report"),Object(n.b)("p",null,"To create a ",Object(n.b)("em",{parentName:"p"},"second")," report, repeat the command with the filename changed to ",Object(n.b)("inlineCode",{parentName:"p"},"report-2.json"),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'node --experimental-report --report-filename report-2.json \\\n  --eval "process.report.writeReport()"\n')),Object(n.b)("p",null,"And you will see:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-plain",metastring:"wrap=true",wrap:"true"}),"Writing Node.js report to file: report-2.json\nNode.js report completed\n(node:18881) ExperimentalWarning: report is an experimental feature. This feature could change at any time\n")),Object(n.b)(h,{kind:"warning",mdxType:"InlineNotification"},"Remember, report files may contain secrets; be deliberate about what you do with these files!"),Object(n.b)("p",null,"With our two reports in-hand, we can use the ",Object(n.b)("inlineCode",{parentName:"p"},"diff")," command to see what’s changed between these two files."),Object(n.b)("h3",{id:"running-a-diff"},"Running a Diff"),Object(n.b)("p",null,"A “diff” between two reports is ",Object(n.b)("em",{parentName:"p"},"not")," a POSIX diff like you’d see between two versions of the same file. If you want that, you can use the ",Object(n.b)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Diff"}),"diff utility"),"!"),Object(n.b)("p",null,"Instead, ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," attempts to disregard typically-irrelevant information, and provide output tailored to the data structure of a report file, which is JSON."),Object(n.b)("p",null,"To display a diff, execute:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk diff report-1.json report-2.json\n")),Object(n.b)("p",null,"You’ll get something like the below (but probably with fancy colors):"),Object(n.b)(o.a,{name:"diff-output",mdxType:"EmbedCode"}),Object(n.b)("p",null,"By default, ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"})," will display a diff in a tabular format, intended for human consumption."),Object(n.b)("p",null,"In the table above, we have four (4) columns. Breaking them down:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Op"),": This is the ",Object(n.b)("em",{parentName:"li"},"type")," of change. In this case, all changes are ",Object(n.b)("em",{parentName:"li"},"modifications"),", denoted by ",Object(n.b)("inlineCode",{parentName:"li"},"M"),". This means that the field exists in both reports, but the value is different. You may also see ",Object(n.b)("inlineCode",{parentName:"li"},"A")," for “added” (when a field is present in the second report and not the first) and ",Object(n.b)("inlineCode",{parentName:"li"},"D")," for “deleted” (when a field is present in the first but not the second)."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Path"),": This is the JSON “keypath” of the field. If you were to reference the field like the report is a regular JavaScript object, this is how you would do it. ",Object(n.b)("inlineCode",{parentName:"li"},"[]")," indicates the presence of an ",Object(n.b)("em",{parentName:"li"},"array"),". ",Object(n.b)("inlineCode",{parentName:"li"},"header.commandLine[3]"),", for example, 4th element of the ",Object(n.b)("inlineCode",{parentName:"li"},"commandLine")," prop of the root ",Object(n.b)("inlineCode",{parentName:"li"},"header")," prop."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"report-1.json"),": The value at ",Object(n.b)("strong",{parentName:"li"},"Path")," in ",Object(n.b)("inlineCode",{parentName:"li"},"report-1.json")," (if present)."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"report-2.json"),": The corresponding value at ",Object(n.b)("strong",{parentName:"li"},"Path")," in ",Object(n.b)("inlineCode",{parentName:"li"},"report-2.json")," (if present).")),Object(n.b)("p",null,"Note the difference within the ",Object(n.b)("inlineCode",{parentName:"p"},"header.commandLine")," array. This reflects the different commands we used to generate each report. We could use that information to determine if the same application generated both reports. Likewise, by comparing ",Object(n.b)("inlineCode",{parentName:"p"},"header.processId"),", we could tell if the same ",Object(n.b)("em",{parentName:"p"},"process")," created both reports."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(d,{colMd:5,colLg:8,mdxType:"Column"},Object(n.b)("p",null,"To squelch noise, by default, the ",Object(n.b)("inlineCode",{parentName:"p"},"diff")," command shows differences ",Object(n.b)("em",{parentName:"p"},"only")," within these properties:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"header"),", omitting properties:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"filename")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"dumpEventTime")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"dumpEventTimeStamp")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"cpus")))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"environmentVariables")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"userLimits")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"sharedObjects")))),Object(n.b)(d,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(n.b)(u,{mdxType:"Aside"},Object(n.b)("p",null,"You can control which fields appear in the diff by providing the ",Object(n.b)("inlineCode",{parentName:"p"},"--includeProp/-i")," and/or ",Object(n.b)("inlineCode",{parentName:"p"},"--excludeProp/-x")," arguments, or use ",Object(n.b)("inlineCode",{parentName:"p"},"--all")," to show everything. See the ",Object(n.b)("a",i({parentName:"p"},{href:""}),"CLI Guide")," for more in-depth information.")))),Object(n.b)("p",null,"Next, we’ll see how ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," can detect problems using its ",Object(n.b)("inlineCode",{parentName:"p"},"inspect")," command."),Object(n.b)("h2",{id:"detect-problems-within-a-report"},"Detect Problems within a Report"),Object(n.b)("p",null,"A diagnostic report is raw data about a ",Object(n.b)("inlineCode",{parentName:"p"},"node")," process. If you’re familiar with diagnostic reports—or happen to know precisely what you’re looking for—you can interpret that data yourself."),Object(n.b)("p",null,"But much like a radiologist reading an X-ray, ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," can interpret the raw data in a report and provide akin to a ",Object(n.b)("em",{parentName:"p"},"diagnosis"),"—or warn about something you may have otherwise overlooked."),Object(n.b)("p",null,"Given a diagnostic report, ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," can run a set of ",Object(n.b)("em",{parentName:"p"},"rules")," (heuristics) against it, providing further information if a “check” fails. This is similar—and, in fact, patterned on—how ",Object(n.b)("a",i({parentName:"p"},{href:"http://eslint.org"}),"ESLint")," runs rules against your codebase. Also akin to ESLint, ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," ships with a set of built-in rules, which we’ll use next."),Object(n.b)("p",null,"Let’s take one of the reports we’ve already created (it doesn’t matter which). Execute:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk inspect report-1.json\n")),Object(n.b)("p",null,"Most likely, this command will result in ",Object(n.b)("em",{parentName:"p"},"no output"),"—in other words, success. ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"})," didn’t find anything worth your attention."),Object(n.b)("p",null,"Each ",Object(n.b)("em",{parentName:"p"},"message")," emitted by a rule has an associated ",Object(n.b)("em",{parentName:"p"},"severity"),". These severities, from “most severe” to “least severe”, are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"error")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"warning")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"info"))),Object(n.b)("p",null,"The default behavior of ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"})," is to exclusively show messages with a severity of ",Object(n.b)("em",{parentName:"p"},"error"),"."),Object(n.b)("p",null,"But you, the user, can control this. Let’s change the severity threshold to ",Object(n.b)("inlineCode",{parentName:"p"},"info"),", and see what happens:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk inspect report-1.json --severity info\n")),Object(n.b)("p",null,"The output should now look ",Object(n.b)("em",{parentName:"p"},"something")," like this (and in color):"),Object(n.b)(o.a,{name:"inspect-output-1",mdxType:"EmbedCode"}),Object(n.b)("p",null,"Above, we see that two rules (",Object(n.b)("inlineCode",{parentName:"p"},"cpu-usage")," and ",Object(n.b)("inlineCode",{parentName:"p"},"memory-usage"),") each output a message. Reading the message, we see that the allowed CPU usage and memory usage, respectively, are within the default thresholds for each rule."),Object(n.b)("p",null,"If, for example, the CPU usage was greater than 50%, then instead of a message with severity ",Object(n.b)("inlineCode",{parentName:"p"},"INFO"),", the severity would be displayed as ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR"),"."),Object(n.b)(h,{mdxType:"InlineNotification"},Object(n.b)("p",null,"When a message with severity ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR")," is encountered during inspection, ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"}),"’s process with exit with a nonzero code (1).")),Object(n.b)("p",null,"Instead of printing a fibonacci sequence in another process, we can use an example “problem” report file to see what an ",Object(n.b)("em",{parentName:"p"},"actual")," error looks like. ",Object(n.b)("a",{href:"/raw/report-high-cpu-usage.example.json",download:!0},"Download ",Object(n.b)("inlineCode",null,"report-high-cpu-usage.example.json")),"; we’ll hand this file to ",Object(n.b)("inlineCode",{parentName:"p"},"inspect"),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk inspect report-high-cpu-usage.example.json\n")),Object(n.b)("p",null,"Note that the above command ",Object(n.b)("em",{parentName:"p"},"does not")," include ",Object(n.b)("inlineCode",{parentName:"p"},"--severity info"),". Now, we should see an error:"),Object(n.b)(o.a,{name:"inspect-output-2",mdxType:"EmbedCode"}),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"report-high-cpu-usage.example.json"),", the reported CPU usage (precisely, the ",Object(n.b)("em",{parentName:"p"},"mean")," across all CPUs) is greater than the default threshold of 50%."),Object(n.b)("p",null,"You could use this information to verify that the process isn’t taking up too much CPU—or change the range (via a configuration file) to assert the process remains active—or even verify that utilization is high enough to justify paying for the compute!"),Object(n.b)(h,{mdxType:"InlineNotification"},Object(n.b)("p",null,"To get the most out of the built-in rules—all of which are independently configurable—see the ",Object(n.b)("a",i({parentName:"p"},{href:""}),"Configuration Guide"),". If you want to make your ",Object(n.b)("em",{parentName:"p"},"own")," custom rules, see the ",Object(n.b)("a",i({parentName:"p"},{href:""}),"Plugin Developer’s Guide"),";")),Object(n.b)("p",null,"Finally, let’s see how ",Object(n.b)(o.c,{prop:"executable",mdxType:"Metadata"}),"’s ",Object(n.b)("inlineCode",{parentName:"p"},"transform")," command can help convert a report to a more useful format."),Object(n.b)("h2",{id:"transforming-a-report"},"Transforming a Report"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"transform")," command allows you to apply ",Object(n.b)("em",{parentName:"p"},"one or more")," “transformers” to a diagnostic report."),Object(n.b)("p",null,"The list of built-in transformers is as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"csv"),": Converts to CSV format"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filter"),": Pick or omit certain properties"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"json"),": Converts to JSON format (the default)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"newline"),": Converts to newline-delimited format, suitable for piping via shell, consumption via Node.js streams, etc."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"numeric"),": A special filter which picks only ",Object(n.b)("em",{parentName:"li"},"numeric")," fields; good for metrics"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"redact"),": Redacts secrets"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"stack-hash"),": Computes a hash of the exception for metrics; helps answer “have we seen this exception before?”"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"table"),": The default transform for the ",Object(n.b)("inlineCode",{parentName:"li"},"diff")," and ",Object(n.b)("inlineCode",{parentName:"li"},"inspect")," commands, among others")),Object(n.b)("p",null,"Since this ",Object(n.b)("em",{parentName:"p"},"is")," supposed to be a quick-start guide, we’ll pick two of these as examples: ",Object(n.b)("a",i({parentName:"p"},{href:"#the-filter-transformer"}),Object(n.b)("inlineCode",{parentName:"a"},"filter"))," and ",Object(n.b)("a",i({parentName:"p"},{href:"#the-stack-hash-transformer"}),Object(n.b)("inlineCode",{parentName:"a"},"stack-hash")),"."),Object(n.b)("h3",{id:"the-filter-transformer"},"The ",Object(n.b)("inlineCode",{parentName:"h3"},"filter")," Transformer"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"filter")," transformer allows you to essentially “whitelist” or “blacklist” some portion of a report (or both at once; the blacklist takes preference)."),Object(n.b)("p",null,"For example, if you’d like to retrieve ",Object(n.b)("em",{parentName:"p"},"only")," the version of ",Object(n.b)("inlineCode",{parentName:"p"},"node")," used to generate the report, you can use:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk transform -t filter --include header.componentVersions.node \\\n  report-1.json\n")),Object(n.b)("p",null,"Which will result in something like this (depending on the version of ",Object(n.b)("inlineCode",{parentName:"p"},"node")," you used to generate the report):"),Object(n.b)(o.a,{name:"transform-output-1",language:"json",mdxType:"EmbedCode"}),Object(n.b)("p",null,"Likewise, the ",Object(n.b)("inlineCode",{parentName:"p"},"--exclude")," argument would allow you to, say, omit the entirety the ",Object(n.b)("inlineCode",{parentName:"p"},"environmentVariables")," and ",Object(n.b)("inlineCode",{parentName:"p"},"sharedObjects")," properties:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk transform -t filter --exclude environmentVariables --exclude \\\n  sharedObjects report-1.json\n")),Object(n.b)("p",null,"As you can see from the above, ",Object(n.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(n.b)("inlineCode",{parentName:"p"},"--exclude")," can be specified multiple times."),Object(n.b)("p",null,"For something more practical, let’s try ",Object(n.b)("inlineCode",{parentName:"p"},"stack-hash"),"."),Object(n.b)("h3",{id:"the-stack-hash-transformer"},"The ",Object(n.b)("inlineCode",{parentName:"h3"},"stack-hash")," Transformer"),Object(n.b)("p",null,"The intent of this transformer is to facilitate the gathering of ",Object(n.b)("em",{parentName:"p"},"metrics")," around exceptions (or more specifically, the stack traces thereof)."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"node")," can be configured to automatically generate a diagnostic report when it encounters an uncaught exception or a user signal (e.g., ",Object(n.b)("inlineCode",{parentName:"p"},"SIGUSR1"),"). We can then use the ",Object(n.b)("inlineCode",{parentName:"p"},"stack-hash")," transformer to associate the stack (present in all reports) with a reasonably unique SHA1 hash."),Object(n.b)("p",null,"Here’s an example of configuring ",Object(n.b)("inlineCode",{parentName:"p"},"node")," to automatically output a report file upon an uncaught exception (and summarily throwing one via ",Object(n.b)("inlineCode",{parentName:"p"},"--eval"),"):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"node --experimental-report --report-filename report-3.json \\\n  --report-uncaught-exception --eval \"throw new Error('oh no')\"\n")),Object(n.b)("p",null,"We can then use the ",Object(n.b)("inlineCode",{parentName:"p"},"stack-hash")," transformer on ",Object(n.b)("inlineCode",{parentName:"p"},"report-3.json"),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk transform -t stack-hash report-3.json\n")),Object(n.b)("p",null,"Which will result in something akin to:"),Object(n.b)(o.a,{name:"transform-output-2",language:"json",mdxType:"EmbedCode"}),Object(n.b)("p",null,"If we repeat the command using a different filename (",Object(n.b)("inlineCode",{parentName:"p"},"report-4.json"),"):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"node --experimental-report --report-filename report-4.json \\\n  --report-uncaught-exception --eval \"throw new Error('oh no')\"\n")),Object(n.b)("p",null,"And run the transformer:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk transform -t stack-hash report-4.json\n")),Object(n.b)("p",null,"We’ll get the ",Object(n.b)("em",{parentName:"p"},"same")," hash, even though the ",Object(n.b)("inlineCode",{parentName:"p"},"dumpEventTime")," (when the report file was created) and ",Object(n.b)("inlineCode",{parentName:"p"},"filepath")," differ:"),Object(n.b)(o.a,{name:"transform-output-3",language:"json",mdxType:"EmbedCode"}),Object(n.b)("p",null,"But ",Object(n.b)("em",{parentName:"p"},"not")," if the message is different:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"node --experimental-report --report-filename report-5.json \\\n  --report-uncaught-exception --eval \"throw new Error('pizza party')\"\n")),Object(n.b)("p",null,"And:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rtk transform -t stack-hash report-5.json\n")),Object(n.b)("p",null,"Results in:"),Object(n.b)(o.a,{name:"transform-output-4",language:"json",mdxType:"EmbedCode"}),Object(n.b)("p",null,"You can see that the ",Object(n.b)("inlineCode",{parentName:"p"},"sha1")," property is different, because the exception thrown has a different message."),Object(n.b)(h,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Transformers aren’t limited to just the ",Object(n.b)("inlineCode",{parentName:"p"},"transform")," command; you can use transformers ",Object(n.b)("em",{parentName:"p"},"combined with")," any other command (like ",Object(n.b)("inlineCode",{parentName:"p"},"diff")," or ",Object(n.b)("inlineCode",{parentName:"p"},"inspect"),") via the ",Object(n.b)("inlineCode",{parentName:"p"},"--transform/-t")," argument, as applicable. For example, converting the output of ",Object(n.b)("inlineCode",{parentName:"p"},"inspect")," to JSON for machine consumption. See the ",Object(n.b)("a",i({parentName:"p"},{href:""}),"CLI Guide")," for details.")),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"That wraps up the ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," quick start guide! We’ve learned how to use ",Object(n.b)(o.c,{prop:"packageName",mdxType:"Metadata"})," to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Redact secrets from a diagnostic report"),Object(n.b)("li",{parentName:"ul"},"Diff two diagnostic reports"),Object(n.b)("li",{parentName:"ul"},"Check a diagnostic report for potential problems"),Object(n.b)("li",{parentName:"ul"},"Transform a diagnostic report to another format")),Object(n.b)("p",null,"See ",Object(n.b)("a",i({parentName:"p"},{href:"#further-reading"}),"below")," for links to detailed documentation on all of the above topics."),Object(n.b)("h2",{id:"further-reading"},"Further Reading"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/report-toolkit/api/home"}),"Programmatic API Documentation"))))}f.isMDXComponent=!0},419:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/report-toolkit"}}}')},420:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs"}}}}}')},421:function(e,t,a){"use strict";a(31),a(28);var n=a(1),r=a(419),o=a(0),i=a.n(o),p=a(110),l=a.n(p),b=a(205),c=a(131),s=a(3),m=a.n(s),d=a(396),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:m()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(420),j=a(397),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,p=i+"/tree/master"+o.subDirectory+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:p},"Edit this page on GitHub"))):null},f=a(203),N=(a(59),a(27)),g=a(398);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),i=o===r,p=new RegExp(r+"(?!-)"),b=a.replace(p,o);return Object(n.b)("li",{key:e,className:m()((t={},t[g.selectedItem]=i,t),g.listItem)},Object(n.b)(N.Link,{className:g.link,to:""+b},e))}));return Object(n.b)("div",{className:g.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:g.list},o))))))},r}(i.a.Component),w=a(204);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,p=t.frontmatter,s=void 0===p?{}:p,m=t.relativePagePath,d=t.titleType,h=s.tabs,j=s.title,N=s.theme,g=s.description,C=s.keywords,v=r.data.site.pathPrefix,x=v?o.pathname.replace(v,""):o.pathname,k=h?x.split("/").slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:N,pageTitle:j,pageDescription:g,pageKeywords:C,titleType:d},Object(n.b)(u,{title:i?Object(n.b)(i,null):j,label:"label",tabs:h}),h&&Object(n.b)(y,{slug:x,tabs:h,currentTab:k}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:m})),Object(n.b)(f.a,{pageContext:t,location:o,slug:x,tabs:h,currentTab:k}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-quick-start-index-mdx-8d21b8fb57fce625df2b.js.map