$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});
$("ul").on("click", "span", function(event) {
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });
    event.stopPropagation();
});

$("input").on("keypress", function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle("0.2s");
});