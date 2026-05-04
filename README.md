# AlfredGO

A mobile-first student portal for Alfred State College. Students, staff, and admins can quickly find and access campus tools from one searchable, organized hub — instead of hunting across a dozen different sites.

## Features

- **Role-based views** — separate tool sets for Students, Staff, and Admins
- **Instant search** — filter tools by name or keyword tag (search "food" to find Dining Services)
- **Category tabs** — dynamically built from whichever role is active
- **Upcoming events strip** — next academic deadlines, breaks, and exams pulled from the built-in calendar
- **Real Alfred State links** — every card links directly to the actual portal
- **Mobile-first** — designed for phones, works on desktop too
- **Clean icons** — Lucide SVG icons colored by category

## Roles & Tools

| Role | Categories |
|---|---|
| Student | Academics, Finance, Campus Life, Communication, Support |
| Staff | Communication, Operations, Professional Dev, Safety, Campus, Support |
| Admin | Everything in Staff + Compliance (Title IX, complaint forms, Clockwork, Starfish) |

## Tech Stack

- **Frontend** — HTML5, CSS3, Vanilla JavaScript (ES6+), Lucide Icons
- **Backend** — Node.js, Express
- **Deployment** — Render (auto-deploys from GitHub)

## Running Locally

1. Clone the repo
   ```bash
   git clone https://github.com/jrd59501/alfredgo.git
   cd alfredgo/project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   npm start
   ```

4. Open `http://localhost:3000`

## Project Structure

```
project/
├── package.json
├── public/                  # Frontend — served as static files
│   ├── index.html           # App shell and layout
│   ├── styles.css           # Mobile-first styles
│   ├── app.js               # Search, filtering, role switching, card rendering
│   └── images/
│       └── alfredbull.png   # Saxon mascot
└── server/
    ├── server.js            # Express server, serves static files and API
    └── data/
        └── tools.js         # Tool definitions for each role (student/staff/admin)
```

## API

```
GET /api/tools?role=student   # Returns student tools
GET /api/tools?role=staff     # Returns staff tools
GET /api/tools?role=admin     # Returns admin tools (superset of staff)
```

## Authors

Justin Denny, Kayden Streiff, Danielle Riewaldt, Mathew Kennedy-Brewer
Alfred State College — CISY 7203
