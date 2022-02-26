// #about id on mouse hover / mouse leave

$('#about').on('mousemove', function() {
    $('#about').css('padding', '4px');
    $('#about').css('background', 'white');
    $('#about').css('cursor', 'pointer');
    $('#about').css('color', '#777');
    $('#about').css('border-radius', '3rem');
    $('#about').css('border', '1px solid white');
    $('#about').css('transition', 'ease-in 0.7s');
})

$('#about').on('mouseleave', function() {
    $('#about').css('background', '#777');
    $('#about').css('color', 'white');
    $('#about').css('padding', '0px');
    $('#about').css('border-radius', '0rem');
    $('#about').css('border', '0px');
    $('#about').css('transition', 'ease-out 0.7s');
})



// project nav-bar on mouse hover / leave

$('#projects').on('mousemove', function() {
    $('#projects').css('padding', '4px');
    $('#projects').css('color', '#777');
    $('#projects').css('cursor', 'pointer');
    $('#projects').css('background', 'white');
    $('#projects').css('border', '1px solid white');
    $('#projects').css('border-radius', '3rem');
    $('#projects').css('transition', 'ease-in 0.7s');
})

$('#projects').on('mouseleave', function() {
    $('#projects').css('background', '#777');
    $('#projects').css('color', 'white');
    $('#projects').css('border', '0px');
    $('#projects').css('border-radius', '0px');
    $('#projects').css('padding', '0px');
    $('#projects').css('transition', 'ease-out 0.7s');
})




// coding nav-bar on mouse hover / leave


$('#coding').on('mousemove', function() {
    $('#coding').css('padding', '4px');
    $('#coding').css('cursor', 'pointer');
    $('#coding').css('color', '#777');
    $('#coding').css('background', 'white');
    $('#coding').css('border', '1px solid white');
    $('#coding').css('border-radius', '3rem');
    $('#coding').css('transition', 'ease-in 0.7s');
})

$('#coding').on('mouseleave', function() {
    $('#coding').css('background', '#777');
    $('#coding').css('color', 'white');
    $('#coding').css('border', '0px');
    $('#coding').css('border-radius', '0px');
    $('#coding').css('padding', '0px');
    $('#coding').css('transition', 'ease-out 0.7s');
})



// info-button hover effekts

infoclicked = false;

$('#show-info').click(function() {
    $('#show-info').css('cursor', 'default');
    $('#show-info').css('transform', 'scale(0)');
    $('.info-box').css('transform', 'scale(1)');
    $('.info-box').css('transition', '0.6s');
    infoclicked = true;
})

$('.info-box').on('mousemove', function() {
    if(infoclicked == true) {
        $('.info-box').css('background', 'white');

        $('.info-box').css('color', '#777');
        $('.info-box').css('border-radius', '40px');

        $('.info-box p').css('background', 'white');
        $('.info-box p').css('transition', '0.6s');

        $('.info-box h1').css('background', 'white');
        $('.info-box h1').css('transition', '0.6s');
        console.log("info button clicked, Triggering Text Box events...")
    } else {
        console.log("Info Button is not clicked, Nothing will be triggerd...")
    }
})

$('.info-box').on('mouseleave', function() {
    if(infoclicked == true) {
        $('.info-box').css('background', '#777');
        $('.info-box').css('color', 'white');
        $('.info-box').css('border-radius', '25px');

        $('.info-box p').css('background', '#777');
        $('.info-box p').css('transition', '0.6s');

        $('.info-box h1').css('background', '#777');
        $('.info-box h1').css('transition', '0.6s');
    } else {
        console.log("Button were never clicked, No events will be triggerd...");
    }
})

$('#projects').click(function() {
    alert("Comming Soon...");
})

$('#about').click(function() {
    alert("Comming Soon...");
})

$('#coding').click(function() {
    alert("Comming Soon...");
})
