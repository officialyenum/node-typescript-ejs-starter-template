import { Request, Response } from "express";

class IndexController {
    public static index = (req: Request, res: Response, next: any) => {
        res.json({
            message: "Home Page!"
        });
    }
    public static about = (req: Request, res: Response, next: any) => {
        res.json({
            message: "About Page!"
        });
    }
}

export default IndexController;