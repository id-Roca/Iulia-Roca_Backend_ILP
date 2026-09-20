import prisma from "../prisma.js";

//  GET all
export const getAllContacts = async (req, res, next) => {
  try {
    const contact = await prisma.contact.findMany();
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// GET specific
export const getContactsById = async (req, res, next) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!contact) {
      const error = new Error("Contact not found");
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
      const error = new Error("Contact information required");
      error.statusCode = 400;
      throw error;
    }

    const newContact = await prisma.contact.create({
      data: { name, email, companyId: Number(companyId) },
    });

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const { name, email, companyId } = req.body;

    const updatedContact = await prisma.contact.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name,
        email,
        companyId: companyId !== undefined ? Number(companyId) : undefined,
      },
    });

    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.contact.delete({ where: { id } });

    res.status(204).end();
  } catch (err) {
    if (err.code === "P2025") {
      err.statusCode = 404;
      err.message = "Contact not found";
    }

    next(err);
  }
};
