const speedElement = document.querySelector('#speed')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')

let watchID = null;
startBtn.addEventListener('click', () => {
    if (watchID)
        return
    function handleSucess(position) {
        
        speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1) : 0
    }
    function handleError(error) {
        console.log(error.msg)
    }

    const options = { enableHighAccuracy: true }
    
    watchID = navigator.geolocation.watchPosition(handleSucess, handleError, options);

    startBtn.classList.add('d-none')
    stopBtn.classList.remove('d-none')
})
stopBtn.addEventListener('click', () => {
    if (!watchID)
        return
    navigator.geolocation.clearWatch(watchID)
    watchID = null
    currentRide = null
    startBtn.classList.remove('d-none')
    stopBtn.classList.add('d-none')
})