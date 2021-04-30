// Home button function 
const goToHomePage =() =>{
    $('#aboutContent').hide();
    $('.bodyMain').fadeIn();
};
// Selecting home button
const homePage = $('#home');

// Invoking home button function
homePage.click(goToHomePage);


// About page function
const goToAboutPage =() =>{
    $('.bodyMain').fadeOut();
    $('#aboutContent').fadeIn();
};

//Selecting about button
const aboutPage = $('#aboutUs');

// Invoking about button function
aboutPage.click(goToAboutPage);

//Media gallery page function
const goToMediaGallery =() =>{
    location.href = "./MediaGallery.html";
    };

    $('#mediaGallery').click(goToMediaGallery);



//selecting first Image(html element)
let currentImage = $(".currentImage");

//array of players in Media Gallery Page
let arrayOfPlayers = ['zlatanIbra.png' , 'NeymarJR.png'];
let arrayOfIDs = ["ibra" , "neymar"];

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

//when click on MediaGallery in Main menu
//const goToMediaGallery = () =>{
    
//};

//$(window).ready(goToMediaGallery);

//when Select ibra go to his photo gallery
$('#ibra').click((e)=>{
    e.preventDefault();
    $('.currentImage').fadeOut();
    $('#ibra1').hide();
    $('#ibra2').hide();
        $('#ibra3').hide();
        $('#ibra4').hide();
        $('#ibra5').hide();
        $('#ibra6').hide();
        $('#ibra7').hide();
});
