import express from "express";
import {
  getAllCompanies,
  getCompaniesById,
  createNewCompany,
  updateCompany,
  deleteCompany,
} from "../companyControllers/companyControllers.js";

const router = express.Router();

router.get("/companies", getAllCompanies);
router.get("/companies/:id", getCompaniesById);
router.post("/companies", createNewCompany);
router.patch("/companies/:id", updateCompany);
router.put("/companies/:id", updateCompany);
router.delete("/companies/:id", deleteCompany);

export default router;
