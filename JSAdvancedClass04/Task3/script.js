document.getElementById('getPlanetsBtn').addEventListener('click', function() {
    fetchPlanets('https://swapi.dev/api/planets/?page=1');
  });
  


  function fetchPlanets(apiUrl) {
    // To make sure we clear previous table content
    document.getElementById('planetsBody').innerHTML = '';
  
    // Fetch data from the Star Wars API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Call function to print planets into the table
        printPlanets(data.results);
      })
      .catch(error => console.error('Error fetching planets:', error));
  }
  


  function printPlanets(planets) {
    // Get the table body element
    const tableBody = document.getElementById('planetsBody');
  
    // We loop through the first 10 planets or fewer if there are fewer planets and add them to the table
    for (let i = 0; i < 10 && i < planets.length; i++) {
      const planet = planets[i];
      const row = tableBody.insertRow();
  
      // Add cell for each property
      const nameCell = row.insertCell(0);
      const populationCell = row.insertCell(1);
      const climateCell = row.insertCell(2);
      const gravityCell = row.insertCell(3);
  
      // Fill cells with planet information
      nameCell.textContent = planet.name;
      populationCell.textContent = planet.population;
      climateCell.textContent = planet.climate;
      gravityCell.textContent = planet.gravity;
    }
  }
  