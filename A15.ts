// /*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

let Guest = ['Nikola Tesla','Elon Musk','Thomas Edison']
console.log("Unfortunately Mr.Musk can't make it");

let noGuest = Guest.indexOf("Thomas Edison");  
Guest[noGuest]= "Mr. Ampere";
console.log(Guest);


for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir "+Guest[i]+ " you are humbly invited to a night dedicated to electricity i.e. THE GAMECHANGER");
  }


