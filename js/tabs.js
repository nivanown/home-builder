$(".faq-header").on("click", function() {
    $(this).toggleClass("active")
    $(this).siblings(".faq-body").slideToggle("fast");
    if ($(this).hasClass("active")) {
        $(this).parent().css("border-bottom", "1px solid black");
        $(this).parent().css("border-top", "1px solid black");
    } else {
        $(this).parent().css("border-bottom", "1px solid rgba(0,0,0,0.1)");
        $(this).parent().css("border-top-color", "rgba(0,0,0,0.1)");
        if ($(this).parent().prev().hasClass("faq-item")) {
            $(this).parent().css("border-top", "0px solid rgba(0,0,0,0.1)");
        }
    }
})