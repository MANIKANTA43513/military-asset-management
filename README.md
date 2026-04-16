
# Military Asset Management System

## Project Overview
This project is a simplified Military Asset Management System designed to track and monitor critical assets across bases. It provides visibility into asset movements, assignments, and overall balance.

## Features
- Dashboard displaying key metrics:
  - Purchases
  - Transfers In / Transfers Out
  - Net Movement
  - Assigned & Expended Assets
- Real-time data fetching from backend APIs
- Clean and responsive UI

## Tech Stack
- Frontend: React
- Backend: Node.js (Express)
- Database: Mock data (for demonstration)

## API Endpoint
- GET /dashboard → Returns asset metrics data

## Setup Instructions

### Backend
cd backend  
npm install  
node server.js  

### Frontend
cd frontend  
npm install  
npm start  

## Assumptions & Limitations
- Uses static/mock data instead of a real database
- RBAC and advanced features are not implemented
- Designed as a prototype/demo system

## Future Improvements
- Role-Based Access Control (RBAC)
- Database integration (MongoDB/SQL)
- CRUD operations for assets
- Filters and advanced analytics

## Login Credentials
- Username: admin  
- Password: admin123  

---
*This project is developed as part of a full-stack assignment.*
