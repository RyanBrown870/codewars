

function solution(str){
   
    const call = (string) => {
        let newArr =[];
        string.split('').forEach((item, index, array) => {
            if (index % 2 === 0) {
            
            newArr.push(item.concat(array[index+1]));
            }
            
    })
    return newArr;
    }

    return str.length % 2 === 0 ? call(str) : call(str).map(item => item.replace(/undefined/gi, '_'));

}

solution('abcdef');

// shorter solution
let str = 'abcdefg';
console.log((str+'_').match(/.{2}/g));

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the 
// missing second character of the final pair with an underscore ('_').

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']