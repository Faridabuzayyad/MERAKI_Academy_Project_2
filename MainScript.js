// Hide other layers content , and disable Home page button
const goToHomePage =() =>{
    $('#aboutContent').hide();
}



//when the document is ready , invoke goToHomePage
$(window).ready(goToHomePage)

//go to about page + prevent default function ($(document).ready(goToHomePage)) from load again + enable Home button again
$("#about").click((e) =>{
    e.preventDefault() 
    $('.bodyMain1').fadeOut();
    $('.bodyMain2').fadeOut();
    $('#aboutContent').fadeIn();
    $('#Home').attr("href", './LandingPage.html');
    $('#about').removeAttr("href")
});

//selecting first Image(html element)
let currentImage = $(".currentImage");

//array of players in Media Gallery Page
let arrayOfPlayers = ['zlatanIbra.png' , 'NeymarJR.png'];
let arrayOfIDs = ["ibra" , "neymar"]

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
    currentImage.attr('id', arrayOfIDs[i]) ;
	currentImage.attr('src', "./"+arrayOfPlayers[i]);
    return currentImage

} 
 

//selecting buttons
const nextButton = $("#next");
const backButton = $("#back");

//on click functionality
nextButton.click(next);
backButton.click(back);

