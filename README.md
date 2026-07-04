<div align="center">

# 🤖 AI Service Desk Copilot

### AI-Powered IT Service Management using ServiceNow AI Agent Studio

An intelligent Service Desk assistant that automates the IT incident lifecycle through natural language conversations using ServiceNow AI Agent Studio, AI Search, Now Assist, and JavaScript.

---

![ServiceNow](https://img.shields.io/badge/Platform-ServiceNow-81B5A1?style=for-the-badge)
![AI Agent Studio](https://img.shields.io/badge/AI-Agent%20Studio-blue?style=for-the-badge)
![Now Assist](https://img.shields.io/badge/Now-Assist-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge)
![ITSM](https://img.shields.io/badge/Domain-ITSM-orange?style=for-the-badge)

</div>

---

# 📌 Overview

Organizations receive hundreds of IT support requests every day. Users often struggle to find solutions, create support tickets, track progress, and communicate updates efficiently.

This project demonstrates an **AI-powered Service Desk Copilot** built with **ServiceNow AI Agent Studio** that enables users to interact with IT support using natural language.

Instead of navigating multiple ServiceNow modules, users can simply describe their issue, and the AI agent intelligently performs the appropriate action.

---

# 🎯 Problem Statement

Traditional IT support workflows involve multiple manual steps:

- Searching documentation
- Creating incidents manually
- Tracking incident progress
- Updating work notes
- Closing resolved incidents

These repetitive tasks increase response time and reduce productivity.

---

# 💡 Solution

The AI Service Desk Copilot automates the complete incident lifecycle.

Instead of filling forms manually, users interact naturally with an AI assistant.

The assistant can:

- Search the Knowledge Base
- Create Incidents
- Retrieve Incident Status
- Update Work Notes
- Close Incidents

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| 🔍 Knowledge Search | Searches ServiceNow Knowledge Base using AI Search Retrieval |
| 📝 Create Incident | Creates incidents from natural language requests |
| 📊 Get Incident Status | Retrieves live incident details |
| 🛠 Update Incident | Adds work notes to existing incidents |
| ✅ Close Incident | Closes incidents with resolution notes |
| 🤖 AI Orchestration | Coordinates specialized tools through AI Agent Studio |

---

# 🏗️ System Architecture

```text
                        User
                          │
                          ▼
               AI Service Desk Copilot
                          │
                 Service Desk Agent
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
 Knowledge Search   Incident Tools   AI Responses
                          │
      ┌──────────┬────────┼────────┬─────────┐
      ▼          ▼        ▼        ▼
  Create      Status    Update    Close
 Incident    Retrieval  Incident  Incident
                          │
                          ▼
                 ServiceNow Platform
```

---

# 🔄 Workflow

```text
User reports an issue
          │
          ▼
Search Knowledge Base
          │
   ┌──────┴──────┐
   │             │
Article Found    No Article
   │             │
Provide Fix   Create Incident
                    │
                    ▼
          Get Incident Status
                    │
                    ▼
          Update Work Notes
                    │
                    ▼
            Close Incident
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| ServiceNow | Enterprise ITSM Platform |
| AI Agent Studio | AI Agent Orchestration |
| Now Assist | Conversational AI Interface |
| AI Search Retrieval | Knowledge Base Search |
| JavaScript | Script Tools |
| GlideRecord | Record Operations |
| Knowledge Base | Self-Service Support |

---

# 📸 Screenshots

> Add screenshots inside the **Screenshots/** folder.

Suggested screenshots:

- AI Agent Studio Overview
- Knowledge Search
- Create Incident
- Incident Status
- Update Incident
- Close Incident
- ServiceNow Incident Record

---

# 🎥 Demo

A complete demonstration of the workflow is available in the **Demo/** folder.

The demonstration covers:

- Knowledge Search
- Incident Creation
- Status Retrieval
- Incident Update
- Incident Closure

---

# 📂 Repository Structure

```text
AI-Service-Desk-Copilot
│
├── README.md
├── Demo
├── Documentation
├── Scripts
└── Screenshots
```

---

# 📈 Skills Demonstrated

- ServiceNow AI Agent Studio
- AI Workflow Design
- Prompt Engineering
- IT Service Management (ITSM)
- AI Search Retrieval (RAG)
- JavaScript
- GlideRecord
- Knowledge Management
- AI Tool Orchestration

---

# 🔮 Future Enhancements

- Intelligent Incident Routing
- Automatic Assignment Recommendations
- Priority Prediction
- SLA Monitoring
- Multi-Agent Collaboration
- Analytics Dashboard

---

# 👨‍💻 Author

**Sibi**

B.Tech Artificial Intelligence & Data Science

Sri Krishna College of Engineering and Technology

---

# ⭐ Acknowledgements

Built as a hands-on learning project to explore ServiceNow AI Agent Studio and modern AI-powered IT Service Management workflows.

If you found this project interesting, consider giving it a ⭐ on GitHub.
