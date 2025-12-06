import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUserIntoDB(req.body)
        return res.status(200).json({
            success: true,
            message: "create user successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        return res.status(501).json({
            success: true,
            message: error.message
        })
    }

};

export const userController = { createUser }