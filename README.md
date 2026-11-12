# echo-server

A super simple echo server running on Cloudflare Workers. It answers any
request with a JSON object describing that request: its method, URL, headers,
and body.

Live: https://echo-server.whitelothcats.workers.dev/

Example:

```bash
curl https://echo-server.whitelothcats.workers.dev/
curl -X POST https://echo-server.whitelothcats.workers.dev/test -d '{"hello":"world"}'
```

Deployed through the Cloudflare API. `worker.js` is the whole implementation;
`wrangler.toml` carries the Worker name and entry point for Wrangler-based
deploys.
