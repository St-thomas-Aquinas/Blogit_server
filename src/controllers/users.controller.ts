import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
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
///Getuserby ID
//get all user
export const getSingleUser = async (req:any, res:any ) => {

    try{
        const Name = req.params
        console.log(JSON.parse(JSON.stringify(Name.UserName)))
        const user = await userclient.findFirst({
            include:{
posts:true
            },
                where: {
                 UserName:JSON.parse(JSON.stringify(Name.UserName))
                },
            }
        )
    
            //Creating jwt token
        
            const token = jwt.sign({ user }, 'shhhhh');
           const resd = jwt.verify(token,'shhhhh')
        res.status(200).json({data:resd})
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};

//get all user
export const getSingleUserpasscode = async (req:any, res:any ) => {

    try{
        const Name = req.params
        console.log(JSON.parse(JSON.stringify(Name.Password)))
        const user = await userclient.findFirst({
            include:{
                posts:true
            },
                where: {
                 UserName:JSON.parse(JSON.stringify(Name.UserName))
                },
            }
        )
        res.status(200).json({data:user})
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


//get all user
export const updateUser = async (req:any, res:any ) => {
console.log("i have been hit")
    try{
        const Name = req.params
        const update = req.body
        console.log(Name[1])
        console.log(JSON.parse(JSON.stringify(Name.id)))
        const user = await userclient.updateMany({
            where: {
                UserName: JSON.parse(JSON.stringify(Name.id))
            },
            data:JSON.parse(JSON.stringify(update)) 
        }
        )
        
        res.status(200).json(update)
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};