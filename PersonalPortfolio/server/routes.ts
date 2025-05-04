import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes can be added here with /api prefix
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Contact form submission endpoint (would typically store in a database)
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Please provide name, email, and message' 
      });
    }
    
    // In a real app, you would store this in a database
    // For now, we'll just return a success response
    res.status(200).json({ 
      message: 'Message received successfully' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
