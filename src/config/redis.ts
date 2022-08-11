// Set up redis config
if (
  !process.env.REDIS_PORT ||
  !process.env.REDIS_HOST ||
  !process.env.REDIS_PASSWORD
) {
  throw Error("REDIS_PORT, REDIS_HOST and/or REDIS_PASSWORD is not set");
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
