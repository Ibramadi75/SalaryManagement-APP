import mongoose from 'mongoose';
const { Schema } = mongoose;

const wageSchema = new Schema({
  amount : mongoose.Decimal128,
  type : {
    type : 'String',
    enum : ['Salaire de base', 'Avantages en nature', 'Primes', 'Gratifications', 'Indemnités de transport', 'Indemnités de repas', 'Indemnités de logement', 'Indemnités de départ à la retraite', 'Indemnités de licenciement', 'Indemnités de congés payées', 'Remboursements de frais professionnels']
  }
},{
    methods: {
        
    }
});

const Wage = mongoose.model('Wage', wageSchema);

export { Wage };