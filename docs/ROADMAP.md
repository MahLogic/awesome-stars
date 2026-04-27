## Milestone 1: Core Infrastructure & Data Ingestion

### Iteration 1.1: Project Setup

#### Epic: Monorepo Setup

- [x] Create project repository
- [x] Configure package manager
- [x] Setup shared config
- [x] Add `README`

#### Epic: Backend Scaffold

- [ ] Initialize server (Go or Node)
- [ ] Setup routing layer
- [ ] Add health check endpoint (/health)
- [ ] Configure environment loader

#### Epic: Frontend Scaffold (Vite)

- [ ] Initialize React app with Vite
- [ ] Setup routing (React Router or similar)
- [ ] Add base layout (header, container)
- [ ] Configure API client (fetch/axios wrapper)

#### Epic: Environment Configuration

- [ ] Define .env schema
- [ ] Store GitHub API token securely
- [ ] Setup config validation
- [ ] Add environment switching (dev/prod)

### Iteration 1.2: Development Environment Setup

#### Epic: Fetch Repository Metadata

- [ ] Call repo endpoint (stars, forks, created_at)
- [ ] Parse and normalize response
- [ ] Handle missing/invalid repos
- [ ] Write unit tests for parsing

#### Epic: Rate Limit Handling

- [ ] Detect rate limit headers
- [ ] Implement retry/backoff logic
- [ ] Cache responses temporarily
- [ ] Log rate limit usage

#### Epic: Basic Repo Search

- [ ] Input field (URL or repo name)
- [ ] Validate GitHub URL format
- [ ] Extract owner/repo from URL
- [ ] Trigger backend fetch

#### Epic Data Normalization

- [ ] Define internal repo model
- [ ] Map API fields → internal schema
- [ ] Handle edge cases (archived repos, forks)
- [ ] Store normalized data

### Iteration 1.3: Data Storage Layer

#### Epic: Database Schema Design

- [ ] Design tables (repos, snapshots, scores)
- [ ] Create migrations
- [ ] Setup DB connection
- [ ] Add indexes (repo_id, timestamps)

#### Epic: Historical Snapshots

- [ ] Store daily star count
- [ ] Create snapshot insertion job
- [ ] Prevent duplicate entries
- [ ] Validate snapshot consistency

#### Epic: Data Validation Layer

- [ ] Validate incoming API data
- [ ] Sanitize inputs
- [ ] Handle null/edge values
- [ ] Add logging for anomalies

#### Epic: Basic Caching

- [ ] Add in-memory cache (Redis optional)
- [ ] Cache repo responses
- [ ] Define TTL strategy
- [ ] Cache invalidation rules

## Milestone 2: Trust Score v1 (MVP)

### Iteration 2.1: Basic Scoring Engine

#### Epic: Star Velocity Calculation

- [ ] Compute stars/day growth
- [ ] Compare recent vs historical growth
- [ ] Store computed metrics
- [ ] Add unit tests

#### Epic: Spike Detection

- [ ] Define spike threshold logic 
- [ ] Detect abnormal growth windows
- [ ] Flag suspicious intervals
- [ ] Log spike events

#### Epic: Heuristic Scoring Model

- [ ] Define scoring formula (0–100)
- [ ] Weight signals (velocity, spikes)
- [ ] Normalize scores
- [ ] Store score per repo

#### Epic: Trust Score Output

- [ ] Create score API response format
- [ ] Add confidence placeholder
- [ ] Return warnings if needed
- [ ] Test API responses

### Iteration 2.2 — Core UI

#### Epic: Repo Input

- [ ] Build input field UI
- [ ] Add validation feedback
- [ ] Trigger analysis on submit
- [ ] Handle loading state

#### Epic: Repo Overview Page

- [ ] Display repo metadata
- [ ] Show stars, forks, created date
- [ ] Add layout for score section
- [ ] Handle empty/error states

#### Epic: Score Display

- [ ] Render Trust Score badge
- [ ] Show raw vs adjusted stars
- [ ] Add visual emphasis (color/label)
- [ ] Format numbers for readability

#### Epic: Warning Banner

- [ ] Display warning if flagged
- [ ] Define warning messages
- [ ] Add dismiss/tooltip option
- [ ] Style for visibility


### Iteration 2.3: API Integration

#### Epic: Fetch Analyzed Data

- [ ] Create /repo/analyze endpoint
- [ ] Fetch repo + score
- [ ] Return structured JSON
- [ ] Handle errors gracefully
#### Epic: Trigger Analysis

