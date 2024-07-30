const timetables = {
    '24A19': {
        'Monday': [
            { subjectCode: 'MATH101', destinationClass: 'Room 101', teacherCode: 'TC001' },
            { subjectCode: 'PHY102', destinationClass: 'Lab 201', teacherCode: 'TC002' },
            { subjectCode: 'CHEM103', destinationClass: 'Lab 202', teacherCode: 'TC003' },
            { subjectCode: 'ENG104', destinationClass: 'Room 102', teacherCode: 'TC004' },
            { subjectCode: 'CS105', destinationClass: 'Lab 203', teacherCode: 'TC005' },
            { subjectCode: 'MATH106', destinationClass: 'Room 103', teacherCode: 'TC006' },
            { subjectCode: 'PHY107', destinationClass: 'Lab 204', teacherCode: 'TC007' },
            { subjectCode: 'CHEM108', destinationClass: 'Lab 205', teacherCode: 'TC008' },
            { subjectCode: 'ENG109', destinationClass: 'Room 104', teacherCode: 'TC009' }
        ],
        'Tuesday': [
            // Add data for Tuesday
        ],
        'Wednesday': [
            // Add data for Wednesday
        ],
        'Thursday': [
            // Add data for Thursday
        ],
        'Friday': [
            // Add data for Friday
        ]
    },
    '24A17': {
        'Monday': [
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'HS171', destinationClass: 'GDROOM', teacherCode: 'RTK' },
            { subjectCode: 'MA111', destinationClass: 'MAT_RS2', teacherCode: 'TR1' },
            { subjectCode: 'PH111', destinationClass: 'LT2', teacherCode: 'SKK' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'PH111', destinationClass: 'TR2', teacherCode: 'SKK' },
            { subjectCode: 'HS171', destinationClass: 'LANGULAB', teacherCode: 'RTK' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Tuesday': [
            { subjectCode: 'MA111', destinationClass: 'LT1', teacherCode: 'NKT' },
            { subjectCode: 'CL111', destinationClass: 'CR11', teacherCode: 'FSL' },
            { subjectCode: 'PH111', destinationClass: 'SKK', teacherCode: 'LT2' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Wednesday': [
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'MA111', destinationClass: 'LT1', teacherCode: 'NKT' },
            { subjectCode: 'CL111', destinationClass: 'CR11', teacherCode: 'FSL' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Thursday': [
            { subjectCode: 'GE171', destinationClass: 'WORKLAB', teacherCode: 'NJP' },
            { subjectCode: 'GE171', destinationClass: 'WORKLAB', teacherCode: 'NJP' },
            { subjectCode: 'GE171', destinationClass: 'WORKLAB', teacherCode: 'NJP' },
            { subjectCode: 'PH111', destinationClass: 'LT2', teacherCode: 'SKK' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'HS111', destinationClass: 'LT1', teacherCode: 'DLR' },
            { subjectCode: 'CL111', destinationClass: 'CR11', teacherCode: 'FSL' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Friday': [
             { subjectCode: 'CL171', destinationClass: 'CL9_1', teacherCode: 'FSL' },
            { subjectCode: 'CL171', destinationClass: 'CL9_1', teacherCode: 'FSL' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'MA111', destinationClass: 'LT1', teacherCode: 'NKT' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'HS111', destinationClass: 'DLR', teacherCode: 'LT1' },
            { subjectCode: 'PH171', destinationClass: 'PHLAB1', teacherCode: 'HAZ' },
            { subjectCode: 'PH171', destinationClass: 'PHLAB1', teacherCode: 'HAZ' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Saturday': [
             { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
    },
    
    '24J12': {
        'Monday': [
            { subjectCode: 'HS171', destinationClass: 'GDROOM', teacherCode: 'BLK' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'PH111', destinationClass: 'CR10', teacherCode: 'HSR' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'GE171', destinationClass: 'CAD/DEAWR', teacherCode: 'TNM' },
            { subjectCode: 'GE171', destinationClass: 'CAD/DRAWR', teacherCode: 'TNM' },
            { subjectCode: 'GE171', destinationClass: 'CAD/DRAWR', teacherCode: 'TNM' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Tuesday': [
            { subjectCode: 'MA111', destinationClass: 'LT3', teacherCode: 'MDS' },
            { subjectCode: 'PH111', destinationClass: 'CR10', teacherCode: 'HSR' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'HS111', destinationClass: 'CR12', teacherCode: 'AKS' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Wednesday': [
            { subjectCode: 'MA111', destinationClass: 'LT3', teacherCode: 'MDS' },
            { subjectCode: 'PH111', destinationClass: 'TR5', teacherCode: 'HSR' },
            { subjectCode: 'CL111', destinationClass: 'CR11', teacherCode: 'AYS' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'PH171', destinationClass: 'PHLAB2', teacherCode: 'SKT' },
            { subjectCode: 'PH171', destinationClass: 'PHLAB2', teacherCode: 'SKT' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Thursday': [
            { subjectCode: 'MA111', destinationClass: 'LT3', teacherCode: 'MDS' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'HS111', destinationClass: 'CR10', teacherCode: 'AKS' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'CL111', destinationClass: 'CR9', teacherCode: 'AYS' },
            { subjectCode: 'HS171', destinationClass: 'LANGULAB', teacherCode: 'BLK' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Friday': [
             { subjectCode: 'CL171', destinationClass: 'CL11', teacherCode: 'AYS' },
            { subjectCode: 'CL171', destinationClass: 'CL11', teacherCode: 'AYS' },
            { subjectCode: 'MA111', destinationClass: 'CR4', teacherCode: 'MAT_RS4' },
            { subjectCode: 'PH111', destinationClass: 'CR10', teacherCode: 'HSR' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'CL111', destinationClass: 'CR9', teacherCode: 'AYS' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
        'Saturday': [
             { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' },
            { subjectCode: 'NO CLASS', destinationClass: '', teacherCode: '' }
        ],
    }
};

const timings = [
    '9:00 - 9:55', '10:00 - 10:55', '11:00 - 11:55', '12:00 - 12:55',
    '1:00 - 1:55', '2:00 - 2:55', '3:00 - 3:55', '4:00 - 4:55', '5:00 - 5:55'
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function createTimetable(batch) {
    let tableHTML = '<table>';
    
    // Create header row
    tableHTML += '<tr><th>Time</th>';
    for (let day of days) {
        tableHTML += `<th>${day}</th>`;
    }
    tableHTML += '</tr>';

    // Create rows for each time slot
    for (let i = 0; i < timings.length; i++) {
        tableHTML += `<tr><td class="time-column">${timings[i]}</td>`;
        
        for (let day of days) {
            const lesson = timetables[batch][day] ? timetables[batch][day][i] : null;
            if (lesson) {
                tableHTML += `<td>
                    <div>${lesson.subjectCode}</div>
                    <div>${lesson.destinationClass}</div>
                    <div>${lesson.teacherCode}</div>
                </td>`;
            } else {
                tableHTML += '<td></td>';
            }
        }
        
        tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    return tableHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    const batchSelect = document.getElementById('batchSelect');
    const timetableDiv = document.getElementById('timetable');

    batchSelect.addEventListener('change', function() {
        const selectedBatch = this.value;
        
        if (selectedBatch) {
            timetableDiv.innerHTML = createTimetable(selectedBatch);
        } else {
            timetableDiv.innerHTML = '';
        }
    });
});
