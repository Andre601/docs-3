"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[847],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Versioning",p={unversionedId:"api-information/versioning",id:"api-information/versioning",isDocsHomePage:!1,title:"Versioning",description:"Modrinth follows a simple pattern for its API:",source:"@site/docs/api-information/versioning.md",sourceDirName:"api-information",slug:"/api-information/versioning",permalink:"/docs/api-information/versioning",editUrl:"https://github.com/modrinth/docs/edit/master/docs/api-information/versioning.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domains",permalink:"/docs/api-information/domains"},next:{title:"Migration Information",permalink:"/docs/api-information/migrations/information"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Modrinth follows a simple pattern for its API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the event of a breaking API change, the API version is bumped, and migration steps will be available ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-information/migrations/information"},"here")),(0,o.kt)("li",{parentName:"ul"},"When an API is no longer the current one, it will be considered outdated but still supported. It will be kept for a certain duration, defined by one of the two triggers, either that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The version is no longer current for a duration of two (2) years, or"),(0,o.kt)("li",{parentName:"ul"},"The version is three (3) versions behind the current one"))),(0,o.kt)("li",{parentName:"ul"},"When one of these triggers has been met, a deprecation period of six (6) months begins, where developers still using that version will be notified by email, Discord, GitHub issues, or other similar contact methods if available."),(0,o.kt)("li",{parentName:"ul"},"Once the deprecation period finishes, the version will phase out over a duration of one (1) month.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For the first two weeks, the version will periodically return a ",(0,o.kt)("inlineCode",{parentName:"li"},"410 GONE")," error for small durations of around 5 minutes, alongside an error body saying that the version is phasing out."),(0,o.kt)("li",{parentName:"ul"},"For the next two weeks, it will break with the same error, but over longer durations of 6-12 hours."))),(0,o.kt)("li",{parentName:"ul"},"After this phase-out period, the version will be removed entirely, either with a permanent ",(0,o.kt)("inlineCode",{parentName:"li"},"410 GONE")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"404 NOT FOUND")," error.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend that you handle these 410 errors and update applications to the latest API version. Migration details can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-information/migrations/v1-to-v2"},"here"),"."))),(0,o.kt)("p",null,"Modrinth must stay stable for apps that depends on it, but maintaining older versions can be costly and difficult to maintain. Keeping old versions is also a barrier to innovation for new features and changes. As such, this approach is taken in order to keep a balance between stability and innovation."))}m.isMDXComponent=!0}}]);