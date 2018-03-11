$(function () {
    $("div.rightMenu span").mouseenter(function () {
        var left = $(this).position().left;
        var top = $(this).position().top-10;
        // alert(top);
        var width = $(this).css("width");
        var destLeft = parseInt(left) + parseInt(width)/2;
        $("img#catear").css("left",destLeft);
        $("img#catear").css("to" +
            "p",top);
        $("img#catear").fadeIn(500);
    });
    $("div.rightMenu span").mouseleave(function () {
        $("img#catear").hide();
    });
});
