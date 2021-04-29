const goToHomePage =() =>{
    $('#aboutContent').hide();
}

goToHomePage();

const aboutPage = () =>{
    $('.bodyMain').hide();
    $('#aboutContent').show();
    $("#about").disabled();
};
