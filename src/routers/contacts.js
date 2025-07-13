import { Router } from "express";


import { getContactsController, getStudentByIdController } from '../controllers/contacts.js'

const router = Router();

 router.get('/contacts', getContactsController);

  router.get('/contacts/:contactId', getStudentByIdController);

export default router;