$(document).ready(function(){
    $(".gnb>li").mouseenter(function(){ 
        $(this).children(".gnb_list").css("display", "block");  
    })
    $(".gnb>li").mouseleave(function(){ 
        $(this).children(".gnb_list").css("display", "none");  
    })

    $("h3").css("display", "none");
    $("h3").fadeIn(500);
});


$(window).scroll(function(){
    var scrolebent= $(window).scrollTop();
    if(scrolebent > 84){
        $("header").css({"background" : "#fff"});
    }
});