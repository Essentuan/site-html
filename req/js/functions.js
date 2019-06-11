let cl = 0
let ci = []
function add(text, out) {
	let pr = text;
	let cont = document.createTextNode(pr);
	let br = document.createElement('br');
	document.getElementById(out).appendChild(br);
	document.getElementById(out).appendChild(cont);
	document.getElementById("footer1").style.top = $(window).height() - 60
}
function prime(num) {
	let stop = num % 2 == 0 || num == 1
	let num1 = 2
	let num2 = 2
	while (stop == false && num2 <= Math.sqrt(num)) {
		stop = num1 * num2 == num 
		num1++
		if (num1 == num) {
			num1 = 2
			num2++
		}
	}
	if (stop == true && num != 2) {
		return(num + " is not prime.")
	} else {
		return(num + " is prime")
	}			
}
function prime2(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  const primes = [];
  for (let number = 0; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number + " is prime");
      let nextNumber = number * number;
      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
		} else if (isPrime[number] === false) {
			primes.push(number + " is not prime");
		}
  }
  return primes;
}
//function random() {
	//window.location = String($('textarea').val().split('\n')[Math.floor(Math.random() * $('textarea').val().split('\n').length + 1)]);
//}
function jose(num) {
	let binary = num.toString(2)
	let cs = ""
	for (cp = 1; cp <= num.toString(2).length; cp++) {
		cs = cs + num.toString(2).charAt(cp)
	}
	cs = cs + num.toString(2).charAt(num.toString(2).length - 1)
	if (parseInt(cs, 2) == 0 && num != 0) {
		return(1)
	} else {
		return(parseInt(cs, 2))
	}
}
function alerts(time, text, color) {
	ci.push(cl)
	$("#alerts").append('<div style="opacity: 0;" class="alert fade show alert-' + color + '"id="' + cl + '">' + text + '</div>');
	$('#' + cl).fadeTo(100, 1);
	cl++
	setTimeout(function(){ $('#' + ci[0]).fadeTo(300, 0); }, time * 1000);
	setTimeout(function(){ $('#' + ci[0]).remove(); ci.shift() }, time * 1000 + 300);
} 
