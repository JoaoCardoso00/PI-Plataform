import {config} from 'dotenv'
import Redis from 'ioredis'

config();

const client = new Redis({
  host: process.env.REDIS_HOST,
  port: 10589,
  password: process.env.REDIS_PASSWORD
})

export default client;