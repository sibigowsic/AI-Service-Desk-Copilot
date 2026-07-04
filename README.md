<div align="center">

# 🤖 AI Service Desk Copilot

### AI-Powered IT Service Management using ServiceNow AI Agent Studio

<p align="center">

![ServiceNow](https://img.shields.io/badge/ServiceNow-Platform-81B5A1?style=for-the-badge&logo=servicenow)
![AI Agent Studio](https://img.shields.io/badge/AI-Agent%20Studio-blue?style=for-the-badge)
![Now Assist](https://img.shields.io/badge/Now-Assist-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![ITSM](https://img.shields.io/badge/ITSM-Workflow-orange?style=for-the-badge)

</p>

---

### 🚀 Intelligent AI Assistant for Enterprise IT Support

*Built using ServiceNow AI Agent Studio, AI Search Retrieval, Now Assist, GlideRecord and JavaScript.*

<p>

⭐ AI Search &nbsp;&nbsp;
⭐ Incident Management &nbsp;&nbsp;
⭐ Knowledge Base &nbsp;&nbsp;
⭐ Natural Language &nbsp;&nbsp;
⭐ ITSM Automation

</p>

</div>

---

# 📌 Overview

AI Service Desk Copilot is an intelligent IT support assistant that automates the complete ServiceNow incident lifecycle through natural language conversations.

Instead of navigating multiple ServiceNow forms, users simply describe their problem. The AI Agent determines the user's intent and invokes the appropriate ServiceNow capability.

The assistant can search the Knowledge Base, create incidents, retrieve incident information, update work notes, and close incidents while interacting directly with the ServiceNow platform.

---

# ✨ Key Features

| Capability | Description |
|------------|-------------|
| 🔍 AI Knowledge Search | Searches the ServiceNow Knowledge Base using AI Search Retrieval |
| 📝 Incident Creation | Creates ServiceNow incidents using natural language |
| 📊 Incident Status | Retrieves incident information in real time |
| 🛠 Incident Updates | Adds work notes to existing incidents |
| ✅ Incident Closure | Closes incidents after successful resolution |
| 🤖 AI Orchestration | Coordinates multiple AI tools using AI Agent Studio |

---

# 🏗 System Architecture

```text
                                    User
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │     AI Service Desk Copilot     │
                    └─────────────────────────────────┘
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │       Service Desk Agent        │
                    └─────────────────────────────────┘
                                      │
        ┌───────────────┬─────────────┼─────────────┬──────────────┐
        ▼               ▼             ▼             ▼              ▼

 Knowledge Search   Create Incident  Get Status  Update Incident  Close Incident

        │               │             │             │              │
        └───────────────┴─────────────┴─────────────┴──────────────┘
                                      │
                                      ▼
                          ServiceNow ITSM Platform
```

---

# 🔄 AI Workflow

```text
                         User Reports an Issue
                                   │
                                   ▼
                    Search ServiceNow Knowledge Base
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
           Relevant Article Found           No Article Found
                    │                             │
                    ▼                             ▼
         Summarize Solution              Create Incident
                                                  │
                                                  ▼
                                        Retrieve Incident Status
                                                  │
                                                  ▼
                                           Update Work Notes
                                                  │
                                                  ▼
                                            Close Incident
```

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| ServiceNow | Enterprise ITSM Platform |
| AI Agent Studio | AI Agent Orchestration |
| Now Assist | Conversational AI |
| AI Search Retrieval | Knowledge Search (RAG) |
| JavaScript | Backend Script Tools |
| GlideRecord | Database Operations |
| Incident Management | ITSM |
| Knowledge Management | Enterprise Self-Service |

---

# 📂 Repository Structure

```text
AI-Service-Desk-Copilot
│
├── README.md
├── LICENSE
├── .gitignore
│
├── Demo
│   └── AI_Service_Desk_Copilot_Demo.mp4
│
├── Documentation
│   ├── AI-Agent.md
│   ├── Architecture.md
│   └── Workflow.md
│
├── Scripts
│   ├── CreateIncident.js
│   ├── GetIncidentStatus.js
│   ├── UpdateIncident.js
│   └── CloseIncident.js
│
└── Screenshots
    ├── 01-Agent-Studio.png
    ├── 02-Knowledge-Search.png
    ├── 03-Create-Incident.png
    ├── 04-Incident-Status.png
    ├── 05-Update-Incident.png
    ├── 06-Close-Incident.png
    └── 07-ServiceNow-Incident.png
```

---

# 🎥 Demonstration

The complete demonstration showcases the following workflow:

- 🔍 Search Knowledge Base
- 📝 Create Incident
- 📊 Retrieve Incident Status
- 🛠 Update Incident Work Notes
- ✅ Close Incident

Demo Video

```text
Demo/AI_Service_Desk_Copilot_Demo.mp4
```

---

# 📸 Screenshots

| Module | Screenshot |
|----------|------------|
| AI Agent Studio | `Screenshots/01-Agent-Studio.png` |
| Knowledge Search | `Screenshots/02-Knowledge-Search.png` |
| Create Incident | `Screenshots/03-Create-Incident.png` |
| Incident Status | `Screenshots/04-Incident-Status.png` |
| Update Incident | `Screenshots/05-Update-Incident.png` |
| Close Incident | `Screenshots/06-Close-Incident.png` |
| ServiceNow Record | `Screenshots/07-ServiceNow-Incident.png` |

---

# 🧠 AI Capabilities

✔ Intent Detection

✔ AI Search Retrieval

✔ Natural Language Understanding

✔ Tool Invocation

✔ Incident Lifecycle Automation

✔ Knowledge Base Retrieval

✔ AI Orchestration

✔ ServiceNow Integration

---

# 📈 Business Value

- Improves IT support efficiency
- Reduces repetitive manual operations
- Encourages self-service through Knowledge Articles
- Automates repetitive Service Desk workflows
- Demonstrates practical enterprise AI implementation

---

# 🚀 Future Enhancements

- Intelligent Incident Routing
- Priority Recommendation
- SLA Prediction
- Multi-Agent Collaboration
- Automatic Assignment
- Analytics Dashboard
- Email Notification Integration

---

# 👨‍💻 Author

GOWSIC SIBI 
---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a Star.

Made with ❤️ using **ServiceNow AI Agent Studio**

</div>
