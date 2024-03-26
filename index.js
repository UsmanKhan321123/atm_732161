#!/usr/bin/env node
import inquirer from "inquirer";
let myPin = 7733;
let Total_Balance = 50000;
let pin_number = await inquirer.prompt([
    {
        name: "pinNumber",
        type: "number",
        message: "Please Enter your PIN Number",
    },
]);
if (pin_number.pinNumber === myPin) {
    console.log("correct PIN number");
    let operation = await inquirer.prompt([
        {
            name: "Operations",
            message: "Select the operation you want to perform",
            type: "list",
            choices: ["withdraw", "check_balance"],
        },
    ]);
    if (operation.Operations == "withdraw") {
        let amount_for_withdrawal = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Please enter the amunt you want to withdraw",
                type: "number",
            },
        ]);
        if (amount_for_withdrawal.withdraw <= Total_Balance &&
            amount_for_withdrawal.withdraw > 0) {
            console.log(`Successfully withdraw the amount of : ${amount_for_withdrawal.withdraw}$`);
            console.log(`The remaining balance is : ${Total_Balance - amount_for_withdrawal.withdraw}$`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operation.Operations == "check_balance") {
        console.log(`The balance of your account is : ${Total_Balance}$`);
    }
}
else {
    console.log("Incorrect PIN Number");
}
