import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectPG from './config/db.js';
import { addBranch, deleteBranch, getBranches, updateBranch } from './controllers/controller.js';
import  getExcelData  from './controllers/excelController.js';
import Branch from './models/branchModel.js';
// import BranchContact from './models/branchContactModel.js';
import { createBranchTable, createBranchContactTable, createInchargeTable, createContactPersonTable, createOpeningBalanceTable, createAdvanceRequestTable, createBankDetailsTable, createStatusTable, dropTables } from './models/branchTable.js';
import pool from './config/pool.js';
import router from './Routes/routes.js';



// Connect to database
// connectDB();
connectPG();

const PORT = 5000;

const addBank = async () => await Branch.insertMany([
    {
            name: 'bank',
            code: 'dkfd',
            shortName: 'bk',
            branchType: 'type',
            vehicleType: 'Vehtype',
            panNumber: 99999999,
            gstIn: 'dlkfjkld888',
    
            // address: {
            //     door_no: 22,
            //     street: 'street',
            //     locality: 'locality',
            //     city: 'city',
            // state: 'state',
            // }
        }
    
])


const addContact = async () => await BranchContact.insertMany([
    {
        branchContactNo: 9999999999,
        branchAlternateNo: 8888888888,
    }
]);

// createBranchTable();
// createBranchContactTable();
// createInchargeTable();
// createContactPersonTable();
// createOpeningBalanceTable();
// createAdvanceRequestTable();
// createBankDetailsTable();
// createStatusTable();

const makeChange = async () => {
    const query = `
    ALTER TABLE branch_contact
    DROP CONSTRAINT unique_email ;
    `;
    try {
        const altered = await pool.query(query);
        console.log('altered', altered)
    } catch (err) {
        console.log(err);
    }
}


// makeChange()



const showTables = async () => {
    const allTables = await pool.query(`SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
`);
    console.log(allTables);
}
// showTables();




// add();
// addBank();
// addContact();

const app = express(); 

// Body Parser Middleware
app.use(express.json());

// URL encoded data parser
app.use(express.urlencoded({ extended: true }));


const addlocality = async () => { 
    try {
        const created = await pool.query(`drop table if exists branch`);
        console.log(created);
    } catch (error) {
        console.log(error) 
    }
}


addlocality();


app.use('/api', router);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

