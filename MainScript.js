//API to retrieve the highlights and goals of the latest football matches in JSON format
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-football-soccer-videos.p.rapidapi.com/",
	"method": "GET",
	"headers": {
		"x-rapidapi-key" : "6ae3197b2emsh0db7bf6908f17b9p1b281djsn457261e7bdfb",
		"x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    });


// Home button function 
const goToHomePage =()=>{
            if(!localStorage.getItem('userName')){
            //for first visit and after Reset preferences 
            $('#aboutContent').hide();
            $('#mediaGalleryButtons').hide();
            $('#mediaGalleryPage').hide();
            $('.photoShow').hide();
            $('.archiveSection').fadeOut();
            $("#homeBackground").hide();
            $('#reset').hide();
            $('.homeContent').fadeIn();
        }
        else{
            $('#welcomeField').hide();
            $('#aboutContent').hide();
            $('#mediaGalleryButtons').hide();
            $('#mediaGalleryPage').hide();
            $('.photoShow').hide();
            $('.archiveSection').fadeOut();
            lastMatch(localStorage.getItem('favTeam'));
            personalization(localStorage.getItem('userName') , localStorage.getItem('favTeam'));
        }
    };

//Selecting Home button
const homePage = $('#home');

// Invoking about button function
homePage.click(goToHomePage);

//check the userInput and store it in localStorage
const welcomeField =()=>{
    if($('#name').val()){
    let userName = $('#name').val();
    let favTeam = $('#teamSelection').children("option:selected").val();
    localStorage.setItem('userName' , userName);
    localStorage.setItem('favTeam' , favTeam);
    lastMatch(favTeam);
    personalization(userName , favTeam);
    }
    else{
        $('#name').css('background' , 'rgba(1, 20, 82, 0.3)')
    }
}

//infoButton invokes welcomeField function
$('#infoButton').click(welcomeField);


//get the latest match for User Team
const lastMatch =(favTeam)=>{
    $.ajax(settings).done(function (response) {
        let arrayOfMatches = response;
        arrayOfMatches.forEach(element => {
            if(element.side1.name === favTeam || element.side2.name === favTeam){
                $('#latestMatch').html(element.embed);
            }
            
        });

        });
}

//personalization function 
const personalization =(userName , userTeam) =>{
    $('#welcomeField').slideUp();
    if(userTeam){
        $('#TeamLogo').fadeIn();
        $('#homeBackground').fadeIn();
        $('#latestMatch').slideDown();
        $('#reset').fadeIn();

    }
};

//Reset button functionality 
$('#reset').click(()=>{
    if(confirm("Are you sure you want to reset ?")){
    localStorage.clear();
    location.reload();
    };
});


// About page function
const goToAboutPage =() =>{
    $('#aboutContent').fadeIn();
    $('#mediaGalleryButtons').hide();
    $('#mediaGalleryPage').hide();
    $('#logInPage').fadeOut();
    $('.archiveSection').fadeOut();
    $('.photoShow').hide();
    $('.homeContent').hide();
    $("#homeBackground").hide();
};

//Selecting about button
const aboutPage = $('#aboutUs');

// Invoking about button function
aboutPage.click(goToAboutPage);

//Archive page Search function
const archiveSearch =()=>{
    $.ajax(settings).done(function (response){
        let arrayOfMatches = response;
        let searchValue = $('#archiveSearchBox').val();
        arrayOfMatches.forEach(element => {
            if(element.side1.name == searchValue || element.side2.name == searchValue){
                $('#HlSearchBox').hide();
                $('#videpPlayer').html(element.embed);
                $('#tabHomeButton').show();
            }
            else{
                $('#archiveSearchBox').val("Incorrect Name");
            }
            
        });

    });
};

//Archive back Button
let tabButton = $('#tabHomeButton');
tabButton.click(()=>{
    $('#HlSearchBox').fadeIn();
    $('#videpPlayer').html("");
})

//search button invokes Search function when clicked
$("#archiveSearchButton").click(archiveSearch);

//Media gallery page function
const goToMediaGallery =()=>{
    $('#aboutContent').hide();
    $('.photoShow').hide();
    $('.homeContent').hide();
    $('#logInPage').fadeOut();
    $('.archiveSection').fadeOut();
    $("#homeBackground").fadeOut();
    $('#mediaGalleryButtons').fadeIn();
    $('#mediaGalleryPage').fadeIn();
    };

//Selecting media gallery button    
const mediaGallery = $('#mediaGallery');

//invoking media gallery function

mediaGallery.click(goToMediaGallery);


// Archive page function
const goToArchive =() =>{
    $('#aboutContent').fadeOut();
    $('.photoShow').fadeOut();
    $('.homeContent').fadeOut();
    $('#mediaGalleryButtons').fadeOut();
    $('#mediaGalleryPage').fadeOut();
    $("#homeBackground").fadeOut();
    $('#logInPage').fadeOut();
    $('.archiveSection').fadeIn();
    };

//Selecting Archive button    
const archive = $('#archive');

//invoking Archive function

archive.click(goToArchive);




//selecting first Image(html element)
let currentImage = $(".currentImage");

//array of players in Media Gallery Page
let arrayOfPlayers = ['zlatanIbra.png' , 'NeymarJR.png' , 'totti.png' , 'messi.png' , 'Ronaldinho.png'];

//array of ID's
let arrayOfIDs = ["ibra" , "neymar" , "totti" , "messi" , "ronaldinho"];

let i = 0;

//back button functionality
function back(){
    if(i <= 0) i = arrayOfPlayers.length;
	i--;
	return showImage();			 
}

//next button functionality
const next = () => {
    if(i >= arrayOfPlayers.length-1) i = -1; 
	i++;
	return showImage();
};

//show the image depending on button(next or back)
function showImage(){
    currentImage.attr('src', "./"+arrayOfPlayers[i]);
    currentImage.attr('id', arrayOfIDs[i]) ;
    return currentImage

} 
 

//selecting buttons
const nextButton = $("#next");
const backButton = $("#back");

//on click functionality
nextButton.click(next);
backButton.click(back);


//when Select ibra go to his photo gallery
$('#ibra').click(()=>{
    $('#mediaGalleryButtons').fadeOut();
    $('#mediaGalleryPage').fadeOut();
    $('.photoShow').slideDown();
    
});

//zoom in photo to original size
$('#ibra1').dblclick(()=>{
    $('#ibra1').animate({
        height: 288,
        width : 514,
    });
});

//zoom out to gallery
$('#ibra1').click(()=>{
    $('#ibra1').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra2').dblclick(()=>{
    $('#ibra2').animate({
        height: 571,
        width : 855,
    });
});

//zoom out to gallery
$('#ibra2').click(()=>{
    $('#ibra2').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra3').dblclick(()=>{
    $('#ibra3').animate({
        height: 360,
        width : 640,
    });
});

//zoom out to gallery
$('#ibra3').click(()=>{
    $('#ibra3').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra4').dblclick(()=>{
    $('#ibra4').animate({
        height: 557,
        width : 990,
    });
});

//zoom out to gallery
$('#ibra4').click(()=>{
    $('#ibra4').animate({
        height: 120,
        width : 210,
    });
});


//zoom in photo to original size
$('#ibra5').dblclick(()=>{
    $('#ibra5').animate({
        height: 432,
        width : 768,
    });
});

//zoom out to gallery
$('#ibra5').click(()=>{
    $('#ibra5').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra6').dblclick(()=>{
    $('#ibra6').animate({
        height: 512,
        width : 380,
    });
});

//zoom out to gallery
$('#ibra6').click(()=>{
    $('#ibra6').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra7').dblclick(()=>{
    $('#ibra7').animate({
        height: 525,
        width : 700,
    });
});

//zoom out to gallery
$('#ibra7').click(()=>{
    $('#ibra7').animate({
        height: 120,
        width : 210,
    });
});


//zoom in photo to original size
$('#ibra8').dblclick(()=>{
    $('#ibra8').animate({
        height: 470,
        width : 594,
    });
});

//zoom out to gallery
$('#ibra8').click(()=>{
    $('#ibra8').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra9').dblclick(()=>{
    $('#ibra9').animate({
        height: 675,
        width : 1200,
    });
});

//zoom out to gallery
$('#ibra9').click(()=>{
    $('#ibra9').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra10').dblclick(()=>{
    $('#ibra10').animate({
        height: 800,
        width : 1200,
    });
});

//zoom out to gallery
$('#ibra10').click(()=>{
    $('#ibra10').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra11').dblclick(()=>{
    $('#ibra11').animate({
        height: 432,
        width : 768,
    });
});

//zoom out to gallery
$('#ibra11').click(()=>{
    $('#ibra11').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra12').dblclick(()=>{
    $('#ibra12').animate({
        height: 612,
        width : 407,
    });
});

//zoom out to gallery
$('#ibra12').click(()=>{
    $('#ibra12').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra13').dblclick(()=>{
    $('#ibra13').animate({
        height: 516,
        width : 912,
    });
});

//zoom out to gallery
$('#ibra13').click(()=>{
    $('#ibra13').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra14').dblclick(()=>{
    $('#ibra14').animate({
        height: 700,
        width : 482,
    });
});

//zoom out to gallery
$('#ibra14').click(()=>{
    $('#ibra14').animate({
        height: 120,
        width : 210,
    });
});

//zoom in photo to original size
$('#ibra15').dblclick(()=>{
    $('#ibra15').animate({
        height: 594,
        width : 430,
    });
});

//zoom out to gallery
$('#ibra15').click(()=>{
    $('#ibra15').animate({
        height: 120,
        width : 210,
    });
});

//home page function invocation for the first visit
goToHomePage();



