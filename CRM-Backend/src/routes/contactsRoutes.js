import express from "express";
import {
  getAllContacts,
  getContactsById,
  createNewContact,
  updateContact,
  deleteContact,
} from "../contactsControllers/contactsControllers.js";

const router = express.Router();

router.get("/contacts", getAllContacts);
router.get("/contacts/:id", getContactsById);
router.post("/contacts", createNewContact);
router.patch("/contacts/:id", updateContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;
