# 🚀 Sample Auth APP

## 📋 Overview
This project is a full-stack web application that includes:
- **Backend:** Handles API requests and manages the database.
- **Frontend (UI):** Built separately and integrated as a static client.
- **Database:** Managed with custom scripts.
- **API Documentation:** Available for developers.

---

## 🛠️ Prerequisites
- **Node.js:** v20+ recommended
- **NPM:** v11+ recommended
- **Make:** Installed for running Makefile commands
- **Database:** Ensure you have the required database setup as per `.env.example`

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone git@github.com:Abdelnaby-M/sample-auth.git ./sample-auth
cd /sample-auth
```

### 2. **Create .env File**
```bash
cp .env.example .env
```
⚠️ Note: The app has hardcoded fail-safes for missing environment variables, but providing a complete .env file is recommended.


### 3. **Initial Setup**
```bash
make start
```
This command will:

Initialize and start the database.
Pull and build the UI repository.
Copy the UI build output to the client folder.
Install backend dependencies.
Build the backend and run it in production mode.

### 🛠️ Available Commands
```bash
make start
make dev
make build
make build-ui
make build-all
make start-db
make stop-db
```

### 📄 API Documentation
Once the app is running, access the API docs at:

http://localhost:3000/api-docs

### 🛠️ UI Updates

If you need to update the UI:

Make changes in the UI directory repository.
Run:
```bash
make build-ui
```
This will update the current version of the UI in the client folder.

### 📁 Logs
System logs are stored in the logs directory.
Check here for any issues or runtime information.

### ⚠️ Permissions Warning
Ensure you have the necessary permissions to:

Execute scripts in the _scripts directory.
Create and modify files in the client and logs directories.
If you encounter permission issues, you may need to run:
```bash
chmod +x _scripts/*.sh
```

