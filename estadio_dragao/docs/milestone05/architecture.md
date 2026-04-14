# Architecture

The architecture was updated to support the new outdoor campus-based version of the project. Instead of relying on an indoor stadium setup, the system now centers on GPS navigation, campus map data, and user location tracking across the University of Aveiro.

One of the main changes was the shift away from hardware that was only suitable for an enclosed stadium environment. Since Bluetooth beacons, ESP32 devices, and fixed camera-based sensing were not practical for the full campus, the architecture was redesigned around mobile GPS data and software-based services.

The new architecture also supports heat map generation using the location data collected from app users. This allows the system to estimate occupancy and highlight busier areas on the campus map without depending on embedded cameras or specialized local devices.

Another important part of the architecture is the inclusion of a dashboard for editing campus nodes and maintaining the map. This makes the system easier to update, extend, and adapt to future routing changes or new points of interest.

Overall, the architecture is now more flexible, scalable, and aligned with the outdoor navigation goals of the project. It supports routing, congestion awareness, accessibility, and administration through a cleaner service structure.

![Reviewed Architecture Diagram](../../static/img/ms5/Pei_architecture.png)