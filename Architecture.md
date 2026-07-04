# System Architecture

## Overview

The AI Service Desk Copilot is an enterprise-style IT support assistant built using ServiceNow AI Agent Studio.

The solution orchestrates multiple AI tools to automate the complete incident lifecycle through natural language interactions.

---

## High-Level Architecture

```
                                User
                                  │
                                  ▼
                    AI Service Desk Copilot
                                  │
                                  ▼
                      Service Desk Agent
                                  │
      ┌──────────────┬────────────┼──────────────┬──────────────┐
      ▼              ▼            ▼              ▼              ▼

Knowledge      Create        Get Status      Update        Close
 Search        Incident                     Incident      Incident

                                  │
                                  ▼

                    ServiceNow Platform

              Incident Table
              Knowledge Base
              AI Search Retrieval
```

---

## Components

### AI Service Desk Copilot

Acts as the primary conversational interface.

Responsible for:

- Understanding user intent
- Choosing the appropriate tool
- Returning responses

---

### Service Desk Agent

The orchestration layer responsible for executing business actions.

Capabilities:

- Search Knowledge
- Create Incident
- Retrieve Incident
- Update Incident
- Close Incident

---

### ServiceNow Platform

Stores all ITSM records including:

- Incident Table
- Knowledge Articles
- Work Notes
- Incident States

---

## Technologies

- ServiceNow
- AI Agent Studio
- Now Assist
- JavaScript
- GlideRecord
- AI Search Retrieval
- Knowledge Base
