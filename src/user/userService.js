import User from './userDb.js';
import bcrypt from 'bcrypt';

/**
 *
 * @param {*} data
 * @returns
 */
const createUser = async(data) => {
    try {
        data.password = bcrypt.hashSync(data.password, 10);
        const detail = await User.create(data);
        return detail;
    } catch (error) {
        return error.message;
    }
};


export{
    createUser,
};
