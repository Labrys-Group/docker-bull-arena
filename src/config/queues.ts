import redisConfig from "./redis";

// Set up queue names
const commaOrSpace = /[, ]+/;

if (!process.env.QUEUE_NAMES) {
  throw Error("QUEUE_NAMES is not set");
}

let queueNameArray: string[] = [];

try {
  queueNameArray = process.env.QUEUE_NAMES.split(commaOrSpace);
} catch {
  throw Error("QUEUE_NAMES is not set correctly");
}

// Create all the queues
const queues = queueNameArray.map((queueName) => ({
  type: "bullmq",
  name: queueName,
  hostId: "worker",
  redis: redisConfig,
}));

export default queues;
