$(document).ready(init);

function init(){
    $.get("data.json").then(showData).catch(handleError)
}

function showData(data){
    let table = $("#myTable");
    generateTable(table, data);
}

function generateTable(table, data){

    for(let element of data){
        let farenheit = (9/5 * element.temperature) + 32;
        let weather = `<tr><td>${element.city}</td><td>${element.temperature}</td><td>${farenheit}</td></tr>`
        $("#weather-list").append(weather);
        console.log(element)
    }
}
