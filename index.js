// Create a function that uses map
Num1 = [1, 3, 4, 5, 8, 4];
/*Write the function named map that takes 2 parameters, first is an array and second is a callback function that accepts single parameter*/
function MapThis(array, callback){
    /*Map function iterates on the array and invoke the given callback, captures the return value into new array.*/
    let t = array.map(function(x){
        return x * 3;
    })
   function callback(){
       return t; 
   }
   /*Upon complete of input array iteration it should return the array that holds the result of applying callback function on every element*/
   return callback(); 
}
/*Logs to the console and returns the new array*/
console.log(MapThis(Num1));
























