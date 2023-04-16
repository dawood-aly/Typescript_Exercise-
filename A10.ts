let fam_person= "elon musk";

let titlecaseName = fam_person
  .split(' ')   // .splice ("") convets a given data into an array.
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // .map converts the given function into an array agin.
  .join(' '); // joins the array back in the word.
console.log(titlecaseName); 