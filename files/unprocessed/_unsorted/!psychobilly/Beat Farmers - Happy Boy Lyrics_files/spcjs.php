
if (typeof(OA_zones) != 'undefined') {
var OA_zoneids = '';
for (var zonename in OA_zones) OA_zoneids += escape(zonename+'=' + OA_zones[zonename] + "|");
OA_zoneids += '&nz=1';
} else {
var OA_zoneids = escape('1|2|3|4|5|6|7|8|9|10');
}
if (typeof(OA_source) == 'undefined') { OA_source = ''; }
var OA_p=location.protocol=='https:'?'https:':'http:';
var OA_r=Math.floor(Math.random()*99999999);
OA_output = new Array();

var OA_fo = '';
OA_fo += "<"+"script type=\'text/javascript\' src=\'http://216.38.57.37/openads/www/delivery/fl.js\'><"+"/script>\n";
document.write(OA_fo);

var OA_spc="<"+"script type='text/javascript' ";
OA_spc+="src='"+OA_p+"//216.38.57.37/openads/www/delivery/spc.php?zones="+OA_zoneids;
OA_spc+="&amp;source="+escape(OA_source)+"&amp;r="+OA_r;
    OA_spc+="&amp;target=_blank";
OA_spc+=(document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));

if (window.location) OA_spc+="&amp;loc="+escape(window.location);
if (document.referrer) OA_spc+="&amp;referer="+escape(document.referrer);
OA_spc+="'><"+"/script>";
document.write(OA_spc);

function OA_show(name) {
if (typeof(OA_output[name]) == 'undefined') {
return;
} else {
document.write(OA_output[name]);
}
}
function OA_showpop(name) {
if (typeof(OA_popupZones[name]) == 'undefined') {
return;
}
var OA_pop="<"+"script type='text/javascript' ";
OA_pop+="src='"+OA_p+"//216.38.57.37/openads/www/delivery/apu.php?zoneid="+OA_popupZones[name];
OA_pop+="&amp;source="+escape(OA_source)+"&amp;r="+OA_r;
        OA_spc+="&amp;target=_blank";
if (window.location) OA_pop+="&amp;loc="+escape(window.location);
if (document.referrer) OA_pop+="&amp;referer="+escape(document.referrer);
OA_pop+="'><"+"/script>";
document.write(OA_pop);
}