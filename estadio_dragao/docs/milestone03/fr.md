# Functional Requirements

The functional requirements specify the core services and behaviors the system must exhibit to address the problems outlined in the previous section. They are derived from user needs and stakeholder objectives, defining what the application must do.

---

## FR01 — Map and Indoor Navigation

The system shall provide an accurate, interactive digital map of the *Estádio do Dragão*. This map must include key Points of Interest (POIs) such as user seats, restrooms, bars, entrances, exits, and first-aid stations.

Based on this map, the system shall offer turn-by-turn indoor path-finding to any user-selected POI.

To accommodate different user needs, the system shall provide **exactly two distinct routing modes**:

- **Normal Route** — calculates the shortest or fastest path.
- **Accessibility Route** — avoids stairs and prioritizes ramps and elevators, designed for users with limited mobility.

---

## FR02 — Real-Time Crowd Visualization

To improve situational awareness, the system shall overlay the stadium map with a dynamic heatmap.

The heatmap must visually represent real-time crowd density in different zones of the stadium using a color gradient:
- Green — low density  
- Red — high density

---

## FR03 — Queue Management and Dynamic Routing

The system shall display estimated wait times for queues at various services (e.g., food stalls, restrooms).

It shall provide a list of similar services sorted by an **efficiency score** that combines wait time and distance.

The navigation system must support **dynamic re-routing**, suggesting alternative paths if congestion or increased wait times are detected along the initial route.

---

## FR04 — Emergency Mode

In the event of a major emergency declared by stadium operations, the system shall automatically switch to a dedicated **Emergency Mode**.

In this mode, the primary interface must display a clear and optimized evacuation route from the user's current location to the safest designated exit, overriding any previous navigation instructions.

---

## FR05 — Ticket Integration and Seat Identification

The system shall allow users to scan their digital ticket (e.g., via QR code).

Upon successful scanning, the system shall:
- Parse the ticket information
- Identify the user's assigned seat(s)
- Mark the seat(s) as a primary Point of Interest on the map

---

## FR06 — System Integration and Language Handling

The system shall automatically detect and adopt the default language setting of the user's mobile operating system (Android or iOS).

The application interface—including all labels, instructions, and navigation cues—must be displayed in this language without requiring manual selection within the app.