import inquirer from "inquirer";

let word_count: string[] = []

let para = await inquirer.prompt([
    {
        name: "paragraph",
        type: "string",
        message: "Enter Your Sentence >"
    }
]);
//Approach 1 using split for spaces
if (para) {
   word_count= para.paragraph.toLowerCase().split(" ");
   console.log(word_count.length);
}
let regex=new RegExp(/\w+/g);
let temp=para.paragraph.split(regex)
console.log(temp.length);
console.log(temp);
