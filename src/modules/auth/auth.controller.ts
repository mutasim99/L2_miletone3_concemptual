import { Request, Response } from "express";
import { authServices } from "./auth.service";


const logInUser = async (req: Request, res: Response) => {
    try {
        const{email, password} = req.body
        const result = await authServices.logInUserIntoDb(email, password)
        return res.status(200).json({
            success: true,
            message: "create user successfully",
            data: ''
        })
    } catch (error: any) {
        return res.status(501).json({
            success: true,
            message: error.message
        })
    }
};

export const authController = {
    logInUser
}