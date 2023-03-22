import { Employee } from "./Employee.js";
import mongoose from "mongoose";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SalaryManagement-DB');


    const result = await Employee.findOne({ name : "Ibrahim"}).exec()
    console.log(result)
}