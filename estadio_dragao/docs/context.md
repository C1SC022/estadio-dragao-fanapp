# Project Context Change Notice

This project originally targeted an indoor stadium navigation app for *Estádio do Dragão*.

Summary of the scope pivot

- **New scope:** Outdoor campus-wide navigation for the University of Aveiro (GPS-based).
- **Old scope:** Indoor stadium navigation using BLE beacons, ESP32 devices, and camera/NPU-based sensing.

Why we changed

- Hardware and deployment constraints: we did not have BLE beacons available for deployment, the ESP32-based approach proved unreliable in testing, and the cameras with NPUs required for our original camera-based sensing were delayed or unavailable for development and testing. These combined issues made the planned indoor hardware approach impractical.
- Feasibility: GPS and mobile-device-based sensing scales across the campus and requires no campus-wide hardware installation, so we improvised by pivoting to a GPS-centric, software-first solution.

What changed (high level)

- Data sources: replaced camera/NPU and beacon sensing with aggregated user GPS (and optional Wi‑Fi/gyroscope) data used to build heatmaps and support routing.
- Features removed: ticket scanning and seat-specific UI logic were removed from the app.
- Frontend: complete refactor to support an interactive campus map (zoom/pan), GPS/compass/gyroscope support, mid-route rerouting, route preview, and favorites.
- Backend / architecture: redesigned for GPS navigation, user-location heatmap generation, and a dashboard for editing nodes and maintaining maps.

Key documentation

- See milestone notes and rationale: [milestone04/changes.md](milestone04/changes.md)
- Frontend refactor details: [milestone04/frontend_refactoring.md](milestone04/frontend_refactoring.md)
- Updated architecture: [milestone05/architecture.md](milestone05/architecture.md)
- Original stadium-focused requirements: [milestone02/functional_requirements.md](milestone02/functional_requirements.md) and [milestone03/fr.md](milestone03/fr.md)

Implications & suggested actions

- Privacy: collect explicit consent and anonymize location data; add `PRIVACY.md` documenting consent, retention, and anonymization.
- UI audit: remove any remaining ticket/seat flows and ensure GPS error handling is documented and tested.
- Testing: add scenarios for GPS inaccuracy and fallback behavior.

This file is stored alongside the milestone folders so reviewers and maintainers can see the high-level rationale and follow the detailed milestone documents.
