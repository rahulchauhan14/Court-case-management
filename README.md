# ⚖️ Court Case Management System

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini](https://img.shields.io/badge/Gemini_AI-Interactive-blue?style=for-the-badge&logo=googlegemini&logoColor=white)](https://deepmind.google/technologies/gemini/)

A premium, full-stack **Court Case Management System** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) and integrated with **Google Gemini AI** to streamline judiciary administration. The application features a design inspired by the **Supreme Court of India**, offering distinct dashboard views tailored to distinct user roles.

---

## 📌 Core Architecture & Workflows

```mermaid
graph TD
    User([User Request]) --> Auth{JWT Authenticated?}
    Auth -- No --> Login[Login / Register]
    Auth -- Yes --> RoleCheck{Role Check}
    
    RoleCheck -- Admin --> AdminDash[Admin Dashboard]
    RoleCheck -- Judge --> JudgeDash[Judge Dashboard]
    RoleCheck -- Lawyer --> LawyerDash[Lawyer Dashboard]
    RoleCheck -- Clerk --> ClerkDash[Clerk Dashboard]
    
    AdminDash --> UserMgmt[User Management CRUD]
    ClerkDash --> RegisterCase[Register Case & Upload Docs]
    ClerkDash --> ScheduleHearing[Schedule Hearings]
    
    JudgeDash & LawyerDash --> CaseView[View Cases & Hearing Lists]
    JudgeDash --> AddRecord[Add Hearing Decisions & Records]
    
    CaseView --> GeminiAI{Gemini AI Integration}
    GeminiAI --> CaseSummary[Generate Legal Summaries]
    GeminiAI --> Chatbot[Case Q&A Interactive Assistant]
    GeminiAI --> CaseInclination[Predictive Case Inclination]
```

---

## ✨ System Features

### 🔐 Security & Access Control
* **JSON Web Token (JWT)** cookie-based session authentication.
* **Role-Based Access Control (RBAC)** restricting endpoints for **Admins, Judges, Lawyers, and Clerks**.
* Secure password hashing using `bcryptjs`.

### ⚖️ Digital Case Management
* **Case Creation**: Clerks and Admins can register new cases with comprehensive metadata (Title, Status, Priority, Next Hearing Date).
* **Document Repository**: Secure file upload (PDFs, docs) per case using `Multer` middleware.
* **Hearing Records**: Track chronological hearing milestones, write judgment notes, and record official court decisions.

### 🤖 Gemini AI Legal Suite
* **Case Summarizer**: Extracts legal summaries and core highlights from case details automatically.
* **Case Chatbot**: Interactive Q&A chatbot allowing lawyers and judges to query specific facts about a case.
* **Inclination Analysis**: Evaluates case documents and logs to outline arguments and determine case leaning.

### 📅 Automations & Analytics
* **Daily Cron Jobs**: Automated email notifications sent to scheduled lawyers and judges at 8:00 AM every morning for upcoming hearings.
* **Interactive Charts**: Responsive analytics dashboards featuring case status tracking and system-wide metrics.

---

## 📸 Application Interface Showcase

### 📊 Primary Dashboards
<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>🔐 Login Interface</b><br/>
      <img src="Screenshot/login.png" alt="Login Interface" width="100%"/>
    </td>
    <td width="50%" align="center">
      <b>📊 Case Analytics Dashboard</b><br/>
      <img src="Screenshot/dashboard.png" alt="Dashboard Overview" width="100%"/>
    </td>
  </tr>
</table>

### ⚖️ Digital Case & Hearing Workspace
<table width="100%">
  <tr>
    <td width="33%" align="center">
      <b>📅 Today's Hearings Schedule</b><br/>
      <img src="Screenshot/Screenshot 2026-05-20 134318.png" alt="Hearing Schedule" width="100%"/>
    </td>
    <td width="33%" align="center">
      <b>📂 Case File Repository</b><br/>
      <img src="Screenshot/Screenshot 2026-05-20 134334.png" alt="Document Vault" width="100%"/>
    </td>
    <td width="33%" align="center">
      <b>📝 Hearing Outcome Logging</b><br/>
      <img src="Screenshot/Screenshot 2026-05-20 134409.png" alt="Hearing Logger" width="100%"/>
    </td>
  </tr>
  <tr>
    <td width="33%" align="center">
      <b>👥 User Roles Manager</b><br/>
      <img src="Screenshot/Screenshot 2026-05-20 134418.png" alt="User Management" width="100%"/>
    </td>
    <td width="33%" align="center">
      <b>➕ Case Registration</b><br/>
      <img src="Screenshot/Screenshot 2026-05-20 134429.png" alt="Register Case" width="100%"/>
    </td>
    <td width="33%" align="center">
      <b>⚖️ Smart Case Priority</b><br/>
      <img src="Screenshot/Screenshot 2026-06-11 235515.png" alt="Case Priority AI" width="100%"/>
    </td>
  </tr>
