/*
var people =  [
    {
        'name'     : 'd',
        'index'    : 3
    },
    {
        'name'     : 'c',
        'index'     : 2
    },
    {
        'name'     : 'a',
        'index'    : 0
    },
    {
        'name'     : 'b',
        'index'    : 1
    },
    {
        'name'     : 'z',
        'index'    : 80
    },
    {
        'name'     : 'm',
    'index'    : 90
},
{
    'name'     : 'u',
        'index'    : 679
}
];
//Sorting the array
people.sort((a,b)=> a.index - b.index);
console.log(people);*/


//Balanced String
//Given an input string which can contain different kinds of braces, find if the string is balanced or 
//not. A balanced string is one which has all the brackets opening and closing in the correct order.

/*
Input: exp = "[()]{}{[()()]()}"
Output: Balanced

Input: exp = "[(])"
Output: Not Balanced*/

/*function balancedString(str){
    let stack=[];
    let map={
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (var i=0; i< str.length;i++){
        if(str[i]==='(' || str[i]==='[' || str[i]==='{'){
            stack.push(str[i]);
        }
        else{
            let last = stack.pop();

            if(str[i] != map[last])
                return "Not Balanced";
        }
    }
    if(stack.length !== 0)
        return "Not Balanced";
    
    return "Balanced";
}

let statement = balancedString("[()]{}{[()()]()}");
console.log(statement);
let st = balancedString("[(])");
console.log(st); */

/*Implement an adder function in such a way, it always returns a function.
 When we supply any parameter N to returned function, it will add N to the existing sum.
  But when we do not pass any parameter, it returns the accumulated sum.

Example: 
add(1)(2)(3)()  // 6
add(1)(3)(4)(5)(6)() // 19 */

function add(x){
  let sum = x;
  return function result(y){
      //console.log(arguments.length);
      if(arguments.length){
          sum+=y;
         // console.log(sum);
          //console.log(result);
          return result;
      }
      return sum;
  }

}

var res=add(1)(2)(4)(5)() ;
console.log("Res: "+res);



