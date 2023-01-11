import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    claimId:[{
        lead:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'claim',
        }
    }],
    isActive:{
        type: Boolean,
        default: true,
    },

});

const User =  mongoose.model('user', userSchema);

export default User;
