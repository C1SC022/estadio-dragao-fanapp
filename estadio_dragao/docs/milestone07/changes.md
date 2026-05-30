# System Validation Changes

## General Changes

In Milestone 7 (corresponding to Milestone 4 of the project cycle), we shifted our efforts entirely towards validation, performance tuning, and security enforcement. We executed rigorous testing, including stress testing, vulnerability scanning, security hardening, and AI model benchmarking, and introduced significant architectural and database changes to optimize performance and safety.

## Performance Tuning & Database Optimization

We deployed the complete dockerized ecosystem onto a dedicated virtual machine (16 GB RAM, 4 CPU cores, 1TB HDD) and benchmarked response thresholds:
- **API Benchmarking**: General performance was highly responsive, with 95% of API requests completing in under 187ms, and all 264 internal service health checks successfully passing.
- **Stress-Test Failures**: Under load (50 users generating 30 req/sec), response times averaged 653ms. However, under high stress (1000 users generating 174 req/sec), the Map-Service collapsed, leading to a cascading system degradation.
- **Query Optimization**: Identified that `GET /api/pois` and `GET /api/poi/{id}` were fetching the entire node database into memory to search. We resolved this by creating database indexes and migrating filters directly to the SQL query level, bypassing in-memory processing and preventing service collapse under load.

## Security Hardening & Vulnerability Reduction

A thorough security audit was performed to protect user data and systems:
- **Dependency Clean Up**: Ran dependency audits across all services, upgrading packages to successfully reduce 10 detected security vulnerabilities to 0.
- **MQTT Security Enforcement**: Resolved the TLS technical debt from the previous milestone. Enabled TLS end-to-end encryption across all MQTT communications (broker, Flutter app, and backend services). Enforced Mosquitto ACLs and completely disabled anonymous broker access.
- **OWASP Top 10 Protections**: Implemented Pydantic input validation to automatically reject malformed or malicious payloads before reaching the business logic layer. Utilized SQLAlchemy ORM across all databases to completely eliminate SQL injection vectors.

## AI Model & Embedded Validation

We validated our computer-vision crowd counting models on embedded environments:
- **Performance & Latency**: The ONNX model achieved an average latency of 31.4ms per frame (>28 FPS sustained), well within the real-time requirements.
- **Embedded Constraints**: Confirmed that the model operates safely under embedded limits, consuming only 248 KB RAM and 11.7 MB Flash.
- **Robustness & Boundary Testing**: Passed boundary testing utilizing completely black frames, white frames, and Gaussian noise. Documented baseline metrics (Precision: 0.54, Recall: 0.26) and identified physical limits such as merged visual structures and missed persons under 4px in dark/low-contrast settings.

## Project Management & CI/CD Automation

- **Sprints & CI Pipelines**: Configured automated GitHub Actions that run unit/integration tests and a SonarQube quality analysis on every commit in a PR. Pull requests cannot be merged unless they pass all test criteria.
- **CD Automated Deployment**: Created a CD hook where pushes to the `main` branch of the parent repository automatically pull git submodules and rebuild the docker-compose containers on the VM.
- **GitFlow & PR Workflow**: Managed 146 PRs across all services. Refactored the PR review workflow to address underestimations and hardware delays, requiring mandatory reviews from independent developers to prevent critical bugs from passing.
