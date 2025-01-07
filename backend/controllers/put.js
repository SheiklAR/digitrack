import pool from "../config/pool.js";


const updateBranchDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const { 
            branchData, branchContactDetails, advanceRequestDetails, branchIncargeDetails, 
            contactPersonDetails, openingDetails, bankDetails, status 
        } = req.body;


        // Update branch table
        await pool.query(
            `UPDATE branch
             SET name = $1, code = $2, short_name = $3, branch_type = $4,
                 vehicle_type = $5, locality = $6, city = $7, state = $8, door_no = $9, street = $10,
                 pan_number = $11, gst_number = $12
             WHERE id = $13`,
            [
                branchData.branchName, branchData.branchCode, branchData.branchShortName, branchData.branchType,
                branchData.vehicleType, branchData.locality, branchData.city, branchData.state,
                branchData.doorNo, branchData.street, branchData.panNumber, branchData.gstIn, id,
            ]
        );

        // Insert into branch_contact_details
        await pool.query(
            `INSERT INTO branch_contact_details (id, branch_contact_no, branch_alternate_contact_no, branch_whatsapp_no, branch_email_id)
             VALUES ($1, $2, $3, $4, $5)`,
            [
                id,
                branchContactDetails.branchContactNo || '',
                branchContactDetails.branchAlternateContactNo || '',
                branchContactDetails.branchWhatsappNo || '',
                branchContactDetails.branchEmailId || '',
            ]
        );

        // Insert into advance_request_details
        await pool.query(
            `INSERT INTO advance_request_details (id, minimum_amount, maximum_amount, monthly_maximum_amount, maximum_unsettled_amount, effective_date)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                id,
                advanceRequestDetails.minimumAmount || '',
                advanceRequestDetails.maximumAmount || '',
                advanceRequestDetails.monthlyMaximumAmount || '',
                advanceRequestDetails.maximumUnsettledAmount || '',
                advanceRequestDetails.effectiveDate || '',
            ]
        );

        // Insert into branch_incharge_details
        await pool.query(
            `INSERT INTO branch_incharge_details (id, branch_incharge_name, branch_incharge_contact_no, branch_incharge_alternate_contact_no, branch_incharge_whatsapp_no, branch_incharge_email_id)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                id,
                branchIncargeDetails.branchIncargeName || '',
                branchIncargeDetails.branchIncargeContactNo || '',
                branchIncargeDetails.branchInchargeAlternateContactNo || '',
                branchIncargeDetails.branchIncargeWhatsappNo || '',
                branchIncargeDetails.branchIncargeEmailId || '',
            ]
        );

        // Insert into contact_person_details
        await pool.query(
            `INSERT INTO contact_person_details (id, contact_person_contact_no, contact_person_alternate_contact_no, contact_person_email_id, contact_person_whatsapp_no)
             VALUES ($1, $2, $3, $4, $5)`,
            [
                id,
                contactPersonDetails.contactPersonContactNo || '',
                contactPersonDetails.contactPersonAlternateContactNo || '',
                contactPersonDetails.contactPersonEmailId || '',
                contactPersonDetails.contactPersonWhatsappNo || '',
            ]
        );

        // Insert into opening_details
        await pool.query(
            `INSERT INTO opening_details (id, opening_time, closing_time)
             VALUES ($1, $2, $3)`,
            [
                id,
                openingDetails.openingTime || '',
                openingDetails.closingTime || '',
            ]
        );

        // Insert into bank_details
        await pool.query(
            `INSERT INTO bank_details (id, bank_name, account_number, account_holder_name, ifsc_code, branch_name)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
                id,
                bankDetails.bankName || '',
                bankDetails.accountNumber || '',
                bankDetails.accountHolderName || '',
                bankDetails.ifscCode || '',
                bankDetails.branchName || '',
            ]
        );

        // Update status
        await pool.query(
            `UPDATE status
             SET status = $1
             WHERE id = $2`,
            [status.status || '', id]
        );

         // Commit transaction
        res.status(200).json({ message: 'Branch details updated successfully.' });
    } catch (error) {
        await pool.query('ROLLBACK'); // Rollback transaction on error
        res.status(500).json({ message: 'Failed to update branch details.', error: error.message });
    }
};


export { updateBranchDetails };