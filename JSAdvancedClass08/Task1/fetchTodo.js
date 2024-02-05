// Function to fetch and log todo by id
async function fetchTodoById(id) {
    try {
      // Fetch todo by id
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      
      // Check if the request was successful 
      if (response.ok) {
        // Parse the JSON response
        const todo = await response.json();
  
        // Log the todo from the response
        console.log('Todo:', todo);
      } else {
        console.error(`Failed to fetch todo. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching todo:', error.message);
    }
  }
  
  // Call the function with id 1
  fetchTodoById(1);
  