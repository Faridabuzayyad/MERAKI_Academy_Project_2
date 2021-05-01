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