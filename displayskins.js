//-------displayskins_Bie.js------------------------
//-------irvan-efendy.blogspot.com------------

var expiredStyle = 7000,
    dbs = document.body.style;

function bgSwitch(v) {
    dbs.background = v;
    createCookie('bgstyle', v, expiredStyle);
    eraseCookie('bgimgstyle');
    eraseCookie('urlimgstyle');
}
function bgImgSwitch(v) {
    dbs.background = v;
    dbs.backgroundSize = '100%';
    createCookie('bgimgstyle', v, expiredStyle);
    eraseCookie('bgstyle');
    eraseCookie('urlimgstyle');
}
function fontSwitch(v) {
    dbs.fontFamily = v;
    createCookie('fontstyle', v, expiredStyle);
}
function changeFontSize(v) {
    dbs.fontSize = v + 'px';
    createCookie('fontsize', v, expiredStyle);
}
function fontColor(v) {
    dbs.color = v;
    createCookie('fontcolor', v, expiredStyle);
}
function urlGambar(v) {
    dbs.background = 'black url(' + v + ')repeat-x fixed top center';
    dbs.backgroundSize = '100%';
    createCookie('urlimgstyle', v, expiredStyle);
    eraseCookie('bgstyle');
    eraseCookie('bgimgstyle');
}

//----------- If cookies successfully created and successfully read... do something! --------
if (readCookie('bgstyle')) {
    dbs.background = readCookie('bgstyle');
}
if (readCookie('bgimgstyle')) {
    dbs.background = readCookie('bgimgstyle');
    dbs.backgroundSize = '100%';
}
if (readCookie('fontstyle')) {
    dbs.fontFamily = readCookie('fontstyle');
}
if (readCookie('fontsize')) {
    dbs.fontSize = readCookie('fontsize') + 'px';
    document.getElementById('fontSizer').value = readCookie('fontsize');
}
if (readCookie('fontcolor')) {
    dbs.color = readCookie('fontcolor');
    document.getElementById('fontColorer').value = readCookie('fontcolor');
}
if (readCookie('urlimgstyle')) {
    dbs.background = 'black url('+ readCookie('urlimgstyle') +')repeat-x fixed top center';
    dbs.backgroundSize = '100%';
    document.getElementById('urlGambarer').value = readCookie('urlimgstyle');
}
var hideSkin='<a id="hideskin1" onclick="$(\'.displayskin-bie\').animate({\'left\':\'-300\'},500);$(\'#hideshow-skin2\').show(\'slow\');$(\'#hideshow-skin1\').hide(\'slow\');"><img src="http://1.bp.blogspot.com/-3kV-Qwy3h3s/USj56IjoztI/AAAAAAAACJk/4JY7q2kAfNI/s1600/left_arrow_gray.png"/></a>';
var showSkin='<a id="showskin2" onclick="$(\'.displayskin-bie\').animate({\'left\':\'10\'},500);$(\'#hideshow-skin1\').show(\'slow\');$(\'#hideshow-skin2\').hide(\'slow\');"><img src="http://4.bp.blogspot.com/-S5erCpcZ8Lk/USj56HVMDgI/AAAAAAAACJo/qr9xMXRnP9E/s1600/right_arrow_gray.png"/></a>';
var daftarSkin='<a id="buka-daftar" onclick="if($(this).html()==\'Tutup Daftar\'){$(\'#daftarskin-bie\').hide();$(this).html(\'Daftar skin\')}else{$(\'#daftarskin-bie\').show();$(this).html(\'Tutup Daftar\')}">Daftar skin</a> &#183; \x3C'+'a hr'+'ef="ht\x74\x70\x3A'+'\x2F\x2F\x69\x72\x76\x61\x6E-\x65\x66\x65\x6E\x64\x79.b\x6C\x6Fg'+'spot\x2E\x63om\x22\x20\x74\x69tle="Wid'+'get D'+'ispl'+'ay S'+'kin BI'+'E" target="_blank"><img src="http://\x31\x2E\x62\x70.blogspot.com/-A0d2aljEFl0/UP82tbsD_FI/AAAAAAAABwo/xX15x1l2TGc/s1600/widget-'+'original-sm.png"/></div></div>';
var fontSkinBIE='<select id="fontFamili" onchange="fontSwitch(this.value);">';
  fontSkinBIE+='<option selected >--</option>';
  fontSkinBIE+='<option value="Arial,Sans-Serif">Arial</option>';
  fontSkinBIE+='<option value="&#39;Book Antiqua&#39;,Serif">Book Antiqua</option>';
  fontSkinBIE+='<option value="&#39;Century Gothic&#39;,Tahoma,Verdana,Arial,Sans-Serif">Century Gothic</option>';
  fontSkinBIE+='<option value="&#39;Comic Sans MS&#39;,Serif">Comic Sans</option>';
  fontSkinBIE+='<option value="Georgia,Serif">Georgia</option>';
  fontSkinBIE+='<option value="Tahoma,Verdana,Arial,Sans-Serif">Tahoma</option>';
  fontSkinBIE+='<option value="&#39;Times New Roman&#39;,Serif">Times New Roman</option>';
  fontSkinBIE+='<option value="&#39;Trebuchet MS&#39;,Arial,Sans-Serif">Trebuchet</option>';
  fontSkinBIE+='<option value="Verdana,Arial,Sans-Serif">Verdana</option>';
  fontSkinBIE+='</select>';
var bgColorBIE='<span style="background-color:#523690;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+='<span style="background-color:#248bcb;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+='<span style="background-color:#c91212;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+='<span style="background-color:#fed100;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+='<span style="background-color:#3a9838;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+=' <span style="background-color:#36404a;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
  bgColorBIE+='<span style="background-color:#fff;" onclick="bgSwitch(this.style.backgroundColor);"></span>';
$('#hideshow-skin1').html(hideSkin);
$('#hideshow-skin2').html(showSkin);
$('#buka-daftarskin').html(daftarSkin);
$('#font-skin-bie').html(fontSkinBIE);
$('#bgcolor-bie').html(bgColorBIE);

//---------- Reset button -------------
function resetStyle() {
    eraseCookie('bgstyle');
    eraseCookie('bgimgstyle');
    eraseCookie('fontstyle');
    eraseCookie('fontsize');
    eraseCookie('fontcolor');
    eraseCookie('urlimgstyle');
    eraseCookie('hideDialog4');
    window.location.reload(1);
}