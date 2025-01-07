import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import messageRouter from './routes/messageRoutes.js';
import { createMessage } from './controllers/messageController.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', messageRouter);
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.log('Error connecting to MongoDb', error);
    });
io.on('connection', (socket) => {
    console.log(`A client connected:`, socket.id);
    socket.on('send-message', async (data) => {
        if (typeof data === 'String') {
            data = JSON.parse(data)
        }
        if (!data.user || !data.content) {
            console.error("Invalid data received:", data);
            socket.emit('error-message', { message: "User and content are required." });
            return;
        }
        try {
            const newMessage = await createMessage(data);
            io.emit('new-message', newMessage); // Broadcast new message
        } catch (error) {
            console.error("Error saving message:", error);
            socket.emit('error-message', { message: "Failed to save message." });
        }
    });
    socket.on('disconnect', () => {
        console.log(`A client disconnected`, socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})