
// Function to fetch and log todo by id
async function fetchTodoById(id) {
    try {
        // Fetch todo by id 
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        // check if the request was successful 
        if (response.ok) {
            // parse the JSON response
            const todo = await response.json();

            // log the todo
            console.log('Todo:', todo);

            // get user details using userID from the todo
            await fetchUserDetails(todo.userId);
        } else {
            // log an error if the request was not successful
            console.error(`Failed to fetch todo. Status code: ${response.status}`);

        }
    } catch (error) {
            // log an error if there is any issue with the fetch operation
            console.error('Error fetching todo:', error.message);
        }
}


// Function to fetch and log user details by userId

async function fetchUserDetails(userId) {

    try {

        // Fetch user details by userId
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        // Check if the request was successful 
        if (userResponse.ok) {

            // Parse the JSON response
            const userDetails = await userResponse.json();

            // Log the user details
            console.log('User Details:', userDetails);
        } else {
            // Log an error if the request was not successful 
            console.error(`Failed to fetch user details. Status code: ${userResponse.status}`);
        } 
    } catch (error) {
        // Log an error if there is any issue with the fetch operation
        console.error('Error fetching user details:', error.message);
    }
    
}

// Call the function
fetchTodoById(1);