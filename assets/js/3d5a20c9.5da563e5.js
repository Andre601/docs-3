"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[327],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Contributing to Modrinth",p={unversionedId:"tutorials/contributing",id:"tutorials/contributing",isDocsHomePage:!1,title:"Contributing to Modrinth",description:"The vast majority of Modrinth, including everything from our API/backend and frontend to the Minotaur plugin and analytics service, is released under free and open source licenses on our GitHub. As such, we love contributions from community members! Before proceeding to do so, though, there are a number of things you'll want to keep in mind throughout the process, as well as some details specific to certain projects.",source:"@site/docs/tutorials/contributing.md",sourceDirName:"tutorials",slug:"/tutorials/contributing",permalink:"/docs/tutorials/contributing",editUrl:"https://github.com/modrinth/docs/edit/master/docs/tutorials/contributing.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modrinth Maven",permalink:"/docs/tutorials/maven"},next:{title:"Creating Modpacks",permalink:"/docs/modpacks/creation"}},d=[{value:"Things to keep in mind",id:"things-to-keep-in-mind",children:[{value:"Docker",id:"docker",children:[]},{value:"Consult people on Discord",id:"consult-people-on-discord",children:[]},{value:"Don&#39;t get discouraged",id:"dont-get-discouraged",children:[]},{value:"Code isn&#39;t the only way to contribute",id:"code-isnt-the-only-way-to-contribute",children:[]}]},{value:"Project-specific details",id:"project-specific-details",children:[{value:"labrinth (backend and API)",id:"labrinth-backend-and-api",children:[]},{value:"knossos (frontend)",id:"knossos-frontend",children:[]},{value:"theseus (launcher), daedalus (metadata host), minos (authentication provider), and ariadne (analytics system)",id:"theseus-launcher-daedalus-metadata-host-minos-authentication-provider-and-ariadne-analytics-system",children:[]},{value:"minotaur (Gradle plugin)",id:"minotaur-gradle-plugin",children:[]},{value:"Blog",id:"blog",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"modrinth-old-ui",id:"modrinth-old-ui",children:[]}]}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-modrinth"},"Contributing to Modrinth"),(0,i.kt)("p",null,"The vast majority of Modrinth, including everything from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/labrinth"},"API/backend")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/knossos"},"frontend")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/minotaur"},"Minotaur plugin")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/ariadne"},"analytics service"),", is released under free and open source licenses on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth"},"GitHub"),". As such, we love contributions from community members! Before proceeding to do so, though, there are a number of things you'll want to keep in mind throughout the process, as well as some details specific to certain projects."),(0,i.kt)("h2",{id:"things-to-keep-in-mind"},"Things to keep in mind"),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Most Modrinth programs take advantage of the containerization platform ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker"),", which can help to set up a working production or development environment within seconds. Be wary, though: if you're planning to make a lot of pull requests/changes to a certain project, it may be better to use the native live development tools instead of using Docker. Project-specific details, including what Docker commands to use, can be found below."),(0,i.kt)("h3",{id:"consult-people-on-discord"},"Consult people on Discord"),(0,i.kt)("p",null,"There are a number of reasons to want to consult with people on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/gFRbNQ2"},"Discord")," before making a pull request. For example, if you're not sure whether something is a good idea or not, if you're not sure how to implement something, or if you can't get something working, these would all be good opportunities to ask in a development channel. For all major programs made by Modrinth, there is a development channel near or at the bottom of the channel list, as well as a catch-all ",(0,i.kt)("inlineCode",{parentName:"p"},"#other")," channel."),(0,i.kt)("h3",{id:"dont-get-discouraged"},"Don't get discouraged"),(0,i.kt)("p",null,"At times, pull requests may be rejected or left unmerged for a variation of reasons. Don't take it personally, and don't get discouraged! Sometimes a contribution just isn't the right fit for the time, or it might have just been lost in the mess of other things to do. Remember, the core Modrinth team are often busy, whether it be on a specific project/task or on external factors such as offline responsibilities. It all falls back to the same thing: don't get discouraged!"),(0,i.kt)("h3",{id:"code-isnt-the-only-way-to-contribute"},"Code isn't the only way to contribute"),(0,i.kt)("p",null,"You don't need to know how to program to contribute to Modrinth. Quality assurance, supporting the community, coming up with feature ideas, and making sure your voice is heard in public decisions are all great ways to contribute to Modrinth. If you find bugs, reporting them on the appropriate issue tracker is your responsibility; however, remember that potential security breaches and exploits must instead be sent in an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:admin@modrinth.com"},"admin@modrinth.com"),"."),(0,i.kt)("p",null,"Modrinth currently does not accept monetary donations."),(0,i.kt)("h2",{id:"project-specific-details"},"Project-specific details"),(0,i.kt)("p",null,"If you wish to contribute code to a specific project, here's the place to start. Most of Modrinth is written in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust language"),", but some things are written in other languages/frameworks like ",(0,i.kt)("a",{parentName:"p",href:"https://nuxtjs.org"},"Nuxt.js")," or Java."),(0,i.kt)("h3",{id:"labrinth-backend-and-api"},"labrinth (backend and API)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/labrinth"},"labrinth")," is the Rust-based backend serving Modrinth's API with the help of the ",(0,i.kt)("a",{parentName:"p",href:"https://actix.rs"},"Actix")," framework. To get started with a labrinth instance, install docker, docker-compose, and cargo. The initial startup can be done simply with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". That will deploy several things on several ports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Port 5432: PostgreSQL database"),(0,i.kt)("li",{parentName:"ul"},"Port 7700: MeiliSearch instance"),(0,i.kt)("li",{parentName:"ul"},"Port 8070: pgAdmin web UI ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The password when initially accessing pgAdmin is nothing, so just leave it blank when prompted.")))),(0,i.kt)("p",null,"Now, you'll have to install the sqlx CLI, which can be done with cargo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --git https://github.com/launchbadge/sqlx sqlx-cli --no-default-features --features postgres\n")),(0,i.kt)("p",null,"From there, you can create the database and perform all database migrations with these two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sqlx database create\nsqlx migrate run\n")),(0,i.kt)("p",null,"The majority of configuration is done at runtime using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotenv-rs/dotenv"},"dotenv")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. Each of the variables and what they do can be found in the dropdown below. Additionally, there are three command line options that can be used to specify to MeiliSearch what you want to do."),(0,i.kt)("details",null,(0,i.kt)("summary",null,".env variables & command line options"),(0,i.kt)("h4",{id:"basic-configuration"},"Basic configuration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),": Whether debugging tools should be enabled",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"RUST_LOG"),": Specifies what information to log, from rust's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/env-logger-rs/env_logger"},(0,i.kt)("inlineCode",{parentName:"a"},"env-logger")),"; a reasonable default is ",(0,i.kt)("inlineCode",{parentName:"p"},"info,sqlx::query=warn"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"SITE_URL"),": The main URL to be used for CORS",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"CDN_URL"),": The publicly accessible base URL for files uploaded to the CDN",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MODERATION_DISCORD_WEBHOOK"),": The URL for a Discord webhook where projects pending approval will be sent",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"CLOUDFLARE_INTEGRATION"),": Whether labrinth should integrate with Cloudflare's spam protection",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),": The URL for the PostgreSQL database",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_MIN_CONNECTIONS"),": The minimum number of concurrent connections allowed to the database at the same time",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_MAX_CONNECTIONS"),": The maximum number of concurrent connections allowed to the database at the same time",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MEILISEARCH_ADDR"),": The URL for the MeiliSearch instance used for search",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MEILISEARCH_KEY"),": The name that MeiliSearch is given",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"BIND_ADDR"),": The bind address for the server. Supports both IPv4 and IPv6",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MOCK_FILE_PATH"),": The path used to store uploaded files; this has no default value and will panic if unspecified"),(0,i.kt)("h4",{id:"cdn-options"},"CDN options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"STORAGE_BACKEND"),": Controls what storage backend is used. This can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"backblaze"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"s3"),", but defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"local")),(0,i.kt)("p",null,"The Backblaze and S3 configuration options are fairly self-explanatory in name, so here's simply their names:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"BACKBLAZE_KEY_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKBLAZE_KEY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKBLAZE_BUCKET_ID"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"S3_ACCESS_TOKEN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_SECRET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_REGION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_BUCKET_NAME")),(0,i.kt)("h4",{id:"search-oauth-and-miscellaneous-options"},"Search, OAuth, and miscellaneous options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_INDEX_INTERVAL"),": The interval, in seconds, at which the local database is reindexed for searching. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"3600")," seconds (1 hour).",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION_INDEX_INTERVAL"),": The interval, in seconds, at which versions are reindexed for searching. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"1800")," seconds (30 minutes)."),(0,i.kt)("p",null,"The two GitHub OAuth configuration options are also fairly self-explanatory.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_CLIENT_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_CLIENT_SECRET")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RATE_LIMIT_IGNORE_IPS"),": An array of IPs that should have a lower rate limit factor. This can be useful for allowing the front-end to have a lower rate limit to prevent accidental timeouts."),(0,i.kt)("h4",{id:"command-line-options"},"Command line options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--skip-first-index"),": Skips indexing the local database on startup. This is useful to prevent doing unnecessary work when frequently restarting.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--reconfigure-indices"),": Resets the MeiliSearch settings for the search indices and exits.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--reset-indices"),": Resets the MeiliSearch indices and exits; this clears all previously indexed mods.")),(0,i.kt)("h3",{id:"knossos-frontend"},"knossos (frontend)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/knossos"},"knossos")," is the Nuxt.js frontend. While you're able to use Docker here, you may find it faster to just install ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"npm")," and run the standard commands from there:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run dev\n")),(0,i.kt)("p",null,"Once that's done, you'll be serving knossos on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," with hot reloading. You can replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," to build for a production server and ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," to start the server. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run lint")," to find any eslint problems, and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run fix")," to try automatically fixing those problems."),(0,i.kt)("h3",{id:"theseus-launcher-daedalus-metadata-host-minos-authentication-provider-and-ariadne-analytics-system"},"theseus (launcher), daedalus (metadata host), minos (authentication provider), and ariadne (analytics system)"),(0,i.kt)("p",null,"These Rust programs are still in early development. Ask in the relevant Discord channel what you can help with before making a pull request."),(0,i.kt)("h3",{id:"minotaur-gradle-plugin"},"minotaur (Gradle plugin)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/minotaur"},"Minotaur")," is the Gradle plugin used to automatically publish artifacts to Modrinth. To run your copy of the plugin in a project, publish it to your local Maven with ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew clean build publishToMavenLocal")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenLocal()")," to your buildscript."),(0,i.kt)("p",null,"If you don't wish to use the local Maven, or you're having trouble doing so, you can use a direct jar. If you do so, please make sure to add all relevant dependencies (httpmime, httpclient, and gson) like such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    repositories {\n        mavenCentral()\n    }\n    dependencies {\n        classpath files { file('../../../../build/libs').listFiles()}\n        classpath group: 'org.apache.httpcomponents', name: 'httpmime', version: '4.5.2'\n        classpath group: 'org.apache.httpcomponents', name: 'httpclient', version: '4.5.2'\n        classpath group: 'com.google.code.gson', name: 'gson', version: '2.6.2'\n    }\n}\n")),(0,i.kt)("h3",{id:"blog"},"Blog"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://blog.modrinth.com"},"blog")," is the central place to find news and articles about topics related to or involving Modrinth. To run the blog, it's similar to but simpler than knossos; run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," first, then ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run develop")," for hot reloading or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," to build and serve."),(0,i.kt)("p",null,"Pull requests to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/blog"},"blog repository")," may not always be accepted. Before making a pull request to this repository, please contact a core Modrinth team member, and they will work with you and the rest of the blogging team on revisions, banner photos, and other details."),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modrinth/docs"},"documentation")," (which you are reading right now!) is the place to find any and all general information about Modrinth and its API. Instead of using npm to build and develop the documentation, you should instead use ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install")," followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," will serve the docs on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," with hot reloading and open a browser window pointing there."),(0,i.kt)("h3",{id:"modrinth-old-ui"},"modrinth-old-ui"),(0,i.kt)("p",null,"Do not make a pull request to this repository or attempt to contribute to it. This repository is no longer used and has not been used for a long time."))}h.isMDXComponent=!0}}]);