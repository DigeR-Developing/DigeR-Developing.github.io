// home id on mouse move nav bar transition


$('#home').on('mousemove', function() {
    $('#home').css('color', '#777');
    $('#home').css('background', 'white');
    $('#home').css('padding', '4px');
    $('#home').css('border-radius', '15px')
    $('#home').css('border', '2px solid white');  
    $('#home').css('transition', '0.6s');
}) 

$('#home').on('mouseleave', function() {
    $('#home').css('padding', '0px');
    $('#home').css('border-radius', '0px');
    $('#home').css('border', '0px');
    $('#home').css('color', 'white');
    $('#home').css('background', '#777');
    $('#home').css('transition', '0.6s');
})


// contact id on mouse move nav-bar transition

$('#contact').on('mousemove', function() {
    $('#contact').css('color', '#777');
    $('#contact').css('background', 'white');
    $('#contact').css('padding', '4px');
    $('#contact').css('border-radius', '15px')
    $('#contact').css('border', '2px solid white');  
    $('#contact').css('transition', '0.6s');
}) 

$('#contact').on('mouseleave', function() {
    $('#contact').css('padding', '0px');
    $('#contact').css('border-radius', '0px');
    $('#contact').css('border', '0px');
    $('#contact').css('color', 'white');
    $('#contact').css('background', '#777');
    $('#contact').css('transition', '0.6s');
})