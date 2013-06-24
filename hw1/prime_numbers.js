#!/usr/bin/env node

var MAXNUMBER = 100;
var OUTFILE = "prime_numbers.txt"

var primeList = new Array();
var fs = require('fs');

// Check if a number value is prime
var isPrimeNumber = function (number){
	var sqrtValue = Math.sqrt(number)	
	for (var i=0; i<primeList.length;i++){
		if (primeList[i] > sqrtValue){
			return true;
		} else if (number % primeList[i] == 0){
			return false;
		}
	}	
	return true;
}

// Function to fill prime list with prime numbers
function getPrimes(primeList){
	var value = 2;
	while(primeList.length < MAXNUMBER){
		if (isPrimeNumber(value)){
			primeList.push(value);
		}
		value++;
	}
}

getPrimes(primeList);

// Write array result to file
fs.writeFileSync(OUTFILE, primeList);

