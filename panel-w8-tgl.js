// ----- by Irvan Efendy -----------------
// ----- irvan-efendy.blogspot.com -------
// ----- Please do not remove credit. --

var nowSM = new Date();
var dateSM = ((nowSM.getDate()<10) ? "0" : "")+ nowSM.getDate(); 
var monthsSM = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'); 
todaySM ="<span class=\'bulan-sm\'>" + monthsSM[nowSM.getMonth()] + "</span>" + "<br/>" + "<span class=\'tanggal-sm\'>" + dateSM + "</span>"; 
document.write('<sty'+'le>'
+'.tanggal-sm'+'{margin-left:20px;font-size:50px;} '
+'.bulan-sm'+'{margin-left:20px;color:yellow;} ');
document.write('</sty'+'le>');
document.write('<span style="color:white;font-size:20px;">' + ''+todaySM+'' + '</span>');
document.write('<a \x73\x74\x79\x6C\x65="position:relative;float:right;bottom:-66px;right:-6px" hr'+'ef="ht\x74\x70\x3A'+'\x2F\x2F\x69\x72\x76\x61\x6E-\x65\x66\x65\x6E\x64\x79.b\x6C\x6Fg'+'spot\x2E\x63om\x22\x20\x74\x69tle="Go to Widget Panel SM" target="_blank"><img src="http://\x31\x2E\x62\x70.blogspot.com/-A0d2aljEFl0/UP82tbsD_FI/AAAAAAAABwo/xX15x1l2TGc/s1600/widget-'+'original-sm.png"/></a>');
