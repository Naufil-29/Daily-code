// Create a configuration management system that processes dynamic settings using index signatures, type guards, and type assertions.

// Create an interface named AppConfig that uses an index signature to map string keys to values of type string | number | boolean.

// Create a function named validateConfigValue that:

// Takes two parameters: config of type AppConfig and key of type string
// Returns "missing" if the key doesn't exist in the config
// Uses type guards to check the actual type of the value
// Returns "string" if the value is a string
// Returns "number" if the value is a number
// Returns "boolean" if the value is a boolean
// Has an explicit return type of string
// Create a function named getConfigAsString that:

// Takes two parameters: config of type AppConfig and key of type string
// Returns "undefined" if the key doesn't exist
// Uses a type assertion to treat the value as string and returns it if the value exists
// Has an explicit return type of string
// Create a function named processConfig that:

// Takes two parameters: config of type AppConfig and key of type string
// Uses validateConfigValue to check the type
// Returns the value converted to uppercase if it's a string
// Returns the value multiplied by 10 if it's a number
// Returns the opposite boolean value if it's a boolean
// Returns null if the key is missing
// Has an explicit return type of string | number | boolean | null
// Create test data:

// Create settings of type AppConfig with:
// "appName": "MyApp"
// "version": 2.1
// "debugMode": true
// "maxUsers": 100
// "theme": "dark"
// Test your functions and print the following outputs:

// Call validateConfigValue with settings and "appName"
// Call validateConfigValue with settings and "version"
// Call validateConfigValue with settings and "debugMode"
// Call validateConfigValue with settings and "timeout"
// Call getConfigAsString with settings and "theme"
// Call getConfigAsString with settings and "missing"
// Call processConfig with settings and "appName"
// Call processConfig with settings and "maxUsers"
// Call processConfig with settings and "debugMode"
// Call processConfig with settings and "invalid"

// TODO: Write your code here

// Create the AppConfig interface
interface AppConfig {
   [keys:string] : string|number|boolean
}

// Create the validateConfigValue function
function validateConfigValue (config: AppConfig, key: keyof AppConfig): string { 
    const value = config[key];
    if(value === undefined){ 
        return "missing"
    }
    else if(typeof value === "string"){ 
        return "string"
    }
    else if(typeof value === "number"){ 
        return "number"
    }
    else{ 
        return "boolean";
    }
}

// Create the getConfigAsString function
function getConfigAsString(config: AppConfig, key: keyof AppConfig):string | "undefined" { 
    const value = config[key];

    if (typeof value === "string") {
        return value;
    }

    return "undefined";
}

// Create the processConfig function
function processConfig(config: AppConfig, key: keyof AppConfig): string | number | boolean | null {
  const value = config[key];
  if(typeof(value) === "string"){ 
    return value.toUpperCase();
  }
  else if(typeof(value) === "number"){ 
    return value * 10;
  }
  else if(typeof(value) === "boolean"){ 
    if(value === true){ 
        return false;
    }
    else{ 
        return true;
    }
  }
  else{ 
    return null;
  }
}   

// Create test data - settings object
const settings: AppConfig = { 
"appName": "MyApp",
"version": 2.1,
"debugMode": true,
"maxUsers": 100,
"theme": "dark",
}

// Test the functions and print results
console.log(validateConfigValue(settings, "appName"));
console.log(validateConfigValue(settings, "version"));
console.log(validateConfigValue(settings, "debugMode"));
console.log(validateConfigValue(settings, "timeout"));
console.log(getConfigAsString(settings, "theme"));
console.log(getConfigAsString(settings, "missing"));
console.log(processConfig(settings, "appName"));
console.log(processConfig(settings, "maxUsers"));
console.log(processConfig(settings, "debugMode"));
console.log(processConfig(settings, "invalid"));