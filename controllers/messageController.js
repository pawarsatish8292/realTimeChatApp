import Message from "../models/messageModel.js";

export const getAllMessages = async(req, res)=>{
    try{
        const messages = await Message.find().sort({timestamp: -1});
        res.status(200).json(messages);
    }catch(error){
        res.status(500).json({message:'Error fetching messages', error});
    }
};

export const createMessage = async (data) =>{
    const newMessage = new Message(data);
    await newMessage.save();
    return newMessage;
};

export const updateMessage = async(req, res)=>{
    const {id} = req.params;
    const {content} = req.body;
    try{
    const updatedMessage =  await Message.findByIdAndUpdate(id, {content},{new:true});
    res.status(200).json(updatedMessage)
    }catch(error){
        res.status(500).json({message:'Error updating message', error});
    }
};

export const deleteMessage = async(req, res)=>{
    const {id} = req.params;
    try{
        await Message.findByIdAndDelete(id);
        res.status(200).json({message:'Message deleted'})
    }catch(error){
        res.status(500).json({message:'Error deleting message', error});
    }
};