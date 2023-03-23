import mongoose from 'mongoose';
const { Schema } = mongoose;

const wageSchema = new Schema({
  
},{
    methods: {
        
    }
});

const Wage = mongoose.model('Wage', wageSchema);

export { Wage };