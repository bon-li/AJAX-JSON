var planetList = new Array();
var rowID;

$(function() {
    //Gets local storage values
    rowID = localStorage.getItem("rowID");
    planetList = JSON.parse(localStorage.getItem("planetList"));

    //Populates the HTML
    $("#planetName").html(planetList[rowID].planetName);
    $("#planetColor").html(planetList[rowID].planetColor);
    $("#planetRadiusKM").html(planetList[rowID].planetRadiusKM);
    $("#fromSun").html(planetList[rowID].fromSun);
    $("#fromEarth").html(planetList[rowID].fromEarth);
    $("#image").html(`<p style="background: url(../images/${planetList[rowID].image});background-color:black;">`);
    document.getElementsByTagName("body")[0].style.backgroundImage=`url(../images/${planetList[rowID].image})`;
    

});