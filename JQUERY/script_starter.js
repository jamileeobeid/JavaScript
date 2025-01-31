$(document).ready(init);

function init(){
    $.get("practice4.json").then(showData).catch(handleError)
}

function handleError(){}

function showData(data){
    let table = $("#myTable");
    generateTableV2(table, data);
}

// --------- DYNAMIC ---------
function generateTable(table, data){
    table.empty();
    for(let element of data){
        let row = $("<tr>");
        for(let key in element){
            let cell = $("<td>").text(element[key]);
            row.append(cell);
        }
        table.append(row);
    }
}

// --------- HARDCODE ---------
function generateTableV2(table, data){
    table.empty();
    for(let element of data) {
        let row = $("<tr>");
        table.append(
            `<td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.city}</td>`
        )
        table.append(row);
    }
}
