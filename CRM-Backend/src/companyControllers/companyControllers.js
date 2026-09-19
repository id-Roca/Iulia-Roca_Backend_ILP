let companies = [
  { id: 1, name: "Acme Corp", industry: "Technology" },
  { id: 2, name: "Stark Industries", industry: "Defense" },
];

let companyNextId = 3;

const findCompanyById = (id) => companies.find((c) => c.id === Number(id));

export const getAllCompanies = (req, res) => {
  res.json(companies);
};

export const getCompaniesById = (req, res, next) => {
  try {
    const company = findCompanyById(req.params.id);

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

export const createNewCompany = (req, res, next) => {
  try {
    const { name, industry } = req.body;

    if (!name || !industry) {
      const error = new Error("Name and industry are required.");
      error.statusCode = 400;
      throw error;
    }

    const newCompany = {
      id: companyNextId++,
      name,
      industry,
    };

    companies.push(newCompany);

    res.status(201).json(newCompany);
  } catch (error) {
    next(error);
  }
};

export const putCompany = (req, res, next) => {
  try {
    const company = findCompanyById(req.params.id);

    if (!company) {
      const error = new Error("Company not found.");
      error.statusCode = 404;
      throw error;
    }

    const { name, industry } = req.body;

    if (!name || !industry) {
      const error = new Error("Name and industry are required.");
      error.statusCode = 400;
      throw error;
    }

    company.name = name;
    company.industry = industry;

    res.json(company);
  } catch (error) {
    next(error);
  }
};

export const updateCompany = (req, res, next) => {
  try {
    const company = findCompanyById(req.params.id);

    if (!company) {
      const error = new Error("Company not found");
      error.statusCode = 404;
      throw error;
    }

    const { name, industry } = req.body;

    if (name !== undefined) {
      company.name = name;
    }

    if (industry !== undefined) {
      company.industry = industry;
    }

    res.json(company);
  } catch (error) {
    next(error);
  }
};

export const deleteCompany = (req, res, next) => {
  try {
    const index = companies.findIndex(
      (company) => company.id === Number(req.params.id),
    );

    if (index === -1) {
      const error = new Error(`No company with ID ${req.params.id} found.`);
      error.statusCode = 404;
      throw error;
    }

    companies.splice(index, 1);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
