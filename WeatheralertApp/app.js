let header = document.getElementById("header");
header.innerText = "Weather Alert App";

let greetingResult = document.getElementById("greetingResult");
greetingResult.innerText = "Welcome to the most accurate weather app!";

let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    activateItem: function(item){
        for(let navItem of this.navItems){
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function(index){
        for(let page of this.pages){
            page.style.display = "none";
        }
        this.pages[index].style.display = "block";
    },
    registerClickEventListeners: function(){
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(e){
                navigationService.displayPage(i);
                navigationService.activateItem(this); //this => target of the event, the navItem that is clicked
            })
        }
    }
}

let weatherApiService = {
    apiKey: "31b3375edaaf1a0b94cb96483eb94296",
    getWeatherData: async function(city){
        try {
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`;
            let response = await fetch(url);
            let data = await response.json();
            let statisticsResult = statisticsService.calculateStatistics(data);
            uiService.displayStatistics(statisticsResult);
            uiService.displayHourlyData(data);
        } catch(error) {
            console.log(`An error: ${error} occured`)
        }
    }
}

let statisticsService = {
    calculateStatistics: function(data){
        let initialValues = {
            tempSum: 0,
            humiditySum: 0,
            minTemp: data.list[0].main.temp,
            maxTemp: data.list[0].main.temp,
            minHumidity: data.list[0].main.humidity,
            maxHumidity: data.list[0].main.humidity,
        }

        let res = data.list.reduce(function(resultInitialValues, listItem){
            resultInitialValues.tempSum += listItem.main.temp;
            resultInitialValues.humiditySum += listItem.main.humidity;

            if(listItem.main.temp < resultInitialValues.minTemp){
                resultInitialValues.minTemp = listItem.main.temp;
            }

            if(listItem.main.temp > resultInitialValues.maxTemp){
                resultInitialValues.maxTemp = listItem.main.temp;
            }

            if(listItem.main.humidity < resultInitialValues.minHumidity){
                resultInitialValues.minHumidity = listItem.main.humidity;
            }

            if(listItem.main.humidity > resultInitialValues.maxHumidity){
                resultInitialValues.maxHumidity = listItem.main.humidity;
            }

            return resultInitialValues;
        }, initialValues)

        let result = { 
            averageTemp: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemp,
            maxTemperature: initialValues.maxTemp,
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }
        return result;
    }
}

let uiService = {
    displayStatistics: function(statisticsResult){
        document.getElementById("statisticsResult").innerHTML = `
            <div class="container">
                <div class="row">
                    <h2 class="col">AVG TEMP: ${statisticsResult.averageTemp.toFixed(2)} °C</h2>
                    <h2 class="col">AVG HUMIDITY: ${statisticsResult.averageHumidity.toFixed(2)}%</h2>
                </div>
                <div class="row">
                    <h2 class="col-sm-6">MIN TEMP: ${statisticsResult.minTemperature.toFixed(2)} °C</h2>
                    <h2 class="col-sm-6">MIN HUMIDITY: ${statisticsResult.minHumidity.toFixed(2)}%</h2>
                </div>
                <div class="row">
                    <h2 class="col-sm-6">MAX TEMP: ${statisticsResult.maxTemperature.toFixed(2)} °C</h2>
                    <h2 class="col-sm-6">MAX HUMIDITY: ${statisticsResult.maxHumidity.toFixed(2)}%</h2>
                </div>
            </div>
        `;
    },

    displayHourlyData: function(data) {
        let hourlyTable = document.getElementById("hourlyTableResult");
        hourlyTable.innerHTML = ""; // Clear previous data
        let tableContent = "<table class='table'><thead><tr><th>Icon</th><th>Description</th><th>Date</th><th>Time</th><th>Temperature (°C)</th><th>Humidity (%)</th><th>Wind Speed (m/s)</th></tr></thead><tbody>";

        // Loop through hourly data and construct table rows
        data.list.forEach(item => {
            let iconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            let date = new Date(item.dt * 1000);
            let time = date.toLocaleTimeString('en-US', { hour12: false });
            tableContent += `<tr><td><img src="${iconUrl}" alt="Weather Icon"></td><td>${item.weather[0].description}</td><td>${date.toLocaleDateString()}</td><td>${time}</td><td>${item.main.temp}</td><td>${item.main.humidity}</td><td>${item.wind.speed}</td></tr>`;
        });

        tableContent += "</tbody></table>";
        hourlyTable.innerHTML = tableContent;
    }
}

// Adding event listener to the search button
document.getElementById("citySearchBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents form submission and page reload
    let city = document.getElementById("citySearchInput").value;
    weatherApiService.getWeatherData(city);
});

navigationService.registerClickEventListeners();
