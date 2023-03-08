// let js = 'easy';
// if (js === 'easy') alert ('we should learn js');


// let nav = "ruth";
// console.log("talia");
// console.log(10+5);
// let thirdName ='ruth';
// console.log(thirdName);

// variable naming convention
// let myFirstJob = "programmer";
// let mySecondJob = 'teacher'

// let PI = 3.145;



// Data types


// let javascriptLearning = true;
// console.log(javascriptLearning)

// console.log(typeof true);
// console.log(typeof javascriptLearning);
// console.log(typeof 24);
// console.log(typeof 'ruth');
// javascriptLearning = 'yes'
// console.log(typeof javascriptLearning);

// undefined$ null values
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1996;
// console.log(year);
// console.log(typeof year);


// let country = 'kenya';
// let continent = 'Africa';
// let population = 18000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = true;
// // let language;
// console.log(typeof isIsland);
// // console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);


// const,var& let

// let age = 25;
// age = 26;

// const yearBirth = 1997;

// let language = 'kalenjin';
// const familyMembers = 8;
// const yearOfStartingSchool = 2000
// language = 'kikuyu';
// console.log(language);

// math operators
// const ageFaith = 2023- 1996;
// const now = 2023;
// const ageRuth = now -1997;
// console.log(ageRuth);
// console.log(ageFaith,ageRuth);
// console.log(ageRuth*2, ageFaith/3);


// concatenating

// const firstName = 'ruth';
// const secondName = 'mimo';
// console.log (firstName + ' ' + secondName);

//assignment

// let x =5;
// x+=30;// x= x+30
// x*=4;//x=X*4
// x++; //x=x+1
// x--; //x =x-1
// console.log(x);

//comparison operator
// console.log(ageRuth>ageFaith);
// console.log(ageRuth>=18);

// let halfCountry = (population/2);
// console.log(halfCountry);
// console.log(halfCountry+1);

// let finladPopulation = 6000000;
// console.log(population > finladPopulation);
// const averagePopulatin = 33000000;
// console.log(population< averagePopulatin);
// const nation = 'portugal is in Europe , and it is 11 million people speak portugeese';

//Oparators precedes
// const now = 2023;
// const ageRuth = now -1997;
// const ageFaith = now-1996;
// console.log(now-1996 > now-1997);

// let x,y;
// x=y=25-10-5;// x=y=10
// console.log(x,y);
// const averageAge = (ageFaith + ageRuth)/2
// console.log(ageFaith,ageRuth,averageAge);


//coding challenge1
// const markMass=95;
// const johnMass = 85;
// const  markHeight = 1.88;
// const johnHeight =1.76;

// const johnBMI = johnMass/(johnHeight *johnHeight);
// const markBMI = markMass/(markHeight *markHeight);
// console.log(johnBMI,markBMI);
// console.log(johnBMI > markBMI);



//string
// const firstName = 'ruth';
// const job = 'software-developer';
// const birthYear  =1997;
// const year = 2030;

// const ruth = "I'm " +  firstName   +  ' a ' + job    +  (year - birthYear)  +  ' years old' ;
// console.log(ruth);
// const newJonas = `I'm ${firstName}, a ${year-birthYear} old ${job}`
// console.log(newJonas);


//if else

// const age = 14;

// if (age>=18){
//     console.log('ruth can get a driving license');

// }
// else{
//     const yearsLeft = 18- age;
//     console.log(`ruth has ${yearsLeft}  years to start driving`);
// }

// const yearBirth = 1997;
// let century;

// if (yearBirth>=2000){
//     century= 21;
//    }
//    else{
//     century = 20;
//    }

//    console.log(century);


//    coding challenge2
const markMass=95;
const johnMass = 85;
const  markHeight = 1.88;
const johnHeight =1.76;

const johnBMI = johnMass/(johnHeight *johnHeight);
const markBMI = markMass/(markHeight *markHeight);
console.log(johnBMI,markBMI);
console.log(johnBMI > markBMI);

if (markBMI>johnBMI){
    console.log('markBMI is greater than johnBMI');
}else{
    console.log('johnBMI is greater than markBMI');
}
console.log(`johnBMI ${johnBMI} is higher than markBMI ${markBMI}`);