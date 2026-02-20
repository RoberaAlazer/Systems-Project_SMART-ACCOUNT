import app from './app';
import { config } from './config';
import { pool, closePool } from './database/connection';

const PORT = config.port;

// Test database connection before starting server
const startServer = async () => {
  try {
    // Test database connection
    const client = await pool.connect();
    console.log('✅ Database connection established');
    client.release();

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`
🚀 Smart Account API Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Environment: ${config.nodeEnv}
🌐 Server:      http://localhost:${PORT}
📚 API Base:    http://localhost:${PORT}/api
❤️  Health:     http://localhost:${PORT}/api/health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    });

    // Graceful shutdown
    const shutdown = async (signal: string) => {
      console.log(`\n${signal} received. Starting graceful shutdown...`);

      server.close(async () => {
        console.log('HTTP server closed');
        await closePool();
        console.log('Database connections closed');
        process.exit(0);
      });

      // Force shutdown after 10 seconds
      setTimeout(() => {
        console.error('Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