- [ ] Add endpoint to start analysis
- [ ] Prevent duplicate runs
- [ ] Add basic queueing logic
- [ ] Return job status
#### Epic: Frontend Integration

- [ ] Connect UI to API
- [ ] Handle loading/error states
- [ ] Display results dynamically
- [ ] Retry on failure
#### Epic: Error Handling

- [ ] Standardize API errors
- [ ] Show user-friendly messages
- [ ] Log backend errors
- [ ] Add fallback UI states

## Milestone 3: Detection Engine v2

### Iteration 3.1: Historical Analysis

#### Epic: Daily Tracking Pipeline

- [ ] Schedule daily snapshot job
- [ ] Fetch updated star counts
- [ ] Store time-series data
- [ ] Monitor job success/failure

#### Epic: Time-Series Storage

- [ ] Optimize schema for time-series
- [ ] Add indexes for queries
- [ ] Query historical data efficiently
- [ ] Test performance

#### Epic: Trend Analysis

- [ ] Compute moving averages
- [ ] Identify baseline growth
- [ ] Compare current vs baseline
- [ ] Store trend metrics


### Iteration 3.2: Advanced Signals

#### Epic: Star-to-Fork Ratio

- [ ] Calculate ratio
- [ ] Define normal ranges
- [ ] Flag anomalies
- [ ] Add to scoring input

#### Epic: Age Normalization

- [ ] Calculate repo age
- [ ] Adjust expectations based on age
- [ ] Normalize growth metrics
- [ ] Integrate into scoring

#### Epic: Multi-Factor Scoring

- [ ] Combine all signals
- [ ] Tune weights
- [ ] Normalize final score
- [ ] Validate against test cases


### Iteration 3.3: Background Processing

#### Epic: Worker Service

- [ ] Create worker process
- [ ] Connect to job queue
- [ ] Process analysis jobs
- [ ] Handle failures

#### Epic: Job Queue

- [ ] Setup queue system (Redis/cron)
- [ ] Enqueue analysis jobs
- [ ] Track job status
- [ ] Retry failed jobs

#### Epic: Scheduled Re-analysis

- [ ] Define re-analysis interval
- [ ] Schedule recurring jobs
- [ ] Update scores periodically
- [ ] Log updates

## Milestone 4: Transparency & UX

### Iteration 4.1: Score Breakdown

#### Epic: Explanation Module

- [ ] Map signals → explanations
- [ ] Generate readable summaries
- [ ] Display per-signal impact
- [ ] Add tooltip explanations
#### Epic: Confidence Score

- [ ] Define confidence metric
- [ ] Calculate based on data quality
- [ ] Display in UI
- [ ] Add explanation

### Iteration 4.2: Visualization

#### Epic: Star Growth Graph

- [ ] Render time-series chart
- [ ] Plot daily star counts
- [ ] Add axis + labels
- [ ] Optimize rendering

#### Epic: Anomaly Highlighting

- [ ] Mark spikes on graph
- [ ] Add hover details
- [ ] Color-code anomalies
- [ ] Sync with score data

## Milestone 5: Discovery & Scale

### Iteration 5.1: Search & Indexing

#### Epic: Repo Search

- [ ] Build search endpoint
- [ ] Index repos
- [ ] Add autocomplete
- [ ] Rank results

#### Epic: Trending Dashboard

- [ ] Define trending logic
- [ ] Fetch popular repos
- [ ] Display dashboard UI
- [ ] Refresh periodically

### Iteration 5.2: Public Pages

#### Epic: Public Repo Pages

- [ ] Create dynamic routes
- [ ] Render repo data server-side
- [ ] Add metadata for sharing
- [ ] Optimize load time

## Milestone 6: Advanced Detection

### Iteration 6.1: Behavioral Analysis

#### Epic: Bot Detection

- [ ] Define bot-like patterns
- [ ] Analyze star accounts (if available)
- [ ] Flag suspicious accounts
- [ ] Integrate into scoring

## Milestone 7: Ecosystem

### Iteration 7.1: Browser Extension

#### Epic: GitHub Overlay

- [ ] Inject UI into GitHub pages
- [ ] Fetch trust score from API
- [ ] Display badge inline
- [ ] Handle auth (if needed)

### Iteration 7.2: Public API

#### Epic: External API

- [ ] Design API endpoints
- [ ] Add authentication
- [ ] Implement rate limiting
- [ ] Write documentation
