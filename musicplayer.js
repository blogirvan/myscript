// ----- Music player @Bie -----------------
// ----- irvan-efendy.blogspot.com -------
// ----- Please do not remove credit. -----

function musicBIEdonk(lagu,judul){
  var album=window.location.hostname; 
  var srcmp3='http://beemp3.com/player/player.swf?soundFile='+lagu;
  srcmp3+='&autostart=yes';
  srcmp3+='&loop=yes';
  srcmp3+='&bg=0x000000&leftbg=0x0251C9&lefticon=0xF2F2F2&rightbg=0xD67919&rightbghover=0x1BAD07&righticon=0xF2F2F2&righticonhover=0xFFFFFF&text=0xE0E3F4&slider=0x357DCE&track=0xFFFFFF&border=0xFFFFFF&loader=0xAF2910';
  
  var tulisNew='<div style="clear:both;padding:1px">';
  tulisNew+='<center><a style="color:#aaaa99;text-transform:capitalize" href="'+lagu+'" target="_blank">'+judul+'</a></center>';
  tulisNew+='</div>';  
  tulisNew+='<div style="width:100%;text-align:center;"><div style="width:30px;height:20px;overflow:hidden;display:inline-block;vertical-align:middle"><div><embed id="embed-music" wmode="transparent" src="'+srcmp3+'" quality="high" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" align="top" width="230" height="21"></embed></div></div>';
  tulisNew+='<div style="display:inline-block;vertical-align:middle"> &#183; <a href="javascript:void(0)" onclick="if($(this).html()==\'Play\'){$(\'#embed-music\').parent().show();$(this).html(\'Stop\')}else{$(\'#embed-music\').parent().hide();$(this).html(\'Play\')}">Stop</a>';
  tulisNew+=' &#183; <a id="buka-daftar" onclick="if($(this).html()==\'Tutup Daftar\'){$(\'#daftarputar-bie\').hide();$(this).html(\'Daftar putar\')}else{$(\'#daftarputar-bie\').show();$(this).html(\'Tutup Daftar\')}">Daftar putar</a> &#183; \x3C'+'a hr'+'ef="ht\x74\x70\x3A'+'\x2F\x2F\x69\x72\x76\x61\x6E-\x65\x66\x65\x6E\x64\x79.b\x6C\x6Fg'+'spot\x2E\x63om\x22\x20\x74\x69tle="Wid'+'get Mus'+'ic Pl'+'ayer BI'+'E" target="_blank"><img src="http://\x31\x2E\x62\x70.blogspot.com/-A0d2aljEFl0/UP82tbsD_FI/AAAAAAAABwo/xX15x1l2TGc/s1600/widget-'+'original-sm.png"/></div></div>';
  var hideMusic='<a id="hidemusic1" onclick="$(\'.musikplayer-bie\').animate({\'left\':\'-300\'},500);$(\'#hideshow-music2\').show(\'slow\');$(\'#hideshow-music1\').hide(\'slow\');"><img src="http://1.bp.blogspot.com/-3kV-Qwy3h3s/USj56IjoztI/AAAAAAAACJk/4JY7q2kAfNI/s1600/left_arrow_gray.png"/></a>';
  var showMusic='<a id="showmusic2" onclick="$(\'.musikplayer-bie\').animate({\'left\':\'10\'},500);$(\'#hideshow-music1\').show(\'slow\');$(\'#hideshow-music2\').hide(\'slow\');"><img src="http://4.bp.blogspot.com/-S5erCpcZ8Lk/USj56HVMDgI/AAAAAAAACJo/qr9xMXRnP9E/s1600/right_arrow_gray.png"/></a>';
  if($('.musik-bie').length==0){$('.keterangan-postingan').append('<div class="musik-bie">'+tulisNew+'</div>')}else{$('.musik-bie').html(tulisNew)}
  if($('#hideshow-music1').length==0){$('.keterangan-postingan').append('<div class="musik-bie">'+hideMusic+'</div>')}else{$('#hideshow-music1').html(hideMusic)}
  if($('#hideshow-music2').length==0){$('.keterangan-postingan').append('<div class="musik-bie">'+showMusic+'</div>')}else{$('#hideshow-music2').html(showMusic)}
}