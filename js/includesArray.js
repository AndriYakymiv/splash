function includes(array, value) {
    // Change code below this line
    let arm = false;

    for (const arrays of array) {

        // console.log(arrays)
        // console.log(value)


        if (arrays === value) {
            arm = true;
            

        }
    }
    console.log(arm)
    
   return arm; 
   



}


// includes([1, 2, 3, 4, 5], 3)
includes([1, 2, 3, 4, 5], 5)
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
