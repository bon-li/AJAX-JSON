var rowID;
var planetList = new Array();

//Planet object constructor
class Planet {
    constructor(planetName, planetColor, planetRadiusKM, fromSun, fromEarth, image) {
        this.planetName = planetName;
        this.planetColor = planetColor;
        this.planetRadiusKM = planetRadiusKM;
        this.fromSun = fromSun;
        this.fromEarth = fromEarth;
        this.image = image;
    }
}

//Retrieves json data
$(function() {
    $.ajax({
        type: "GET",
        url: "data/planets.json",
        dataType: "json",
        success: loadJSON,
        error: function(err) {alert(`Error while fetching data
        ${err.status} \n ${err.statusText}`);}
    })
});


function loadJSON(data) {
    console.log(`data: ${data}`);

    //sets values for planet object
    for(let planet of data.solarSystem.planets) {
        planetList.push(new Planet(planet.planetName, planet.planetColor, planet.planetRadiusKM, 
            planet["distInMillionsKM"].fromSun, planet["distInMillionsKM"].fromEarth, planet.image));
    }

    mainIndex();
}

//Builds HTML on main index page and creates list of planets
function mainIndex() {
    $("#planetList").html = ("");

    //Creates planet list
    for(index = 0; planetList.length; index++) {
        $("#planetList").append(`
            <li li-id='${index}'>
            <a href='./otherpages/planet.html'>${planetList[index].planetName}</a>
            </li>
        `);
    }
}

//saves planet data to local storage on click
$(document).on("click", "#planetList >li", function (){
    console.log("Saving data to local storage");
    localStorage.setItem("rowID", $(this).closest("li").attr("li-id"));
    localStorage.setItem("planetList", JSON.stringify(planetList));
}); 
