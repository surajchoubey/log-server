let logContainer = document.getElementById("logContainer");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let playInterval;

startStreaming();

function startStreaming() {
    playButton.disabled = true;
    pauseButton.disabled = false;

    playInterval = setInterval(updateLogs, 1000); 
}

function pauseStreaming() {
    playButton.disabled = false;
    pauseButton.disabled = true;

    clearInterval(playInterval);
}

function fetchData() {
    fetch('output.txt')
        .then(response => response.text())
        .then(data => {
            
            for (const datum of data.split('\n')) {
                console.log(datum);
                const p = document.createElement("p");
                p.textContent = datum;
                logContainer.appendChild(p);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

async function updateLogs() {

    await fetchData();

}
