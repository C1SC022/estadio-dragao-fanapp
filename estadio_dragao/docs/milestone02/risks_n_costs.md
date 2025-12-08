# Risks & Costs Analysis

## Risks

The table below outlines the key risks associated with the development and deployment of the stadium fan application. Each risk is evaluated based on its probability, potential impact, and the corresponding prevention strategies to mitigate negative effects on the project and user experience.

| Risk | Probability | Impact | Prevention |
|---|---:|---:|---|
| Slowness when loading the map or when navigating | 2/3 | 2/3 | Implement incremental loading |
| Device compatability issues | 1/3 | 3/3 | Utlizing cross-platform tools like Flutter |
| Incorrect route calculation | 2/3 | 2/3 | Use efficient route calculation algorithms like A* |

## Costs

### Infrastructure Costs

- **BLE beacons for indoor positioning**: 

Bluetooth Low Energy (BLE) beacons will be installed throughout the stadium to enable accurate indoor location tracking for users. This allows features like real-time navigation and proximity-based alerts.
- **AI people-counting cameras for live queues & heat-map**:

Smart cameras equipped with AI algorithms will monitor crowd density and queue lengths at various points (entrances, food stands, restrooms). This data powers live heat maps and queue time predictions in the app.
- **High-density Wi-Fi 6E + edge servers**:

Upgrading the stadium’s wireless infrastructure to Wi-Fi 6E ensures reliable, high-speed connectivity for thousands of simultaneous users. Edge servers process data locally for low-latency analytics and real-time updates.

### Development Costs

- **1800-2000 total hours of work**:

The project is estimated to require between 1800 and 2000 hours of combined effort from software engineers, designers, and testers. This includes frontend and backend development, integration with hardware, and quality assurance.