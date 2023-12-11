/*document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and tutor-list elements
    var businessButton = document.getElementById("businessButton");
    var csButton = document.getElementById("csButton");
    var englishButton = document.getElementById("englishButton");
    var historyButton = document.getElementById("historyButton");
    var mathButton = document.getElementById("mathButton");
    var scienceButton = document.getElementById("scienceButton");
    var tutorList = document.querySelector(".tutor-list");

    // Add a click event listener to the business button
    businessButton.addEventListener("click", function() {
        // Update the tutor-list content with business tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>Business Tutors</h2><ul class='list-style'><li>Tutor 1</li><li>Tutor 2</li><li>Tutor 3</li></ul>";
    });

    csButton.addEventListener("click", function() {
        // Update the tutor-list content with computer science tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>Computer Science Tutors</h2><ul class='list-style'><li>Tutor 5</li><li>Tutor 6</li><li>Tutor 7</li></ul>";
    });

    englishButton.addEventListener("click", function() {
        // Update the tutor-list content with english tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>English Tutors</h2><ul class='list-style'><li>Tutor 1</li><li>Tutor 2</li><li>Tutor 3</li></ul>";
    });

    historyButton.addEventListener("click", function() {
        // Update the tutor-list content with history tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>History Tutors</h2><ul class='list-style'><li>Tutor 1</li><li>Tutor 2</li><li>Tutor 3</li></ul>";
    });

    mathButton.addEventListener("click", function() {
        // Update the tutor-list content with math tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>Math Tutors</h2><ul class='list-style'><li>Tutor 1</li><li>Tutor 2</li><li>Tutor 3</li></ul>";
    });

    scienceButton.addEventListener("click", function() {
        // Update the tutor-list content with science tutor information
        tutorList.innerHTML = "<h2 class='heading-2'>Science Tutors</h2><ul class='list-style'><li>Tutor 1</li><li>Tutor 2</li><li>Tutor 3</li></ul>";
    });

});
*/

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and tutor-list elements
    var buttons = document.querySelectorAll(".button");
    var tutorList = document.querySelector(".tutor-list");

    // Function to fetch and parse the CSV file
    async function fetchTutors(subject) {
        try {
            // Fetch the CSV file
            const response = await fetch("tutors.csv");
            const data = await response.text();
            console.log(subject)

            // Parse the CSV data
            const rows = data.split(/\r?\n/).map(row => row.split(",").map(value => value.trim()));
            console.log("All rows:", rows);

            rows.forEach((row, index) => console.log(`Row ${index + 1}:`, row));

            const tutors = rows
                .filter(row => row[1] === subject) // Filter tutors based on the selected subject
                .map(row => row[0]); // Extract tutor names
                console.log("Filtered tutors:", tutors);

            // Update the tutor-list content
            tutorList.innerHTML = "<h2 class='heading-2'>" + subject + " Tutors</h2><ul>";
            tutors.forEach(function(tutor) {
                tutorList.innerHTML += "<li>" + tutor + "</li>";
                console.log("Adding tutor:", tutor);
            });
            tutorList.innerHTML += "</ul>";

        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
    }

    // Add a click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Extract the subject from the button's text content
            var subject = button.textContent.trim();

            // Update the tutor-list based on the selected subject
            fetchTutors(subject);
            var ulElement = tutorList.querySelector('ul');
            ulElement.style.listStyleType = 'none';
            ulElement.style.padding = '0';
            ulElement.style.margin = '0';
            ulElement.style.listStyle = 'none'; // Add
        });
    });
});
