# Legal & Refactoring Changes

## General Changes

In Milestone 6 (corresponding to Milestone 3 of the project cycle), we shifted our focus from feature building to structural integrity, addressing legal requirements (GDPR, licensing), analyzing critical technical risks, and establishing a detailed refactoring plan to eliminate technical debt across our repositories.

## Legal and GDPR Compliance

To ensure our application can be legally deployed in public spaces (under Portuguese CNPD guidelines and the EU AI Act), we defined a robust privacy framework:
- **Location Pseudonymization**: User GPS coordinates are strictly pseudonymized and aggregated into 5-meter grid cells for heatmaps. Furthermore, user location entries are configured to automatically expire after 20 seconds of inactivity.
- **Privacy-Safe Computer Vision**: AI cameras deployed for queue counting do not store or transmit raw video footage or images. Instead, they perform local inference and only publish anonymous crowd counts to the MQTT broker. Any temporary validation frames are automatically deleted within 24 hours.
- **Licensing Alignment**: Identified that the AGPLv3 license of Ultralytics YOLOv8 acts as a commercial blocker for B2B models. We developed a plan to migrate our computer vision service to run solely on ONNX-based formats, bypassing AGPL constraints and enabling closed-source monetization.

## Technical Debt & Refactoring Plan

An extensive codebase audit was conducted, and we initiated plans to resolve three primary forms of technical debt:
1. **Decoupling Infrastructure**: Port mappings, backend discovery addresses, and MQTT topics were hardcoded inside the service codebases. We initiated a refactoring plan to centralize configurations in `.env` environment files to ensure simple and generic deployments.
2. **Consolidating Geolocation Math**: Found duplicated GPS and distance calculation code scattered across different services. We scheduled a migration to consolidate this math into a single reusable geolocation module inside the `Input-Processor` to prevent subtle routing discrepancies.
3. **Deconstructing Overcoupled Frontend Widgets**: The core navigation and map screens in the Flutter Fanapp centralized too many responsibilities. We initiated a deconstruction plan applying the Single Responsibility Principle, splitting massive widgets into modular and testable sub-components to prevent regressions.

## Security Hardening & Business Plan

- **MQTT Broker Protection**: Addressed the lack of security in Mosquitto communication by planning and initiating a full TLS implementation and mandatory ACLs (Access Control Lists) to encrypt and authorize all broker traffic end-to-end.
- **Dependency Audit**: Cleaned up outdated third-party packages, successfully migrating critical services like the `WaitTime-Service` to `aiomqtt 2.0` to handle breaking changes.
- **TOWS Strategic Options**: Derived actionable business strategies, including developing a GPS-only "Lite" tier for venues without camera hardware, and adopting a phased B2B SaaS model targeting European sports arenas and university campuses.
