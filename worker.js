export default {
  async fetch(request) {
    const body = await request.text();
    return Response.json({
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers.entries()),
      body: body
    }, { headers: { "content-type": "application/json" } });
  }
};
