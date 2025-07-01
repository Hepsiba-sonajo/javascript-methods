

// Example using var
function varExample() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable (function-scoped)
    console.log("Inside if (var):", x); // 20
  }
  console.log("Outside if (var):", x); // 20
}

// Example using let
function letExample() {
  let y = 10;
  if (true) {
    let y = 20; // New variable (block-scoped)
    console.log("Inside if (let):", y); // 20
  }
  console.log("Outside if (let):", y); // 10
}

// Example using const
function constExample() {
  const z = 10;
  console.log("Initial const z:", z);
  // z = 20; // ❌ Error: Assignment to constant variable
  const obj = { a: 1 };
  obj.a = 2; // ✅ Allowed: object contents can change
  console.log("Modified object inside const:", obj); // 2
}

varExample();
letExample();
constExample();
