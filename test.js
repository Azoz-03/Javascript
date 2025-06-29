function process() {
  const num = Number(document.getElementById('numInput').value);
  const result = document.getElementById('result');


  if (num === 0) {
    result.innerHTML = "The number is zero.";
  } 

  else if (num > 0 && num <= 10) {
    result.innerHTML = "Small positive number.";
  } else if (num > 10 && num <= 100) {
    result.innerHTML = "Large positive number.";
  } else {
    result.innerHTML = "Negative number or too large.";
  }


  switch (num) {
    case 1:
      console.log("You selected one.");
      break;
    case 2:
      console.log("You selected two.");
      break;
    default:
      console.log("Other number selected.");
  }


  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) continue; 
    if (i > 20) break;         
    console.log("Even number:", i);
  }

  
  let countdown = 3;
  while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
  }
}
