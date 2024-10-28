/* eslint-disable no-undef */
import { Server } from 'http';
import app from './app';
import config from './config';

async function bootstrap() {
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);
  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();
