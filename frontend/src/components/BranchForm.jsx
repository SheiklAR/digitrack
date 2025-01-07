import { useEffect, useState } from 'react';
import InputElement from './InputElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasicSwitches from './Switch';



const BranchForm = ({ id }) => {
    const [branchData, setBranchData] = useState({
        branchName: '',
        branchCode: '',
        branchShortName: '',
        branchType: '',
        vehicleType: '',
        doorNo: '',
        street: '',
        locality: '',
        city: '',
        state: '',
        panNumber: '',
        gstIn: '',
    })
    const [branchContactDetails, setbranchContactDetails] = useState(
        {
            branchContactNo: '',
            branchAlternateContactNo: '',
            branchWhatsappNo: '',
            branchEmailId: ''
        });
    const [branchInchargeDetails, setBranchInchargeDetails] = useState({
        branchInchargeName: '',
        branchInchargeAlternateContactNo: '',
        branchInchargeContactNo: '',
        branchInchargeWhatsappNo: '',
        branchInchargeEmailId: ''
    });
    const [contactPersonDetails, setContactPersonDetails] = useState({
        contactPersonContactNo: '',
        contactPersonAlternateContactNo: '',
        contactPersonEmailId: '',
        contactPersonWhatsappNo: '',
    });
    const [openingDetails, setOpeningDetails] = useState({
        openingBalance: '',
        openingDate: '',
    });
    const [advanceRequestDetails, setAdvanceRequestDetails] = useState({
        minimumAmount: '',
        maximumAmount: '',
        monthlyMaximumAmount: '',
        maximumUnsettledAmount: '',
        effectiveDate: '',
    });
    const [bankDetails, setBankDetails] = useState({
        bankName: '',
        accountNumber: '',
        accountHolderName: '',
        ifscCode: '',
        branchName: '',
    });
    const [isActive, setIsActive] = useState(false);

    
    useEffect(() => {
        fetch(`/api/branch/${id}`)
            .then((res) => res.json())
            .then((data) => {

                setBranchData({
                    branchName: data[0].name || '',
                    branchCode: data[0].code || '',
                    branchShortName: data[0].short_name || '',
                    branchType: data[0].branch_type || '',
                    vehicleType: data[0].vehicle_type || '',
                    doorNo: data[0].door_no || '',
                    street: data[0].street || '',
                    locality: data[0].locality || '',
                    city: data[0].city || '',
                    state: data[0].state || '',
                    panNumber: data[0].pan_number || '',
                    gstIn: data[0].gst_number || '',
                }
                )
                //   console.log(typeof(data))
                // console.log('data.name', data[0].name);
                // console.log(branchData)
                // console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);


    const branchContactDetailsFields = {
        
    }


   
    

    // branch form fields
    const branchDetailsData = [
        ['Branch Code', 'branchCode', 'Branch Code*', '*', 'text'],
        ['Branch Name', 'branchName', 'Branch Name*', '*', 'text'],
        ['Branch Short Name', 'branchShortName', 'Branch Short Name*', '*', 'text'],
        ['Door No', 'doorNo', 'Door No', '', 'number'],
        ['Street', 'street', 'Street', '', 'text'],
        ['Locality', 'locality', 'Locality*', '*', 'text'],
        ['City', 'city', 'City*', '*', 'text'],
        ['State', 'state', 'State*', '*', 'text'],
        ['panNumber', 'panNumber', 'Pan Number*', '*', 'number'],
        ['gstIn', 'gstIn', 'GSTIN', '', 'text'],
        ['Branch Type', 'branchType', 'Branch Type*', '*', 'text'],
        ['Vehicle Type', 'vehicleType', 'Vehicle Type*', '*', 'text'],
    ];

    // branch contact form fields
    const branchContactDetailsData = [['Contact No', 'branchContactNo', 'Contact No', '', 'number'],
    ['Alternate Contact No', 'branchAlternateContactNo', 'Alternate Contact No', '', 'number'],
    ['Whatsapp Number', 'branchWhatsappNo', 'Whatsapp Number', '', 'number'],
    ['Email Id', 'branchEmailId', 'Email Id', '', 'email'],
    ];

    // branch incharge form fields
    const branchInchargeDetailsData = [['Branch Incharge Name', 'branchInchargeName', 'Incharge Name', '', 'text'],
    ['Contact No', 'branchInchargeContactNo', 'Incharge Contact No', '', 'text'],
    ['Alternate Contact No', 'branchInchargeAlternateContactNo', 'Alternate Contact No', '', 'text'],
    ['Whatsapp Number', 'branchInchargeWhatsappNo', 'Incharge Whatsapp Number', '', 'text'],
    ['Email Id', 'branchInchargeEmailId', 'Incharge Email Id', '', 'email'],
    ];

    // contact person form fields
    const contactPersonDetailsData = [['Contact Person Name', 'contactPersonName', 'Contact Person Name', '', 'text'],
    ['Contact No', 'contactPersonContactNo', 'Contact Person Contact No', '', 'number'],
    ['Alternate Contact No', 'contactPersonAlternateContactNo', 'Contact Person Alternate Contact No', '', 'number'],
    ['Whatsapp Number', 'contactPersonWhatsappNo', 'Contact Person Whatsapp Number', '', 'text'],
    ['Email Id', 'contactPersonEmailId', 'Contact Person Email Id', '', 'email'],
    ];
    
    //Opening details form fields
    const openingDetailsData = [['Opening Balance', 'openingBalance', 'Opening Balance', '', 'text'],
    ['Opening Date', 'openingDate', 'Opening Date', '', 'date'],
    ];
    
    // Advance request form fields
    const advanceRequestDetailsData = [['Minimum Amount', 'minimumAmount', 'Minimum Amount', '', 'number'],
    ['Maximum Amount', 'maximumAmount', 'Maximum Amount', '', 'number'],
    ['Monthly Maximum Amount', 'monthlyMaximumAmount', 'Monthly Maximum Amount', '', 'number'],
    ['Maximum Unsettled Amount', 'maximumUnsettledAmount', 'Maximum Unsettled Amount', '', 'number'],
    ['Effective Date', 'effectiveDate', 'Effective Date', '', 'date'],
    ];

    // bank details form fields
    const bankDetailsData = [['Account Number', 'accountNumber', 'Account Number', '', 'nunumber'],
    ['Account Holder Name', 'accountHolderName', 'Account Holder Name', '', 'text'],
    ['IFSC Code', 'ifscCode', 'IFSC Code', '', 'text'],
    ['Bank Name', 'bankName', 'Bank Name', '', 'text'],
    ['Branch Name', 'branchName', 'Branch Name', '', 'text'],
    ];
    
    const handleSubmit = (e) => {

        e.preventDefault();
        const data = {
            ['branchData']: branchData,
            ['branchContactDetails']: branchContactDetails,
            ['advanceRequestDetails']: advanceRequestDetails,
            ['branchInchargeDetails']: branchInchargeDetails,
            ['contactPersonDetails']: contactPersonDetails,
            ['openingDetails']: openingDetails,
            ['bankDetails']: bankDetails,
            ['status']: isActive,
        };

        fetch(`/api/branch/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('after sending data', data);
            })
            .catch((err) => {
                console.log(err);
            });
        
    }
 

    const handleBranchChange = (e) => {
        const { name, value } = e.target;
        setBranchData({ ...branchData, [name]: value });
    }

    const handleBranchContactChange = (e) => {
        setbranchContactDetails({ ...branchContactDetails, [e.target.name]: e.target.value });
    }

    const handleBranchInchargeChange = (e) => {
        setBranchInchargeDetails({ ...branchInchargeDetails, [e.target.name]: e.target.value });
    }

    const handleBranchContactPersonChange = (e) => {
        setContactPersonDetails({ ...contactPersonDetails, [e.target.name]: e.target.value });
    }

    const handleOpeningDetailsChange = (e) => {
        setOpeningDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleAdvanceRequestChange = (e) => {
        setAdvanceRequestDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleBankDetailsChange = (e) => {
        setBankDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleStatusChange = (e) => {
        setIsActive((prev) => !prev);
        // console.log('isActive', isActive);

    }


    return (
        <div className='max-w-screen-lg mx-auto border-2 my-10 px-2 py-4 bg-white shadow-lg rounded-lg'>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* brach details */}
                <div className='pl-2 py-2'>
                    <h2 className="text-2xl font-semibold text-gray-600">
                        1. Branch Details
                    </h2>
                    <div className='flex flex-wrap  gap-x-3'>
                        {branchDetailsData.map((data, index) => {
                            // console.log('bd', branchData[data[1]]);
                            return (
                                <InputElement
                                    key={index}
                                    label={data[0]}
                                    name={data[1]}
                                    placeholder={data[2]}
                                    required={data[3]}
                                    type={data[4]}
                                    value={branchData[data[1]]}
                                    onChange={(e) => handleBranchChange(e)} />
                            )
                        })}
                    </div>
                </div>

                {/* branch contact details */}
                <div className='pl-2 py-2'>
                    <h2 className="text-2xl font-semibold text-gray-600">
                        2. Branch Contact Details
                    </h2>
                    <div className='flex flex-wrap gap-x-3'>
                        {branchContactDetails && branchContactDetailsData.map((data, index) => {
                            //   console.log('branch data',branchData[data[1]]);
                            return (
                                <InputElement
                                    key={index}
                                    label={data[0]}
                                    name={data[1]}
                                    placeholder={data[2]}
                                    required={data[3]}
                                    type={data[4]}
                                    value={branchContactDetails[data[1]]}
                                    onChange={handleBranchContactChange} />
                            )
                          
                        })}
                    </div>
                </div>
              
              
                {/* branch incharge details */}
                <div className='pl-2 py-3'>
                    <h2 className="text-2xl font-semibold text-gray-600">
                        3. Branch Incharge Details
                    </h2>
                    <div className='flex flex-wrap justify- gap-x-3'>
                        {branchInchargeDetailsData.map((data, index) => (
                            <InputElement key={index} label={data[0]} name={data[1]} placeholder={data[2]} required={data[3]} type={data[4]} onChange={handleBranchInchargeChange} />
                        ))}
                    </div>
                </div>
              

                {/* contact person details */}
                <div>
                    <div className='pl-2 py-3'>
                        <h2 className="text-2xl font-semibold text-gray-600">
                            4. Contact Person Details
                        </h2>
                        <div className='flex flex-wrap gap-x-3'>
                            {contactPersonDetailsData.map((data, index) => (
                                <InputElement key={index} label={data[0]} name={data[1]} placeholder={data[2]} required={data[3]} type={data[4]} onChange={handleBranchContactPersonChange} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* opening details */}
                <div>
                    <div className='pl-2 py-3'>
                        <h2 className="text-2xl font-semibold text-gray-600">
                            5. Opening Details
                        </h2>
                        <div className='flex flex-wrap gap-x-3'>
                            {openingDetailsData.map((data, index) => (
                                <InputElement key={index} label={data[0]} name={data[1]} placeholder={data[2]} required={data[3]} type={data[4]} onChange={handleOpeningDetailsChange} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* advance request details */}
                <div>
                    <div className='pl-2 py-3'>
                        <h2 className="text-2xl font-semibold text-gray-600">
                            5. Advance Request Details
                        </h2>
                        <div className='flex flex-wrap gap-x-3'>
                            {advanceRequestDetailsData.map((data, index) => (
                                <InputElement key={index} label={data[0]} name={data[1]} placeholder={data[2]} required={data[3]} type={data[4]} onChange={handleAdvanceRequestChange} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* bank details */}
                <div className='pl-2 py-3'>
                    <h2 className="text-2xl font-semibold text-gray-600">
                        6. Bank Details
                    </h2>
                    <div className='flex flex-wrap gap-x-3'>
                        {bankDetailsData.map((data, index) => (
                            <InputElement key={index} label={data[0]} name={data[1]} placeholder={data[2]} required={data[3]} type={data[4]} onChange={handleBankDetailsChange} />
                        ))}
                    </div>
                </div>
             

                {/* status */}
              

                {/* submit button */}
                <div className='flex justify-self-end items-center space-x-5'>
                    <div>
                        <span >
                            <button onClick={handleStatusChange}>
                                <BasicSwitches isActive={isActive} />
                            </button>
                            <span className='text-sky-700'>status</span>
                        </span>
                    </div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BranchForm