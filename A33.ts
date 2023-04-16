const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let n=0; n<array.length; n++ ){
    if(n==0){
        console.log(n+1+'st');
    }
    else if(n==1){
        console.log(n+1+'nd');
    }
    else if(n==2){
        console.log(n+1+'rd');
    }
    else{
        console.log(n+1+'th');
    }
}