document.addEventListener('DOMContentLoaded', function() {
  const studentForm = document.getElementById('studentForm');
  const studentsList = document.getElementById('studentsList');
  const themeButton = document.getElementById('themeButton');
  const container = document.querySelector('.container');
  let darkMode = false;

  studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const cgpa = document.getElementById('cgpa').value;

    const studentItem = document.createElement('div');
    studentItem.classList.add('student');
    studentItem.innerHTML = `
      <strong>${name}</strong> (Age: ${age}, Phone: ${phone}, Email: ${email}, CGPA: ${cgpa})
      <button class="delete-button" onclick="deleteStudent(this)">Delete</button>
    `;
    studentsList.appendChild(studentItem);

    // Reset form
    studentForm.reset();
  });

  // Function to delete student
  window.deleteStudent = function(element) {
    element.parentNode.remove();
  };

  // Toggle theme button
  
  themeButton.addEventListener('click', function() {
    if (darkMode) {
      document.body.style.backgroundColor = '#f0f0f0';
      document.body.style.color = '#000';
      studentForm.style.backgroundColor = '#f0f0f0';
      container.style.backgroundColor = '#f0f0f0';
      themeButton.textContent = 'Dark mode';
    } else {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
      studentForm.style.backgroundColor = '#000';
      container.style.backgroundColor = '#000';
      themeButton.textContent = 'Light mode';
    }
    darkMode = !darkMode;
  });
});
