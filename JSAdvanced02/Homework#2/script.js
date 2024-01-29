
// We create an empty array to store objects representing reminders
const reminders = [];


// Get the button elements
const addReminderBtn = document.getElementById('addReminderBtn');
const showRemindersBtn = document.getElementById('showRemindersBtn');

// Add event listeners
addReminderBtn.addEventListener('click', addReminder);
showRemindersBtn.addEventListener('click', showReminders);



// Add reminder function is called when the "Add Reminder" button is clicked
function addReminder() {
  // Get values from all of the inputs
  const title = document.getElementById('title').value;
  const priority = document.getElementById('priority').value;
  const color = document.getElementById('color').value;
  const description = document.getElementById('description').value;

  // Than create the reminder object
  const reminder = { title, priority, color, description };

  // Add reminder to the array
  reminders.push(reminder);

  // Lastly we need to clear input fields
  document.getElementById('title').value = '';
  document.getElementById('priority').value = 'low';
  document.getElementById('color').value = '#000000';
  document.getElementById('description').value = '';

  alert('Reminder added successfully!');
}


//  Show Reminders function is called when the "Show All Reminders" button is clicked
function showReminders() {
  // Get the table body element
  const tableBody = document.getElementById('reminderTableBody');

  // Clear existing rows
  tableBody.innerHTML = '';

  // Loop through the 'reminders' array and add rows to the table
  reminders.forEach(reminder => {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell(0);
    const priorityCell = row.insertCell(1);
    const descriptionCell = row.insertCell(2);

    // We set all of the cell values
    titleCell.innerText = reminder.title;
    titleCell.style.color = reminder.color; // Here we set the color of title
    priorityCell.innerText = reminder.priority;
    descriptionCell.innerText = reminder.description;
  });
}
