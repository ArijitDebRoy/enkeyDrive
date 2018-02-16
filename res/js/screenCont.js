var screenDetect = function(){
    if(  (screen.width-335) <= window.innerWidth) {
    $('#rightDrawer').show();
        $('#recentBody').closest('div').removeClass('mdl-cell--12-col').addClass('mdl-cell--2-offset mdl-cell--8-col');
         $('#recent').css('padding-top','1vw');
        $('#recent').css('margin-left','0vw');
 
} else{
     $('#rightDrawer').hide();
    $('#recentBody').closest('div').removeClass('mdl-cell--2-offset mdl-cell--8-col').addClass('mdl-cell--12-col');
    $('#recent').css('padding-top','10vw');
    $('#recent').css('margin-left','-1vw');
}
};
$(document).ready(screenDetect);
    
$(window).resize(screenDetect);