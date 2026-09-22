import prisma from "../prisma.js";

export const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await prisma.company.findMany();
    res.json(companies);
  } catch (error) {
    next(error);
  }
};

export const getCompaniesById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      const error = new Error("Company ID must be a number");
      error.statusCode = 400;
      throw error;
    }
    const company = await prisma.company.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!company) {
      const error = new Error("Company not found.");
      error.statusCode = 404;
      throw error;
    }
    res.json(company);
  } catch (error) {
    next(error);
  }
};

export const createNewCompany = async (req, res, next) => {
  try {
    const { name, industry } = req.body;

    if (!name || !industry) {
      const error = new Error("Name and industry are required.");
      error.statusCode = 400;
      throw error;
    }

    const newCompany = await prisma.company.create({
      data: {
        name,
        industry,
      },
    });

    res.status(201).json(newCompany);
  } catch (error) {
    next(error);
  }
};

export const updateCompany = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    // Validate company ID from URL
    if (Number.isNaN(id)) {
      const error = new Error("Company ID must be a number");
      error.statusCode = 400;
      throw error;
    }

    const { name, industry } = req.body;

    // PATCH must contain at least one field
    if (name === undefined && industry === undefined) {
      const error = new Error("At least one field is required for update");
      error.statusCode = 400;
      throw error;
    }

    const updatedCompany = await prisma.company.update({
      where: {
        id,
      },
      data: {
        name,
        industry,
      },
    });

    res.json(updatedCompany);
  } catch (error) {
    if (error.code === "P2025") {
      error.statusCode = 404;
      error.message = "No record was found for an update.";
    }

    next(error);
  }
};

export const deleteCompany = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      const error = new Error("Company ID must be a number");
      error.statusCode = 400;
      throw error;
    }
    
    await prisma.company.delete({ where: { id } });

    res.status(204).end();
  } catch (err) {
    if (err.code === "P2025") {
      err.statusCode = 404;
      err.message = "Company not found";
    }

    if (err.code === "P2003") {
      err.statusCode = 409;
      err.message = "Cannot delete a company that still has contacts";
    }

    next(err);
  }
};
