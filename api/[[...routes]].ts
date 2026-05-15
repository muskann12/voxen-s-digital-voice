import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getRouter } from "../../src/router";

const router = getRouter();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const requestUrl = new URL(
      req.url || "/",
      `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`
    );

    const response = await router.fetch(
      new Request(requestUrl, {
        method: req.method,
        headers: req.headers as HeadersInit,
        body: ["GET", "HEAD"].includes(req.method || "GET")
          ? undefined
          : JSON.stringify(req.body),
      })
    );

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response
    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
