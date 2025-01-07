import mongoose from "mongoose";


const branchContactSchema = new mongoose.Schema({
    branchContactNo: 'number',
    branchAlternateNo: 'number',
})





const BranchContact = mongoose.model('BranchContact', branchContactSchema);

export default BranchContact;