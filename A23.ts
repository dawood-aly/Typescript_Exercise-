function vowels_check(letter:string){
    let vowels= ['a','e','i','o','u']
    let val=false;
    for(let i=0 ; i<5 ;  i++){
        if ( vowels[i]== letter){
            console.log("vowels");
            val = true;
        }
    }
    if ( val == false){
        console.log("consonants");}
    }
    vowels_check("a");
    vowels_check("b");
    vowels_check("e");
    vowels_check("f");