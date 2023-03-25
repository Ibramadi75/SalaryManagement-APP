import { Employee } from "./Employee.js";
import mongoose from "mongoose";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SalaryManagement-DB');

    /* Insert */
    Employees.insertOne({
        name : "Ibrahim",
        surname : "Madi",
        adress : "37 avenue de Mongo, Paris",
        service : "IT",
        socialSecurityNumber : "321",
        salary : [
            {
                amount : 1679.33,
                type : "Salaire de base"
            },
            {
                amount : 332.67,
                type : "Prime"
            }
        ],
        HiringDate : Date.now(),
        endDateContract : null,
    });


    /* Find/FindOne */
    const result = await Employee.findOne({ name : "Ibrahim"}).totalSalary().exec();

    // console.log(result)
}