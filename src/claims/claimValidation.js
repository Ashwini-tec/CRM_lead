import Joi from 'joi';

/**
 *
 * create claim
 */
const create = () =>{
    return Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        courseInterest: Joi.string().required(),
        age: Joi.number().required(),
    });
};


export{
    create,
};
