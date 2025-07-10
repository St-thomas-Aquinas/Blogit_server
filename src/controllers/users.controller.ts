import { PrismaClient } from "../../generated/prisma/client";

const userclient = new PrismaClient().usertable;

//get all user
export const getAllUsers = async (req:any, res:any ) => {

    try{
        const allusers = await userclient.findMany()
        res.status(200).json({data:allusers})
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};

//Creat users
export const createUser = async (req:any, res:any ) => {

    try{
        const usersdata = req.body
        const Newusers = await userclient.create({
            data:usersdata
        })
        res.status(201).json({data:Newusers})
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};