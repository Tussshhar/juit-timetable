document.addEventListener('DOMContentLoaded', () => {
    const batchSelect = document.getElementById('batch-select');
    const generateBtn = document.getElementById('generate-btn');
    const timetableContainer = document.getElementById('timetable-container');
    const timetableBody = document.querySelector('#timetable tbody');

    generateBtn.addEventListener('click', generateTimetable);

    function generateTimetable() {
        const selectedBatch = batchSelect.value;
        if (!selectedBatch) {
            alert('Please select a batch');
            return;
        }

        const timetable = generateRandomTimetable();
        displayTimetable(timetable);
        timetableContainer.classList.remove('hidden');
    }

    function generateRandomTimetable() {
        const subjects = ['Math', 'Physics', 'Chemistry', 'Computer Science', 'English', 'Lab'];
        const timetable = [];

        for (let i = 0; i < 6; i++) {
            const day = [];
            for (let j = 0; j < 5; j++) {
                day.push(subjects[Math.floor(Math.random() * subjects.length)]);
            }
            timetable.push(day);
        }

        return timetable;
    }

    function displayTimetable(timetable) {
        timetableBody.innerHTML = '';
        const times = ['9:00 - 10:30', '10:45 - 12:15', '13:00 - 14:30', '14:45 - 16:15', '16:30 - 18:00'];

        for (let i = 0; i < 5; i++) {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = times[i];
            row.appendChild(timeCell);

            for (let j = 0; j < 5; j++) {
                const cell = document.createElement('td');
                cell.textContent = timetable[j][i];
                row.appendChild(cell);
            }

            timetableBody.appendChild(row);
        }
    }
});
