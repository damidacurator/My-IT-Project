// let name = 'jon';
// console.log(name);

// let a = 1;
// let b = 7;
// console.log(a * b);

// Data types
// strings
// numbers 
// boolean 
// undefined
// null

// let name = 'Dami';
// let age = 19;
// let occupation = 'Intern';
// let place = 'Cashtoken Africa';

// console.log(`Hello my name is ${name} and i am ${age} years old, i am currently an ${occupation} at ${place}.`);

let colors = ['red', 'green', 'blue'];
colors.push('black');
console.log(colors);

colors[2] = 'green';
colors[1] = 'blue';

colors.shift();
console.log(colors); 

colors.unshift('yellow');
console.log(colors);

let grade = '';

switch(grade){
    case 'A':
        console.log('You got an A!, Here is a cookie. Goodjob!');
        break;
    case 'B':
        console.log('You got a B!, Here is a lollipop. Welldone!');
        break;
    case 'c':
        console.log('You got a C, You can do better!');
        break;
    case 'D':
        console.log('You got a D, Poor!');
        break;
    case 'F':
        console.log('You Failed');
        break;
    default:
        console.log('Grade not Available');
        
}

// for (let x = 1; x <= 30; x+= 3){
//     console.log(x);
// }

function greet(){
    let person  = {
        name: "Daniella",
        age: "19",
    }
    console.log(`My name is ${person.name} and i'm ${person.age} nice to meet you.`);
}
greet();