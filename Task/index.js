
counter = function() {
    var value = $('#mytextarea').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#charCount').html(0);
        $('#noSpace').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var charCount = value.length;
    var charCountNoSpace = value.replace(regex, '').length;
    $('#wordCount').html(wordCount);
    $('#charCount').html(charCount);
    $('#noSpace').html(charCountNoSpace);
};

$(document).ready(function() {
    $('#mytextarea').keyup(counter);
});

var textcontent = document.getElementById('mytextarea');
textcontent.onkeyup = textcontent.onkeypress = function()
{
    document.getElementById('preview').innerHTML = this.value;
}

$(".theme-switch").on("click", () => {
    $("body").toggleClass("light-theme");
});

$("#upper").click(function(){
    var input = $("#mytextarea");
    let inputValUpper = input.val().toUpperCase();
    input.val(inputValUpper);
    $("#preview").text(inputValUpper);
 });

$("#lower").click(function(){
    var input = $("#mytextarea");
    let inputValUpper = input.val().toLowerCase();
    input.val(inputValUpper);
    $("#preview").text(inputValUpper);
});  
