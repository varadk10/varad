//Explain the concept of default parameters in ES6 functions. Provide an example demonstrating
// object passed as an argument. The function should extract and return the 'name' and 'age' properties from the object.


function extractNameAndAge(person = {}) {

    const { name = 'Unknown', age = 'Unknown' } = person;

    return { name, age };
}


const personObject = { name: 'Varad', age: 20, country: 'IND' };
const result = extractNameAndAge(personObject);

console.log(result);
