$(function(){
    let header_position = $(".l-header").offset().top;

    $(window).on('scroll',function() {
        let scroll = $(window).scrollTop();

        if(scroll > header_position){
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
        
        if ($(this).scrollTop() > 100) {
            $('.p-to-top').fadeIn();
        } 
        else {
            $('.p-to-top').fadeOut();
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
        let header = $(".js-header").height();

        console.log(header);
        
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
        let id_hide;
        let id_show;

        if(!$(this).hasClass("p-menu__selector--is-active")){
            $(".js-selector").each(function(index,element){
                if($(this).hasClass("p-menu__selector--is-active")){
                    id_hide = index;
                    $(".p-menu__content").eq(id_hide).removeClass("p-menu__content--is-active");
                    //$(".p-menu__content").eq(id_hide).fadeOut(300);
                    
                }
                $(this).removeClass("p-menu__selector--is-active");
                $(this).children().removeClass("p-menu__selector-text--is-active");
            });

            $(this).addClass("p-menu__selector--is-active")
            $(this).children().addClass("p-menu__selector-text--is-active")
            id_show = $(this).index();
            $(".p-menu__content").eq(id_show).addClass("p-menu__content--is-active");
            //$(".p-menu__content").eq(id_show).fadeIn(300);
        }


    });

});