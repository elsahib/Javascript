// //excercise 3
// const greeting = "Hello"; // First variable
// const name = "Osman"; // Second Variable

// console.log(greeting + ' ' + name); // first way to concatinate
// console.log(greeting.concat(' ', name)); // using concat function to concatinate 


// // excercise 4
// const numberOfStudents = 20;
// const NumberOfMentors = 10;

// console.log(numberOfStudents+NumberOfMentors)






// Excercise 5

// function test(fname,lname,age) {

//     return "Hello"+" "+ fname+" "+lname+": in 10 years you will be "+(age+10)

// }
// console.log(test('osman','elsahib',24))

//Excercise 6 (functions called inside another function)

function getYear(age) {
    var today=new Date()
    var thisyear = today.getFullYear()
    return  thisyear - age
}

function whatyear(name,age) {
    var date = getYear(age)
    return "Hello "+name+" you were born in "+ date
}
console.log(whatyear("Osman", 22))