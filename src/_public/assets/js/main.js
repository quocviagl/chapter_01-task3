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
});

//TOGGLE MENU SP
$(".c-header__icon").click(function(){
        var close = $(this).parent().find(".c-header__icon--close");
        var leaf = $(this).parent().find(".c-header__leaf");
        var menu = $(this).parent().find(".c-nav__menu");
        var item = $(this).parent().children().find(".c-nav__item");
        
        leaf.addClass("is-active");
        // menu.addClass("is-active");
        close.addClass("is-active");
        menu.slideDown("slow");
        $("#top_site").addClass("u-overflowhidden");
});
$(".c-header__icon--close, .c-nav__item").click(function(){

        $(".c-header__leaf").removeClass("is-active");
        $(".c-header__icon--close").removeClass("is-active");
        $("#top_site").removeClass("u-overflowhidden");
        $(".c-nav__menu").slideUp("slow");

});
