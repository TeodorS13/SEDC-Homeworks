
const getAcademyDataBtn = document.getElementById('getAcademyDataBtn');
const academyNameElement = document.getElementById('academyName');
const academyInfoList = document.getElementById('academyInfoList');


getAcademyDataBtn.addEventListener('click', function () {
  fetch('https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json')
    .then(response => response.json())
    .then(data => {

      // Check if 'academy' property exists in the data and it is a string
      if (data.hasOwnProperty('academy') && typeof data.academy === 'string') {
        academyNameElement.textContent = data.academy;
      } else {
        console.error('No valid academy data found in the response.');
        return;
      }


      // Create an unordered list for academy information
      const academyUl = document.createElement('ul');


      // Create a list item for the trainer
      const trainerListItem = document.createElement('li');
      if (data.hasOwnProperty('trainer') && typeof data.trainer === 'string') {
        trainerListItem.textContent = `Trainer: ${data.trainer}`;
      } else {
        console.error('No valid trainer data found in the response.');
        trainerListItem.textContent = 'Trainer: Not available';
      }
      academyUl.appendChild(trainerListItem);


      // Create a list item for the assistant
      const assistantListItem = document.createElement('li');
      if (data.hasOwnProperty('assistant') && typeof data.assistant === 'string') {
        assistantListItem.textContent = `Assistant: ${data.assistant}`;
      } else {
        console.error('No valid assistant data found in the response.');
        assistantListItem.textContent = 'Assistant: Not available';
      }
      academyUl.appendChild(assistantListItem);


      // Check if 'students' property exists in the data and it is an array
      if (data.hasOwnProperty('students') && Array.isArray(data.students)) {
        // Create a heading for the students section
        const studentsHeading = document.createElement('h2');
        studentsHeading.textContent = 'Students';
        academyUl.appendChild(studentsHeading);


        // Create an unordered list for students
        const studentsUl = document.createElement('ul');
        academyUl.appendChild(studentsUl);


        // Iterate through the students and add them to the list
        data.students.forEach(student => {
          if (typeof student === 'string') {
            const listItem = document.createElement('li');
            listItem.textContent = student;
            studentsUl.appendChild(listItem);
          } else {
            console.error('Invalid student data found in the response.');
          }
        });
      } else {
        console.error('No valid students data found in the response.');
      }

      
      // Clear the existing content and append the academy information list to the page
      academyInfoList.innerHTML = '';
      academyInfoList.appendChild(academyUl);
    })
    .catch(error => console.error('Error fetching academy data:', error));
});
