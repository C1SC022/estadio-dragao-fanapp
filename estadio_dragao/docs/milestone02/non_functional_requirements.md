## Non-functional Requirements

### Capacity
- Each user has a local cache of the map
- Each user must have evacuation paths in cache

### Usability & Accessibility
- Simple and intuitive UI
- Emergency mode UI must be high contrast, minimal text, clear, and include audio cues
- Multilingual support (2 or more languages)
- Icons & markers must follow international safety standards

### Reliability
- Accurate heat-maps
- Accurate shortest-route calculation
- Evacuation through established emergency routes

### Performance
- Real-time location updates
- Minimal route calculation times

### Security, Legal Compliance & Ethics
- Explicit opt-in consent required for camera-based location tracking
- Privacy by design: minimise/delete/blur identifiable video
- Transparent communication about data collection and use

### Testability
- Integration tests with stadium hardware
- Security testing
- Usability testing

### Compatibility & Dependencies
- Compatible with the latest 3 versions of Android and iOS
- Optimised for low-end smartphones
- Health endpoints to verify status of external providers

## Acceptance Criteria (system-level)
- During event peaks, 95% of routes should be delivered
- During evacuation tests, 99% of valid escape routes should be delivered