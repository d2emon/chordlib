cookie_days=3;var hidden_objects=[]; function overlay_init(){var a="",b="";b='<div id="rm_container"><div id="rm_overlay" style="position:absolute; left:0; top:0; width:3000px; height:3000px; text-align:center; z-index:10000; background-color:#000; opacity:0.75; filter:alpha(opacity=75);"></div><div id="rm_modal" style="position: absolute; color:#000; width:650px; height:200px; top:50%; margin-top:-175px; left:50%; margin-left:-325px; background-color:#FFF; border:10px solid #8B0000; text-align:center; z-index:10001; font-family:Arial,Sans-serif,Serif;">';b+= '<a href="#" style="position:absolute; top:5px; right:7px; font-size:11px; font-weight:700; color:#000; text-decoration:none; border-style: none;" onclick="rm_hide_overlay(); return false;">Close Box</a>';b+='<a href="'+rm_url+'" onclick="rm_hide_overlay();" target="_blank"><img src="/i/icon_ringtones.gif" border="0" alt="" id="rm_ring_icon" style="position:absolute; top:20px; left:300px;" /></a>';b+='<span id="rm_notice" style="position:absolute; bottom:5px; left:225px; font-size:10px; color:#404040;">This will not be displayed again for '+ cookie_days+" days.</span>";b+='<a id="rm_ad_text" onclick="rm_hide_overlay();" style="line-height: 30px; font-family:Verdana; font-weight:700; font-size:25px; color:#FF5000; text-decoration:underline; display:block; position:absolute; top:75px; left:20px; width:610px; border-style: none;" target="_blank" href="'+rm_url+'">Send &quot;';if(rm_songtitle!="")b+=rm_songtitle;else{b+=rm_artist;a="s"}b+="&quot; Ringtone"+a+" to your Cell</a></div></div>";if(showAd()&&b!=""){document.write(b);rm_show_overlay()}} overlay_init();function showAd(){ad_shown=get_cookie("rm_ad_shown");if(ad_shown!=null&&ad_shown!="")return false;else{set_cookie("rm_ad_shown","true",cookie_days);return true}}function rm_show_overlay(){if(isIE())window.attachEvent("onload",function(){document.body.scrollTop=0});else{document.getElementById("rm_modal").style.position="fixed";if(document.getElementById("rm_modal2")!=null)document.getElementById("rm_modal2").style.position="fixed"}hideflash();document.body.style.overflow="hidden"} function rm_hide_overlay(){document.getElementById("rm_container").innerHTML="";document.getElementById("rm_container").style.display="none";document.body.style.overflow="auto";showflash()}function is_defined(a){return typeof window[a]!="undefined"}function mt_rand(a,b){return Math.floor(Math.random()*(b-a+1))+a} function set_cookie(a,b,c){var d=new Date;d.setDate(d.getDate()+c);document.cookie=a+"="+escape(b)+";path=/"+(c==null?"":";expires="+d.toGMTString())+"omain=."+top.location.host.replace(/www\./i,"")}function get_cookie(a){if(document.cookie.length>0){c_start=document.cookie.indexOf(a+"=");if(c_start!=-1){c_start=c_start+a.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1)c_end=document.cookie.length;return unescape(document.cookie.substring(c_start,c_end))}}return""} function hideflash(){var a=htmlCollectionToArray(document.getElementsByTagName("object")),b=htmlCollectionToArray(document.getElementsByTagName("embed"));a=a.concat(b);for(b=0;b<a.length;b++){var c=getElementStyle(a[b]).visibility;if(c=="visible"||isIE()&&c=="inherit"){a[b].style.visibility="hidden";if(window.opera)a[b].style.display="none";hidden_objects.push(a[b])}}} function showflash(){for(var a=0;a<hidden_objects.length;a++){hidden_objects[a].style.visibility=!isIE()?"visible":"inherit";if(window.opera)hidden_objects[a].style.display=""}}function isIE(){return/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)}function htmlCollectionToArray(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}function getElementStyle(a){return window.getComputedStyle?window.getComputedStyle(a,null):a.currentStyle?a.currentStyle:null};