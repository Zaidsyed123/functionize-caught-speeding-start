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

// Driver 2
//let d2Ticket;
//if (d2Speed > d2Limit + 40) {
  //d2Ticket = 'Really Big Ticket';
//} else if (d2Speed > d2Limit + 20) {
 // d2Ticket = 'Big Ticket';
//} else if (d2Speed > d2Limit) {
  //d2Ticket = 'Small Ticket';
//} else {
 // d2Ticket = 'No Ticket';
//}
//document.getElementById('d2-ticket').innerHTML = d2Ticket;

// Driver 3
//let d3Ticket;
//if (d3Speed > d3Limit + 40) {
 // d3Ticket = 'Really Big Ticket';
//} else if (d3Speed > d3Limit + 20) {
  //d3Ticket = 'Big Ticket';
//} else if (d3Speed > d3Limit) {
 // d3Ticket = 'Small Ticket';
//} else {
//  d3Ticket = 'No Ticket';
//}
//document.getElementById('d3-ticket').innerHTML = d3Ticket;
//}


