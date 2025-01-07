import pool from "../config/pool.js";

const createBranchTable = async () => {
    try {
        const createBranchTableQuery = `
            CREATE TABLE IF NOT EXISTS branch(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                code VARCHAR(50) NOT NULL,
                short_name VARCHAR(50) NOT NULL,
                branch_type VARCHAR(50) NOT NULL,
                vehicle_type VARCHAR(50) NOT NULL,
                door_no VARCHAR(50),
                street VARCHAR(50),
                locality VARCHAR(50) NOT NULL,
                city VARCHAR(50) NOT NULL,
                state VARCHAR(50) NOT NULL,
                pan_number BIGINT NOT NULL,
                gst_number BIGINT
            )
        `;

        const created = await pool.query(createBranchTableQuery);
        console.log('after creating table', created);

    } catch (error) {
        console.log('Error creating table', error);
    }
};

const createBranchContactTable = async () => {
    try {
        const branchContactTableQuery = `
            CREATE TABLE IF NOT EXISTS branch_contact(
                id SERIAL PRIMARY KEY,
                contact_no BIGINT,
                alternate_contact_number BIGINT,
                whatsapp_no BIGINT,
                email VARCHAR(100),
                branch_id INT NOT NULL,
                 CONSTRAINT fk_branch_contact FOREIGN KEY (branch_id) REFERENCES branch (id)
            )
        `;

        const created = await pool.query(branchContactTableQuery);
        console.log('created details for table 2', created);
    } catch (error) {
        console.log(error);
    }
};

const createInchargeTable = async () => {
    try {
        const createInchargeQuery = `
            CREATE TABLE IF NOT EXISTS incharge (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                contact_no BIGINT,
                alternate_contact_no BIGINT,
                whatsapp_no BIGINT,
                emailId VARCHAR(50),
                branch_id INT NOT NULL,
                CONSTRAINT fk_branch_incharge FOREIGN KEY (branch_id) REFERENCES branch (id)
            )
        `;

        const created = await pool.query(createInchargeQuery);
        console.log('created tables details', created);
    } catch (error) {
        console.log(error);
    }
};

const createContactPersonTable = async () => {
    try {
        const createContactPersonQuery = `
            CREATE TABLE IF NOT EXISTS contactPerson (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                contact_no BIGINT,
                alternate_contact_no BIGINT,
                whatsapp_no BIGINT,
                emailId VARCHAR(50),
                branch_id INT NOT NULL,
                CONSTRAINT fk_branch_contactPerson FOREIGN KEY (branch_id) REFERENCES branch (id)
            )
        `;

        const created = await pool.query(createContactPersonQuery);
        console.log('created tables details', created);
    } catch (error) {
        console.log(error);
    }
};

const createOpeningBalanceTable = async () => {
    try {
        const openingBalanceQuery = `
            CREATE TABLE IF NOT EXISTS opening_balance(
                id SERIAL PRIMARY KEY,
                opening_balance FLOAT,
                opening_date DATE,
                branch_id INT NOT NULL,
                CONSTRAINT fk_branch_openingBalance FOREIGN KEY (branch_id) REFERENCES branch (id)
            )
        `;

        const created = await pool.query(openingBalanceQuery);
        console.log('table created details', created);
    } catch (error) {
        console.log(error);
    }
};

const createAdvanceRequestTable = async () => {
    try {
        const createAdvanceRequestQuery = `
            CREATE TABLE IF NOT EXISTS advance_request(
                id SERIAL PRIMARY KEY,
                minimum_amount FLOAT,
                maximum_amount FLOAT,
                monthly_maximum_amount FLOAT,
                maximum_unsettled_amount FLOAT,
                effective_date DATE,
                branch_id INT NOT NULL,
                CONSTRAINT fk_branch_advanceRequest FOREIGN KEY (branch_id) REFERENCES branch (id)

            )
        `;

        const created = await pool.query(createAdvanceRequestQuery);
        console.log('created table details', created);
    } catch (error) {
        console.log(error);
    }
};

const createBankDetailsTable = async () => {
    try {
        const bankDetailsQuery = `
            CREATE TABLE IF NOT EXISTS bank_details(
                id SERIAL PRIMARY KEY,
                branch_id INT NOT NULL,
                account_number BIGINT,
                account_holder_name VARCHAR(50),
                IFSC_code BIGINT,
                bank_name VARCHAR(50),
                branch_name VARCHAR(50),
                CONSTRAINT fk_branch FOREIGN KEY (branch_id) REFERENCES branch (id)
            )
        `;
        const created = await pool.query(bankDetailsQuery);
        console.log(created);
    } catch (error) {
        console.log(error);
    }
};

const createStatusTable = async () => {
    try {
        const created = await pool.query(`CREATE TABLE IF NOT EXISTS status(
            id SERIAL PRIMARY KEY,
            status BOOLEAN,
            branch_id INT NOT NULL,
            CONSTRAINT fk_branch_status FOREIGN KEY (branch_id) REFERENCES branch (id)
        )`)
        console.log(created);
    } catch (error) {
        console.log(error);
    }
}


const dropTables = async () => {
    try {
        const query = `DROP TABLE IF EXISTS 
                    branch_contact, 
                    incharge, 
                    contactPerson, 
                    opening_balance, 
                    advance_request,
                    status,
                    bank_details`;
        
        const deleted = await pool.query(query);
        console.log(deleted);
        console.log('deleted tables');
    } catch(error) {
        console.log(error);
    }
}

export {
    createBranchTable,
    createBranchContactTable,
    createInchargeTable,
    createContactPersonTable,
    createOpeningBalanceTable,
    createAdvanceRequestTable,
    createBankDetailsTable,
    dropTables,
    createStatusTable
    
};