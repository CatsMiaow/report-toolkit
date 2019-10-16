(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return O}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var b=n(111),a=n(421);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},i=o("Breadcrumb"),l=o("BreadcrumbItem"),p={_frontmatter:c},s=a.a;function O(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,b,a={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(b.b)(s,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)(i,{noTrailingSlash:!0,mdxType:"Breadcrumb"},Object(b.b)(l,{mdxType:"BreadcrumbItem"},Object(b.b)("a",{href:"../home"},"report-toolkit API")),Object(b.b)(l,{mdxType:"BreadcrumbItem"},Object(b.b)("a",{href:"report_toolkit_common"},"@report-toolkit/common")),Object(b.b)(l,{mdxType:"BreadcrumbItem"},Object(b.b)("a",{href:"report_toolkit_common.constants"},"constants"))),Object(b.b)("p",null,"A grip of constants used throughout the project."),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"severities"},"SEVERITIES"),Object(b.b)("p",null,"Ƭ ",Object(b.b)("strong",{parentName:"p"},"SEVERITIES"),": ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Potential severities of Messages reported by the inspector."),Object(b.b)("h2",{id:"variables"},"Variables"),Object(b.b)("h3",{id:"const-default_diff_exclude"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," DEFAULT_DIFF_EXCLUDE"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"DEFAULT_DIFF_EXCLUDE"),": ",Object(b.b)("em",{parentName:"p"},"keyof string[]")),Object(b.b)("p",null,"Typically useless keypaths to explicitly omit from diffs. Anything here should be more specific than what’s in ",Object(b.b)("a",r({parentName:"p"},{href:"report_toolkit_common.constants.mdx#const-default_diff_include"}),"DEFAULT_DIFF_INCLUDE"),"."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-default_diff_include"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," DEFAULT_DIFF_INCLUDE"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"DEFAULT_DIFF_INCLUDE"),": ",Object(b.b)("em",{parentName:"p"},"keyof string[]")),Object(b.b)("p",null,"Things we explicitly want to show in the diffs.  Use ",Object(b.b)("a",r({parentName:"p"},{href:"report_toolkit_common.constants.mdx#const-default_diff_exclude"}),"DEFAULT_DIFF_EXCLUDE")," to exclude any child properties of these."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-error"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," ERROR"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"ERROR"),": ",Object(b.b)("em",{parentName:"p"},"“error”")),Object(b.b)("p",null,"“Error” severity.  The highest severity, and the default."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-info"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," INFO"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"INFO"),": ",Object(b.b)("em",{parentName:"p"},"“info”")),Object(b.b)("p",null,"“Info” severity. The lowest severity."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-namespace"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," NAMESPACE"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"NAMESPACE"),": ",Object(b.b)("em",{parentName:"p"},"“report-toolkit”")),Object(b.b)("p",null,"Project namespace"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-no_filepath"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," NO_FILEPATH"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"NO_FILEPATH"),": ",Object(b.b)("em",{parentName:"p"},"“(no filepath)”")),Object(b.b)("p",null,"Text to use in display if no filepath found"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-redacted_token"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," REDACTED_TOKEN"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"REDACTED_TOKEN"),": ",Object(b.b)("em",{parentName:"p"},"”","[REDACTED]","”")),Object(b.b)("p",null,"The string token used to replace secrets when redacting from a report."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-report_known_root_properties"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," REPORT_KNOWN_ROOT_PROPERTIES"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"REPORT_KNOWN_ROOT_PROPERTIES"),": ",Object(b.b)("em",{parentName:"p"},"keyof string[]")),Object(b.b)("p",null,"Known root properties of a Diagnostic Report.  To be processed, an object must have ",Object(b.b)("em",{parentName:"p"},"all")," of these properties.  The current list ",Object(b.b)("em",{parentName:"p"},"in order"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"header")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"javascriptStack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"nativeStack")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"javascriptHeap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"resourceUsage")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"libuv")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"environmentVariables")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"userLimits")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"sharedObjects"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-severities"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," SEVERITIES"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"SEVERITIES"),": ",Object(b.b)("em",{parentName:"p"},"Readonly‹object›")),Object(b.b)("p",null,"Potential severities of Messages reported by the inspector."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"enum"))," {number}"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-short_namespace"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," SHORT_NAMESPACE"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"SHORT_NAMESPACE"),": ",Object(b.b)("em",{parentName:"p"},"“rtk”")),Object(b.b)("p",null,"Short project namespace"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"const-warning"},Object(b.b)("inlineCode",{parentName:"h3"},"Const")," WARNING"),Object(b.b)("p",null,"• ",Object(b.b)("strong",{parentName:"p"},"WARNING"),": ",Object(b.b)("em",{parentName:"p"},"“warning”")),Object(b.b)("p",null,"“Warning” severity."))}O.isMDXComponent=!0},419:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/report-toolkit"}}}')},420:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/IBM/report-toolkit","subDirectory":"packages/docs"}}}}}')},421:function(e,t,n){"use strict";n(31),n(28);var b=n(1),a=n(419),r=n(0),c=n.n(r),o=n(110),i=n.n(o),l=n(205),p=n(131),s=n(3),O=n.n(s),j=n(396),m=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(b.b)("div",{className:O()(j.pageHeader,(t={},t[j.withTabs]=r.length,t))},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12"},Object(b.b)("h1",{id:"page-title",className:j.text},n)))))},u=n(420),d=n(397),h=function(e){var t=e.relativePagePath,n=e.repository,a=u.data.site.siteMetadata.repository,r=n||a,c=r.baseUrl,o=c+"/tree/master"+r.subDirectory+"/src/pages"+t;return c?Object(b.b)("div",{className:"bx--row "+d.row},Object(b.b)("div",{className:"bx--col"},Object(b.b)("a",{className:d.link,href:o},"Edit this page on GitHub"))):null},N=n(203),f=(n(59),n(27)),g=n(398);var E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),c=r===a,o=new RegExp(a+"(?!-)"),l=n.replace(o,r);return Object(b.b)("li",{key:e,className:O()((t={},t[g.selectedItem]=c,t),g.listItem)},Object(b.b)(f.Link,{className:g.link,to:""+l},e))}));return Object(b.b)("div",{className:g.tabsContainer},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(b.b)("nav",null,Object(b.b)("ul",{className:g.list},r))))))},a}(c.a.Component),_=n(204);t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,c=e.Title,o=t.frontmatter,s=void 0===o?{}:o,O=t.relativePagePath,j=t.titleType,u=s.tabs,d=s.title,f=s.theme,g=s.description,C=s.keywords,v=a.data.site.pathPrefix,y=v?r.pathname.replace(v,""):r.pathname,T=u?y.split("/").slice(-1)[0]||i()(u[0],{lower:!0}):"";return Object(b.b)(p.a,{homepage:!1,theme:f,pageTitle:d,pageDescription:g,pageKeywords:C,titleType:j},Object(b.b)(m,{title:c?Object(b.b)(c,null):d,label:"label",tabs:u}),u&&Object(b.b)(E,{slug:y,tabs:u,currentTab:T}),Object(b.b)(_.a,{padded:!0},n,Object(b.b)(h,{relativePagePath:O})),Object(b.b)(N.a,{pageContext:t,location:r,slug:y,tabs:u,currentTab:T}),Object(b.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-api-modules-report-toolkit-common-constants-mdx-43fbe9c1da9516355555.js.map