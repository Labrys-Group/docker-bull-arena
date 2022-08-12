// Set up redis config
if (!process.env.REDIS_PORT || !process.env.REDIS_HOST) {
  throw Error("REDIS_PORT or REDIS_HOST is not set");
}

let redisPort: number;
try {
  redisPort = parseInt(process.env.REDIS_PORT);
} catch {
  throw Error("REDIS_PORT is not set correctly");
}

const redisConfig = {
  port: redisPort,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
};

export default redisConfig;
