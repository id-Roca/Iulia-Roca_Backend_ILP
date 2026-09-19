let contacts = [
  { id: 1, name: "Anna", email: "anna@acme.com", companyId: 1 },
  { id: 2, name: "Bob", email: "bob@acme.com", companyId: 1 },
  { id: 3, name: "Sarah", email: "sarah@stark.com", companyId: 2 },
  { id: 4, name: "John", email: "john@acme.com", companyId: 1 },
  { id: 5, name: "Ken", email: "ken@stark.com", companyId: 2 },
];

let contactNextId = 6;

const findContactsById = (id) => contacts.find((c) => c.id === Number(id));

export const getAllContacts = (req, res) => {
  res.json(contacts);
};

export const getContactsById = (req, res, next) => {
  try {
    const contact = findContactsById(req.params.id);

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

export const createNewContact = (req, res, next) => {
  try {
    const { name, email, companyId } = req.body;

    if (!name || !email || Number.isNaN(companyId)) {
      const error = new Error("Contact information required");
      error.statusCode = 400;
      throw error;
    }

    const newContact = {
      id: contactNextId++,
      name,
      email,
      companyId: Number(companyId),
    };

    contacts.push(newContact);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

export const putContact = (req, res, next) => {
  try {
    const contact = findContactsById(req.params.id);
    if (!contact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }

    const { name, email } = req.body;

    if (!name || !email) {
      const error = new Error("Name and email are required");
      error.statusCode = 400;
      throw error;
    }

    contact.name = name;
    contact.email = email;

    res.json(contact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = (req, res, next) => {
  try {
    const contact = findContactsById(req.params.id);

    if (!contact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }
    const { name, email } = req.body;

    if (name !== undefined) {
      contact.name = name;
    }

    if (email !== undefined) {
      contact.email = email;
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = (req, res, next) => {
  try {
    const index = contacts.findIndex(
      (contact) => contact.id === Number(req.params.id),
    );
    if (index === -1) {
      const error = new Error(`No contact with ID ${req.params.id} found`);
      error.statusCode = 404;
      throw error;
    }
    contacts.splice(index, 1);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
