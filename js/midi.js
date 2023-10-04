const selectList = document.getElementById('devices')
const numMidi = document.getElementById('numMidi')
const valMidi = document.getElementById('valMidi')
if(navigator.requestMIDIAccess()){
    navigator.requestMIDIAccess().then(success,failure)
}
function success(midiAccess){
    // console.log(midiAccess)
    midiAccess.addEventListener('statechange', updatDevices)
    const inputs = midiAccess.inputs
    inputs.forEach(input => {
        input.onmidimessage = handleMidi
    })
    
    
}
function handleMidi(e){
    // console.log(e)
    console.log(e.data[1],e.data[2])
    numMidi.innerHTML = `midi number: ${e.data[1]}`
    valMidi.innerHTML = `midi number: ${e.data[2]}`
}

function updatDevices(e) {
    const inputs = e.target.inputs
// Add drop down options for select
    selectList.innerHTML = ''
    inputs.forEach(input => {
        let option = document.createElement('option')
        option.innerText = input.name
        option.value = input.name
        // option.value = input.name.replace(" ","")
        selectList.appendChild(option)
    })
}
function failure(){
    console.log('Error: could not access requestMIDIaccess')
}