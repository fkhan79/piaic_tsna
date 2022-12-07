import inquirer from "inquirer";
interface account {
    "userName": string;
    "password": number;
    "customerName": string;
    "customerBalance": number;
    "pinRetries": number;
}

let accounts: account[] = [];
accounts.push({
    userName: "Faisal", password: 1234,
    customerName: "Faisal Khan", customerBalance: 100000, pinRetries: 0
});
accounts.push({
    userName: "Anees", password: 1234,
    customerName: "Anees Ahmed", customerBalance: 100000, pinRetries: 0
});
accounts.push({
    userName: "Humza", password: 1234,
    customerName: "Humza Syed", customerBalance: 100000, pinRetries: 0
});
while (true) {
    let isValididated: boolean = false;

    console.log("welcome to basic atm");
    let userNameInput = await inquirer.prompt([
        {
            name: "inputUser",
            type: "string",
            message: "Input User Name:"
        }
    ]);
    let userPasswordInput = await inquirer.prompt([
        {
            name: "inputPassword",
            type: "password",
            message: "Input User Pin:"
        }
    ]);
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === userNameInput.inputUser) {
            if (accounts[i].password === userPasswordInput.inputPassword) {
                isValididated = true;
                break;
            }
        } else {
            accounts[i].pinRetries += 1;
        }
    }
    if (isValididated) {
        
    } else {
        console.log("Invalid Pin, Please try again!!!");
    }
}