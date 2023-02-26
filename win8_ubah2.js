//BIASA LAH .. irvan-efendy.blogspot.com
var ssBG={
  gbr:[
"http://2.bp.blogspot.com/-jXDDlst7GMc/T1SDEQ72L6I/AAAAAAAAMKc/7C4dD51XSNY/s1600/Windows-8-HD-Wallpapers+%281%29.png",    
"http://1.bp.blogspot.com/-bhCWAGB3R_U/TqmNSu5T8KI/AAAAAAAAAmc/Uxsb5-KUWJI/s1600/Windows+8+xTreme+Edition.jpg",
"http://2.bp.blogspot.com/_o-6wV8a6eV4/TUCAZ4AlIyI/AAAAAAAAApU/IB9xgb-u5fA/s1600/Windows_8_wallpapers_3.jpg",
"http://2.bp.blogspot.com/-f5bHmKSK10U/TdisTDVCeMI/AAAAAAAAAAU/yWvU4lkMUTU/s1600/windows8professional.jpg",
"http://www.smartearningmethods.com/wp-content/uploads/2012/03/Scenic-Windows-8-9.jpg",
"http://1.bp.blogspot.com/_KjKudOQDFIw/TIBYyADOwKI/AAAAAAAADbo/uuGxtubijJE/s1600/China_Country_4+%28wallpapersbay.blogspot.com%29.jpg",
"http://2.bp.blogspot.com/_KjKudOQDFIw/TIBRITYy3fI/AAAAAAAADSA/cZXzlv-rgZs/s1600/Rainbow_Wallpapers_%281%29+%28wallpapersbay.blogspot.com%29.jpg",
"http://4.bp.blogspot.com/_KjKudOQDFIw/TICHoDt9rwI/AAAAAAAAEI0/BKgogEknRCY/s1600/Creative-Digital-Animal-Wallpapers-24+%28wallpapersbay.blogspot.com%29.jpg", 
"1.bp.blogspot.com/_KjKudOQDFIw/TIBQjNvqJHI/AAAAAAAADRo/g_FBWqwMKAw/s1600/Thunder_Storm_Wallpapers_%2837%29+%28wallpapersbay.blogspot.com%29.jpg" 
  ],
  now:0,
  SlideMyBG:function(list,style,speed,bgPos,bgSize,bgRep){
    if(!ssBG.SlideMyBG.hasRun){ssBG.SlideMyBG.hasRun=true;
    if(list==null||list==''){list=ssBG.gbr}else{if(typeof list!='object'){list=ssBG.gbr}}
    if(style==null||style==''){style='random'}
    if(speed==null||speed==''){speed=5000}
    if(bgPos==null||bgPos==''){bgPos='top center'}
    if(bgSize==null||bgSize==''){bgSize='100%'}
    if(bgRep==null||bgRep==''){bgRep='repeat'}
    ssBG.gaya=style;ssBG.jeda=speed;ssBG.gbr=list;ssBG.pos=bgPos;ssBG.size=bgSize;ssBG.rep=bgRep;
    ssBG.opt={'background-attachment':'fixed','background-repeat':ssBG.rep,'-moz-background-size':ssBG.size,'background-size':ssBG.size};
    }
    if(ssBG.gaya=='random'){ssBG.gbr=ssBG.gbr.sort(function(){return 0.5-Math.random()})}
    var img=new Image();var brp=ssBG.gbr.length;if(ssBG.now>=brp){ssBG.now=0}
    var gbrSkrng=ssBG.gbr[ssBG.now];ssBG.now++;
    if($('#bg-fader').length==0){$('body').prepend('<div id="bg-fader" style="opacity:0.0;top:0;left:0;width:100%;height:100%;background-color:'+$('body').css('background-color')+'"></div>');$('#bg-fader').css(ssBG.opt);$('body').css(ssBG.opt)}
    $(img).load(function(){
      $('#bg-fader').css({'background-image':'url('+gbrSkrng+')','background-position':ssBG.pos}).animate({opacity:1.0},'slow','linear',function(){
        $('body').css({'background-image':'url('+gbrSkrng+')','background-position':ssBG.pos});
        $(this).animate({opacity:0.0},'slow','linear');
        setTimeout("ssBG.SlideMyBG()",ssBG.jeda);
      });
    }).attr('src',gbrSkrng).error(function(huh){ssBG.SlideMyBG()});
  }
};