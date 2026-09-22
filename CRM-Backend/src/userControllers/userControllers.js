import prisma from "../prisma.js";
import bcrypt from "bcrypt";

// GET all users

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// GET users by ID

export const getUsersById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      const error = new Error("User ID must be a number.");
      error.statusCode = 400;
      throw error;
    }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// POST create user
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      const error = new Error("Name, email, password and role are required");
      error.statusCode = 400;
      throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === "P2002") {
      error.statusCode = 409;
      error.message = "A user with this email already exists";
    }
    next(error);
  }
};

// PATCH - update user

export const updateUser = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      const error = new Error("User ID must be a number.");
      error.statusCode = 400;
      throw error;
    }

    const { name, email, password, role } = req.body;
    if (
      name === undefined &&
      email === undefined &&
      password === undefined &&
      role === undefined
    ) {
      const error = new Error("At least one field is required.");
      error.statusCode = 400;
      throw error;
    }

    const data = {
      name,
      email,
      role,
    };

    if (password !== undefined) {
      data.passwordHash = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    if (error.code === "P2025") {
      error.statusCode = 404;
      error.message = "User not found";
    }
    next(error);
  }
};

// DELETE user

export const deleteUser = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      const error = new Error("User ID must be a number.");
      error.statusCode = 400;
      throw error;
    }

    await prisma.user.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    if (error.code === "P2025") {
      error.statusCode = 404;
      error.message = "User not found.";
    }
    next(error);
  }
};
