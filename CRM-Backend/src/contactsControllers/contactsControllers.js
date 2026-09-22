import prisma from "../prisma.js";

//  GET all
export const getAllContacts = async (req, res, next) => {
  try {
    const contact = await prisma.contact.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// GET by specific ID
export const getContactsById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      const error = new Error("Contact ID must be a number");
      error.statusCode = 400;
      throw error;
    }

    const contact = await prisma.contact.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!contact) {
      const error = new Error("Contact not found.");
      error.statusCode = 404;
      throw error;
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// POST
export const createNewContact = async (req, res, next) => {
  try {
    const { name, email, companyId } = req.body;

    if (!name || !email || Number.isNaN(Number(companyId))) {
      const error = new Error("Contact information required.");
      error.statusCode = 400;
      throw error;
    }

    const newContact = await prisma.contact.create({
      data: { name, email, companyId: Number(companyId) },
    });

    res.status(201).json(newContact);
  } catch (error) {
    if (error.code === "P2002") {
      error.statusCode = 409;
      error.message = "A contact with this email already exists.";
    }

    if (error.code === "P2003") {
      error.statusCode = 400;
      error.message = "Company does not exist.";
    }
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    // Validate contact ID from URL
    if (Number.isNaN(id)) {
      const error = new Error("Company ID must be a number");
      error.statusCode = 400;
      throw error;
    }

    const { name, email, companyId } = req.body;

    if (name === undefined && email === undefined && companyId === undefined) {
      const error = new Error("At least one field is required for update");
      error.statusCode = 400;
      throw error;
    }

    // Validate company ID if one was provided
    if (companyId !== undefined && Number.isNaN(Number(companyId))) {
      const error = new Error("Company ID must be a number");
      error.statusCode = 400;
      throw error;
    }

    const updatedContact = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        company:
          companyId !== undefined
            ? {
                connect: { id: Number(companyId) },
              }
            : undefined,
      },
    });

    res.json(updatedContact);
  } catch (error) {
    if (error.code === "P2003") {
      error.statusCode = 400;
      error.message = "Company does not exist.";
    }

    if (error.code === "P2025") {
      error.statusCode = 404;
      error.message = "No record was found for an update.";
    }

    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      const error = new Error("Contact ID must be a number");
      error.statusCode = 400;
      throw error;
    }

    await prisma.contact.delete({ where: { id } });

    res.status(204).end();
  } catch (err) {
    if (err.code === "P2025") {
      err.statusCode = 404;
      err.message = "Contact not found.";
    }

    next(err);
  }
};
