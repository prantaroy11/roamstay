import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";


export async function createHotelHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse=await createHotelService(req.body);

    res.status(201).json({
        success:true,
        data:hotelResponse,
        message:"Hotel created successfully"
    });
}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse=await getHotelByIdService(Number(req.params.id));

    res.status(201).json({
        success:true,
        data:hotelResponse,
        message:"Hotel created successfully"
    });
}