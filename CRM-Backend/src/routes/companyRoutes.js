import express from "express";
import {
  createNewCompany,
  deleteCompany,
  getAllCompanies,
  getCompaniesById,
  putCompany,
  updateCompany,
} from "../companyControllers/companyControllers.js";

const router = express.Router();

router.get("/companies", getAllCompanies);
router.get("/companies/:id", getCompaniesById);
router.post("/companies", createNewCompany);
router.put("/companies/:id", putCompany);
router.patch("/companies/:id", updateCompany);
router.delete("/companies/:id", deleteCompany);

export default router;
