import XLSX from "xlsx";
import Branch from "../models/branchModel.js";

// Function to flatten nested objects
const flattenObject = (obj, parent = '', res = {}) => {
    for (let key in obj) {
        const propName = parent ? `${parent}.${key}` : key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            flattenObject(obj[key], propName, res); // Recursive call for nested objects
        } else {
            res[propName] = obj[key]; // Add property to result
        }
    }
    return res;
};

// Function to format column headings (e.g., convert "nested.key" to "Nested Key")
const formatHeading = (heading) => {
    return heading
        .split('.') // Split nested keys
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Rejoin with spaces
};

// Controller to generate Excel data
const getExcelData = async (req, res) => {
    try {
        // Fetch branches data from the database
        const branches = await Branch.find();

        // If no data is found, return a 404 response
        if (!branches.length) {
            return res.status(404).json({ message: "No data found" });
        }

        // Flatten each branch object into a flat structure
        const flattenedData = branches.map(branch => flattenObject(branch.toObject()));

        // Extract unique column headers from the first flattened object
        const headers = Object.keys(flattenedData[0]).map(formatHeading);

        // Prepare Excel rows: headers followed by branch data
        const dataRows = flattenedData.map(branch => Object.values(branch));
        const formattedData = [headers, ...dataRows];

        // Create a new worksheet and add the data
        const worksheet = XLSX.utils.aoa_to_sheet(formattedData);

        // Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Branches");

        // Generate Excel file buffer
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

        // Set appropriate headers for file download
        res.setHeader("Content-Disposition", "attachment; filename=branches.xlsx");
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

        // Send the generated file as the response
        res.send(excelBuffer);
    } catch (err) {
        // Log the error and send a 500 response
        console.error("Error generating Excel file:", err);
        res.status(500).json({ message: "An error occurred while generating the Excel file" });
    }
};

export default getExcelData;


