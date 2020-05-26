console.log("Time to get started...");

//  We does not know what the user will input
let userInput: unknown;

userInput = 5;
userInput = {
  name: "Max",
};
userInput = "Max";

let username: string;
// Can not assigned unknown type to type string.
// This will give error as unknown types can store anything
// username = userInput;

// Below check works as we first check if userInput is string
// And then only assign it to username
if (typeof userInput === "string") {
  username = userInput;
}

// The "never" type
// This is function never produces a value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true){}
}

generateError("An error occured", 500);
