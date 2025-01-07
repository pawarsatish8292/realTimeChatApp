# realTimeChatApp
real time chat app on node js
Real-Time Chat Application with CRUD Operations and MongoDB
This project is a real-time chat application that combines the power of Socket.IO for bi-directional communication and MongoDB for data persistence. It enables users to send and receive messages in real time while supporting CRUD (Create, Read, Update, Delete) operations on messages. The application is built following the MVC architecture to ensure scalability and maintainability.

Features
Real-Time Messaging

Users can send and receive messages instantly using Socket.IO.
Messages are broadcast to all connected clients.
CRUD Operations

Create: Add a new message to the chat.
Read: Retrieve all messages from the database.
Update: Edit an existing message.
Delete: Remove a message from the database.
MongoDB Integration

Messages are stored in a MongoDB database.
Each message includes fields such as user, content, and timestamp.
Frontend and Backend Communication

The frontend interacts with the backend via REST API for CRUD operations and Socket.IO for real-time updates.
Scalable Architecture

Built using MVC architecture for better code organization and maintainability.
Modular design with separate controllers, routes, and models.
Technologies Used
Backend:
Node.js
Express.js
Socket.IO
Mongoose (for MongoDB)
Frontend:
HTML, CSS, JavaScript
Socket.IO Client
Database:
MongoDB (NoSQL)
Project Structure
graphql
Copy code
socketio-mongodb-crud/
│
├── controllers/              # Business logic
│   └── messageController.js  # CRUD operations for messages
│
├── models/                   # Database schemas
│   └── messageModel.js       # MongoDB schema for messages
│
├── public/                   # Frontend
│   ├── index.html            # Chat interface
│   └── chat.js               # Client-side Socket.IO logic
│
├── routes/                   # API routes
│   └── messageRoutes.js      # REST API endpoints for messages
│
├── server.js                 # Main server file
├── .env                      # Environment variables
├── package.json              # Project metadata and dependencies
How to Run
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/socketio-mongodb-crud.git
cd socketio-mongodb-crud
Install Dependencies

bash
Copy code
npm install
Set Up MongoDB

Install and run MongoDB locally or use a cloud service like MongoDB Atlas.

Create a .env file and add your MongoDB connection string:

env
Copy code
MONGO_URI=mongodb://localhost:27017/socketio-chat
PORT=3000
Start the Application

bash
Copy code
node server.js
Access the App

Open your browser and navigate to http://localhost:3000.
API Endpoints
Method	Endpoint	Description
GET	/api/messages	Fetch all messages
PUT	/api/messages/:id	Update a specific message
DELETE	/api/messages/:id	Delete a specific message
Socket.IO Events
Event Name	Direction	Description
send-message	Client to Server	Send a new message
new-message	Server to Client	Broadcast a new message to all clients
disconnect	Both Directions	Notify when a client disconnects
Example
Real-Time Messaging
Open multiple browser tabs and send messages.
Messages are broadcast to all connected tabs in real time.
CRUD Operations
Use REST API tools like Postman or curl to test the API endpoints:
Fetch messages: GET /api/messages
Update a message: PUT /api/messages/:id
Delete a message: DELETE /api/messages/:id
