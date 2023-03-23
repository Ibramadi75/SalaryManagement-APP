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
            enum : ['Salaire de base', 'Avantages en nature', 'Primes', 'Gratifications', 'Indemnités de transport', 'Indemnités de repas', 'Indemnités de logement', 'Indemnités de départ à la retraite', 'Indemnités de licenciement', 'Indemnités de congés payées', 'Remboursements de frais professionnels']
        }
    },
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