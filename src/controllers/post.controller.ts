//import { PrismaClient } from "..//prisma/client";
import { PrismaClient } from ".../../.prisma/client"
const userclient = new PrismaClient().post;

//get all user
export const getAllPost = async (req:any, res:any ) => {

    try{
        const allpost = await userclient.findMany()
        res.status(200).json({data:allpost})
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};
export const getpostbyid = async (req:any, res:any ) => {

    try{
        const Name = req.params
        console.log(JSON.parse(JSON.stringify(Name.authorId)))
        const user = await userclient.findMany({
                where: {
                 authorId:(JSON.parse(Name.authorId))
                },
            }
        )
        res.status(200).json({data:user})
    }catch(e){
        res.status(200).json({message:'something went wrong'})
    }

};

//Creat users
export const createPost = async (req:any, res:any ) => {

    try{
        const Postdata = req.body
        const Newpost = await userclient.create({
            data:Postdata
        })
        res.status(201).json({data:Newpost})
    }catch(e){
        res.status(200).json({message:'something went wrong post'})
    }

};