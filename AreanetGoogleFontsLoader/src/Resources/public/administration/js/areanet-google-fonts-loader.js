(function(){var e,t,o,n,a,i={273:function(){},266:function(){let{Component:e,Context:t}=Shopware,{EntityCollection:o}=Shopware.Data;e.extend("areanet-google-fonts-loader-create","areanet-google-fonts-loader-detail",{methods:{getFont(){let e=this.fontRepository.create(Shopware.Context.api);this.$route.params&&Object.assign(e,this.$route.params),this.font=e},onClickSave(){this.isLoading=!0,this.fontRepository.save(this.font,Shopware.Context.api).then(()=>{this.isLoading=!1,this.loadFont(),this.$router.push({name:"areanet.google.fonts.loader.detail",params:{id:this.font.id}})}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:e})})}}})},546:function(e,t,o){var n=o(273);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),o(346).Z("34eebf66",n,!0,{})},346:function(e,t,o){"use strict";function n(e,t){for(var o=[],n={},a=0;a<t.length;a++){var i=t[a],s=i[0],r={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(r):o.push(n[s]={id:s,parts:[r]})}return o}o.d(t,{Z:function(){return u}});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,d=!1,c=function(){},g=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(e,t,o,a){d=o,g=a||{};var s=n(e,t);return h(s),function(t){for(var o=[],a=0;a<s.length;a++){var r=i[s[a].id];r.refs--,o.push(r)}t?h(s=n(e,t)):s=[];for(var a=0;a<o.length;a++){var r=o[a];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete i[r.id]}}}}function h(e){for(var t=0;t<e.length;t++){var o=e[t],n=i[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(v(o.parts[a]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],a=0;a<o.parts.length;a++)s.push(v(o.parts[a]));i[o.id]={id:o.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,o,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(d)return c;n.parentNode.removeChild(n)}if(p){var a=l++;t=y.bind(null,n=r||(r=m()),a,!1),o=y.bind(null,n,a,!0)}else t=b.bind(null,n=m()),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&t(e=n):o()}}var w=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function y(e,t,o,n){var a=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function b(e,t){var o=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),g.ssrId&&e.setAttribute(f,t.id),a&&(o+="\n/*# sourceURL="+a.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}}},s={};function r(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={id:e,exports:{}};return i[e](o,o.exports,r),o.exports}r.m=i,r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce(function(t,o){return r.f[o](e,t),t},[]))},r.u=function(e){return"static/js/689da902f25d5736af36.js"},r.miniCssF=function(e){return"static/css/areanet-google-fonts-loader.css"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="administration:",r.l=function(o,n,a,i){if(e[o]){e[o].push(n);return}if(void 0!==a)for(var s,l,d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var g=d[c];if(g.getAttribute("src")==o||g.getAttribute("data-webpack")==t+a){s=g;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach(function(e){return e(n)}),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="bundles/areanetgooglefontsloader/",o={474:0},r.f.j=function(e,t){var n=r.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var i=r.p+r.u(e),s=Error();r.l(i,function(t){if(r.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}},"chunk-"+e,e)}}},n=function(e,t){var n,a,i=t[0],s=t[1],l=t[2],d=0;if(i.some(function(e){return 0!==o[e]})){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);l&&l(r)}for(e&&e(t);d<i.length;d++)a=i[d],r.o(o,a)&&o[a]&&o[a][0](),o[a]=0},(a=window["webpackJsonpPluginareanet-google-fonts-loader"]=window["webpackJsonpPluginareanet-google-fonts-loader"]||[]).forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a)),window?.__sw__?.assetPath&&(r.p=window.__sw__.assetPath+"/bundles/areanetgooglefontsloader/"),function(){"use strict";let{ApiService:e}=Shopware.Classes;var t=class extends e{constructor(e,t,o="_action/areanet-google-fonts"){super(e,t,o)}downloadFont(t,o){let n=`${this.getApiBasePath()}/download-font`;return this.httpClient.post(n,{fonts:t,id:o},{headers:this.getBasicHeaders()}).then(t=>e.handleResponse(t))}};let{Application:o}=Shopware;o.addServiceProvider("customApiService",e=>new t(o.getContainer("init").httpClient,e.loginService));let{Component:n,Mixin:a}=Shopware,{Criteria:i}=Shopware.Data;n.register("areanet-google-fonts-loader-list",{template:'{% block an_googlepageloader_list %}\n    <sw-page class="areanet-google-fonts-loader-list">\n        {% block an_googlepageloader_list_smart_bar_actions %}\n            <template #smart-bar-actions>\n                <sw-button variant="primary" :routerLink="{ name: \'areanet.google.fonts.loader.create\' }">\n                    {{ $tc(\'areanet-google-fonts-loader.list.addButtonText\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n\n        <template #content>\n            <sw-entity-listing\n                    v-if="items"\n                    :repository="fontRepository"\n                    :columns="columns"\n                    :items="items"\n                    :isLoading="isLoading"\n                    ref="listing"\n                    detailRoute="areanet.google.fonts.loader.detail"\n            >\n                <template #column-downloaded="{ item }">\n                    <span v-if="item.downloaded">{{ $t(\'areanet-google-fonts-loader.list.downloadedTrue\') }}</span>\n                    <span v-else>{{ $t(\'areanet-google-fonts-loader.list.downloadedFalse\') }}</span>\n                </template>\n\n                <template #column-salesChannel="{ item }">\n                    <div v-if="item.salesChannels && item.salesChannels.length">\n                        {{ item.salesChannels.map(salesChannel => salesChannel.salesChannel.translated.name).join(\', \') }}\n                    </div>\n                </template>\n            </sw-entity-listing>\n        </template>}}\n    </sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[a.getByName("notification"),a.getByName("listing")],data(){return{items:null,isLoading:!0,sortBy:"name",sortDirection:"ASC",total:0}},metaInfo(){return{title:this.$createTitle()}},computed:{fontRepository(){return this.repositoryFactory.create("areanet_google_font")},columns(){return[{property:"name",dataIndex:"name",label:this.$t("areanet-google-fonts-loader.list.name"),routerLink:"areanet.google.fonts.loader.detail",allowResize:!0},{property:"active",dataIndex:"active",label:this.$t("areanet-google-fonts-loader.list.active"),allowResize:!0,inlineEdit:"boolean"},{property:"salesChannel",dataIndex:"salesChannel",label:this.$t("areanet-google-fonts-loader.list.salesChannel")},{property:"downloaded",dataIndex:"downloaded",label:this.$t("areanet-google-fonts-loader.list.downloaded"),scopedSlots:{default:"downloadedStatus"}}]}},methods:{async getList(){this.isLoading=!0;let e=new i(this.page,this.limit);return e.addAssociation("salesChannels.salesChannel"),this.fontRepository.search(e).then(e=>{this.items=e,this.total=e.total,this.isLoading=!1})}}}),r(546);let{Component:s,State:l,Mixin:d}=Shopware,{Criteria:c}=Shopware.Data,{mapPropertyErrors:g}=Shopware.Component.getComponentHelper();Shopware.Utils,s.register("areanet-google-fonts-loader-detail",{template:'{% block an_googlepageloader_detail %}\n    <sw-page class="areanet-google-fonts-loader-detail">\n        <template #smart-bar-actions>\n            <sw-button :routerLink="{ name: \'areanet.google.fonts.loader.list\' }">\n                {{ $tc(\'areanet-google-fonts-loader.detail.cancelButtonText\') }}\n            </sw-button>\n\n            <sw-button-process\n                    :isLoading="isLoading"\n                    :processSuccess="processSuccess"\n                    variant="primary"\n                    @process-finish="saveFinish"\n                    @click="onClickSave">\n                {{ $tc(\'areanet-google-fonts-loader.detail.saveButtonText\') }}\n            </sw-button-process>\n        </template>\n        <template #content>\n            <sw-card-view>\n                <sw-card\n                    :v-if="font"\n                    :isLoading="isLoading"\n                    position-identifier="areanet-google-fonts-loader-form"\n                >\n                    <div class="areanet-google-fonts-loader-detail-general">\n                        <sw-text-field\n                            :label="$tc(\'areanet-google-fonts-loader.detail.name\')"\n                            :helpText="$tc(\'areanet-google-fonts-loader.detail.nameHelp\')"\n                             v-model:value="font.name">\n                        </sw-text-field>\n\n                        <google-font-sales-channel-select\n                                class="google_font-conditions__sales-channel-selection"\n                                :font="font"\n                                :entity-collection="font.salesChannels"\n                                :label="$tc(\'areanet-google-fonts-loader.detail.salesChannel\')"\n                        />\n\n                        <sw-checkbox-field\n                            :label="$tc(\'areanet-google-fonts-loader.detail.active\')"\n                            v-model:value="font.active">\n                        </sw-checkbox-field>\n                    </div>\n                </sw-card>\n            </sw-card-view>\n        </template>\n    </sw-page>\n{% endblock %}',inject:["repositoryFactory","systemConfigApiService","customApiService"],mixins:[d.getByName("notification"),d.getByName("placeholder")],props:{fontId:{type:String,required:!1,default(){return null}}},shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onAbortButtonClick"},data(){return{font:[],processSuccess:!1,identifier:"",isLoading:!1}},created(){this.createdComponent()},watch:{fontId(){this.createdComponent()}},computed:{fontRepository(){return this.repositoryFactory.create("areanet_google_font")},fontCriteria(){return new c(1,1).addAssociation("salesChannels")}},methods:{async createdComponent(){this.isCreateMode&&(Shopware.Context.api.languageId!==Shopware.Context.api.systemLanguageId&&Shopware.State.commit("context/setApiLanguageId",Shopware.Context.api.languageId),Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault")),await Promise.all([this.getFont()]),this.isLoading=!1},async getFont(){this.fontRepository.get(this.$route.params.id,Shopware.Context.api,this.fontCriteria).then(e=>{this.font=e})},onClickSave(){this.isLoading=!0,this.fontRepository.save(this.font,Shopware.Context.api).then(()=>{this.getFont(),this.isLoading=!1,this.processSuccess=!0,this.loadFont(this.font.id),this.createNotificationSuccess({title:this.$t("areanet-google-fonts-loader.notification.successTitle"),message:this.$tc("areanet-google-fonts-loader.notification.success")})}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:e})})},saveFinish(){this.processSuccess=!1},async loadFont(e){if(!0!==this.font.downloaded&&this.font.active){let t=(await this.systemConfigApiService.getValues("AreanetGoogleFontsLoader.config"))["AreanetGoogleFontsLoader.config.googleAPIKey"];if(t){let o=document.createElement("script");o.src="https://apis.google.com/js/api.js",o.async=!0,o.onload=()=>{gapi.load("client",()=>{gapi.client.setApiKey(t),gapi.client.load("https://www.googleapis.com/discovery/v1/apis/webfonts/v1/rest").then(()=>{gapi.client.webfonts.webfonts.list({capability:["WOFF2","CAPABILITY_UNSPECIFIED"],family:[this.font.name],subset:"latin-ext"}).then(async t=>{if(t.result.items.length){if(t.result.items.length){let o=await this.customApiService.downloadFont(t.result.items,e);200===o.status?this.createNotificationSuccess({title:this.$t("areanet-google-fonts-loader.notification.successTitle"),message:this.$tc("areanet-google-fonts-loader.notification.successDownload")}):this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:o.message})}else this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:this.$t("areanet-google-fonts-loader.notification.notFound")})}else this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:this.$t("areanet-google-fonts-loader.notification.notFound")})},e=>{"Requested entity was not found."===e.result.error.message?this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:this.$t("areanet-google-fonts-loader.notification.notFound")}):this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:e})})},e=>{this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:e})})})},document.head.appendChild(o)}else this.createNotificationError({title:this.$t("areanet-google-fonts-loader.notification.errorTitle"),message:this.$t("areanet-google-fonts-loader.notification.noApiKey")})}}}}),r(266),Shopware.Component.register("google-font-sales-channel-select",()=>r.e(613).then(r.bind(r,613))),Shopware.Module.register("areanet-google-fonts-loader",{type:"plugin",name:"areanet-google-fonts-loader",title:"areanet-google-fonts-loader.general.mainMenuItemGeneral",description:"sw-property.general.descriptionTextModule",color:"#ff68b4",routes:{list:{component:"areanet-google-fonts-loader-list",path:"list"},detail:{component:"areanet-google-fonts-loader-detail",path:"detail/:id",meta:{parentPath:"areanet.google.fonts.loader.list"}},create:{component:"areanet-google-fonts-loader-create",path:"create",meta:{parentPath:"areanet.google.fonts.loader.list"}}},navigation:[{label:"areanet-google-fonts-loader.general.mainMenuItemGeneral",color:"#ff68b4",path:"areanet.google.fonts.loader.list",parent:"sw-content",position:400}]})}()})();