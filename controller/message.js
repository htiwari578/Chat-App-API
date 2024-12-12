import { Conversation } from "../model/conversation.model.js";
import {Message} from "../model/message.models.js";


export const sendMessage = async (req,res)=>{

    try {
        const senderId= req.id;
        const receiverId=req.params.id;
        const {message} = req.body;
 
        let gotConversation = await Conversation.findOne({
            participants: {$all: [senderId , receiverId]},
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.message.push(newMessage._id);
        };
        await gotConversation.save();
        return res.status(200).json({
            message:"Message send successfully"
        })

    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message:"Server error while sending message",
            error:error.message
        })
    }
}


export const getMessage = async (req, res)=> {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]},
        }).populate("message");
        return res.status(200).json(conversation?.message);
    } catch (error) {
        console.log('error while getting message', error);
        res.status(500).json({
            message:"Server error while geting message",
            error: error.message
        })
    }
}

