if (!("requestMIDIAccess" in navigator)) {
  document.body.innerHTML = `<h1>:-/</h1><p>I'm sorry, but your browser does not support the WebMIDI API ☹️🚫🎹</p>`;
}

navigator.requestMIDIAccess()
  .then((access) => {

    // Get lists of available MIDI controllers
    const inputs = access.inputs;
    const outputs = access.outputs;

    const inputText = [];
    const outputText = [];

    inputs.forEach((midiInput) => {
      inputText.push(`FOUND: ${midiInput.name}`);
        midiInput.onmidimessage = function(message) {
          document.querySelector("#messages").innerText +=  `# ${midiInput.name}
${new Date()}
==================================
- Status: ${message.data[0]}
- Data 1: ${message.data[1]}
- Data 2: ${message.data[2]}
==================================\n\n`;
        }
    })

    outputs.forEach((midiOutput) => {
      outputText.push(`FOUND: ${midiOutput.name}`);
    })

    document.querySelector("#inputs").innerText = inputText.join('');
    document.querySelector("#outputs").innerText = outputText.join('');

  });
