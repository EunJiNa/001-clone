$(function(){
    $(".thebogi-btn a").click(function(){
        $(".thebogi-btn a").addClass("blind");
        $(".slideup-btn").removeClass("blind");
        $(".thebogi-wrap").show();
    });
    $(".slideup-btn a").click(function(){
        $(".slideup-btn").addClass("blind");
        $(".thebogi-btn a").removeClass("blind");
        $(".thebogi-wrap").hide();
    });
});

$(function(){
    setInterval(function(){
       $(".popup-news-slide").animate({top:"-50"},1000,function(){
           $(".popup-news-slide li").eq(0).appendTo(".popup-news-slide");
           $(".popup-news-slide").css({top:0});
       });
    },3000);
});