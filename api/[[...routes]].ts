import type { VercelRequest, VercelResponse } from "@vercel/node";

// Import the pre-built server bundle from the dist folder
const serverHandler = require("../dist/server/index.js").default;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Build full URL from request
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    // Create a standard web Request object
    const request = new Request(url, {
      method: req.method || "GET",
      headers: req.headers as HeadersInit,
      body: ["GET", "HEAD"].includes(req.method || "GET")
        ? undefined
        : req.body
        ? JSON.stringify(req.body)
        : undefined,
    });

    // Call the server handler
    const response = await serverHandler.fetch(request, {}, {});

    // Forward response headers
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });

    // Send response with correct status
    res.status(response.status);
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("API Handler Error:", error);
    res.status(500).json({ 
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
