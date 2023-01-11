import mongoose from 'mongoose';

const claimSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    courseInterest:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

});

const Claim =  mongoose.model('claim', claimSchema);

export default Claim;
