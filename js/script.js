let tableBody = document.getElementById('covidTableBody');
let summaryElement = document.getElementById('summary');

const view = () => {
    fetch('https://data.covid19india.org/data.json')
        .then(res => res.json())
        .then((data) => {

            summaryElement.innerHTML = `<p>Total Confirmed Cases: ${data.statewise[0].confirmed}</p>`;
            tableBody.innerHTML = '';

            data.statewise.forEach((stateData, index) => {
                if (index != 0) {
                    const rowHTML = `
                        <tr>
                            <td>${stateData.state}</td>
                            <td>${stateData.active}</td>
                            <td>${stateData.lastupdatedtime}</td>
                            <td>${stateData.confirmed}</td>
                            <td>${stateData.deaths}</td>
                        </tr>
                    `;
                    tableBody.innerHTML += rowHTML;
                }
            });
        })
        .catch((err) => {
            console.log("err", err);
        });
}

view();
