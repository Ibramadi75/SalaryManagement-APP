import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name : String,
    surname : String,
    address : String,
    service : String,
    socialSecurityNumber : Number,
    salary : {
        amount : mongoose.Decimal128,
        type : {
            type : 'String',
            enum : ['Salaire de base', 'Avantages en nature', 'Prime', 'Gratifications', 'Indemnités de transport', 'Indemnités de repas', 'Indemnités de logement', 'Indemnités de départ à la retraite', 'Indemnités de licenciement', 'Indemnités de congés payées', 'Remboursements de frais professionnels']
        }
    },
    hiringDate : { type : Date, default : Date.now() },
    endDateContract : { type : Date, default : null }
},{
    methods: {
        findCoworkers() {
          return mongoose.model('Employee').find({ service: this.service });
        },
        totalSalary() {
            let total = 0;
            for (let i = 0; i < this.grossSalary.length; i++) {
                total += this.grossSalary[i].amount;
            }
            return total;
        }
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee };