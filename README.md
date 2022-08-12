# Docker Bull Arena

This docker image includes the [`bull-arena`](https://www.npmjs.com/package/bull-arena) package, set up to connect with [BullMQ](https://www.npmjs.com/package/bullmq).

## Config

### Redis

The redis server must be configured using the following environment variables:

- `REDIS_PORT` - required
- `REDIS_HOST` - required
- `REDIS_PASSWORD` - optional

### Queue Names

The bull queue names are defined using the `QUEUE_NAMES` environment variable. To support multiple queues, this can be a comma seperated list of queues names. These must exactly match the names provided to BullMQ.

```
QUEUE_NAMES="queue1,queue2,queue3"
```

## Example

An example Kubernetes pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: bull-arena
spec:
  containers:
    - name: bull-arena
      image: aidanlabrys/bull-arena:latest
      ports:
        - containerPort: 3000
      imagePullPolicy: Always
      env:
        - name: QUEUE_NAMES
          value: "queue1,queue2,queue3"
        - name: REDIS_PORT
          value: "6379"
        - name: REDIS_HOST
          value: "localhost"
        - name: REDIS_PASSWORD
          value: "password"
```
