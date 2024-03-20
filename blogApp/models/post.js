import mongoose from 'mongoose';

const postSchema  = new mongoose.Schema({

    title:{
        type: 'string',
        requrired : true,
    },
    body:{
        type: 'string',
        requrired : true,
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    }]

});

export default mongoose.model('Post', postSchema);