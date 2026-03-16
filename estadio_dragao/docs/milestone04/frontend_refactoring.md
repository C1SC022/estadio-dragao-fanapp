# Major Frontend Refactoring

With the introduction of a real campus map and the significant changes to the project scope, the frontend required a complete overhaul. The goal of this refactoring was to support outdoor navigation on the University of Aveiro campus, improve the user experience, and integrate new sensor-based features.

The main changes include:

- **Campus map integration**: Replaced the previous stadium-focused view with an interactive campus map that supports zooming, panning, and clear visualization of points of interest.
- **Navigation plug-ins**: Integrated several plug-ins and services, such as GPS, compass, heatmap visualization, and animations, to provide real-time feedback and a smoother navigation experience.
- **GPS and Wi‑Fi error handling**: Added robust handling for cases where GPS or Wi‑Fi signals are weak, unavailable, or inaccurate, including user notifications and fallback behaviors when possible.
- **Favorites hub**: Implemented a hub where users can save and quickly access their favorite locations on campus (e.g., buildings, entrances, frequently visited spots).
- **Ticket-related features removed**: Removed all ticket-related UI elements and logic that were specific to the original stadium scenario, simplifying the interface and focusing on navigation.
- **Gyroscope integration**: Connected the app to the device’s gyroscope to improve orientation and direction indication on the map, making it easier for users to understand where they are facing.
- **UI menus and icons redesign**: Updated menus, icons, and overall layout to better fit the new campus use case, ensuring a more intuitive and consistent user interface.
- **Mid-route rerouting**: Added support for rerouting while the user is already on a route, allowing the system to recalculate the path if the user deviates or chooses a different destination.
- **Route preview before starting**: Implemented a route preview screen that shows the full path before navigation begins, so users can review the route and confirm it before starting.

Overall, this refactoring transformed the frontend from a stadium-oriented interface into a campus-wide navigation application, making it more robust, user-friendly, and aligned with the new project objectives.
