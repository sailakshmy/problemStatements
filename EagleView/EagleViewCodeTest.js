// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**If Input is A=[1,2,3,4], output = -1
 * If Input is A [3,4,5,3,7], output = 3
 * If Input is A=[4,3,2,1], output =-1
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //Create a counter for the number of ways to cut the tree
    let counter = 0;
    //Check if Array is sorted in either order. If yes, return counter as -1;
    if(isArraySorted(A)){
        counter = -1;
        return counter;
    }
    // Else,Loop through the array to identify if the trees can be cut
    else{
        for(let i=0;i<A.length; i++){
        //For ith element, check if the i+1 is greater than i or lesser than i
        //If i+1 is greater than i, then check if i+2 is lesser than i+1
        //Take 3 elements and see if they are in the required order of i>i+1 & i+1<i+2 or i<i+1 & i+1>i+2
            if(!checkIfInOrder(A[i],A[i+1],A[i+2])){
                counter++;
            }
        }
    }
    
    //Return the counter
    return counter;
}

function checkIfInOrder(a,b=0,c=0){
   if(a>b && b<c)
    return true;
else if(a<b && b>c)
    return true;
else return false;
}

function isArraySorted(arr){
    console.log(arr);
    var ascArr = [...arr];
    ascArr.sort((a,b)=>a-b);
    console.log(ascArr);
    var desArr = [...arr];
    desArr.sort((a,b)=>b-a);
    if(JSON.stringify(arr)===JSON.stringify(ascArr)|| JSON.stringify(arr)===JSON.stringify(desArr)){
        console.log('Equal');
        return true;
    }
        
    else
        return false;
}

console.log(solution([1,2,3,4]));
console.log(solution([3,4,5,3,7]));