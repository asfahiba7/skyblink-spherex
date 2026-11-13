# SKYBLINK – SPHEREx Time-Travel Sky Explorer (Backend)

A beginner-friendly Node.js + Express starter backend.

## Important data note

This project currently uses **illustrative demo data** for sample sky objects and timeline events. It does **not** yet fetch or serve official SPHEREx survey measurements. Do not present the demo responses as actual SPHEREx observations. An official data source and its access format must be confirmed before adding a real SPHEREx integration.

## API routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | API welcome/status |
| GET | `/api/health` | Health check |
| GET | `/api/sky/overview` | Project overview |
| GET | `/api/objects` | List demo sky objects |
| GET | `/api/objects?search=orion` | Search demo objects |
| GET | `/api/objects?type=Nebula` | Filter by object type |
| GET | `/api/objects/andromeda` | Get one object by ID |
| GET | `/api/timeline` | Get demo timeline |
| GET | `/api/timeline?from=1000&to=2025` | Filter timeline by year |

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in VS Code or a terminal.
3. Run `npm install`
4. Run `npm start`
5. Open `http://localhost:3000/api/health`

## Upload to GitHub

1. Create a new GitHub repository named `skyblink-backend`.
2. Upload the contents of this folder (not the ZIP file itself).
3. Make sure `package.json`, `src/`, and `README.md` are at the repository root.

## Deploy on Render

1. In Render, choose **New → Web Service**.
2. Connect the GitHub repository `skyblink-backend`.
3. Use these settings:
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Choose the available free instance option if offered for your account/region.
5. Click **Deploy**.
6. When deployment finishes, test `https://YOUR-SERVICE.onrender.com/api/health`.

No paid Hostinger Node.js plan is required for this Render deployment. Render's plan availability and limits can change.

## Environment variables

- `PORT`: Render normally provides this automatically; local default is `3000`.
- `CLIENT_ORIGIN`: Set this to your frontend website origin when you have one. It defaults to `*` for initial testing. For a public production app, restrict it to your frontend domain.

## Next development step

Connect the frontend to these API routes, then identify an official SPHEREx/NASA data endpoint or archive format and implement a verified data adapter. The current timeline is a learning/demo timeline, not a true astronomical sky reconstruction across dates.
