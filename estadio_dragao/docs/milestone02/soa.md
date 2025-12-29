
# State of the Art

| Feature                  | Ovo Arena | Google Maps | Mapwize | IndoorAtlas | Our App |
|--------------------------|:---------:|:-----------:|:-------:|:-----------:|:-------:|
| Indoor Navigation        | Limited   | ✔           | SDK     | SDK         | ✔       |
| Queue Wait Times         | --        | --          | --      | --          | ✔       |
| Crowd Density Heatmap    | --        | --          | --      | --          | ✔       |
| Dynamic Re-routing       | --        | --          | --      | --          | ✔       |
| Emergency Evacuation     | --        | --          | --      | --          | ✔       |
| Ticket Integration       | ✔         | --          | --      | --          | ✔       |
| Food Ordering            | ✔         | --          | --      | --          | ✔       |



## Key Limitations of Existing Solutions

- Ovo Arena: Prioritizes transactional features like ticketing and food ordering but lacks real-time situational awareness and advanced navigation.
- Google Maps: Offers sophisticated positioning but operates independently of venue-specific operational data and does not provide queue monitoring or emergency workflows.
- Mapwize: Provides indoor navigation via SDK but requires significant integration effort and lacks real-time queue or crowd analytics.
- IndoorAtlas: Focuses on indoor positioning (SDK) but does not deliver a complete solution for venue operations or real-time features.
- Our App: Integrates queue monitoring, congestion-aware navigation, emergency alerting, and ticket/food services in a unified, privacy-conscious application.


## How Our Project Differentiates Itself

The Estádio do Dragão FanApp addresses the gaps in current smart venue solutions by integrating:
- Queue monitoring and wait-time estimation (using queueing theory)
- Congestion-aware navigation (A* pathfinding)
- Emergency alerting and dynamic re-routing (with MQTT-based real-time communication)
- Ticket integration and food ordering

All these features are delivered in a unified, privacy-conscious application. The scientific foundations presented—queueing theory, A* pathfinding, and MQTT-based publish-subscribe—provide the basis for real-time, reliable, and scalable venue management. This approach reduces fragmentation, improves attendee experience, and gives venue operators a single point of control for navigation, operations, and safety.