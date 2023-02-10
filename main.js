// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  
  // Get Speed & Speed Limit Inputs
  let speed1 = +document.getElementById('speed1').value;
  let limit1 = +document.getElementById('limit1').value;
  let speed2 = +document.getElementById('speed2').value;
  let limit2 = +document.getElementById('limit2').value;
  let speed3 = +document.getElementById('speed3').value;
  let limit3 = +document.getElementById('limit3').value;
  //let d2Speed = +document.getElementById('d2-speed').value;
  //let d2Limit = +document.getElementById('d2-limit').value;
  //let d3Speed = +document.getElementById('d3-speed').value;
  //let d3Limit = +document.getElementById('d3-limit').value;

  // Calculate & Output Ticket Types
  document.getElementById('ticket1').innerHTML = speedToFine(speed1, limit1);
  document.getElementById('ticket2').innerHTML = speedToFine(speed2, limit2);
  document.getElementById('ticket3').innerHTML = speedToFine(speed3, limit3);


  //document.getElementById('d2-speed').innerHTML = speedToFine(d2Speed);
  //document.getElementById('d2-limit').innerHTML = speedToFine(d2Limit);
  //document.getElementById('d3-speed').innerHTML = speedToFine(d3Speed);
  //document.getElementById('d3-limit').innerHTML = speedToFine(d3Limit);
}
function speedToFine(speed,limit) {
  if (speed > limit + 40) {
    return 'Really Big Ticket';
  } else if (speed > limit + 20) {
    return 'Big Ticket';
  } else if (speed > limit) {
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


