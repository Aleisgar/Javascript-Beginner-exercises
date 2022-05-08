var person = {
  name: "John",                //String
  lastname: "Doe",
  age: 35,                     //Number
  gender: "male",
  lucky_numbers: [7, 11, 13, 17], //Array
  significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
  name: "Jane",
  lastname: "Doe",
  age: 38,
  gender: "female",
  lucky_numbers: [2, 4, 6, 8],
  significant_other: person
};

var family = {
  lastname: "Doe",
  members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray) {
  let arr = [];
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  for (let i in family.members) { //entrar en el objeto de cada persona
    for (let j in family.members[i].lucky_numbers) { // entrar en las propiedades de cada persona
      arr.push(family.members[i].lucky_numbers[j])
    }
  }
  for (let numbers in arr) {
    sumOfAllLuckyNumbers += arr[numbers]
  }
  return sumOfAllLuckyNumbers
}

person.lucky_numbers[3] = 33;
//Create new person and add it to family members
let person3 = {};
person3.lastname = 'Doe';
person3.name = "Jimmy";
person3.age = 13;
person3.gender = "male";
person3.lucky_numbers = [1, 2, 3, 4];
person3.significant_other = null;

family.members.push(person3)



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 