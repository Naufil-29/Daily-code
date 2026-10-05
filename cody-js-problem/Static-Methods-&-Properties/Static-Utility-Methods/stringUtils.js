// Create a class named StringUtils with a static method called capitalize that takes a string as an argument and returns the same string with the first letter capitalized. For example, if the input is "javascript", the method should return "Javascript". Export this class.

// Check if the string is empty: if (!str || str.length === 0) (Without this check an empty string could cause issues).
// !str checks for null/undefined (prevents errors)
// str.length === 0 checks for empty string (returns "" instead of crashing)
// Get the first character: str.charAt(0)
// Make it uppercase: .toUpperCase()
// Get the rest of the string: str.slice(1) (from position 1 to end)
// Combine: uppercase first character + rest of string


export class StringUtils { 
    static capitalize(str){ 
       if(!str || str.length === 0){ 
        return
       }
       const first = str.charAt(0).toUpperCase();
       const rest = str.slice(1);
       return first + rest;


    }
}