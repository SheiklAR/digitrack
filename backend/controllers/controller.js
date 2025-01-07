// import Branch from '../models/branchModel.js';
import pool from "../config/pool.js";


const addBranch = async (req, res) => {
    try {
        const { name, code, short_name, branch_type, vehicle_type } = req.body;

        // check if the branch already exists
        const checkBranchQuery = `SELECT * FROM branch WHERE name = $1;`;

        let branch = await pool.query(checkBranchQuery, [name]);
        
        if (branch.rowCount > 0) {

            res.status(409).json({ 'message': `user already exists` });

        } else {

            const newBranchQuery = `INSERT INTO branch(name, code, short_name, branch_type, vehicle_type)
            VALUES ($1, $2, $3, $4, $5);
            `;
            
            branch = await pool.query(newBranchQuery, [name, code, short_name, branch_type, vehicle_type]);
            
            const response = await pool.query(`SELECT * FROM branch;`);

            res.status(201).json(response.rows);
        }
    } catch (error) {
        res.status(404).send(error);
        console.log(error);
    }
}

const getBranches = async (req, res) => {
    try {
        const branches = await pool.query(`SELECT * FROM branch;`);
        res.status(200).json(branches.rows);
    } catch (err) {
        res.status(404).send('Data not found');
        console.log(err);
    }
}


const getBranch = async (req, res) => {
    const id = req.params.id;
    try {
        const query = `SELECT * FROM branch WHERE id = $1;`;
        const branch = await pool.query(query, [id]);
        res.status(200).json(branch.rows);
    } catch (err) {
        res.status(404).send('Data not found');
        console.log(err);
    }
}

const deleteBranch = async (req, res) => {
    try { 
        console.log(req.body);
        const id = req.body.id;
        console.log("id", id);
        const branch = await Branch.findById(id);
        if (!branch) { 
            res.status(404).json({message: 'Branch not found'});
        } else {
            await Branch.deleteOne({ _id: id });
            res.status(200).json({message: 'Branch deleted successfully'});
        }
    } catch (err) {
        res.status(404);
        throw new Error('Branch not found');
        console.log(err);
    }
}

const updateBranch = async (req, res) => {
    try {

        console.log(req.body);

        const {
            branchData: { branchName: name, branchCode: code, branchShortName: shortName, branchType: branch_type, vehicleType: vehicle_type, locality, city, state, doorNo: door_no, street,
                panNumber: pan_number, gstIn: gst_number },
            branchContactDetails: { branchContactNo, branchAlternateContactNo, branchWhatsappNo, branchEmailId },
            advanceRequestDetails: { minimumAmount, maximumAmount, monthlyMaximumAmount, maximumUnsettledAmount, effectiveDate },
            branchIncargeDetails: { branchIncargeName, branchIncargeContactNo, branchInchargeAlternateContactNo, branchIncargeWhatsappNo, branchIncargeEmailId },
            contactPersonDetails: { contactPersonContactNo, contactPersonAlternateContactNo, contactPersonEmailId, contactPersonWhatsappNo }, 
            openingDetails: { openingTime, closingTime },
            bankDetails: { bankName, accountNumber, accountHolderName, ifscCode, branchName },
            status: { status },
        } = req.body;
        

        

        res.json(req.body);
        // res.send(data);

        // const { id, name, code, shortName, branchType, vehicleType, locality, city, state } = req.body;

        // const data = await Branch.findById(id);

        // name && (data.branch.name = name);
        // code && (data.branch.code = code);
        // shortName && (data.branch.shortName = shortName);
        // branchType && (data.branch.branchType = branchType);
        // vehicleType && (data.branch.vehileType = vehicleType);
        // locality && (data.branch.address.locality = locality);
        // city && (data.branch.address.city = city);
        // state && (data.branch.address.state = state);

        // const updatedData = await data.save();
        // res.status(200).json(updatedData);
        
    } catch (err) { 
        res.status(404).send('Data not found');
        console.log(err);
    }
}


export {
    deleteBranch,
    updateBranch,
    getBranches,
    addBranch,
    getBranch
};