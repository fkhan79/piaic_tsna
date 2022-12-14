import inquirer from "inquirer";
interface currency {
    "currencyCode": string,
    "currencyName": string,
    "conversionRate": number
}
let currencies: currency[] = [];
currencies.push({ currencyCode: "USD", currencyName: "US-Dollar", conversionRate: 234.7 });
currencies.push({ currencyCode: "EUR", currencyName: "Euro", conversionRate: 236.81 });
currencies.push({ currencyCode: "AED", currencyName: "UAE Dirham", conversionRate: 60.67 });
currencies.push({ currencyCode: "SAR", currencyName: "Saudi Riyal", conversionRate: 59.26 });
let currcode: string[] = [];
for (var currency of currencies) {
    currcode.push(currency.currencyCode);
}
let opr = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        choices: currcode,
        message: "Select your desired currency"
    }
]);

let pkramount = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "enter your amount in PKR"
    }
]);

let found = currencies.find(element => (element.currencyCode == opr.operation));
if (found) {
    let amount = pkramount.amount / found.conversionRate;
    console.log(`${pkramount.amount} pkr is equal to ${amount} in ${found.currencyName}`);
}