</table>

### 🤖 Gemini AI Legal Assist Suite
<table width="100%">
  <tr>
    <td width="50%" align="center">
      <b>💬 Legal Case Q&A Chatbot</b><br/>
      <img src="Screenshot/Screenshot 2026-06-11 235523.png" alt="Gemini Legal Chatbot" width="100%"/>
    </td>
    <td width="50%" align="center">
      <b>⚖️ Ruling Inclination Analytics</b><br/>
      <img src="Screenshot/Screenshot 2026-06-11 235535.png" alt="Gemini Leaning Analysis" width="100%"/>
    </td>
  </tr>
</table>

---

## ⚙️ Configuration & Environment Settings

Create a `.env` file inside the `backend/` directory.

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/court-case-management
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/court-case-management?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key

# Email Notification Settings (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_gmail_app_password

# Google Gemini AI Settings
GEMINI_API_KEY=your_gemini_api_key
```

> [!NOTE]
> The backend automatically detects and connects to either `MONGO_URI` or `MONGODB_URI`. If connecting to MongoDB Atlas, ensure your cluster IP whitelist permits incoming requests.

---

## 🚀 Installation & Launch

### 1️⃣ Backend Setup
```bash
# Navigate to backend directory
cd judiciary-system/backend

# Install dependencies
npm install

# Run backend development server
node index.js
```
*Backend will be active at:* `http://localhost:3000`

### 2️⃣ Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start Vite server
npm run dev
```
*Frontend will be active at:* `http://localhost:5173`

---

## 👨‍⚖️ User Roles Matrix

| Role | User Management | Case Management | Hearing Scheduling | Document Uploads | Gemini AI Assistant | System Audit Logs |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Admin** | 🟢 Full CRUD | 🟢 Full CRUD | 🟢 Full CRUD | 🟢 Upload/View | 🟢 Enabled | 🟢 Full View |
| **Clerk** | 🟡 Create Users | 🟢 Full CRUD | 🟢 Full CRUD | 🟢 Upload/View | 🟢 Enabled | ❌ No Access |
| **Judge** | ❌ No Access | 🟡 View Only | 🟡 Update Hearings | 🟢 Upload/View | 🟢 Enabled | 🟢 View Only |
| **Lawyer**| ❌ No Access | 🟡 View Only | ❌ Read Only | 🟢 Upload/View | 🟢 Enabled | ❌ No Access |

---

## 📑 API Endpoints Reference

### 🔐 Authentication (`/api/auth`)
* `POST /register` - Register a new user
* `POST /login` - Log in and assign auth token cookie
* `POST /logout` - Clear session token cookie
* `GET /check` - Verify current role permissions
* `POST /addUser` - Admin/Clerk explicit user creation route
* `DELETE /:id` - Remove a user account (Admin only)

### ⚖️ Case Management (`/api/cases`)
* `GET /` - Fetch all cases assigned/permitted for user
* `GET /:id` - Get detail report for a single case
* `POST /` - Register a new case record (Admin/Clerk)
* `PUT /:id` - Modify case details (Status, details)
* `DELETE /:id` - Remove a case (Admin only)

### 📅 Hearing Management (`/api/hearing`)
* `GET /` - List all scheduled hearings
* `GET /today` - Fetch hearings scheduled for the current date
* `GET /:caseId` - List all hearings related to a specific case
* `POST /` - Schedule a new court hearing (Admin/Clerk/Judge)

### 📂 Documents & Records (`/api/documents` & `/api/hearing-records`)
* `POST /documents/:caseId` - Upload legal files (Admin/Clerk/Lawyer/Judge)
* `GET /documents/:caseId` - Fetch all documents uploaded to a case
* `POST /hearing-records/` - Save official hearing outcome/record
* `GET /hearing-records/:caseId` - Chronological hearing record timeline

### 🤖 Gemini AI integration (`/api/ai`)
* `GET /case-summary/:caseId` - Retrieve stored case summary
* `POST /case-summary/:caseId` - Generate new summary using Gemini
* `POST /chatbot/:caseId` - Ask the AI chatbot questions about case details
* `GET /case-inclination/:caseId` - Fetch predictive ruling inclination analysis

---

## 👨‍💻 Developer & Author
Developed and maintained by **Rahul Chauhan**. 
Passionate about building modern web applications, AI integrations, and full-stack solutions.