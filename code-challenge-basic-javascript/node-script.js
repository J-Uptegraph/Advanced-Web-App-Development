// Ex-1 - Introduction to JavaScript
let showMessage = false;
let message = 'JavaScript File Run Sucessfully!';

if (showMessage) {
    console.log(message);
}   
// Ex-2 - Variables and Data Types
let firstName = 'Johnathan';
console.log (`Hello, ${firstName}, welcome back to JavaScript!`);

let rectangleLength = 5;
let rectangleWidth = 10;
let rectanglePerimeter = rectangleLength * 2 + rectangleWidth * 2;
let rectangleArea = rectangleLength * rectangleWidth;

console.log('Length: ' + rectangleLength);
console.log('Width: ' + rectangleWidth);
console.log('Perimeter: ' + rectanglePerimeter)
console.log('Area: ' + rectangleArea);

// Ex-3 - Control Flow 
for (let i = 0; i <= 10; i++){
    console.log("Loop #" + i);
}

// Ex-4 - Functions
let var1 = 2;
let var2 = 3;
let var3 = 6;
let var4 = 1;
let var5 = 4;
let var6 = 5;

function compare(num1, num2){
    if (num1 > num2){
        console.log(num1 + " > " + num2);
    }
}

compare(var1, var2);
compare(var3, var4);
compare(var5, var6);
compare(var1, var4);
compare(var2, var5);
compare(var3, var6);
 
// Ex-5 Arrays
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

for (num of numberList){
    total += num;
    console.log("Running total: " + total);
}

console.log("Final Total: " + total);

// Ex-6 Objects

function courseSection(courseName, subjectCode, courseNumber, enrollmentAmount, capacityAmount)
{
    this.courseName = courseName;
    this.subjectCode = subjectCode;
    this.courseNumber = courseNumber;
    this.enrollmentAmount = enrollmentAmount;
    this.capacityAmount = capacityAmount;
    this.getOpenSeats = function () {
        return this.capacityAmount - this.enrollmentAmount;
    }
}

let courseList = [
    new courseSection('Web Application Programming', 'CSE', '252', 36, 36),
    new courseSection('Data Structures and Algorithms', 'CSE', '274', 20, 36),
    new courseSection('Writing for Games', 'IMS', '317', 5, 40)
];

for (course of courseList){
    console.log(course.subjectCode + course.courseNumber + '-' + course.courseName);
    console.log('Open Seats: ' + course.getOpenSeats());
}