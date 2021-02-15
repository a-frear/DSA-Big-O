/*
WHAT IS THE BIG O FOR THIS
Question: 1) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

Answer: That would be constant time O(1)... no matter how many people are out there, 
you are just yelling once, someone will answer.

Question: 
2) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, 
and the next, and the next until you find someone who has a golden 
or there is no one else to ask.

Answer: Linear time O(n) for each person you have to ask, the time will incrementally
increase until you solve the problem.
*/

/*
EVEN OR ODD
What is the Big O of the following algorithm? 
*/
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
/* ANSWER: That is constant time because no matter how large the value, 
it will take the same amount of time to solve */ 

/*
ARE YOU HERE?
What is the Big O of the following algorithm? 
*/
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
/* ANSWER: Because of the nested loop, this would be polynomial time.
Two levels of looping over an input would be O(n^2) 
*/

/*
DOUBLER
What is the Big O of the following algorithm? 
*/
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
/*
ANSWER: This is linear because the longer the array, 
the longer it will take.
*/

/*
NAIVE SEARCH
What is the Big O of the following algorithm? 
*/
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
/*
ANSWER: This is linear because the longer the array, 
the longer it will take.
*/

/*
CREATING PAIRS
What is the Big O of the following algorithm? 
*/
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
/* ANSWER: Because of the nested loop, this would be polynomial time.
Two levels of looping over an input would be O(n^2) 
*/

/*
COMPUTE THE SEQUENCE
What does the following algorithm do? 
What is its runtime complexity? Explain your answer.
*/
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
/* ANSWER: This sequence is going to create an array that counts all the integers between 1 and the num.
It is linear because the greater num is, the longer it will take to do.
*/

/*
AN EFFICIENT SEARCH
In this example, we return to the problem of searching using a more 
sophisticated approach than in naive search, above. 
Assume that the input array is always sorted. 
What is the Big O of the following algorithm? Explain your answer.
*/
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
/* ANSWER: This sequence is logarithmic O(log n) because we are 
basically cutting the problem in half each round through, which will only 
slowly increase running time. 
*/

/*
RANDOM ELEMENT
What is the Big O of the following algorithm? Explain your answer.
*/
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
/* ANSWER: This is constant time O(1). It doesn't matter how long the array is,
it will always take the same amount of time.
*/

/*
WHAT AM I
What does the following algorithm do? 
What is the Big O of the following algorithm? Explain your answer
*/
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
/* This function determines if n is prime. 
O(n) constant because it will take the same amount of time no matter
what n is
*/

function countingSheep(numOfSheep) {
    while(numOfSheep > 0) {
        console.log('Another sheep jumped over the fence');
        numOfSheep--;
    }
    console.log('All sheep have jumped over the fence')
} 
//O(n) linear depending on how many sheep, it will be longer 
//Recursive version: ditto
function powerCalculator(a, b) {
    if (b < 0) {
        return 'exponent should be >= 0';
    }
    else if (b === 0){
        return 1;
    }
    let num = a;
    for (let i = b; i >= 2; i--) {
        num *= a;
    }
    return num;
}
console.log(powerCalculator(3, 3)) 
//O(n) linear Depending on how large b is, it will take longer.
//Recursive version: ditto

function reverseString(str) {
    if (str === '') {
        return str
    }
    let strArray = str.split('')
    strArray.reverse();
    strArray = strArray.join('');

    return strArray;
}
console.log(reverseString('string'));
//O(1) this should be same no matter the length of string
//Recursive version: O(n) linear Depending on how long the string is, it will take longer.

function nthTriangularNumber(n) {
    let tirangularNumber = 0;
    for (let i = 0; i <= n; i++) {
        tirangularNumber += i
    }
    return tirangularNumber;
}
console.log(nthTriangularNumber(5)) 
//O(n) depending on how large n, the longer it will take
//Recursive version: ditto

function stringSplitter(str, separator) {
    if (!str.includes(separator)) {
        return str;
    }
    let answer = str.split(separator);
    return answer;
}
console.log(stringSplitter('02/20/2020', '/'))
//O(1) constant this should be same no matter the length of string
//Recursive version: 0(n) linear: depending on how long string is, it will be longer.


function fibonacci(n) {
    let sequence = [1, 1];
    for(let i = 2; i < n + 1; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])   
    }
    return sequence;
}
console.log(fibonacci(7))
//O(n) linear depending on how large n, the longer it will take
//Recursive version: ditto

function factorial(n) {
    let answer = 1;
    while (n > 1) {
        answer *= n;
        n--;
    }
    return answer;
}
console.log(factorial(5))
//O(n) linear depending on how large n, the longer it will take
//Recursive version: ditto