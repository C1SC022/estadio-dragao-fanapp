# State of the Art

| Features| Ovo Arena Wembley | Google Maps Indoors | Mapwize | IndoorAtlas | Our App |
|-|-|-|-|-|-|
| Indoor Navigation | X | X | X | X | X |
| Food Ordering | X | | | | extra feature |
| Real-time Queues | | | | | X |
| Safety Evacuations | | | X | | X |
| Accessibility to all users | | | | X | X |

## Key Limitations of Existing Solutions

- Arena Wembley: Provides venue-specific services (e.g. integrated local services and ordering) but is tailored to a specific site and may not offer universal indoor positioning or standardized evacuation tools.
- Google Maps: Best for general navigation and user familiarity, but Google Maps does not natively provide advanced indoor navigation, real-time queue management, or stadium-specific evacuation workflows.
- Mapwize: Strong indoor mapping and navigation features with support for evacuation overlays; it lacks built-in food ordering and live queue analytics in its basic offering.
- IndoorAtlas: Excels at indoor positioning and accessibility features, but does not, by itself, provide food ordering or full real-time operations management.
- Our App: Intends to combine navigation, ordering, queue status, safety, and accessibility. The major challenges are proving real-time reliability, integrating with venue systems (POS, sensors, security), and scaling under event load.

## How Our Project Differentiates Itself

Our system is designed to unify the core capabilities venue operators and visitors need into a single product:

- Robust indoor navigation: interactive maps with POIs and turn-by-turn guidance.
- Integrated food ordering (optional): allow ordering from seats or collection points.
- Real-time queue status: show wait times for restrooms, concessions, and entry points.
- Safety and evacuation workflows: staff-triggered alerts, automated safety notifications, and dynamically recomputed safe routes.
- Accessibility-first features: support for TTS, step-free routing, high-contrast UI, and other assistive options.
- Practical integrations: architected to connect with existing stadium infrastructure (EPOS, people counters, sensors, emergency systems) with low-latency and failover modes.

By addressing these gaps, our platform aims to reduce fragmentation, improve attendee experience, and provide venue operators with a single point of control for navigation, operations, and safety.