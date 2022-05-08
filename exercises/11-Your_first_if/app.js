var total = prompt('How many km are left to go?');

// Your code below:
const kmToArrive = () =>{
    if (total>100) {
        return("We still have a bit of driving left to go")
    }  else if (total <= 100 && total > 50 ){
        return("We'll be there in 5 minutes")
    } 
       else {
        return("I'm parking. I'll see you right now")
    }
}
console.log(kmToArrive())