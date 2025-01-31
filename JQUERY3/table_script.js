$(document).ready(init);

function init(){
    $.get('https://jsonplaceholder.typicode.com/users').then(showData).catch(handleError);
}

function showData(data){
    let table = $("#myTable");
    generateTable(table, data);
}

function handleError(){}

function generateTable(table, data){
    let tbody = $("myTable")
    tbody.empty();
    for(let element of data){
        let information = `<tr><td>${element.name}</td><td>${element.username}</td><td>${element.address.street}</td></tr>`
        $("#users").append(information)
        console.log(element);
    }
}
