import mongoose from 'mongoose';

const userSchmema = mongoose.Schema ({

    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilephoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male , female"],
        required:true

    },
},{timestamps:true})

const User = mongoose.model('User', userSchmema);
export default User;