// // Prompt the user to input a positive integer
// let number = prompt("Enter a positive integer:");

// // Convert the input to a number
// number = parseInt(number);



// // Get the output element from the HTML document
// const outputElement = document.getElementById("output");

// // Check that the input is a positive integer
// if (isNaN(number) || number <= 0) {
//   outputElement.innerText = "Invalid input. Please enter a positive integer.";
// } else {
//   // Create a table to display the multiplication table
//   let table = "<table>";
//   for (let i = 1; i <= 10; i++) {
//     table += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
//   }
//   table += "</table>";

//   // Display the multiplication table in the output element
//   outputElement.innerHTML = table;
// }


// Prompt the user to input a positive integer
let number = prompt("Enter a positive integer:");

// Convert the input to a number
number = parseInt(number);

// Get the output element from the HTML document
const outputElement = document.getElementById("output");

// Check that the input is a positive integer
if (isNaN(number) || number <= 0) {
  const errorElement = document.createElement("p");
  errorElement.textContent = "Invalid input. Please enter a positive integer.";
  document.body.appendChild(errorElement);
} else {
  // Create a table to display the multiplication table
  const table = document.createElement("table");
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    const expressionCell = document.createElement("td");
    expressionCell.textContent = `${number} x ${i}`;
    const equalsCell = document.createElement("td");
    equalsCell.textContent = "=";
    const resultCell = document.createElement("td");
    resultCell.textContent = number * i;
    row.appendChild(expressionCell);
    row.appendChild(equalsCell);
    row.appendChild(resultCell);
    table.appendChild(row);
  }
  
  // Display the multiplication table in the output element
  document.body.appendChild(table);
}
