import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    // branch: {
        
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        shortName: {
            type: String,
            required: true,
        },
        branchType: {
            type: String,
            required: true,
        },
        vehicleType: {
            type: String,
            required: true,
        },
        // panNumber: 'number',
        // gstIn: 'string',

        // address: {
        //     door_no: 'number',
        //     street: 'string',
        //     locality: {
        //         type: String,
        //         required: true,
        //     },
        //     city: {
        //         type: String,
        //         required: true,
        //     },
        //     state: {
        //         type: String,
        //         required: true,
        //     },
        // },
    
    
    
    // contact: {
    //     contactNo: 'number',
    //     alternateNo: 'number',
    //     email: 'string',
    //     whatsappNo: 'number',
    // },

    // inCharge: {
    //     name: 'string',
    //     contactNo: 'number',
    //     alternateNo: 'number',
    //     whatsappNo: 'number',
    //     email: 'string',
    // },

    // contactPerson: {
    //     name: 'string',
    //     contactNo: 'number',
    //     alternateNo: 'number',
    //     whatsappNo: 'number',
    //     email: 'string',
    // },

    // openingDetails: {
    //     openingBalance: 'number',
    //     openingDate: 'date',
    // },

    // advanceRequestDetails: {
    //     minimumAmount: 'number',
    //     maximumAmount: 'number',
    //     monthlyMaximumAmount: 'number',
    //     maximumUnsettledAmount: 'number',
    //     effectiveDate: 'date',
    // },

    // bankDetails: {
    //     accountNo: 'number',
    //     accountHolderName: 'string',
    //     bank: 'string',
    //     ifscCode: 'string',
    //     branch: 'string',
    //     accountType: 'string',
    // },

})



const Branch = mongoose.model('Branch', branchSchema);

export default Branch;