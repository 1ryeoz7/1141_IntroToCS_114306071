const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

const mathAvgCell = document.getElementById("mathAvg");
const englishAvgCell = document.getElementById("englishAvg");
const overallAvgCell = document.getElementById("overallAvg");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers");
        return;
    }

    rowCount++;

    const average = ((math + english) / 2).toFixed(2);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${average}</td>
    `;

    tableBody.appendChild(newRow);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const rows = tableBody.getElementsByTagName("tr");

    let mathSum = 0;
    let englishSum = 0;
    let avgSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += Number(rows[i].children[1].textContent);
        englishSum += Number(rows[i].children[2].textContent);
        avgSum += Number(rows[i].children[3].textContent);
    }

    const count = rows.length;

    mathAvgCell.textContent = (mathSum / count).toFixed(2);
    englishAvgCell.textContent = (englishSum / count).toFixed(2);
    overallAvgCell.textContent = (avgSum / count).toFixed(2);
}
