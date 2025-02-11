// Jamile Obeid: 762004935
// Malak Alqaryouti: 759007889

// TODO: Execute/call the init function.
$(document).ready(init);

// TODO: Implement the init function.
function init() {
    $.get("data.json").then(showData).catch(handleError);
}

function handleError(error) {
    console.error("Error loading data:", error);
    alert("Failed to load student data.");
}

function calculateAverage(a,b,c) {
        let average = (a+b+c)/3;
        return average;
}

// TODO: Implement the function that displays student data in the table
function showData(data) {
    let tableBody = $("#student-table-body");
    generateTable(tableBody,data);
    // TODO: Call a function to generate table rows using the data
}
/*
========================================
🚨 TODO: Students must implement generateTable! 🚨
----------------------------------------
- The function should:
  1. Clear previous data in the tbody.
  2. Loop through the `data` array.
  3. Calculate the average grade using `calculateAverage()`.
  4. Determine if the student "Passes" or "Fails".
  5. Dynamically create table rows and append them.
----------------------------------------
========================================
*/
function generateTable(tableBody, data) {
    tableBody.empty();
    for (let element of data) {
        let row = $("<tr>");
        for (let key in element) {
            let cell = $("<td>").text(element[key]);
            row.append(cell);
        }
        let averageRow = calculateAverage(element.database, element.networking, element.programming).toFixed(2);
        let averageCell = $("<td>").text(averageRow);
        row.append(averageCell);
        let status = "";
        if (averageRow >= 60) {
            status = "Pass";
        }
        else {
            status = "Fail";
        }
        let statusCell = $("<td>").text(status);
        row.append(statusCell);
        tableBody.append(row);
    }
}
