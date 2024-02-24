// Explain the concept of let, const, and var in ES6. Provide examples to demonstrate their differences and explain when each should be used.


// var

// ariables declared with var are function-scoped, meaning they are only accessible within the function where they are declared.

function exampleVar() {
    if (true) {
      var x = 10;
      console.log(x); // Output: 10
    }
    console.log(x); // Output: 10
  }

  
// let

// Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.

function exampleLet() {
    if (true) {
      let y = 20;
      console.log(y); // Output: 20
    }

  }

  
  // const

// Variables declared with const are also block-scoped.
// The value assigned to a const variable cannot be reassigned or redeclared after 

  function exampleConst() {
    const z = 30;
    
  }
  