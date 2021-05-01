// Home button function 
const goToHomePage =() =>{
    $('#aboutContent').hide();
    $('#mediaGalleryButtons').hide();
    $('#mediaGalleryPage').hide();
    $('.photoShow').hide();
    $('.homeContent').fadeIn();
};

//load Home Page with Home page content when entering the site
goToHomePage();

// Selecting home button
const homePage = $('#home');

// Invoking home button function
homePage.click(goToHomePage);


// About page function
const goToAboutPage =(e) =>{
    $('#aboutContent').fadeIn();
    $('#mediaGalleryButtons').hide();
    $('#mediaGalleryPage').hide();
    $('.photoShow').hide();
    $('.homeContent').hide();
};

//Selecting about button
const aboutPage = $('#aboutUs');

// Invoking about button function
aboutPage.click(goToAboutPage);

//Media gallery page function
const goToMediaGallery =() =>{
    console.log("working");
    $('#aboutContent').hide();
    $('.photoShow').hide();
    $('.homeContent').hide();
    $('#mediaGalleryButtons').fadeIn();
    $('#mediaGalleryPage').fadeIn();
    };

//Selecting media gallery button    
const mediaGallery = $('#mediaGallery');

//invoking media gallery function

mediaGallery.click(goToMediaGallery);



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
