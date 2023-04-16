console.log("The Day is just giving us suprises, the table could'nt reach in time." );

console.log("Only 2 people can attend");
console.log();
let Guest = [
    'Micheal Faraday','Nikola Tesla','Mr Flemming','Mr. Ampere','Thomas Edison' ]
    // part a
while(Guest.length !== 2){
    Guest.pop;
    console.log(Guest.pop() + " These people won't just let me learn. Sorry Sir we can't have the event.")
}
console.log();
// part b
for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir "+Guest[i]+ " you are humbly invited to THE GAMECHANGER");
}
console.log();

//       part c
Guest.splice(1)    // as only 2 guest are left after while loop so
Guest.splice(0)

// part d
console.log(Guest);

