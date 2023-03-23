import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name : String,
    surname : String,
    address : String,
    service : String,
    socialSecurityNumber : Number,
    grossSalary : mongoose.Decimal128,
    hiringDate : { type : Date, default : Date.now() },
    endDateContract : { type : Date, default : null }
},{
    methods: {
        findCoworkers() {
          return mongoose.model('Employee').find({ service: this.service });
        }
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee };