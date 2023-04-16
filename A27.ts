let alien_color = ['green', 'yellow', 'red'];
// Math.random() always returns a number lower than 1
let number = Math.floor(Math.random() * 3);

let points = 0;
for( let i=0 ; i< alien_color.length ; i++){
   //console.log(number); 
   if (alien_color[number] == 'green') {
     points += 5;
     console.log("The player just earned " +points+" points!");
   }
   else if (alien_color[number] == 'yellow'){
    points += 10;
    console.log("The player just earned " +points+" points!");}
   else if (alien_color[number] == 'yellow'){
        points += 10;
        console.log("The player just earned " +points+" points!");}

}
console.log("The total points are " +points+" points!");
