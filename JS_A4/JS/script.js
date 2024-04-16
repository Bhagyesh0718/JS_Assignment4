const apiKey = "863ba49fd3574cd78f332016233110"; // API key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Barrie`; // For Barrie Location
        
        function showInfo() {
            var information = "Name : Bhagyesh Kachhiya | Student Id : 200556134";
            document.getElementById("info-container").innerHTML = information;
        }
        // Fetching weather data from API
        fetch(apiUrl)
            .then((response) => {
                // Verifying if the response is successful
                if (!response.ok) {
                    throw new Error("The network did not respond satisfactorily.");
                }
                return response.json();
            })
            .then((data) => {
                // Choosing all elements that have the class weatherInfo
                const weatherInfoElements =
                    document.querySelectorAll(".weatherInfo");

                // Gathering the important details from the JSON response.
                const location = data.location.name;
                const temperature = data.current.temp_c;
                const weatherDescription = data.current.condition.text;

                // data template to be displayed
                const weatherData = `
              <div class="weather-output">
                <h2>Current Weather in ${location}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Condition: ${weatherDescription}</p>
                <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
              </div>
            `;

                weatherInfoElements.forEach((element) => {
                    element.innerHTML = weatherData;
                });
            })
            .catch((error) => {
                console.error("An issue occurred while retrieving or interpreting the weather data.", error);
            });
