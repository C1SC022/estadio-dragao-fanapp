# Non-functional Requirements

## Assumptions

+ Each stadium provides **fiber connectivity**, **local edge infrastructure**, and **5G Qos (Quality of Service) cooperation**
+ Stadium security staff provide evacuation plans and routes.  
+ Emergency simulations are conducted regularly to validate readiness.  

## Capacity

+ Each user has a local cache of the map
+ Each user must have evacuation paths in cache
+ Database must be able to store the events of the game

## Performance 

+ Real-time location updates
	+ While actively path-finding have a faster refresh-rate
	+ Passively have a fast but not so resource intensive refresh-rate
+ Minimal route calculation times
+ Capacity to handle 20k-70k concurrent users per stadium
+ Must handle sudden traffic spikes (halftime, entry, exit and emergencies)

## Scalability

+ System must be horizontally scalable (server for each stadium)
+ Support zone partitioning to reduce latency

## Usability & Accessibility

+ Simple and intuitive UI
+ Emergency mode UI must be high contrast, minimal text, clear and have audio cues
+ Multilingual support
+ Icons & map markers must follow international safety standarts

## Data reliability 

+ Accurate heatmaps (camera)
+ Accurate localization (5G)

## Availability & Disaster Recovery

+ Critical services (99.99% uptime)
+ Non-critical services (80% uptime)
+ Fallback modes for 5G or edge node failure:
	+ Use **Wi-Fi/BLE/GNSS** fallback for location.  
	+ Public announcement

## Security, Legal Compliance & Ethical Considerations

+ Explicit opt-in consent required for camera-based location tracking
+ Privacy by design: minimize/delete/blur storage of identifiable video
- Transparent communication about data collection and use.  

## Emergency mode

+ All traffic must be overriden by emergency mode
+ Deliver evacuation notices via multiple channels (app, digital signage)
+ Routes must align with approved stadium evacuation

## Maintainability

+ Full telemetry stack (latency, throughput, etc)
+ Automated deployment (CI/CD) with canary releases
+ Everything should be documented and have English as primary language
+ Backups and recovery plans for provided evacuation routes, metrics, etc

## Testability

+ Integration tests with stadium hardware
+ Security testing
+ Usability testing

## Compatibility & Dependencies

+ Compatible with latest 3 versions of Android and iOS
+ The app should be well optimized for low end smartphones
+ Health endpoints to have the current status of external providers

## Acceptance Criteria

+ During event peaks: 95% of routes should be delivered
+ During evacuation tests: 99% of valid escape routes should be delivered








