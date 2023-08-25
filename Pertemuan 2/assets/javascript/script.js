document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gradeForm');
    const resultTable = document.getElementById('resultTable');
    const tbody = resultTable.querySelector('tbody');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    
    const hitungButton = document.getElementById('hitungButton');
    hitungButton.addEventListener('click', function() {
      const nama = document.getElementById('nama').value;
      const matkul = document.getElementById('matkul').value;
      const grade = document.getElementById('grade').value;
      
      const nilaiSkala = {
        'A': 4,
        'B': 3,
        'C': 2,
        'D': 1,
        'E': 0
      };
      
      const nilaiRataRata = nilaiSkala[grade];
      
      const newRow = `
        <tr>
          <td>${nama}</td>
          <td>${matkul}</td>
          <td>${grade}</td>
          <td>${nilaiRataRata}</td>
        </tr>
      `;
      
      tbody.innerHTML += newRow;
      resultTable.classList.remove('hidden');
    });
  });
  