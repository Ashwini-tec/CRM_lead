import Joi from 'joi';

const login = () =>{
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
};

export { login };
