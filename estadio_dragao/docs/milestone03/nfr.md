# Non-Functional Requirements

Non-functional requirements define the *quality attributes* and constraints of the system, describing how well it must perform its functions. These requirements are essential to ensure usability, reliability, performance, security, and maintainability within the scope of the MVP.

---

## Performance and Responsiveness

- **NFR01** — Route calculation and transmission must be completed within 3 seconds to ensure smooth navigation.
- **NFR02** — Route recalculations and transmissions triggered by user movement or the discovery of a better route must be completed within 3 seconds.
- **NFR03** — Delivered routes must accurately represent the real fastest route in at least 80–90% of cases under normal operating conditions.

---

## Usability and Accessibility

- **NFR04** — The user interface must be intuitive and require minimal or no instruction for first-time users, following established mobile design patterns.
- **NFR05** — The emergency mode interface must employ high-contrast colors, minimal text, and clear pictograms to ensure rapid comprehension under stress.
- **NFR06** — The two routing modes (Normal and Accessibility) must be easily selectable within the interface.
- **NFR07** — The system shall avoid excessive route changes by applying route stability thresholds to improve user experience and reduce confusion.

---

## Reliability and Availability

- **NFR08** — Core navigation data, including stadium maps and Points of Interest, must be cached locally on the device to ensure functionality in areas with poor or absent network connectivity.
- **NFR09** — During emergency evacuation scenarios, the system must successfully generate and deliver valid escape routes for 100% of requests, ensuring the highest possible reliability when it matters most.
- **NFR10** — Routing decisions shall reflect the latest available map data, congestion information, and access control constraints.

---

## Security, Privacy, and Legal Compliance

- **NFR11** — The system shall follow *privacy-by-design* principles. All crowd data used for heatmaps and queue estimations must be aggregated and anonymized; no personally identifiable information shall be stored or processed for these analytical features.
- **NFR12** — Explicit user consent (opt-in) must be obtained before activating any fine-grained location tracking methods, such as Bluetooth beacon-based positioning.
- **NFR13** — The application must comply with relevant data protection regulations, particularly the GDPR. A clear, concise, and easily accessible privacy policy must describe all data collection, usage, sharing, and retention practices.

---

## Compatibility, Portability, and Maintainability

- **NFR14** — The mobile application must be compatible with the latest three major versions of both Android and iOS operating systems.
- **NFR15** — The application must be optimized to run effectively on devices with limited hardware capabilities, ensuring acceptable performance on mid-to-low-end smartphones.
- **NFR16** — The system shall expose health-check endpoints to monitor the status of external services and data providers.
- **NFR17** — All routing decisions must be logged to support post-event analysis, monitoring, and auditing.