import * as claimSevice from '../claims/claimService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createClaim = async(req, res) => {
    try {
        const data = req.body;
        const detail = await claimSevice.createClaim(data);
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns all the data
 */
const getClaim = async(req, res) => {
    try {
        const detail = await claimSevice.getClaim();
        return res.status(200).json({
            data: detail ?? [],
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns data by id
 */
const getById = async(req, res) => {
    try {
        const { id : ClaimId } = req.params;
        const detail = await claimSevice.getById(ClaimId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns updated data
 */
const updateClaim = async(req, res) => {
    try {
        const { id: ClaimId } = req.params;
        const data =  res.local;
        const detail = await claimSevice.updateClaim(ClaimId, data);
        if(detail.password){
            detail.password = undefined;
        }
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getClaimForUser = async(req, res) => {
    try {
        const { id: ClaimId } = res.local;
        const detail = await claimSevice.getClaimForUser(ClaimId);
        if(detail.password){
            detail.password = undefined;
        }
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export{
    createClaim,
    getClaim,
    getById,
    updateClaim,
    getClaimForUser,
};
