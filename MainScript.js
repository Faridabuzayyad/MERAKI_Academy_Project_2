const goToHomePage =() =>{
    $('#aboutContent').hide();
}

goToHomePage();

$("#about").click(()=>{
    $('.bodyMain').hide();
    $('#aboutContent').show();
    $("#about").disabled();
});
