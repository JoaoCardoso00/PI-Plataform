import { RateLimiterRedis } from 'rate-limiter-flexible';
import { NextFunction, Request, Response } from 'express';
import client from '../lib/redis';

const rateLimiter = new RateLimiterRedis({
  storeClient: client,
  keyPrefix: 'ratelimit',
  points: 15,
  duration: 10,
});

async function rateLimiterMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    await rateLimiter.consume(req.ip);

    return next();
  } catch (err) {
    return res.status(429).json({
      message: 'Too many requests'
    })
  }
}

export default rateLimiterMiddleware;
