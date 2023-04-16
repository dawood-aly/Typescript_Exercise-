/* Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let fam_person = "Elon Musk";
let name_in_upper_case = fam_person.toUpperCase(); //  .toUppercase() converts all the letters in an array to capital.
console.log(`${fam_person.toLowerCase()} in lower case `);  //tolowercase() do the opposite.
console.log(`${name_in_upper_case} in upper case `);
 
// this has 3 functions.
let titlecaseName = fam_person
  .split(' ')   // .splice ("") convets a given data into an array.
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // .map converts the given function into an array agin.
  .join(' '); // joins the array back in the word.
console.log(titlecaseName); 

