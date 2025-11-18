# MVP Acceptance Criteria & KPIs

---

## Persona 1 — Local Fan

### User Story 1  
As a long-time fan who wants to minimize wait times and enhance stadium experience,  
I want to know when and where are queues,  
so that I can spend less time waiting for food or exits.

**Acceptance Criteria:**  
- The app displays live queue times at key points (food stands, restrooms, exits).  
- Wait-time estimates update every 15 seconds.  
- Mean Absolute Error (MAE) ≤ 2 minutes on test data.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| MAE for wait-time predictions | ≤ 2 min | Accuracy |
| Data refresh rate | ≤ 15 s | Performance |
| Average time-to-task (find shortest queue) | ≤ 10 s | Usability |

---

## Persona 2 — First-time / Visiting Fan

### User Story 1  
As a foreign fan who doesn’t speak Portuguese,  
I want the app to have my language,  
so that I can understand the instructions and navigate easily through the stadium.

**Acceptance Criteria:**  
- The app supports PT/EN and one additional language (e.g., FR).  
- All UI text, alerts, and instructions are fully translated.  
- Language switch happens instantly (<1s).

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Translation coverage | 100% | Internationalization |
| Language switch latency | ≤ 1 s | Performance |
| Satisfaction score (foreign users) | ≥ 4.5 / 5 | UX Quality |

---

### User Story 2  
As a first-time visiting fan,  
I want a map with clear and intuitive pathways to my seat and bars,  
so that I can orient myself in the stadium without getting lost.

**Acceptance Criteria:**  
- The app provides visual navigation with landmarks.  
- 95% of “find seat” tasks succeed in usability tests.  
- Route generation ≤ 150 ms.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Route accuracy | ≥ 95% | Precision |
| p95 route latency | ≤ 150 ms | Performance |
| Average time-to-locate seat | ≤ 15 s | Usability |

---

## Persona 3 — Accessibility-focused Fan

### User Story 1  
As a fan with walking issues,  
I want to know the most accessible path to everywhere,  
so that I can circulate safely and without help.

**Acceptance Criteria:**  
- The app includes an “Accessible path” mode.  
- Accessibility routes avoid stairs and inaccessible areas.  
- Accessibility route success rate ≥ 90%.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Accessibility task success rate | ≥ 90% | Inclusion |
| p95 route latency | ≤ 150 ms | Performance |
| Route update rate | ≤ 10 s | Performance |
| Accessibility mode uptime | ≥ 99% | Reliability |

---

### User Story 2 
As a wheelchair fan,  
I want to have the option to request assistance in the app,  
so that I can get help quickly.

**Acceptance Criteria:**  
- “Request assistance” button is available in accessibility mode.  
- Request reaches staff within 10 seconds.  
- Confirmation of assistance is sent to user.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Request delivery time | ≤ 10 s | Performance |
| Successful assistance rate | ≥ 95% | Reliability |
| Accessibility satisfaction score | ≥ 4.5 / 5 | UX Quality |

---

## Persona 4 — Safety-aware Fan

### User Story 1  
As a dad fan who goes with the family,  
I want easy access to emergency pathways,  
so that I can quickly protect my family.

**Acceptance Criteria:**  
- Emergency exits are highlighted on the map.  
- The route to nearest exit updates dynamically in real-time.  
- 95% of test evacuations complete successfully.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Evacuation success rate | ≥ 95% | Safety |
| Route update latency | ≤ 150 ms | Performance |
| User confidence (survey) | ≥ 4.5 / 5 | UX |

---

### User Story 2  
As a dad who is a fan and goes with his family,
I want to be notified quickly in case of an emergency,
so that I can get my family to safety faster.

**Acceptance Criteria:**  
- SOS button is always visible on main screen.  
- Emergency team receives user’s location automatically.  
- Response confirmation ≤ 10 seconds.

**KPIs:**

| KPI | Target | Category |
|------|---------|-----------|
| Response time (SOS to confirmation) | ≤ 10 s | Safety |
| Location accuracy | ≤ 8 m | Precision |
| System uptime (SOS feature) | ≥ 99% | Reliability |

---