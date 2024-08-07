function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

let name = "john doe";
let capitalizedName = capitalizeFirstLetter(name);
console.log(capitalizedName); // Output: John doe
    