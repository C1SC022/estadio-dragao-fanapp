# User Stories

## Persona 1 - Local fan  
  
### User Story 1  
  
As a fan that arrives late at the stadium,
I want to receive recommended paths avoiding the most crowded queues,
So that I can easily and quickly get into the stadium.  

**Acceptance Criteria:**
- The app displays live queue times at key points (entries, food stands, restrooms, exits)
- The app provides congestion-aware navigation
- Recommended routes avoid areas with high waiting times
- Route computation latency ≤ 150 ms
- The app provides visual navigation with landmarks
- 95% of “find seat” tasks succeed in usability tests

---
  
## Persona 2 - First time/visiting fan  
  
### User Story 1  
  
As a foreign fan who doesn’t speak Portuguese,
I want the app to have my language,
So that I can understand the instructions and navigate easily through the stadium.

**Acceptance Criteria:**
- The app supports PT/EN and one additional language (e.g., FR)
- All UI text, alerts, and instructions are fully translated
- Language switch happens instantly (<1s)

---
  
## Persona 3 - Accessibility focused fan  
  
### User Story 1  
  
As a fan with walking issues,
I want to know the most accessible path to everywhere,
So that I can circulate safely and without help.

**Acceptance Criteria 1:**
- The app includes an “Accessible path” mode
- Accessibility routes avoid stairs and inaccessible areas
- Accessibility route success rate ≥ 90%
  
### User Story 2  
  
As a fan with sensory issues,
I want the app to show the most occupied zones,
So that I can avoid noisy or chaotic areas.

**Acceptance Criteria 2:**
- The app provides a live congestion heat-map
- Heat-map updates every 10 seconds
- Accuracy ≥ 85% compared to real data

---
  
## Persona 4 - Safety-aware fan  
  
### User Story 1  
  
As a dad fan who goes with the family,
I want easy access to emergency pathways,
So that I can quickly protect my family.

**Acceptance Criteria:**
- Emergency exits are highlighted on the map
- Route to nearest exit updates dynamically in real-time
- 95% of test evacuations complete successfully