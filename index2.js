// Create a function named reverseVowels that takes a string as its parameter and returns the string with all its vowels (a, e, i, o, u) reversed in position. Non-vowel characters should stay in their original positions.

// For example:

// "hello" should return "holle" (because 'e' and 'o' swap positions)
// "programming" should return "pregramming" (because 'o', 'a', and 'i' are reversed)
// The function should be case-sensitive (treat uppercase and lowercase vowels differently).

// let str = "hello";
// let arr = str.split("")
// let vowels1 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

// function reverseVowesl(arr){ 
//         let vowels = "aeiouAEIOU"; 
//     let found = []
//     for(let i = 0; i < arr.length; i++){ 
//         let char = arr[i]
//         if(vowels.includes(char)){ 
//            found.push(char)
//         }
//     }

//     found.reverse()

//     let index = 0;
//     for(let i = 0; i< arr.length; i++){ 
        
//         if(vowels.includes(arr[i])){ 
//             arr[i] = found[index];
//             index++
//         }
//     }
     
//     let joinedArr = arr.join("")
//     console.log(joinedArr)

// }

// reverseVowesl(arr);

// let str = "Hello World"

// function alternateCase(str){ 
//     let newStr = []
//     for(let i = 0; i < str.length; i++){ 
//         if(i % 2 === 0){ 
//             newStr.push(str[i].toUpperCase())
//         }
//         else{ 
//             newStr.push(str[i].toLowerCase())
//         }
        
//     }

//     console.log(newStr.join(''))
//     return newStr.join('')
// }

// alternateCase(str)


// let title = " how to learn javascript for begginers "

// function formatBlohTitle(title){ 
//     let tirmedTitle = title.trim()
//     console.log(tirmedTitle)

//    let splitedTitle = tirmedTitle.split(" ")


//     for(let i = 0; i < splitedTitle.length; i++){ 
//          splitedTitle[i] = splitedTitle[i][0].toUpperCase() + splitedTitle[i].slice(1);
//     }

//  // ["Hello", "World", "Example"]
//    let joinedString = (splitedTitle.join(" "));

//    let split = joinedString.split(" ");

//    for(let i = 0; i < split.lenght; i++){ 

//         if(split[i] === "Javascript"){ 
//           split[i].replaceAll("Javascript", "JavaScript");
//           console.log(split[i])
          
//         }
//         else{ 
//           console.log(`${joinedString} + joined`)
//         }
//    }


//    console.log(`${split} + split`)




// }

// formatBlohTitle(title)

