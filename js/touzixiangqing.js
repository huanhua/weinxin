function xiangmujindu(){
            var iWidth = document.documentElement.clientWidth;
            iScale = iScale/window.devicePixelRatio;
            var str='';
            str+='<div class="c-chart" data-dimension="'+(iWidth/10)*5+'"  data-text="0.8&nbsp;" data-width="'+(iWidth/10)*0.2+'" data-fontsize="'+(iWidth/10)*0.94+'" data-percent="75" data-fgcolor="#ff6600" data-bgcolor="#dfdfdf" style="margin:0 auto; height:5rem; overflow:hidden;"></div>';
            $('#xiangqing').html(str);
}
 xiangmujindu();

(function($) {
    $('.c-chart').each(function(){
        $(this).waypoint(function() {
            $(this).circliful();
              var iWidth = document.documentElement.clientWidth;
            iScale = iScale/window.devicePixelRatio;
            var LH = $(this).find('.circle-text').css('line-height'),
                half = parseInt($(this).find('.circle-text-half').css('height'),10);
            if ($(this).hasClass('bottom-txt')){
                $(this).find('.fa').css('line-height',LH);
            }
            if ($(this).attr('data-type') == 'half'){
                $(this).css('height',half-(iWidth/10)*0.64+'rem');
            }
        },{offset: '90%',triggerOnce: true});
    });
    

})(jQuery);

