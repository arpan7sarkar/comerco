import { AppError } from ".";
import { Request, Response } from "express";
export const errorMiddleware  =(err:Error,req:Request,res:Response)=>{
    if(err instanceof AppError){
        console.log(`Error ${req.method} ${req.url} - ${err.message}`)\

        return res.status(Number(err.statusCode)).json({
            status:"error",
            message:err.message,
            ...(err.details && {details:err.details})
        })

        console.log("Unhadnled erorr" , err);
        
        return res.status(500).json({
            status:"error",
            message:"Internal server error"
        });
    }
}