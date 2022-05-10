import { NextFunction, Request, Response } from "express";
import 'dotenv/config';

const apiKeys = new Map();

apiKeys.set(process.env.API_KEY1, true);
apiKeys.set(process.env.API_KEY2, true);
apiKeys.set(process.env.API_KEY3, true);

export default async (req: Request, res: Response, next: NextFunction) => {
  const key = req.header('X-API-KEY');

  if (apiKeys.has(key)) {
    return next();
  } else {
    return res.status(401).json({
      status: 401,
      message: 'Request not authorized'
    })
  }
}
