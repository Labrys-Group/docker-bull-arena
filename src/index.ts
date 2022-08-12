import Arena from "bull-arena";

import express from "express";
import { Queue } from "bullmq";
import queues from "./config/queues";

const app = express();

// Create arena
const arena = Arena(
  {
    // Include a reference to the bee-queue or bull libraries, depending on the library being used.
    BullMQ: Queue,
    queues,
  },
  { disableListen: true, basePath: "/", useCdn: true }
);

app.use("/", arena);

app.listen(3000);
