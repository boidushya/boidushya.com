"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[739],{9543:function(t,n,e){e.r(n),e.d(n,{default:function(){return G}});var a=e(885),s=e(168),r=e(2791),o=e(4088),c=e(5718),i=e(918),l=e(1413),u=e(4942),h=e(2982),d=function(t){var n=[].concat([{name:"ls",description:"lists directory content"},{name:"cd",description:"changes the current working directory"},{name:"clear",description:"clears the terminal screen"}],(0,h.Z)(t.map((function(t){var n=" ";return t.subPathStrict[0]&&(n+=t.subPathStrict[1].name),{name:t.name[0]+n,description:t.description}})))),e=function(t){var n=t.map((function(t){return t.name.length})),e=Math.max.apply(Math,(0,h.Z)(n));return t.map((function(t){return Array(e-t.name.length+1).join(" ")+"\t"}))}(n),a="ZSH version 5.8.0 (x86_64-apple-darwin20.0)\nThese shell commands are defined internally.\nType <span class=\"style2\">'help'</span> to see this list.\n\n";return n.forEach((function(t,n){var s='<span class="style2">'.concat(t.name,"</span>").concat(e[n]).concat(t.description,"\n");a+=s})),"".concat(a,'\nAnd more "hidden" commands...')},p=[{name:["resume","./resume","resume.sh","./resume.sh"],action:{RESUME:""},response:"",subPathStrict:[!1],description:"view my resume"},{name:["contact","./contact","contact.js","./contact.js"],action:{CONTACT:""},response:"",subPathStrict:[!1],description:"get in touch with me"},{name:["projects","./projects","projects.app","./projects.app"],action:!1,response:"Under construction \ud83d\udea7\ud83d\udd28",subPathStrict:[!1],description:"checkout my projects"},{name:["neofetch"],action:!1,response:"<pre>".concat('\n                                                                        <span class="style4">boidushya</span>@<span class="style4">epicest</span>\n                                                                        -----------------\n<span class="style2">\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557</span>\t<span class="style4">Name: </span><span class="style1">Boidushya Bhattacharya</span>\n<span class="style2">\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557</span>\t<span class="style4">Education: </span><span class="style1">Sophomore, B.Tech @ MUJ</span>\n<span class="style2">\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551</span>\t<span class="style4">CGPA: </span><span class="style1">9.85 </span>\n<span class="style2">\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551</span>\t<span class="style4">Interests: </span><span class="style1">Web Dev / CyberSecurity</span>\n<span class="style2">\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551</span>\t<span class="style4">Socials: </span><span class="style2"><a target="_blank" href="https://instagram.com/boidushya">Instagram</a> <span class="style1">/</span> <a target="_blank" href="https://www.linkedin.com/in/boidushya/">LinkedIn</a> <span class="style1">/</span> <a target="_blank" href="https://www.github.com/boidushya/">Github</a></span>\n<span class="style2">\u255a\u2550\u2550\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d   \u255a\u2550\u255d  \u255a\u2550\u255d</span>\t<span class="style4">Contacts: </span><span class="style2"><a target="_blank" href="mailto:boidushyabhattacharya@gmail.com?subject=%5BPortfolio%5D&body=Hey%20Boidushya!%0D%0A%0D%0AHere\'s%20some%20remarks%20about%20your%20website%3A%20%3Cinsert%20your%20thoughts%20here%20%F0%9F%98%B3%3E%0D%0A%0D%0AFrom%20%3Cinsert%20your%20name%20here%3E">Email</a> <span class="style1">/</span> <a href="https://discord.com/users/339271217779441674">Discord</a> <span class="style1">/</span> <a href="https://t.me/boidushyaB">Telegram</a></span>\n                                                                        <span class="style4">Danger Zone: </span><span class="style7"><a target="_blank" href="/danger-zone">Do not click this</a></span>\n\n',"</pre>"),subPathStrict:[!1],description:"displays information about me in an aesthetic and visually pleasing way."},{name:["code"],action:!0,response:"",subPathStrict:[!0,{name:".",response:""}],description:"opens a VS code window for this website's source code"},{name:["danger"],action:!0,response:"",subPathStrict:[!1],description:'<span class="style7">\xaf\\_(\u30c4)_/\xaf</span>'},{name:["git"],action:!0,response:"",subPathStrict:[!0,{name:"log",response:""}],description:"lists my github projects"},{name:["qemu"],action:!0,response:"",subPathStrict:[!1],description:"an Operating System emulator that runs right on your browser (I had to flex I'm sorry)"},{name:["help"],action:!0,response:"",subPathStrict:[!1],description:"displays this message "},{name:["uname"],action:!0,response:"Darwin MacBook-Pro.local 20.1.0 Darwin Kernel Version 20.1.0: Sun Jul 18 10:32:00 PDT 2021; root:xnu-7195.50.7~2/RELEASE_ARM64_T8101 arm64",subPathStrict:[!1],description:"prints the Darwin OS Kernel version / release / machine name. "},{name:["whoami"],action:!0,response:"Boidushya Bhattacharyay",subPathStrict:[!1],description:"prints the full name of the current administrator when invoked"}];p=p.map((function(t){return"help"===t.name[0]&&(t.response="<pre>".concat(d(p),"</pre>")),t}));var m,f,b,y,g,k,v,Z,w,x,S=[{name:".github",link:"https://github.com/boidushya",folder:!0,executable:!1},{name:"src",link:"https://github.com/boidushya/boidushya.com",folder:!0,executable:!1},{name:"resume.sh",link:"",folder:!1,executable:!0},{name:"projects.app",link:"",folder:!1,executable:!0},{name:"contact.js",link:"",folder:!1,executable:!0}],P=(0,l.Z)({ls:{validArgs:{"/":{action:null,response:"ls: cannot access System Volume Information: Permission Denied"},_dir:{action:null,response:(m=S,m.map((function(t){return'<span class="'.concat(t.folder?"style3":"".concat(t.executable?"style2":"style1"),'">').concat(t.link?'<a target="_blank" href="'.concat(t.link,'">').concat(t.name,"</a>"):"".concat(t.name),"</span>")})).join("  "))},default:{action:null,response:"ls: cannot access %arg%: Permission Denied"}}},cd:{validArgs:function(t){var n={_dir:{action:null,response:""},default:{action:null,response:"cd: cannot access %arg%: Permission Denied"},"~":{action:null,response:""}},e={};return t.forEach((function(t){e[t.name]={action:t.folder?{PATH:t.link}:null,response:t.folder?"":"zsh: cd: %arg%: Not a directory"}})),Object.keys(n).forEach((function(t){e[t]=n[t]})),e}(S)}},function(t){var n={};return t.forEach((function(t){var e={};t.name.forEach((function(a){var s=t.action?(0,u.Z)({},t.name[0].toUpperCase(),""):null,r=t.response;e=(0,u.Z)({},a,{validArgs:{_dir:{action:s,response:r},default:{action:s,response:r}}}),t.subPathStrict[0]&&(e[a].validArgs[t.subPathStrict[1].name]={action:s,response:t.subPathStrict[1].response}),n=(0,l.Z)((0,l.Z)({},e),n)}))})),n}(p)),j=P,E=e(8703),D=e(184),A=o.ZP.span(f||(f=(0,s.Z)(["\n\ta {\n\t\tcolor: inherit;\n\t\tbackground: inherit;\n\t\ttext-decoration: none;\n\t}\n\t.style1 {\n\t\tcolor: ",";\n\t}\n\t.style2 {\n\t\tcolor: ",";\n\t}\n\t.style3 {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n\t.style4 {\n\t\tcolor: ",";\n\t}\n\t.style5 {\n\t\tcolor: ",";\n\t}\n\t.style6 {\n\t\tcolor: ",";\n\t}\n\t.style7 {\n\t\tbackground: ",";\n\t\tbackground-size: 1800% 1800%;\n\t\tanimation: rainbow 15s ease infinite;\n\n\t\t@keyframes rainbow {\n\t\t\t0% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\tbackground-position: 100% 19%;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t}\n\t\tcolor: ",";\n\t}\n"])),i.Z.bodyFont1,i.Z.bodyFont2,i.Z.bodyFont2.darken(.75),i.Z.bodyFont1,i.Z.bodyFont3,i.Z.bodyFont4,i.Z.bodyFont5,i.Z.easterEgg,i.Z.bodyFont4),C=function(t){var n=(0,r.useContext)(c.Z).setAlertHidden;return(0,r.useEffect)((function(){if(t.action)switch(Object.keys(t.action)[0]){case"PATH":window.open(t.action.PATH);break;case"CODE":document.location.href="/vscode";break;case"DANGER":document.location.href="/danger-zone";break;case"QEMU":document.location.href="/qemu";break;case"RESUME":document.location.href="/resume";break;case"PROJECTS":document.location.href="/projects";break;case"CONTACT":document.location.href="/contact";break;case"GIT":document.location.href="/git";break;case"HELP":n(!0)}}),[]),(0,D.jsx)(D.Fragment,{})},T=function(t){var n,e=t.split(" ");if(j.hasOwnProperty(e[0])){var a="",s="";return s=a=1===e.length?"_dir":j[e[0]].validArgs.hasOwnProperty(e[1])?e[1]:"default","default"===a&&(s=e[1]),function(t,n){var e=n.data,a=t.response;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(C,{action:t.action}),(0,D.jsx)(A,{dangerouslySetInnerHTML:{__html:a.replace(/%arg%/g,'<span class="style2">'.concat((0,E.sanitize)(e),"</span>"))}})]})}(j[e[0]].validArgs[a],{data:s})}return n=t,(0,D.jsxs)(A,{children:["zsh: command not found:"," ",(0,D.jsx)("span",{className:"style2",children:(0,E.sanitize)(n)})]})},F=e(6746),_=e(4358),B=(e(7032),(0,o.ZP)(_.Z)(b||(b=(0,s.Z)(['\n\tfont-family: "Hack", monospace;\n\tcolor: ',";\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\tpadding: 0.2rem 0.4rem 0 0.4rem;\n\tline-height: 1.5;\n\twidth: 100%;\n\tmax-height: 80vh;\n\toverflow-x: hidden;\n"])),i.Z.bodyFont1,i.Z.scrollbarThumb)),M=(0,o.ZP)(_.Z)(y||(y=(0,s.Z)(["\n\t// white-space: pre;\n\toverflow: auto;\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\t// &::-webkit-scrollbar-track {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar {\n\t// \twidth: 0.1rem;\n\t// \theight: 0.5rem;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar-thumb {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: ",";\n\t// }\n"])),i.Z.scrollbarThumb,i.Z.scrollbarThumb),H=o.ZP.input(g||(g=(0,s.Z)(["\n\tfont-family: inherit;\n\tbackground: inherit;\n\tfont-size: inherit;\n\tcolor: inherit;\n\tborder: none;\n\toutline: none;\n\tcaret-color: transparent;\n\twidth: 0;\n\tmax-width: 100ch;\n\t&::selection {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n"])),i.Z.bodyBg,i.Z.bodyBg.negate()),I=o.ZP.span(k||(k=(0,s.Z)(["\n\tdisplay: flex;\n"]))),z=(0,o.F4)(v||(v=(0,s.Z)(["\n\tfrom, to {\n\t\tbackground: ",";\n\t}\n\n\t50% {\n\t\tbackground: transparent;\n\t}\n"])),i.Z.bodyFont1),L=(0,o.iv)(Z||(Z=(0,s.Z)(["\n\tanimation: "," 1s step-end infinite;\n"])),z),O=o.ZP.div(w||(w=(0,s.Z)(["\n\tdisplay: ",";\n\twidth: 1ch;\n\tbackground: ",";\n\tmargin: 0.1rem 0.3rem;\n\tz-index: 2;\n\t","\n"])),(function(t){return t.disabled?"none":"auto"}),i.Z.bodyFont1,(function(t){return!t.typing&&L})),R=o.ZP.label(x||(x=(0,s.Z)(["\n\tcolor: ",";\n"])),i.Z.labelColor),X=function(t){var n=(0,r.useState)(""),e=(0,a.Z)(n,2),s=e[0],o=e[1],i=(0,r.useContext)(c.Z),l=i.commands,u=i.setCommand,h=i.path,d=(0,r.useState)(l.length),p=(0,a.Z)(d,2),m=p[0],f=p[1],b=(0,r.useState)(!1),y=(0,a.Z)(b,2),g=y[0],k=y[1],v=(0,r.useState)(!1),Z=(0,a.Z)(v,2),w=Z[0],x=Z[1],S=(0,r.useRef)(),P=(0,r.useRef)(),j=localStorage.getItem("hideHelp");return(0,r.useEffect)((function(){w||(S.current.focus(),S.current.addEventListener("select",(function(t){t.target.selectionStart=t.target.selectionEnd})),S.current.addEventListener("mousedown",(function(t){t.preventDefault()})))}),[]),(0,r.useEffect)((function(){if(!j){var t=new Date,n=setInterval((function(){var n=Math.floor((new Date-t)/1e3);5!==Math.floor(n/60)||w||(o("help"),S.current.style.width=S.current.value.length+"ch")}),1e3);return function(){clearInterval(n)}}}),[w,j]),(0,r.useEffect)((function(){var t=setTimeout((function(){return k(!1)}),200);return function(){return clearTimeout(t)}}),[g]),(0,D.jsxs)(I,{children:[(0,D.jsx)(R,{htmlFor:"input",dangerouslySetInnerHTML:{__html:(0,E.sanitize)(h)}}),(0,D.jsx)(H,{id:"input",type:"text",ref:S,value:s,onBlur:function(t){w||t.target.focus()},onKeyDown:function(n){var e=!1;n.ctrlKey&&(e=!0);var a=parseFloat(P.current.style.transform.slice(11)),r=S.current.value.length,c=Math.abs(Math.floor(a));switch(n.key){case"ArrowLeft":c<=r&&!e?(k(!0),P.current.style.transform="translateX(".concat(a-1,"ch)")):n.preventDefault();break;case"Delete":1===c||e?n.preventDefault():P.current.style.transform="translateX(".concat(a+1,"ch)");break;case"Home":c<=r?P.current.style.transform="translateX(".concat(-r-.5,"ch)"):n.preventDefault();break;case"End":1!==c?P.current.style.transform="translateX(-0.5ch)":n.preventDefault();break;case"ArrowRight":1===c||e?n.preventDefault():(k(!0),P.current.style.transform="translateX(".concat(a+1,"ch)"));break;case"ArrowUp":if(m>0){f(m-1);var i=l[m-1];o(i),n.target.style.width=i.length+"ch",P.current.style.transform="translateX(".concat(-i.length-.5,"ch)")}break;case"ArrowDown":if(m<=l.length-1)if(m===l.length-1)o(""),n.target.style.width="0ch",P.current.style.transform="translateX(-0.5ch)";else{f(m+1);var h=l[m+1];o(h),n.target.style.width=h.length+"ch",P.current.style.transform="translateX(".concat(-h.length-.5,"ch)")}break;case"Enter":x(!0),t.setData(s),t.setChild(t.child+1),u(s)}},onChange:function(t){t.preventDefault(),t.target.value.length<=100&&(o(t.target.value.toLowerCase()),k(!0),t.target.style.width=t.target.value.length+"ch")},spellCheck:!1,autoComplete:"off",autoCorrect:"off"}),(0,D.jsx)(O,{ref:P,typing:g,disabled:w,style:{transform:"translateX(-0.5ch)"}})]})},U=function(t){return(0,D.jsx)(M,{children:t.content})},N=function(t){var n=(0,r.useState)(""),e=(0,a.Z)(n,2),s=e[0],o=e[1],c=(0,r.useState)(""),i=(0,a.Z)(c,2),l=i[0],u=i[1];return(0,r.useEffect)((function(){if(l.length){"clear"===l.trim().toLowerCase()&&(t.setActive(!1),t.setChild(1));var n=T(l.trim());o(n)}}),[l,t]),(0,D.jsxs)(B,{children:[(0,D.jsx)(X,{setChild:t.setChild,child:t.child,setData:u,path:t.path}),(0,D.jsx)(U,{content:s})]})},G=function(){var t=(0,r.useState)(1),n=(0,a.Z)(t,2),e=n[0],s=n[1],o=(0,r.useState)(!0),c=(0,a.Z)(o,2),i=c[0],l=c[1];return(0,r.useEffect)((function(){l(!0)}),[i]),(0,D.jsx)(F.Z,{children:(0,D.jsx)(B,{children:Array.from(Array(e).keys()).map((function(t){return(0,D.jsx)(N,{setChild:s,setActive:l,child:e},0===t?i&&t:t)}))})})}},6746:function(t,n,e){var a,s=e(168),r=(e(2791),e(4088)),o=e(918),c=e(184),i=r.ZP.div(a||(a=(0,s.Z)(["\n\tdisplay: flex;\n\tflex: 1;\n\tmax-width: 100%;\n\tmin-height: 32rem;\n\theight: 100%;\n\tborder-radius: 0 0 0.3rem 0.3rem;\n\tborder: 1px solid ",";\n"])),o.Z.bodyBorder);n.Z=function(t){return(0,c.jsx)(i,{children:t.children})}}}]);
//# sourceMappingURL=739.c7b56967.chunk.js.map