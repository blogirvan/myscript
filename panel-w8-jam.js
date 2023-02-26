// ----- by Irvan Efendy -----------------
// ----- irvan-efendy.blogspot.com -------
// ----- Please do not remove credit. --

  $(document).ready(function() {
  function wDateSM(){
  var now = new Date();
  var outHour = now.getHours();
  if (outHour >24){newHour = outHour-24;outHour = newHour;}
  if(outHour<10){document.getElementById('HourSM').innerHTML="0"+outHour;}
  else{document.getElementById('HourSM').innerHTML=outHour;}
  var outMin = now.getMinutes();
  if(outMin<10){document.getElementById('MinutSM').innerHTML="0"+outMin;}
  else{document.getElementById('MinutSM').innerHTML=outMin;}
  var outSec = now.getSeconds();
  if(outSec<10){document.getElementById('SecSM').innerHTML="0"+outSec;}
  else{document.getElementById('SecSM').innerHTML=outSec;}
} wDateSM(); setInterval(function(){ wDateSM();}, 1000); });

document.write('<span id="jamku" style="position:absolute;top:40px;left:23px;color:yellow;font-size:30px;"><span id="HourSM"></span>:<span id="MinutSM"/></span>');
document.write('<span id="\x53\x65\x63\x53\x4D" style="color:white;position:absolute;top:-35px;left:-13px;opacity:0.2;font-size:80px;font-weight:bold"></span>\x3C'+'a style="position:relative;float:right;bottom:-50px" hr'+'ef="ht\x74\x70\x3A'+'\x2F\x2F\x69\x72\x76\x61\x6E-\x65\x66\x65\x6E\x64\x79.b\x6C\x6Fg'+'spot\x2E\x63om\x22\x20\x74\x69tle="Go to Widget Panel SM" target="_blank"><img src="http://\x31\x2E\x62\x70.blogspot.com/-A0d2aljEFl0/UP82tbsD_FI/AAAAAAAABwo/xX15x1l2TGc/s1600/widget-'+'original-sm.png"/></a>');
