// JavaScript source code
// Student data array in JSON format
const students = [
    {
        name: "Jason Smith",
        age: 25,
        major: "Computer Science"
    },
    {
        name: "Emily Johnson",
        age: 22,
        major: "Business Administration"
    },
    {
        name: "Michael Brown",
        age: 28,
        major: "Mechanical Engineering"
    }
];

// Function to render students in HTML
function renderStudents() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear loading text

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Major:</strong> ${student.major}</p>
    `;

        outputDiv.appendChild(card);
    });
}

// Call the function when the page loads
renderStudents();

// Weather API (OpenWeatherMap) - replace with your API key if needed
fetch("https://api.open-meteo.com/v1/forecast?latitude=33.662133&longitude=-117.99591&current_weather=true")
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `Current weather: ${weather.temperature}°C, Windspeed: ${weather.windspeed} km/h`;
    })
    .catch(error => {
        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = "Failed to load weather data.";
        console.error("Weather API error:", error);
    });
