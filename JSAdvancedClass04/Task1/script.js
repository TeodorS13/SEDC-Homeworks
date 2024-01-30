

    // Step 1: Get references to the button and the unordered list
    const getAstrosBtn = document.getElementById('getAstrosBtn');
    const astrosList = document.getElementById('astrosList');
  
    // Step 2: Attach a click event listener to the button
    getAstrosBtn.addEventListener('click', function () {
      // Step 3: Call the Astros API when the button is clicked
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
          // Step 4: Clear the existing list content
          astrosList.innerHTML = '';
  
          // Step 5: Iterate through the astronauts and add them to the list
          data.people.forEach(astronaut => {
            const listItem = document.createElement('li');
            listItem.textContent = astronaut.name;
            astrosList.appendChild(listItem);
          });
        })
        .catch(error => console.error('Error fetching astronauts:', error));
    });
  
