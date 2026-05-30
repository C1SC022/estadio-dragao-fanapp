# Final Release Changes

## General Changes

In Milestone 8 (corresponding to Milestone 5 of the project cycle), we completed our final project iterations. We integrated and polished all individual microservices, finalized our academic poster, produced an official promotional video, and conducted a live demonstration showing the full capability of the **RUA (Routing UA)** and **Dragão Stadium Fan App** ecosystem.

## Unified System Integration & Final Polish

All separate services were successfully connected, tested, and optimized for final deployment:
- **Administrator Dashboard**: Provided venue service hosts with the final interactive graph editor to perform live node/edge manipulation, bulk deletions, filter mappings, and instant map updates directly to the PostgreSQL database.
- **Flutter Fanapp**: Integrated all user navigation features, including multi-criteria A* pathfinding, dynamic route recalculation (re-routing) during detours, and favorites management.
- **WaitTime-Service Integration**: Finalized the computer vision pipeline. The app displays real-time queue wait-time estimations calculated from queue cameras, resolving simulation discrepancies.
- **Congestion Heatmaps**: Real-time GPS user coordinates are processed through pseudonymized grids to generate visual crowd-density heatmaps, allowing users to actively avoid busy areas.
- **Alerts & Evacuation Routing**: Connected the emergency alert system. When an emergency is triggered, users receive push notifications, and the app's routing instantly shifts to safety mode, recalculating step-free paths to guide them away from danger to the nearest safe exit.

## Promotional Deliverables

To represent our work both academically and commercially, three main marketing and project deliverables were created:
1. **Academic Poster**: A detailed visual design summarizing our goals, context, tech stack, microservices architecture, and usability/stress-testing validation scores.
2. **Promotional Video**: A high-impact promotional video showing the end-to-end user experience, including mobile navigation, wait times, accessibility routing, and the administrative dashboard in action.
3. **App & Dashboard Demo**: Conducted a live walkthrough illustrating that the database-optimized, TLS-encrypted, and microservice-orchestrated application executes flawlessly under realistic deployment scenarios.

## Production-Ready Status

With this final iteration, RUA is ready for real-world hosting. It provides a secure, flexible, and scalable solution for outdoor university campuses and indoor stadium environments, delivering safety, comfort, and real-time navigation tools for all spectators.
