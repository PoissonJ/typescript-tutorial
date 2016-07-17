interface Stark {
  name: string;
  age?: number; // optional
}

function printName(stark : Stark) {
  console.log(stark.name);
}

printName({name: "Brad", age: 20});
printName({name: "Jon"});
