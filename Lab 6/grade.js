
/*
ERRORS FIXED:

1. grade.html line 9:
   Form submission was not properly handled.
   Fixed by using onsubmit="return checkMark(event)".

2. grade.html line 11:
   Input name and label were not properly connected.
   Fixed by using id="name" and name="name".

3. grade.html line 12:
   Name input was missing a proper closing structure.
   Fixed the input and added a line break.

4. grade.html line 13:
   Mark input was not properly connected to its label.
   Fixed by using id="mark" and name="mark".

5. grade.js line 5:
   Used assignment operator (=) instead of comparison.
   Fixed by using name === "".

6. grade.js line 9:
   Used isNan instead of isNaN.
   Fixed by using isNaN(mark).

7. grade.js line 13:
   Mark validation condition was incorrect.
   Fixed by checking mark < 0 || mark > 100.

8. grade.js line 18:
   Grade conditions were incomplete.
   Fixed using >= 80, >= 65 and >= 50.

9. grade.js line 28:
   Used style.colour instead of style.color.
   Fixed using style.color.

10. grade.js line 34:
    Grade table function had incorrect array and loop syntax.
    Fixed using arrays, a for loop and proper HTML.

11. grade.html:
    Result disappeared because form submission refreshed the page.
    Fixed using event.preventDefault().

12. grade.js:
    Empty mark was not checked.
    Added alert "Mark field cannot be empty."
*/


/* Function to check name and mark */
function checkMark(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get name and mark values
    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Check if name is empty
    if (name.trim() === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check if mark is empty
    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check if mark is not a number
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark into integer
    mark = parseInt(mark);

    // Check mark range
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Variable to store grade
    let grade;

    // Determine grade
    if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 65) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "Student: " + name + "<br>" +
        "Mark: " + mark + "<br>" +
        "Your grade is: " + grade;

    // Change result colour based on grade
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    }
    else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    }
    else {
        document.getElementById("result").style.color = "red";
    }

    // Display date and time when grade is checked
    let date = new Date();

    document.getElementById("checkTime").innerHTML =
        "Checked on: " + date;

    // Keep result on page
    return false;
}


/* Function to display grade table */
function showTable() {

    // Grade array
    let grades = ["A", "B", "C", "F"];

    // Range array
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create table HTML
    let tableHTML = "<table>";

    // Create table header
    tableHTML += "<tr>";
    tableHTML += "<th>Grade</th>";
    tableHTML += "<th>Marks Range</th>";
    tableHTML += "</tr>";

    // Loop through grade array
    for (let i = 0; i < grades.length; i++) {

        // Add table row
        tableHTML += "<tr>";
        tableHTML += "<td>" + grades[i] + "</td>";
        tableHTML += "<td>" + ranges[i] + "</td>";
        tableHTML += "</tr>";
    }

    
    tableHTML += "</table>";

    // Display table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}


/* Function to generate random mark */
function randomMark() {

    // Generate random whole number from 0 to 100
    let random = Math.floor(Math.random() * 101);

    // Put random mark into mark input
    document.getElementById("mark").value = random;
}
