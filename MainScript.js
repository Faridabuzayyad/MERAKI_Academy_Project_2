const goToHomePage =() =>{
    $('#aboutContent').hide();
}

goToHomePage();

const aboutPage = () =>{
    $('.bodyMain').hide();
    $('#aboutContent').show();
    $("#about").disabled();
};

const ibrahimovice = $("#ibra");
const neymar = $("#neymar");

const arrayOfPlayers = [ibrahimovic , neymar];
const mediaGalleryNext = () => {
    for(i=0 ; i < arrayOfPlayers.length ; i++){
        if(arrayofPlayers[i].fadeIn()){
            arrayofPlayers[i].fadeOut()
            arrayOfPlayers[i+1].fadeIn()
        };
    };
};

const mediaGalleryBack = () => {
    for(i=0 ; i < arrayOfPlayers.length ; i--){
        if(arrayofPlayers[i].fadeIn()){
            arrayofPlayers[i].fadeOut()
            arrayOfPlayers[i-1].fadeIn()
        };
    };
};