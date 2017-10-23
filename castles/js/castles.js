/* This will take an array of integers representing a landscape and return the number
    of castles Aequilibrium should build */

function buildCastles (landArray) {
        
    var castlesToBuild = 0;
             
    if (landArray.length > 0) {
        
        //keep track of the previous value
        var prevNum = landArray[0];
            
        //keep track of if the numbers are getting bigger or smaller
        var rising = null;
            
        var landLength = landArray.length;
            
        //We always build a castle on the first location
        castlesToBuild = 1;
            
        //Because we always build a castle on the first location, we can start checking with the second location

        for (var x = 1; x < landLength; x++) {
            if(landArray[x] > prevNum) {
                if (rising === false) {
                    //Switching directions, so the previous number was a valley we should build a castle on.
                    castlesToBuild ++;
                }
                rising = true;
                prevNum = landArray[x];
                
            } 
            else if (landArray[x] < prevNum) {
                if (rising === true) {
                    //Switching directions, so the previous number was a peak we should build a castle on.
                    castlesToBuild ++;
                }
                rising = false;
                prevNum = landArray[x];
                
            }
            //No need to do anything if the number is the same as the previous number.
                
        }
        return castlesToBuild;
            
    } 
    else {
        return 0;
    }
        
}