import {config} from 'dotenv'
import Redis from 'ioredis'

config();

const client = new Redis({
  host: 'redis-10589.c256.us-east-1-2.ec2.cloud.redislabs.com',
  port: 10589,
  password: "OfGuUAyvE3QATg2xF69XKMNkn6OqfL7X"
})

export default client;