$(function(){
    let header_position = $(".l-header").offset().top;

    $(window).on('scroll',function() {
        let scroll = $(window).scrollTop();
        //let header_position = $(".l-header").offset().top;


            if(scroll>header_position){
                if(!$(".l-header").hasClass("active")){
                $(".l-header").css("position","fixed");
                $(".l-header").css("top","0");
                $(".l-header").addClass("active");
                $(".p-commitment").css("position","relative");
                if (window.matchMedia( "(max-width: 768px)" ).matches){
                    $(".p-commitment").css("margin-top","8rem");
                }
                else{
                    $(".p-commitment").css("margin-top","10rem");
                }
                }
            }
            else{
                if($(".l-header").hasClass("active")){
                $(".l-header").css("position","static");
                $(".l-header").removeClass("active");
                $(".p-commitment").css("margin-top","0");
                }
            }

    });

    $('.js-trigger').on('click', function() {
        let nav = $(".p-nav.js-nav");
        $(this).find(".js-trigger-part").toggleClass('active');

        nav.toggleClass("p-nav--active");

        return false;
    });

    $(".js-link, .js-to-top").on("click",function(){
        let nav = $(".p-nav.js-nav");
        
        if(nav.hasClass("p-nav--active")){
            nav.toggleClass("p-nav--active");
            $(".js-trigger").find(".js-trigger-part").toggleClass('active');
        }

        let scroll = $(window).scrollTop();

        let id = $(this).attr("href");
        let position = $(id).offset().top - header;
    
        $('body,html').animate({
            scrollTop: position
        }, 600);

        return false;
    }); 

    $(".js-selector").on("click",function(){
        //console.log("click");
        if(!$(this).hasClass("p-menu__selector--is-active")){
            $(".js-selector").each(function(index,element){
                $(this).removeClass("p-menu__selector--is-active");
                $(this).children().removeClass("p-menu__selector-text--is-active");
                //console.log(element);
            });

            $(this).addClass("p-menu__selector--is-active")
            $(this).children().addClass("p-menu__selector-text--is-active")
        }
    });

});