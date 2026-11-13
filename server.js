const express = require("express");
const cors = require("cors");
const { objects, timeline } = require("./data/skyData");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigin = process.env.CLIENT_ORIGIN || "*";
app.use(cors({
  origin: allowedOrigin === "*" ? "*" : allowedOrigin.split(",").map(s => s.trim())
}));
app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({
    name: "SKYBLINK API",
    tagline: "SPHEREx Time-Travel Sky Explorer",
    status: "running",
    note: "Starter backend using clearly labelled demo data."
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ success: true, service: "skyblink-backend", status: "healthy" });
});

app.get("/api/sky/overview", (_req, res) => {
  res.json({
    success: true,
    project: "SKYBLINK",
    mission: "SPHEREx",
    description: "Explore sky objects and a simple astronomy timeline.",
    dataMode: "demo",
    warning: "This starter response is illustrative demo data, not official SPHEREx survey data.",
    totalObjects: objects.length,
    totalTimelineEvents: timeline.length
  });
});

app.get("/api/objects", (req, res) => {
  const search = String(req.query.search || "").trim().toLowerCase();
  const type = String(req.query.type || "").trim().toLowerCase();

  let result = objects;
  if (search) {
    result = result.filter(item =>
      [item.name, item.type, item.constellation, item.description, ...item.demoTags]
        .join(" ").toLowerCase().includes(search)
    );
  }
  if (type) {
    result = result.filter(item => item.type.toLowerCase() === type);
  }

  res.json({
    success: true,
    dataMode: "demo",
    count: result.length,
    results: result
  });
});

app.get("/api/objects/:id", (req, res) => {
  const item = objects.find(object => object.id === req.params.id);
  if (!item) {
    return res.status(404).json({ success: false, message: "Sky object not found." });
  }
  res.json({ success: true, dataMode: "demo", result: item });
});

app.get("/api/timeline", (req, res) => {
  const from = req.query.from ? Number(req.query.from) : -Infinity;
  const to = req.query.to ? Number(req.query.to) : Infinity;

  if ((Number.isFinite(from) === false && req.query.from) ||
      (Number.isFinite(to) === false && req.query.to)) {
    return res.status(400).json({
      success: false,
      message: "The from and to values must be valid years."
    });
  }

  const result = timeline.filter(event => event.year >= from && event.year <= to);
  res.json({
    success: true,
    dataMode: "demo",
    note: "Timeline entries are educational examples, not time-resolved SPHEREx observations.",
    count: result.length,
    events: result
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.path}` });
});

app.use((err, _req, res, _next) => {
  console.error("Server error:", err);
  res.status(500).json({ success: false, message: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`SKYBLINK API running on port ${PORT}`);
});
