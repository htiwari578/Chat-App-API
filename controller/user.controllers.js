import User from "../model/user.models.js";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";


export const register = async (req, res) => {

    try {
        const {fullname ,username, password,confirmpassword,gender} = req.body;
        if(!fullname || !username || !password || !confirmpassword ||!gender){
            res.status(400).json({
                message:"all fields required to fill"
            });
        }
        if(password !== confirmpassword) {
            res.status(400).json({
               message: "Given password not matched"
            });
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({
                message:"Username alreday exist"
            });
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        await User.create ({
            fullname,
            username,
            password: hashedPassword,
            profilephoto,
            gender
        });
        return res.status(201).json({
            message:"Account created successfully"
        });
    } catch (error) {
        console.log("error while creating account", error);
        res.status(500).json({
            message:"Server failed",
            error:error.message,
        })
    }
}

export const login = async (req, res)=> {
    try {
        const {username,password}= req.body;
        if(!username || !password){
            return res.status(400).json({
                message:"something missing"
            });
        }
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message:"Incorrect username or password"
            });
        };
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched){
            return res.status(400).json({
                message:"wronng password",
                success:false
            });

        }
        const tokenData = {
            userId:user._id
        };
        const token = jwt.sign(tokenData , process.env.SECRET_KEY, {expiresIn: '1d'});

        res.status(200).cookie('token', token, {maxAge:1*24*60*60*1000,
            httpOnly:true, sameSite:'strict'
        }).json({
            userId: user._id,
            username:user.username,
            fullname:user.fullname,
            profilePhoto:user.profilePhoto
        });

    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message:"Server serror while login",
            error:error.message
        })
    }
}