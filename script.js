function createTable() {
    //Write your code here
	// Prompt the user to enter the number of rows
    var numRows = prompt("Input number of rows:");

    // Convert the input to a number
    numRows = parseInt(numRows);

    // Validate if numRows is a valid number
    if (isNaN(numRows) || numRows <= 0) {
        alert("Please enter a valid number of rows.");
        return;
    }

    // Prompt the user to enter the number of columns
    var numColumns = prompt("Input number of columns:");

    // Convert the input to a number
    numColumns = parseInt(numColumns);

    // Validate if numColumns is a valid number
    if (isNaN(numColumns) || numColumns <= 0) {
        alert("Please enter a valid number of columns.");
        return;
    }

    // Get the reference to the table
    var table = document.getElementById("myTable");

    // Clear the existing table content
    table.innerHTML = '';

    // Create rows and cells in the table based on user input
    for (var i = 0; i < numRows; i++) {
        // Create a new row
        var row = table.insertRow(i);

        // Create cells in the row
        for (var j = 0; j < numColumns; j++) {
            // In each cell, set the text as "Row-i Column-j"
            var cell = row.insertCell(j);
            cell.innerHTML = "Row-" + i + " Column-" + j;
        }
    }
  
}
