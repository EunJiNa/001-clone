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
        $(".popup-news").animate({top:"-50"},1000,function(){
            $(".popup-news-list li").eq(0).appendTo(".popup-news");
            
        })
    })
})