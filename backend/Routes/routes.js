import express from 'express';
import {
    addBranch,
    getBranches,
    deleteBranch,
    getBranch,
    updateBranch
} from '../controllers/controller.js';

import { updateBranchDetails } from '../controllers/put.js';
import getExcelData from '../controllers/excelController.js';

const app = express();

const router = express.Router();

router.route('/').get(getBranches).post(addBranch).delete(deleteBranch);

router.route('/branch/:id').get(getBranch).put(updateBranchDetails);

router.route('/excel').get(getExcelData);


export default router;