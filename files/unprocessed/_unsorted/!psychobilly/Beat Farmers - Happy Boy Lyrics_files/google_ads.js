(function(){var e=true,g=null,h=false,i=navigator,aa=undefined,ba=encodeURIComponent,k=parseInt,l=document,m=Math;function ca(a,b){return a.toString=b}function da(a,b){return a.width=b}function ea(a,b){return a.height=b}
var fa="appendChild",o="push",p="toString",r="valueOf",s="length",ga="plugins",t="prototype",v="width",ha="round",w="slice",x="replace",y="document",z="split",ia="floor",ja="cookie",ka="charAt",A="userAgent",B="screen",C="indexOf",la="body",ma="domain",E="write",na="call",oa="opera",pa="random",qa="createElement",F="getParameter",ra="referrer",G="substring",sa="contentWindow",H="height",I="getTime",J="join",ta="getElementsByTagName",ua="toLowerCase",L=this,va=function(a,b,c){a=a[z](".");c=c||L;!(a[0]in
c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[s]&&(d=a.shift());)if(!a[s]&&b!==aa)c[d]=b;else c=c[d]?c[d]:(c[d]={})};m[ia](m[pa]()*2147483648)[p](36);
var wa=function(a,b){var c=b||L;if(arguments[s]>2){var d=Array[t][w][na](arguments,2);return function(){var f=Array[t][w][na](arguments);Array[t].unshift.apply(f,d);return a.apply(c,f)}}else return function(){return a.apply(c,arguments)}},ya=Date.now||function(){return(new Date)[I]()},M=function(a,b,c){va(a,b,c)},za=function(a,b){function c(){}c.prototype=b[t];a.sa=b[t];a.prototype=new c};var Aa=function(a,b){da(this,a);ea(this,b)};ca(Aa[t],function(){return"("+this[v]+" x "+this[H]+")"});Aa[t].floor=function(){da(this,m[ia](this[v]));ea(this,m[ia](this[H]));return this};Aa[t].round=function(){da(this,m[ha](this[v]));ea(this,m[ha](this[H]));return this};var Ba=function(a){return a[x](/^[\s\xa0]+|[\s\xa0]+$/g,"")},Fa=function(a){if(Ca(a,"&"))return"document"in L&&!Ca(a,"<")?Da(a):Ea(a);return a},Da=function(a){var b=L[y][qa]("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},Ea=function(a){return a[x](/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c[ka](0)=="#"){c=Number("0"+c.substr(1));if(!isNaN(c))return String.fromCharCode(c)}return b}})},
Ca=function(a,b){return a[C](b)!=-1},Ha=function(a,b){var c=0;a=Ba(String(a))[z](".");b=Ba(String(b))[z](".");for(var d=m.max(a[s],b[s]),f=0;c==0&&f<d;f++){var j=a[f]||"",n=b[f]||"",q=new RegExp("(\\d*)(\\D*)","g"),u=new RegExp("(\\d*)(\\D*)","g");do{var K=q.exec(j)||["","",""],D=u.exec(n)||["","",""];if(K[0][s]==0&&D[0][s]==0)break;c=K[1][s]==0?0:k(K[1],10);var xa=D[1][s]==0?0:k(D[1],10);c=Ga(c,xa)||Ga(K[2][s]==0,D[2][s]==0)||Ga(K[2],D[2])}while(c==0)}return c},Ga=function(a,b){if(a<b)return-1;else if(a>
b)return 1;return 0};ya();var Ia,Ja,Ka,La,Ma,Na,Oa,Pa,Qa,Ra,Sa=function(){return L.navigator?L.navigator[A]:g},Ta=function(){return L.navigator},Ua=function(){Na=Ma=La=Ka=Ja=Ia=h;var a;if(a=Sa()){var b=Ta();Ia=a[C]("Opera")==0;Ja=!Ia&&a[C]("MSIE")!=-1;La=(Ka=!Ia&&a[C]("WebKit")!=-1)&&a[C]("Mobile")!=-1;Na=(Ma=!Ia&&!Ka&&b.product=="Gecko")&&b.vendor=="Camino"}};Ua();
var Va=Ia,Wa=Ja,Xa=Ma,Ya=Ka,Za=La,$a=function(){var a=Ta();return a&&a.platform||""},ab=$a(),bb=function(){Oa=Ca(ab,"Mac");Pa=Ca(ab,"Win");Qa=Ca(ab,"Linux");Ra=!!Ta()&&Ca(Ta().appVersion||"","X11")};bb();var cb=function(){var a="",b;if(Va&&L[oa]){a=L[oa].version;a=typeof a=="function"?a():a}else{if(Xa)b=/rv\:([^\);]+)(\)|;)/;else if(Wa)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Ya)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Sa()))?a[1]:""}return a},db=cb(),eb={},fb=function(a){return eb[a]||(eb[a]=Ha(db,a)>=0)};var gb=function(a){var b=a[y];if(Ya&&!fb("500")&&!Za){if(typeof a.innerHeight=="undefined")a=window;b=a.innerHeight;var c=a[y].documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new Aa(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!Va||Va&&fb("9.50"))?b.documentElement:b[la];return new Aa(a.clientWidth,a.clientHeight)};Ya&&fb("522");function hb(a,b){a=parseFloat(a);return isNaN(a)||a>1||a<0?b:a}function ib(a,b){if(a=="true")return e;if(a=="false")return h;return b}function jb(a,b){var c=/^([\w-]+\.)+[\w-]{2,}(\:[0-9]+)?$/;return c.test(a)?a:b};var kb="pagead2.googlesyndication.com",lb="googleads.g.doubleclick.net",mb="pubads.g.doubleclick.net",nb="securepubads.g.doubleclick.net",pb="partner.googleadservices.com",qb=jb("pagead2.googlesyndication.com",kb);jb("googleads.g.doubleclick.net",lb);jb("pagead2.googlesyndication.com",kb);var rb=jb("pubads.g.doubleclick.net",mb),sb=jb("partner.googleadservices.com",pb),tb=jb("securepubads.g.doubleclick.net",nb);function N(a){return typeof ba=="function"?ba(a):escape(a)}function ub(a,b,c){var d=l[qa]("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var f=l[ta]("head")[0];if(!f)return h;window.setTimeout(function(){f[fa](d)},0);return e}function vb(a){if(a in wb)return wb[a];return wb[a]=i[A][ua]()[C](a)!=-1}var wb={};function xb(){return vb("msie")&&!window[oa]}
function yb(){if(i[ga]&&i.mimeTypes[s]){var a=i[ga]["Shockwave Flash"];if(a&&a.description)return a.description[x](/([a-zA-Z]|\s)+/,"")[x](/(\s)+r/,".")}else if(i[A]&&i[A][C]("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=g}return a[p]()}else if(xb()){b=g;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(f){if(a==
6)return a[p]()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(j){}}if(b){a=b.GetVariable("$version")[z](" ")[1];return a[x](/,/g,".")}}return"0"}function zb(a,b){var c=m[pa]();if(c<b){b=m[ia](c/b*a[s]);return a[b]}return""}
var Ab=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history[s];a.u_java=i.javaEnabled();if(window[B]){a.u_h=window[B][H];a.u_w=window[B][v];a.u_ah=window[B].availHeight;a.u_aw=window[B].availWidth;a.u_cd=window[B].colorDepth}if(i[ga])a.u_nplug=i[ga][s];if(i.mimeTypes)a.u_nmime=i.mimeTypes[s]},Bb=function(a){if(a[la])try{return gb(window)}catch(b){return new Aa(-12245933,-12245933)}else return new Aa(-1,-1)};var Cb={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",google_hints:"hints",
google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},Db={google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",
google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},Eb={google_only_pyv_ads:"pyv",
google_with_pyv_ads:"withpyv"};var Fb=l,O=i,P=window;
function Hb(){var a=Fb[ja],b=m[ha]((new Date)[I]()/1000),c=P.google_analytics_domain_name;c=typeof c=="undefined"?Ib("auto"):Ib(c);var d=a[C]("__utma="+c+".")>-1,f=a[C]("__utmb="+c)>-1,j=a[C]("__utmc="+c)>-1,n={},q=!!P&&!!P.gaGlobal;if(d){a=a[z]("__utma="+c+".")[1][z](";")[0][z](".");n.sid=f&&j?a[3]+"":q&&P.gaGlobal.sid?P.gaGlobal.sid:b+"";n.vid=a[0]+"."+a[1];n.from_cookie=e}else{n.sid=q&&P.gaGlobal.sid?P.gaGlobal.sid:b+"";n.vid=q&&P.gaGlobal.vid?P.gaGlobal.vid:(m[ha](m[pa]()*2147483647)^Jb()&2147483647)+
"."+b;n.from_cookie=h}n.dh=c;n.hid=q&&P.gaGlobal.hid?P.gaGlobal.hid:m[ha](m[pa]()*2147483647);return P.gaGlobal=n}function Jb(){var a=Fb[ja]?Fb[ja]:"",b=P.history[s],c,d=[O.appName,O.version,O.language?O.language:O.browserLanguage,O.platform,O[A],O.javaEnabled()?1:0][J]("");if(P[B])d+=P[B][v]+"x"+P[B][H]+P[B].colorDepth;else if(P.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c[B][v]+"x"+c[B][H]}d+=a;d+=Fb[ra]?Fb[ra]:"";for(a=d[s];b>0;)d+=b--^a++;return Kb(d)}
function Kb(a){var b=1,c=0,d;if(!(a==aa||a=="")){b=0;for(d=a[s]-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function Ib(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=Fb[ma];if("www."==a[G](0,4))a=a[G](4,a[s])}return Kb(a[ua]())};ib("false",h);ib("false",h);ib("false",h);var Lb=ib("false",h),Mb=window;function Nb(a,b,c,d){this._value_=a;this._expires_=b;this._path_=c;this._domain_=d;if(!this._path_)this._path_="/";if(this._domain_==g)this._domain_=l[ma]}ca(Nb[t],function(){return"[GA_GoogleCookieInfo: value="+this._value_+", expires="+this._expires_+", path="+this._path_+"]"});function Ob(){this.v=Pb(this);this.N=h;if(!this.v)this.N=Qb(this)}Ob[t].M="__gads=";Ob[t].B="GoogleAdServingTest=";Ob[t].setCookieInfo=function(a){this.q=a._cookies_[0];if(this.q!=g){this.v=this.q._value_;Rb(this)}};
var Sb=function(a,b){a=(new Date)[r]();var c=new Date;c.setTime(a+b);return c},Tb=function(a){var b=15552000000;a=Sb(a,b);b="ID=12345:T="+b;var c="/",d=l[ma];return new Nb(b,a[r](),c,d)},Ub="http://"+sb+"/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo",Vb=function(a,b){if(!(a.v||!a.N)){a="script";var c=l[ma];b=Ub+"&client="+N(b)+"&domain="+N(c);l[E]("<"+a+' src="'+b+'"></'+a+">")}},Qb=function(a){l.cookie=a.B+"Good";var b=Wb(a,a.B);if(b=b=="Good"){var c=Sb(a,-1);l.cookie=a.B+"; expires="+
c.toGMTString()}return b},Pb=function(a){return a=Wb(a,a.M)},Wb=function(a,b){a=l[ja];var c=a[C](b),d="";if(c!=-1){b=c+b[s];c=a[C](";",b);if(c==-1)c=a[s];d=a[G](b,c)}return d},Rb=function(a){if(a.q!=g)if(a.v){var b=new Date;b.setTime(1000*a.q._expires_);var c=a.q._domain_;a=a.M+a.v+"; expires="+b.toGMTString()+"; path="+a.q._path_+"; domain=."+c;l.cookie=a}};var Q=function(a){this.ga=a;this.T=[];this.S=0;this.G=[];this.aa=0;this.L=[];this.$=h;this.f=this.X="";this.Z=h},Xb=function(a,b,c){var d=a.ga[c],f=a.T;a.ga[c]=function(j){if(j&&j[s]>0){var n=j[s]>1?j[1].url:g;f[o]([b,Fa(j[0].url),n])}d(j)}},Yb=function(a){a.S++},Zb=function(a,b){a.G[o](b)},$b=function(a){if(!a.$){ub("http://"+qb+"/pagead/osd.js");a.$=e}},ac=function(a,b){if(a.S>0){var c=l[ta]("iframe");a=a.Z?"google_ads_iframe_":"google_ads_frame";for(var d=0;d<c[s];d++){var f=c.item(d);f.src&&f.name&&
f.name[C](a)==0&&b(f,f.src)}}},bc=function(a,b){a=a.T;if(a[s]>0)for(var c=l[ta]("a"),d=function(K,D){return K.innerHTML[C](D)>0},f=0;f<c[s];f++)for(var j=0;j<a[s];j++)if(c.item(f).href==a[j][1]){var n=c.item(f).parentNode;if(a[j][2])for(var q=n,u=0;u<4;u++){if(d(q,a[j][2])){n=q;break}q=q.parentNode}b(n,a[j][0]);a.splice(j,1);break}},dc=function(a,b){for(var c=0;c<a.G[s];c++){var d=a.G[c],f=cc(d);if(f)(f=l.getElementById("google_ads_div_"+f))&&b(f,d)}};
Q[t].Q=function(a){bc(this,a);dc(this,a);ac(this,a)};Q[t].setupOsd=function(a,b,c){this.aa=a;this.X=b;this.f=c};Q[t].getOsdMode=function(){return this.aa};Q[t].getEid=function(){return this.X};Q[t].getCorrelator=function(){return this.f};Q[t].R=function(){return this.T[s]+this.S+this.G[s]};Q[t].setValidAdBlockTypes=function(a){this.L=a};
Q[t].registerAdBlockByType=function(a,b,c){if(this.L[s]>0){for(var d=0;d<this.L[s];d++)if(this.L[d]==a){this.Z=c;if(a=="js")Xb(this,b,"google_ad_request_done");else if(a=="html")Yb(this);else a=="json_html"&&Zb(this,b)}$b(this)}};var cc=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a[s]==2)return a[1];return""},ec=function(){window.__google_ad_urls||(window.__google_ad_urls=new Q(window));return window.__google_ad_urls};M("Goog_AdSense_getAdAdapterInstance",ec);
M("Goog_AdSense_OsdAdapter",Q);M("Goog_AdSense_OsdAdapter.prototype.numBlocks",Q[t].R);M("Goog_AdSense_OsdAdapter.prototype.findBlocks",Q[t].Q);M("Goog_AdSense_OsdAdapter.prototype.getOsdMode",Q[t].getOsdMode);M("Goog_AdSense_OsdAdapter.prototype.getEid",Q[t].getEid);M("Goog_AdSense_OsdAdapter.prototype.getCorrelator",Q[t].getCorrelator);M("Goog_AdSense_OsdAdapter.prototype.setValidAdBlockTypes",Q.setValidAdBlockTypes);M("Goog_AdSense_OsdAdapter.prototype.setupOsd",Q[t].setupOsd);
M("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",Q[t].registerAdBlockByType);function fc(a,b){try{return a.top[y].URL==b.URL}catch(c){}return h};var gc=function(a){this.fa=(this.O=a&&a.GA_jstiming)&&this.O.load};gc[t].tick=function(a,b){this.fa.tick(a,b)};gc[t].report=function(a){var b={};b.e=a;this.O.report(this.fa,b)};var hc=function(){};za(hc,gc);hc[t].tick=function(){};hc[t].report=function(){};var ic=function(a,b,c,d){if(c<=4){b=b+"_"+c;d?a.tick(b,d+"_"+c):a.tick(b)}};var R=Mb&&m[pa]()<hb("0.005",0.0010)&&Mb.GA_jstiming&&Mb.GA_jstiming.load&&Mb.location.protocol=="http:"?new gc(Mb):new hc(Mb);R.tick("js_load");function S(a){return typeof a=="function"}function jc(a,b){if(typeof a!="string"||a[s]==0)return g;else if(typeof b!="string"||b[s]==0)return g;return kc(T(),a,b)}M("GA_googleAddSlot",jc);function _GA_googleInitializeAdEngine(a){if(!U()){lc(mc(a));nc(U())}}M("_GA_googleInitializeAdEngine",_GA_googleInitializeAdEngine);
function oc(){T().ia=e;_GA_googleInitializeAdEngine(g);var a=U().g;a=="sync"||a=="sync_sra"?U().j():pc(T())}M("GA_googleFetchAds",oc);function qc(){_GA_googleInitializeAdEngine("iframe");Vb(window._GA_googleCookieHelper,window.GS_googleGetIdsForAdSenseService())}M("GA_googleUseIframeRendering",qc);function rc(){var a=window.GA_googleEnv[F]("google_ad_impl");a==g&&window.GA_googleEnv.setParameter("google_ad_impl","sync_sra")}M("GA_googleUseSyncSRARendering",rc);
function sc(a){if(U()!=g)if(U().g!="iframe"){if(tc(U()))if(U().K){var b=uc(T(),a);if(b==g)return;else if(!b._enabled_)return}else return;else if(vc(U(),a)!=g&&!U().l)return;U().n(a)}}M("GA_googleFillSlot",sc);function wc(a,b,c,d){a=a||"";b=b||"";c=c||0;d=d||0;if(U()!=g)if(U().g=="iframe"){kc(T(),a,b);a=new xc(c,d,h,e);yc(T(),b,a);U().n(b)}}M("GA_googleFillSlotWithSize",wc);function zc(){Ac(new Bc(Cb));lc(g)}M("GA_googleResetAll",zc);window.google_noFetch=h;function Cc(){window.google_noFetch=e}
M("GA_googleNoFetch",Cc);function Dc(){window.google_delayFetch=e}M("GA_googleDelayFetch",Dc);function xc(a,b,c,d){this._width_=a;this._height_=b;this._expandable_=c;this._enabled_=d}ca(xc[t],function(){return"[GA_GoogleAdSlotAttr: width="+this._width_+", height="+this._height_+", expandable="+this._expandable_+", enabled="+this._enabled_+"]"});
function Ec(a){var b={};a=a[z]("?");a=a[a[s]-1][z]("&");for(var c=0;c<a[s];c++){var d=a[c][z]("=");if(d[0])try{b[d[0][ua]()]=d[s]>1?window.decodeURIComponent?decodeURIComponent(d[1][x](Fc," ")):unescape(d[1]):""}catch(f){}}return b}function Gc(a){a=a||l.URL;this.da=Ec(a)}Gc[t].getParameter=function(a){return a==g?g:this.da[a]};Gc[t].setParameter=function(a,b){this.da[a]=b};var Hc=function(){if(!Lb)return"http://"+rb;return"https://"+tb};
function Ic(a){return a[x](/&/g,"&amp;")[x](/</g,"&lt;")[x](/>/g,"&gt;")[x](/\"/g,"&quot;")}function Jc(){this.D=g;this.ea=h;this.ra=(new Date)[r]()}
var Lc=function(a,b){if(a.D==g)if(!a.ea){a.D=window.open("","GoogleAdCapture","width=1100, height=1400, status=no, resizable=yes, scrollbars=yes,menubar=yes, toolbar=yes");if(a.D){var c=a.D[y],d=[];d[o]('<html>\n<head>\n<title>Google Ad Capture Window</title>\n<script>function displayTime(id, start){var delta=(new Date()).valueOf() - start;document.getElementById(id).innerHTML=""+delta;}var pageStartTime = (new Date()).valueOf();var slotStartTime = 0;window.onload=function(){displayTime("total", pageStartTime);};<\/script></head>\n<body>\n');d[o]("<p>Google Ad Capture Window</p>");
for(var f in b)S(b[f])||d[o](Kc(a,f,b[f]));d[o]("<p>Time blocked rendering ads (ms): <label id='blocked'></label>");d[o]("<script>displayTime('blocked', pageStartTime);<\/script>");d[o]("<p>Total Page Load Time (ms): <label id='total'></label>");d[o]("</body>\n</html>");a=d[J]("\n");(b=window.GA_googleEnv[F]("google_capture_norender")!=g)?c[E](Ic(a)):c[E](a);c.close()}else a.ea=e}},Kc=function(a,b,c){a="<script>slotStartTime = (new Date()).valueOf();<\/script>";var d="<p>Slot "+b+"</p>";c=c==g||c._html_==
g?"No ad":c._html_;var f="<p>Slot Time (ms): <label id='"+b+"'></label>";b='<script>displayTime("'+b+'", slotStartTime);<\/script>';return a+d+"\n"+c+"\n"+f+b};function Mc(a){this.d={};this.C=a}var Nc=function(a,b,c,d){if(b){c||(c="");if(b=="google_gl")b="google_country";else if(b=="google_region")b="google_section";if(b in a.C)if((d=typeof d=="undefined"||d)||!a.d[b])a.d[b]=c}},Oc=function(a,b){for(var c in b.d)S(b.d[c])||a.d[c]||(a.d[c]=b.d[c])};Mc[t].getAttribute=function(a){return this.d[a]};
Mc[t].i=function(){var a=[];for(var b in this.d)if(!S(this.d[b])){var c=Cb[b]||Db[b]||Eb[b]||g,d=this.d[b];c&&d&&a[o](c+"="+N(d))}return a[J]("&")};
var Qc=function(a,b,c,d){a=Pc(a,b,c,d);b=[];a[0]&&a[0][s]>0&&b[o](a[0][J]("&"));a[1]&&a[1][s]>0&&b[o]("sps="+a[1][J]("|"));return b[J]("&")},Pc=function(a,b,c,d){var f=[],j=[];b=b.d;for(var n in d)if(!S(n)){var q=d[n];if(q){var u="";if(b[n]!=g)u=N(b[n]);var K=[],D=-1,xa=-1;for(var ob in a)if(!S(a[ob])){++D;if(c[ob]==g)K[o]("");else{var Gb=c[ob].d;if(Gb[n]!=g){K[o](N(N(Gb[n])));xa=D}else K[o]("")}}if(xa>=0){D=N(u);u=[];u[o](D);for(D=0;D<=xa;++D)u[o](K[D]);j[o](q+","+u[J](","))}else u&&f[o](q+"="+u)}}a=
[];a[o](f);a[o](j);return a};function Rc(a,b){this.J=a;this.s=b;this.V=0;this.oa=this.P=this.U=h;this.ma=this.na=this.Y=this.ja=g}var Sc=function(a){a.P=e;a.ja=(new Date)[r]()},Tc=function(a){a.Y=(new Date)[r]()},Uc=function(a){a.oa=e;a.na=(new Date)[r]()},Vc=function(a){a.ma=(new Date)[r]()};ca(Rc[t],function(){return"[GA_GoogleAdSlot: pubid="+this.J+", name="+this.s+", loaded="+this.U+", tries="+this.V+"]"});
function Bc(a){this.a={};this.c=[];this.r={};this.C=a;this.ca=new Mc(this.C);this.A={};this.ia=h;this.o=g}
var kc=function(a,b,c){b=new Rc(b,c);return a.a[b.s]=b},Wc=function(a,b){var c=[];for(var d in a.a)if(!S(a.a[d])){if(b){var f=uc(a,d);if(f==g||!f._enabled_)continue}f=a.a[d];f.P||c[o](f)}return c},Xc=function(a,b){return Wc(a,b)[s]},Yc=function(a){var b=[];for(var c in a.a){var d=a.a[c];S(d)||d.P&&d.Y==g&&b[o](c)}return b},Zc=function(a){var b=0;for(var c in a.a)if(!S(a.a[c])){var d=uc(a,c);d!=g&&d._enabled_&&b++}return b},$c=function(a){for(var b in a.a)if(!S(a.a[b])){var c=a.a[b];Sc(c)}},ad=function(a,
b){a=a.a[b];Sc(a)},bd=function(a,b){a=a.a[b];Tc(a)},cd=function(a,b){a=a.a[b];Uc(a)},dd=function(a,b){b=a.a[b];Vc(b);ic(R,"ga_render",a.c[s],"ga_srt")},ed=function(a){var b=0;for(var c in a.a)S(a.a[c])||b++;return b};ca(Bc[t],function(){var a="[AdData:",b=[];for(var c in this.a)S(this.a[c])||b[o](this.a[c][p]());for(var d in this.r)S(this.r[d])||b[o]("["+d+","+this.r[d]+"]");a+=b[J]();a+="]";return a});
var fd=function(a,b){return a.a[b]},gd=function(a,b,c){if(!(b==g||b[s]==0)){if(c==g||c[s]==0)c="";var d=a.r[b];a.r[b]=d==g?c:d+","+c}};function hd(a,b){gd(T(),a,b)}M("GA_googleAddAttr",hd);var id=function(a,b,c){Nc(a.ca,b,c)};function jd(a,b){id(T(),a,b)}M("GA_googleAddAdSensePageAttr",jd);var kd=function(a){return a.ca},ld=function(a,b,c,d){if(!(b==g||b[s]==0)){if(U()==g||U().g!="iframe"){var f=a.a[b];if(f==g)return}f=a.A[b];if(f==g)a.A[b]=new Mc(a.C);Nc(a.A[b],c,d)}};
function md(a,b,c){ld(T(),a,b,c)}M("GA_googleAddAdSenseSlotAttr",md);var nd=function(a,b){return a.A[b]},od=function(){var a=Hc();return a+"/gampad/slotdata.js?callback=GA_googleSetAdSlotAttributes"},pc=function(a){if(a.o!=g)U().j();else{var b=[];for(var c in a.a)S(a.a[c])||b[o](c);a=window.GS_googleGetIdsForAdSenseService();b=od(window)+"&client="+escape(a)+"&page_slots="+escape(b[J]());l[E]("<script src = '"+b+"'><\/script>")}};Bc[t].setAdSlotAttributes=function(a){this.o=a;U().K=e;U().j()};
function pd(a){T().setAdSlotAttributes(a)}M("GA_googleSetAdSlotAttributes",pd);var yc=function(a,b,c){if(a.o==g)a.o={};a.o[b]=c;U().K=e},uc=function(a,b){return a.o!=g?a.o[b]:g};function qd(a,b){this.ta=a;this.ha=b}function rd(a,b){this.AdSlotContent=qd;this.AdSlotConent(rd.HTML_TYPE,a);this._html_=b}ca(rd[t],function(){return"[GA_HTMLAdSlotContent expandable="+this.ha+", html="+this._html_+"]"});rd.prototype=new qd(rd.HTML_TYPE,h);
function sd(a,b,c){if(!c||c<0||c>1)c=0;this.pa=m[pa]()<c;this.ka=a;this.W=b+"/pagead/gen_204?id="+N(a);this.la=[]}var V=function(a,b,c){if(b&&b.match(/^\w+$/)&&c)a.W+="&"+b+"="+N(c)},td=function(a){var b=T();for(var c in b.a){var d=b.a[c];if(!S(d)&&d.J!=g){V(a,"pub_id",d.J);break}}V(a,"nslots",ed(b)[p]());V(a,"pub_url",l.URL);V(a,"pub_ref",l[ra])},ud=function(a){if(!a.pa||!a.ka||!a.W)return h;var b=new Image;b.src=a.W;a.la[o](b);return e};
function W(a){this.h=g;this.o={};this.p=this.b="";this.l=a;this.m=this.I=this.t=h;this.g="sync";this.qa=Cb;this.u=e;this.K=h}
var nc=function(a){a.t=window.GA_googleEnv[F]("google_nofetch")!=g||window.google_noFetch;a.I=window.GA_googleEnv[F]("google_norender")!=g;a.m=window.GA_googleEnv[F]("google_capture")!=g||window.GA_googleEnv[F]("google_capture_norender")!=g;if(a.m)a.I=e;vd(a,window);a.b=a.p;var b=wa(a.ba,a);wd(a,window,b)},wd=function(a,b,c){if(b.attachEvent){b.attachEvent("onload",c);return e}if(b.addEventListener){b.addEventListener("load",c,h);return e}return h};
W[t].F=function(){this.m&&Lc(window.GA_googleAdCapture,this.h)};
var xd=function(a){if(a.g=="sync_sra"){var b=T(),c=ed(b);b=b.c[s];if(c!=b){a.H=new sd("sra_mismatch",Hc(),hb("0.001",0.0010));V(a.H,"correlator",a.f);V(a.H,"fslots",b[p]());td(a.H);ud(a.H)}}},yd=function(a){R.tick("ga_onload");R.report(a.g)},zd=function(a){var b=Yc(T());if(b[s]>0){a.z=new sd("missing_cb",Hc(),hb("0.01",0.0010));V(a.z,"pending",b[J]());V(a.z,"correlator",a.f);V(a.z,"impl",a.g);td(a.z);ud(a.z)}};
W[t].ba=function(){yd(this);this.F();xd(this);zd(this)};var vd=function(a){var b=window.GA_googleEnv[F]("google_ad_url");if(b==g||b[s]==0)a.p=Hc()+"/gampad/ads?";else{if(b[ka](b[s]-1)!="?")b+="?";a.p=b}};W[t].k=function(){};
var vc=function(a,b){return a.h!=g?a.h[b]:g},Ad=function(){var a=i[A],b=a[C]("MSIE ");return b==-1?0:parseFloat(a[G](b+5,a[C](";",b)))},Fc=/\+/g,Bd=function(a,b){b=b[ua]();if(b[G](0,3)!="ca-")b="ca-"+b;return b},Y=function(a,b,c){c!=g&&X(a,b,N(c[p]()))},X=function(a,b,c){if(c!=g&&c!="")a.b+=a.b[ka](a.b[s]-1)!="?"?"&"+b+"="+c:b+"="+c},Cd=function(a,b){for(var c=Wc(T(),a.u),d=[],f=[],j=[],n=c[s],q=0;q<n;q++){var u=c[q];j[o](u.s);if(!(b!=g&&b!=u.s)){d[o](u.s);f[o](Bd(a,u.J))}}Y(a,"client",f[0]);if(a.l)j[s]>
0&&Y(a,"page_slots",j[J]());else{Y(a,"slotname",d[J]());T().c[s]>0&&Y(a,"page_slots",T().c[J]())}},Dd=function(a,b,c){if(c!=g){a=b.lastIndexOf("?");a=b[C]("google_preview=",a);c=b[C]("&",a);if(c==-1){c=b[s]-1;a-=1}return b[G](0,a)+b[G](c+1,b[s])}return b},Ed=function(a,b,c){if(fc(b,c))return c.URL;return c[ra]},Gd=function(a,b,c){if(Fd(a,b,c)!=c.URL)return c[ma];return""},Fd=function(a,b,c){var d=kd(T()).getAttribute("google_page_url");if(d)return d;return Ed(a,b,c)},Id=function(a,b,c,d){Y(a,"url",
Dd(a,Fd(a,window,l),window.GA_googleEnv[F]("google_preview")));Y(a,"ref",l[ra]);Y(a,"lmt",(Date.parse(l.lastModified)/1000)[p]());X(a,"dt",b[I]());if(l[la]){b=l[la].scrollHeight;var f=l[la].clientHeight;f&&b&&Y(a,"cc",m[ha](f*100/b)[p]())}if(b=Bb(l)){Y(a,"biw",b[v]);Y(a,"bih",b[H])}b=Hd(window);Y(a,"ifi",b);b=window.GA_googleEnv[F]("deb");b!=g&&Y(a,"deb",b);b=window.GA_googleEnv[F]("haonly");b!=g&&Y(a,"haonly",b);b=kd(T());i[A][C]("MSIE ")>0&&Nc(b,"google_encoding",l.charset,h);f="";if(d)f=Qc(T().a,
b,T().A,a.qa);else{c=nd(T(),c);if(c==g)c=b;else Oc(c,b);f=c.i()}if(f)a.b+="&"+f},Jd=function(a,b,c){var d=T().r,f=[];for(var j in d)S(d[j])||f[o](N(j)+"="+N(d[j]));Y(a,"cust_params",f[J]("&"));if(b._GA_googleCookieHelper){Y(a,"cookie",b._GA_googleCookieHelper.v);b._GA_googleCookieHelper.N&&Y(a,"cookie_enabled","1")}(b=Gd(a,b,c))&&Y(a,"cdm",b)},Kd=function(a){Hb();var b=window;X(a,"ga_vid",b.gaGlobal.vid);X(a,"ga_sid",b.gaGlobal.sid);X(a,"ga_hid",b.gaGlobal.hid);X(a,"ga_fc",b.gaGlobal.from_cookie);
Y(a,"ga_wpids",b.google_analytics_uacct)},Ld=function(a,b){for(var c in b){var d=b[c];S(d)||X(a,c,d)}};
W[t].i=function(a){this.k();var b=Md(this.f[p]());X(this,"eid",b);b=new Date;Cd(this,a);Jd(this,window,l);window.GA_googleEnv[F]("google_preview")!=g&&X(this,"gct",window.GA_googleEnv[F]("google_preview"));Kd(this);Id(this,b,a,this.l);a={};Ab(a);Ld(this,a);X(this,"flash",yb());this.b=this.b[G](0,2000);this.b=this.b[x](/%\w?$/,"");a=this.g=="iframe"||this.g=="fallback"?"html":"json_html";ec().registerAdBlockByType(a,this.b,e);return this.b};
var tc=function(a){return a.u},Nd=function(a,b){a=b.getAttribute("id");return a=a.substr(18,a[s]-18)},Od=function(a,b,c,d,f,j,n){var q="google_ads_iframe_"+b,u=[];if(n){b="google_ads_div_"+b;u[o]("<div id=",b,">")}u[o]("<iframe id=",q," name=",q,' width="',f,'" height="',j,'" vspace="0" hspace="0" allowtransparency="true" ',"scrolling=",a.m?'"auto"':'"no"',' marginwidth="0" marginheight="0" frameborder="0" style="border:0px;"',' src="',Ic(c),'"');d!=g&&u[o](' onload="',d,'"');u[o]("></iframe>");n&&
u[o]("</div>");a=u[J]("");l[E](a)};W[t].createDOMIframe=function(a,b){var c=vc(this,b),d=c._width_,f=c._height_;c=c._html_;var j=l[qa]("iframe");j.id="google_ads_iframe_"+b;j.name="google_ads_iframe_"+b;da(j,d);ea(j,f);j.vspace=0;j.hspace=0;j.allowTransparency="true";j.scrolling="no";j.marginWidth=0;j.marginHeight=0;j.frameBorder=0;j.style.border=0;a=l.getElementById(a);a[fa](j);if(this.m){j[sa][y][E](Ic(c));j.scrolling="auto"}else j[sa][y][E](c);j[sa][y].close();dd(T(),b)};
function Pd(a,b){U().createDOMIframe(a,b)}M("GA_googleCreateDomIframe",Pd);
var Qd=function(){var a=[],b=l[ta]("base");if(b)for(var c=0,d=b[s];c<d;++c){var f=b[c],j=f.getAttribute("target");if(j){a[o]({baseElement:f,originalTagValue:j});f.removeAttribute("target")}}return a},Rd=function(a){if(a)for(var b=0,c=a[s];b<c;++b){var d=a[b];d.baseElement.setAttribute("target",d.originalTagValue)}},Sd=function(a){var b="http://"+qb+"/pagead/inject_object_div.js";if(k(Ad(),10)>6)return h;if(a[C](b)<0)return h;return e},Td=function(a,b,c){if(a.m)c=Ic(c);a=Qd();window.frames[b.name].contents=
c;b.src=Sd(c)?'javascript:document.write(window["contents"]);document.close();':'javascript:window["contents"]';Rd(a)},Ud=function(a,b,c){var d=Nd(a,b);b=b[sa]?b[sa][y]:b.contentDocument;if(b==g)if(l.implementation&&l.implementation.createDocument)b=l.implementation.createDocument("",d,g);else if(typeof ActiveXObject!="undefined")b=new ActiveXObject("Msxml.DOMDocument");else return;b.open("text/html","replace");a.m?b[E](Ic(c)):b[E](c);b.close()},Vd=function(a,b){var c=Nd(a,b),d=fd(T(),c);if(!d.U){d.U=
e;d=vc(a,c);var f=b.parentNode;if(d==g||d._html_==g)f.removeChild(b);else if(d._expandable_)f.innerHTML=d._html_;else d._is_3pas_?Td(a,b,d._html_):Ud(a,b,d._html_);dd(T(),c)}},Wd=function(a,b){var c="google_ads_div_"+b;c="<div id="+c+">";a=vc(a,b);if(a!=g){c+=a._html_;c+="\n</div>\n";l[E](c);dd(T(),b)}},Xd=function(a,b){a="google_ads_div_"+b;b="<div id="+a+">";b+="\n</div>\n";l[E](b);return a},Yd=function(a){if(!a.u)return e;if(Xc(T(),a.u)>0)return e;else if(Zc(T())==0)return h};
W[t].setAdContentsBySlot=function(a){ic(R,"ga_srt",T().c[s],"_ga_start");if(this.h==g){this.h=a;for(var b in a)S(a[b])||bd(T(),b)}else for(b in a)if(!S(a[b])){this.h[b]=a[b];bd(T(),b)}var c=h;for(b in a)if(!S(a[b])){var d=a[b];if(c){d._cookies_=[Tb(window._GA_googleCookieHelper)];c=h}d!=g&&d._cookies_!=g&&window._GA_googleCookieHelper.setCookieInfo(d)}};function Zd(a){U().setAdContentsBySlot(a)}M("GA_googleSetAdContentsBySlot",Zd);
function Z(a){W[na](this,a);this.u=h;this.f=(new Date)[I]();this.g=a?"sync_sra":"sync"}za(Z,W);Z[t].k=function(){this.b=this.p;Y(this,"correlator",this.f[p]());X(this,"output","json_html");X(this,"callback","GA_googleSetAdContentsBySlotForSync");this.l?X(this,"impl","ss"):X(this,"impl","s");var a=0,b=e;for(var c in this.h)if(!S(this.h[c])){var d=this.h[c];if(d._is_afc_==aa){b=h;break}else a=2*a+(d._is_afc_?1:0)}b&&X(this,"prev_afc",a);this.l||$d(this,T().c,this.h)};
var $d=function(a,b,c){if(b&&c){for(var d=[],f=[],j=b[s]-1,n=0;n<j;n++){var q=b[n];if((q=c[q])&&q._cids_&&q._a2ids_){d[o](q._cids_[0]);f[o](q._a2ids_[0])}else{d[o]("");f[o]("")}}if(d[s]>0){b=d[J](",");f=f[J](",");Y(a,"a2ids",f);Y(a,"cids",b)}}},ae=function(a,b){var c=T().a;c=c[b];if(c!=g)if(!a.t){a.i(c.s);ad(T(),b);l[E]("<script src = '"+a.b+"'><\/script>")}};
Z[t].setAdContentsBySlotForSync=function(a){this.setAdContentsBySlot(a);if(this.l)if(T().c[s]==1){a=T().c[0];be(this,a);return}for(var b in a)S(a[b])||be(this,b)};function ce(a){U().setAdContentsBySlotForSync(a)}M("GA_googleSetAdContentsBySlotForSync",ce);Z[t].j=function(){Yd(this)};var de=function(a){a.i(g);l[E]("<script src = '"+a.b+"'><\/script>");$c(T())};Z[t].n=function(a){T().c[o](a);ic(R,"_ga_start",T().c[s]);if(this.l)T().c[s]==1?de(this):be(this,a);else ae(this,a)};
var ee=function(a,b,c){if(b.google_js_backfill){a="script";c[E]("<"+a+' src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></'+a+">")}},be=function(a,b){fe(a,window,l,b)},fe=function(a,b,c,d){var f=fd(T(),d);if(f!=g){f=vc(a,d);cd(T(),d);if(f==g||f._empty_){ee(a,b,c,d);dd(T(),d)}else if(a.I&&!a.m)dd(T(),d);else if(f._snippet_&&!f._is_afc_&&!a.m)Wd(a,d);else if(i[A][C]("MSIE ")>0){c="GA_googleSyncAdSlotLoaded(this);";Od(a,d,"about:blank",c,f._width_,f._height_,e)}else{a=Xd(a,d);c[E]("<script>GA_googleCreateDomIframe('"+
a+"' ,'"+d+"');<\/script>")}}};Z[t].syncAdSlotLoaded=function(a){var b=Nd(this,a);fd(T(),b);Vd(this,a)};function ge(a){U().syncAdSlotLoaded(a)}M("GA_googleSyncAdSlotLoaded",ge);function $(a){W[na](this,a);this.f=(new Date)[I]();this.g="async"}za($,W);$[t].k=function(){this.b=this.p;he(this);Y(this,"correlator",this.f[p]());X(this,"output","json_html");X(this,"callback","GA_googleSetAdContentsBySlot");X(this,"impl","a")};
var he=function(a){a.delay=500;var b=window.GA_googleEnv[F]("google_async_delay");if(b!=g)a.delay=1000*b};$[t].j=function(){if(Yd(this))this.t||window.setTimeout("GA_googleReallyFetchAds();",this.INITIAL_ASYNC_DELAY)};$[t].reallyFetchAds=function(){if(Xc(T(),this.u)!=0){var a=l[ta]("head")[0];if(this.l){var b=l[qa]("script");b.src=this.i(g);a[fa](b);$c(T())}else{var c=T().a;for(var d in c)if(!S(c[d])){b=l[qa]("script");b.src=this.i(d);a[fa](b);ad(T(),d)}}}};function ie(){U().reallyFetchAds()}
M("GA_googleReallyFetchAds",ie);$[t].n=function(a){var b=fd(T(),a);if(b!=g){T().c[o](a);b="GA_googleAsyncAdSlotLoaded(this);";var c=uc(T(),a);Od(this,a,"about:blank",b,c._width_,c._height_,e)}};$[t].asyncAdSlotLoaded=function(a){var b=Nd(this,a);fd(T(),b);!this.t&&!this.I&&je(this,a)};function ke(a){U().asyncAdSlotLoaded(a)}M("GA_googleAsyncAdSlotLoaded",ke);
var je=function(a,b){var c=Nd(a,b),d=fd(T(),c);if(a.h==g||a.h[c]==g){if(!(d.V>30)){window.setTimeout(function(){je(U(),b)},a.delay);d.V++}}else Vd(a,b)};$[t].F=function(){};function le(a){W[na](this,a);this.f=(new Date)[I]();this.g="fallback"}za(le,W);le[t].k=function(){this.b=this.p;Y(this,"correlator",this.f[p]());X(this,"output","html");X(this,"impl","fb")};le[t].j=function(){Yd(this)};le[t].w=function(a){if(this.l){this.i(g);a=this.b+"&currentslot="+N(a)}else a=this.i(a);return a};
le[t].n=function(a){var b=uc(T(),a);if(b!=g){T().c[o](a);if(!this.t){var c=this.w(a);Od(this,a,c,g,b._width_,b._height_,e)}}};function me(a){W[na](this,a);this.f=(new Date)[I]();this.K=e;this.g="iframe"}za(me,W);me[t].k=function(){this.b=this.p;Y(this,"correlator",this.f[p]());X(this,"output","html");X(this,"impl","ifr")};me[t].j=function(){Yd(this)};me[t].w=function(a){if(this.l){this.i(g);a=this.b+"&currentslot="+N(a)}else a=this.i(a);return a};
me[t].n=function(a){var b=uc(T(),a);if(b!=g){T().c[o](a);if(!this.t){var c=this.w(a);Od(this,a,c,g,b._width_,b._height_,e)}}};
var ne=function(){if(xb()){var a=Ad();return a<=5}else if(vb("firefox")){var b=i[A][C]("Firefox")+8;a=k(i[A][ka](b),10);b=i[A][w](b);return a<1}else if(vb("safari")){b=i[A][C]("Safari")+7;b=i[A][w](b);a=k(b,10);return a<412}else if(window[oa]!=g){b=i[A][C]("Opera")+6;b=i[A][w](b);a=k(b,10);return a<9}else if(!xb()&&!vb("safari")&&vb("mozilla")){b=i[A][C]("Netscape")+9;b=i[A][w](b);a=k(b,10);return a<7}else return e},oe=function(){if(xb()){var a=Ad();return a>5}else if(vb("firefox")){a=i[A][C]("Firefox")+
8;var b=k(i[A][ka](a),10);i[A][w](a);return b>1}return h},pe=function(){if(ne())return"fallback";else if(window.google_delayFetch&&oe())return"async";return"sync"},mc=function(a){var b=g;if(typeof a!="undefined"&&a!=g)b=a;else{b=window.GA_googleEnv[F]("google_ad_impl");if(b==g)b=pe()}switch(b){case "async":return new $(h);case "sync":return new Z(h);case "sync_sra":return new Z(e);case "fallback":return new le(h);case "iframe":return new me(h);default:return new le(h)}},qe;
function T(){qe||(qe=new Bc(Cb));return qe}function Ac(a){delete qe;qe=a}var re;function U(){re||(re=g);return re}function lc(a){delete re;re=a}if(typeof window.GA_googleEnv=="undefined")window.GA_googleEnv=new Gc;if(typeof window.GA_googleAdCapture=="undefined")window.GA_googleAdCapture=new Jc;if(window._GA_googleCookieHelper==g)window._GA_googleCookieHelper=new Ob(g);function Hd(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]}
function Md(a){var b=ec(),c=se(window);if(c!=""){var d=b.getOsdMode();if(c=="36815006"){b.setValidAdBlockTypes(["html","json_html"]);d=1}b.setupOsd(d,c,a)}else c=b.getEid();return c}function se(a){if((a.google_unique_id||0)!=0)return"";return zb(["36815005","36815006"],hb("0.006",0))}R.tick("js_parse","js_load");R.tick("jl");})()