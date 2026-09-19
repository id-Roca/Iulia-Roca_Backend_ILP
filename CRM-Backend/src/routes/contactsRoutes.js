import express from "express";
import { 
    getAllContacts,
    getContactsById,
    createNewContact,
    putContact,
    updateContact,
    deleteContact
 } from "../contactsControllers/contactsControllers.js";



const router = express.Router()

router.get("/contacts", getAllContacts)
router.get("/contacts/:id", getContactsById)
router.post("/contacts", createNewContact)
router.put("/contacts/:id", putContact)
router.patch("/contacts/:id", updateContact)
router.delete("/contacts/:id", deleteContact)



export default router