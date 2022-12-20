$(".c-point__iconmore").click(function(){
            $(this).parent().parent().parent().find(".c-item__content").css("display", "none");
        
        $(this).next().css({"display":"block","pointer-events": "auto"});      
           
    });
// ANIMATION
$(window).scroll(function(){
        if ($(this).scrollTop() === 0){

                $(".c-leaf__topleaf").removeClass("c-leaf__animationy");
                $(".c-leaf__sideleaf").removeClass("c-leaf__animationx");
                $(".c-bubblesection").removeClass("is-hidden");


        } else {
                $(".c-leaf__topleaf").addClass("c-leaf__animationy");
                $(".c-leaf__sideleaf").addClass("c-leaf__animationx");
                $(".c-bubblesection").addClass("is-hidden");
        }

      });
//EXPAND CONTENT
$(".c-item__expand").click(function(){
        var arrow = $(this).find('.c-item__expandarrow');
        var content = $(this).parent().find('.c-item__description');

        arrow.toggleClass("c-item__expandarrow--active")
        content.slideToggle("slow");
})


