/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.

*/

let name = "Alan Castillo";
let userName = name;

function updateValue(newName){
  userName = newName;
}

updateVaule("Hard GZ");
console.log(name);
updateValue(true);
console.log(name);
updateValue('28');
console.log(name);
