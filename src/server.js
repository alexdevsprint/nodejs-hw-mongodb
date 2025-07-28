import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';

// import contactsRouter from './routers/contacts.js';
import router from './routers/index.js';
// import { getAllContacts, getContactsById } from './services/contacts.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

export const setupServer = () => {
  const app = express();

  // const PORT = 3000;
  const PORT = getEnvVar('PORT');
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  // app.get('/contacts', async (req, res) => {
  //   const contacts = await getAllContacts();
  //   res.status(200).json({
  //     status: 200,
  //     message: 'Successfully found contacts!',
  //     data: contacts,
  //   });
  // });

  // app.get('/contacts/:contactId', async (req, res) => {
  //   const { contactId } = req.params;
  //   const contact = await getContactsById(contactId);

  //   // Відповідь, якщо контакт не знайдено
  //   if (!contact) {
  //     res.status(404).json({
  //       message: 'Contact not found',
  //     });
  //     return;
  //   }

  //   // Відповідь, якщо контакт знайдено
  //   res.status(200).json({
  //     status: 200,
  //     message: `Successfully found contact with id ${contactId}!`,
  //     data: contact,
  //   });
  // });

  // app.use(contactsRouter);
  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  // app.use((req, res) => {
  //   res.status(404).json({
  //     message: 'Route not found',
  //   });
  // });

  // app.use((err, req, res, next) => {
  //   res.status(500).json({
  //     message: 'Something went wrong',
  //     error: err.message,
  //   });
  // });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
