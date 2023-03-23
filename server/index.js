import { Employee } from "./Employee.js";
import mongoose from "mongoose";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SalaryManagement-DB');


    // db.Employees.insertOne({
    //     name : "Ibrahim",
    //     surname : "Madi",
    //     adress : "37 avenue de Mongo, Paris",
    //     service : "IT",
    //     socialSecurityNumber : "321",
    //     grossSalary : "1188.37",
    //     HiringDate : Date.now(),
    //     endDateContract : null,
    // });

    const result = await Employee.findOne({ name : "Ibrahim"}).exec()
    console.log(result)
}