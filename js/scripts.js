function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

$(document).ready(function(){
    $('.button').hover(function(){
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    })

    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
      $('#background-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    $('.button').click(function(){
        if ($(this).hasClass("selected")){
            $('.button').removeClass("selected")
            $('#content').removeClass("left");
            $('#page').removeClass("right about resume projects gallery");

        } else {
            $('.button').removeClass("selected")
            $(this).addClass("selected")
            $('#page').removeClass("about resume projects gallery")
            if      ($(this).hasClass('about')){    $('#page').html($('#about').html());    $('#page > * ').hide(); $('#page').addClass('about');     }
            else if ($(this).hasClass('resume')){   $('#page').html($('#resume').html());   $('#page > * ').hide(); $('#page').addClass('resume');    }
            else if ($(this).hasClass('projects')){ $('#page').html($('#projects').html()); $('#page > * ').hide(); $('#page').addClass('projects');  }
            else if ($(this).hasClass('gallery')){  $('#page').html($('#gallery').html());  $('#page > * ').hide(); $('#page').addClass('gallery');   }
            $('#page > *').fadeIn(500)
            $('#content').addClass("left");
            $('#page').addClass("right");
        }
        $(".fancybox").fancybox({
            maxWidth    : 1300,
            maxHeight   : 1000,
            minHeight   : 50,
            fitToView   : true,
            width       : '70%',
            height      : '90%',
            autoSize    : true,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none'
        });
    })

    $("#back").click(function(){
        $('.button').removeClass("selected")
        $('#content').removeClass("left");
        $('#page').removeClass("right about resume projects gallery");
    })

    var page = getQueryVariable('page')
    if(page){
        $(".button." + page).click();
        $(".fancybox").fancybox({
            maxWidth    : 1300,
            maxHeight   : 1000,
            minHeight   : 50,
            fitToView   : false,
            width       : '70%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none'
        });
    } else {
        $("#content > * ").hide()

        setTimeout(function(){$('.profile-img').fadeIn(750)},250)
        setTimeout(function(){$('.name.lg').fadeIn(500)
            setTimeout(function(){$('.name.sm').fadeIn(500)
                setTimeout(function(){
                    $('.quote').fadeIn(1500)
                    $('.quote span').css("opacity", "0")
                    $('.quote span:nth-child(1)').animate({"opacity": "1"})
                    setTimeout(function(){$('.quote span:nth-child(2)').animate({"opacity": "1"})},500)
                    setTimeout(function(){$('.quote span:nth-child(3)').animate({"opacity": "1"})},1000)
                    setTimeout(function(){$('.buttons').fadeIn(750)
                        setTimeout(function(){$('.icons').fadeIn(750)
                        }, 500)
                    }, 1500)
                }, 250)
            }, 250)
        }, 900)
    }
})