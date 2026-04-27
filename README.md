
# Awesome Stars

![GitHub Repo Stars](https://img.shields.io/github/stars/MahLogic/awesome-stars)
![License](https://img.shields.io/github/license/MahLogic/awesome-stars)

Detect fake GitHub stars. Surface real project credibility.

<!--> For full documentation, see https://your-docs-link.com-->

---

## What is this?

Awesome Stars analyzes repositories and detects unnatural star growth patterns, helping you understand whether a project’s popularity is real or manipulated.

It replaces raw GitHub stars with a **trust-adjusted score** backed by signal-based analysis.

---

## Installation

> [!NOTE]
>
> This project is split into a frontend, and a backend.

```bash
# clone repo
git clone https://github.com/MahLogic/awesome-stars.git

cd awesome-stars
````

### Backend

```bash
bun
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Usage

### Analyze a repository

Send a GitHub URL to the API:

```http
GET /repo/analyze?url=https://github.com/user/repo
```

### Example response

```json
{
  "repo": "user/repo",
  "stars_raw": 12000,
  "stars_adjusted": 8200,
  "trust_score": 66,
  "warnings": [
    "Unusual star growth spike detected",
    "Low contributor activity relative to stars"
  ]
}
```

---

## How it works

The system evaluates repositories using multiple signals:

* Star growth velocity
* Sudden spike detection
* Repository age vs popularity mismatch
* Star-to-fork ratio imbalance
* Historical trend consistency

These signals are combined into a **Trust Score (0–100)**.

---

## Architecture

```txt
Frontend → API → Worker → Database
```

* Frontend: React + Vite
* Backend: Go / Node API
* Worker: Background analysis engine
* Database: Time-series repository data

---

## Features

* Real-time repository analysis
* Trust Score (0–100)
* Adjusted star estimation
* Suspicious activity warnings
* Historical star tracking
* Growth visualization (coming soon)

---

## Roadmap

### MVP

* [x] Repo analysis API
* [x] Basic scoring engine
* [x] Simple UI

### v2

* [ ] Advanced detection model
* [ ] Time-series star graphs
* [ ] Improved anomaly detection

### v3

* [ ] Browser extension
* [ ] Public API
* [ ] Trending repo index

---

## Contributing

We welcome contributions.

### Setup

```bash
git clone https://github.com/your-username/github-star-trust-engine.git
cd github-star-trust-engine
```

### Development

* Run backend and frontend separately
* Use feature branches for changes
* Keep PRs focused and minimal

### Guidelines

* Add tests for new detection logic
* Keep scoring logic explainable
* Avoid black-box behavior
* Prefer clarity over complexity

---

## Design Philosophy

* Transparency over black-box scoring
* Simplicity over overfitting
* Trust over raw numbers
* Signal-based detection over assumptions

---

## Known Limitations

* No direct access to individual GitHub user intent
* Heuristic-based detection may produce false positives
* GitHub API rate limits apply
* Scoring is probabilistic, not absolute

---

## License

MIT License © 2026
