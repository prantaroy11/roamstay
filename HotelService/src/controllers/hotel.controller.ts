import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";


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

export async function getAllHotelsHandler(req:Request,res:Response,next:NextFunction){
    const hotelsResponse=await getAllHotelsService();

    res.status(StatusCodes.OK).json({
        success:true,
        data:hotelsResponse,
        message:"Hotels found successfully"
    });
}

export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction){
    res.status(501);
}

export async function updateHotelHandler(req:Request,res:Response,next:NextFunction){
    res.status(501);
}