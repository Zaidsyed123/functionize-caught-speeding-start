// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  // Calculate & Output Ticket Types
  document.getElementById('d1-speed').innerHTML = speedToFine(d1Speed);
  document.getElementById('d1-limit').innerHTML = speedToFine(d1Limit);
  document.getElementById('d2-speed').innerHTML = speedToFine(d2Speed);
  document.getElementById('d2-limit').innerHTML = speedToFine(d2Limit);
  document.getElementById('d3-speed').innerHTML = speedToFine(d3Speed);
  document.getElementById('d3-limit').innerHTML = speedToFine(d3Limit);
}
function speedToFine(speedLimit) {
  if (speedLimit > speedLimit + 40) {
    return 'Really Big Ticket';
  } else if (speedLimit > speedLimit + 20) {
    return 'Big Ticket';
  } else if (speedLimit > speedLimit) {
    return 'Small Ticket';
  } else {
    return 'No Ticket';
  }
}


