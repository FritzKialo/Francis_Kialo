/*global $*/

$(function () {
    
    "use strict";
    

    /*************** Landing ***************/

    var land__text = $(".head_demo");
    
    if ( land__text.length !== 0 ){

        land__text.fitText(1, { maxFontSize: 86 });

    }


    if ($("#typedemo").length){

        var typed = new Typed("#typedemo", {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 0,
            fadeOut: false,
            loop: true
        });

    }



});
