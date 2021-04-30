// Hide other layers content , and disable Home page button
const goToHomePage =() =>{
    $('#aboutContent').hide();
    $('#Home').removeAttr("href");
}

//when the document is ready , invoke goToHomePage
$(document).ready(goToHomePage)

//go to about page + prevent default function ($(document).ready(goToHomePage)) from load again + enable Home button again
$("#about").click((e) =>{
    e.preventDefault() 
    $('.bodyMain1').fadeOut();
    $('.bodyMain2').fadeOut();
    $('#aboutContent').fadeIn();
    $('#Home').attr("href", './LandingPage.html');
    $('#about').removeAttr("href")
});

//selecting players (html elements)
const ibrahimovic = $("#ibra");
const neymar = $("#neymar");
neymar.hide();

//array of players in Media Gallery Page
const arrayOfPlayers = [ibrahimovic , neymar];

//next button functionality
const mediaGalleryNext = () => {
    for(i=0 ; i < arrayOfPlayers.length ; i++){
        if(arrayOfPlayers[i].is(":visible") ){
            arrayOfPlayers[i].fadeOut()
            arrayOfPlayers[i+1].fadeIn()
        };
    };
};

//back button functionality
const mediaGalleryBack = () => {
    for(i=0 ; i < arrayOfPlayers.length ; i--){
        if(arrayOfPlayers[i].is(":visible")){
            arrayOfPlayers[i].fadeOut()
            arrayOfPlayers[i-1].fadeIn()
        };
    };
};

//selecting buttons
const nextButton = $("#next");
const backButton = $("#back");

//on click functionality
nextButton.click(mediaGalleryNext);
backButton.click(mediaGalleryBack);
