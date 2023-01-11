import Claim from './claimDb.js';
import { MESSAGE } from '../../utils/constants.js';
import User from '../user/userDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const createClaim = async(data) => {
    try {
        const detail = await Claim.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @returns
 */
const getClaim = async() => {
    try {
        const detail = await Claim.find({ isActive: true }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const getById = async(id) => {
    try {
        const detail = await Claim.findById({ _id: id }).lean();
        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @param {*} data
 * @returns
 */
const updateClaim = async(id, data) => {
    try {
        const caimData = await User.findOne({ email : data.email }).lean();
        if( !caimData ){
            return MESSAGE.DATA_NOT_FOUND;
        }
        const leads = caimData.claimId;
        leads.push({ lead: id });
        const detail = await User.findByIdAndUpdate(
            { _id: caimData._id },
            { $set:{ claimId: leads}},
            { new:true }
        ).lean();

        await Claim.updateOne(
            { _id: id },
            {$set:{ isActive: false }}
        );

        return detail;
    } catch (error) {
        return error.message;
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
const getClaimForUser = async(id) => {
    try {
        const detail = await User.findOne(
            { _id: id },
        ).populate('claimId.lead');
        return detail;
    } catch (error) {
        return error.message;
    }
};

export{
    createClaim,
    getClaim,
    getById,
    updateClaim,
    getClaimForUser,
};
