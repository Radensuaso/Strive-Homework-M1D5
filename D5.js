/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

const drawHeader = function (heading) {
  console.log(
    `\n-------------------------< ${heading.toUpperCase()} >-----------------------------\n`
  )
}

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
drawHeader("exercise 1")

const area = function (l1, l2) {
  return l1 * l2
}

console.log(area(4, 10))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
drawHeader("exercise 2")

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3
  } else {
    return n1 + n2
  }
}

console.log(crazySum(3, 3))
console.log(crazySum(3, 4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
drawHeader("exercise 3")

const crazyDiff = function (number) {
  if (number > 19) {
    return Math.abs((19 - number) * 3)
  } else {
    return Math.abs(19 - number)
  }
}

console.log(crazyDiff(40))
console.log(crazyDiff(20))
console.log(crazyDiff(12))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
drawHeader("exercise 4")

const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400
}

console.log(boundary(400))
console.log(boundary(30))
console.log(boundary(19))
console.log(boundary(20))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
drawHeader("exercise 5")

const strivify = function (string) {
  let words = string.toLowerCase().replace(",", "").split(" ")
  let newWords = []
  if (words[0] === "strive") {
    words[0] = "Strive"
    return words.join(" ")
  } else {
    newWords.push("Strive")
    for (let i = 0; i < words.length; i++) {
      newWords.push(words[i])
    }
  }
  return newWords.join(" ")
}

console.log(strivify("Strive, is very cool indeed!"))
console.log(strivify("What's my name?"))
console.log(strivify("To live a good life."))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

drawHeader("exercise 6")

const check3and7 = function (number) {
  return `It's ${
    number % 3 === 0 || number % 7 === 0
  } that ${number} is multiple of 3 or 7.`
}

console.log(check3and7(7))
console.log(check3and7(30))
console.log(check3and7(40))
console.log(check3and7(6))
console.log(check3and7(50))
console.log(check3and7(69))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

drawHeader("exercise 7")

const reverseString = function (string) {
  return string.split("").reverse().join("")
}

console.log(reverseString("Strive"))
console.log(reverseString("I'm Pickle Rick."))
console.log(reverseString("Games Night."))
console.log(reverseString("Hey man hope you are ok."))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

drawHeader("exercise 8")

const upperFirst = function (string) {
  const words = string.split(" ")
  let capitalizedWords = []
  for (let i = 0; i < words.length; i++) {
    capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
  }
  return capitalizedWords.join(" ")
}

console.log(upperFirst("superman beats batman"))
console.log(upperFirst("alliens are cool"))
console.log(upperFirst("what is the universe?"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
drawHeader("exercise 9")

const cutString = function (string) {
  const lastCharIndex = string.length - 1
  return string.slice(1, lastCharIndex)
}

console.log(cutString("Strive School"))
console.log(cutString("Water"))
console.log(cutString("Hey man, what's up?"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
drawHeader("exercise 10")

const giveMeRandom = function (number) {
  const getRandomNumber = function () {
    return Math.floor(Math.random() * 11)
  }
  const array = []
  for (let i = 0; i < number; i++) {
    array.push(getRandomNumber())
  }
  return array
}

console.log(giveMeRandom(5))
console.log(giveMeRandom(10))
console.log(giveMeRandom(3))
console.log(giveMeRandom(2))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
