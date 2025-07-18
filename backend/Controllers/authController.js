const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { generateMatricule } = require("../Utils/counter");

const createUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, phone, role, dateOfBirth, address, permis } =
      req.body;

    if (!["student", "teacher", "manager"].includes(role)) {
      return res.status(400).json({ msg: "Rôle invalide" });
    }
    console.log("-- invoking createUser --");
    console.log("req:", req);
    // // Vérifier si email déjà utilisé (facultatif si email est obligatoire)
    // if (email) {
    //   const existingEmail = await Users.findOne({ email });
    //   if (existingEmail)
    //     return res.status(400).json({ msg: "Email déjà utilisé" });
    // }

    // Générer matricule
    const matricule = await generateMatricule(role);

    // Hasher le mot de passe
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Créer utilisateur
    const user = new Users({
      firstName,
      lastName,
      phone,
      // email,
      // password: hashedPassword,
      role,
      matricule,
      dateOfBirth,
      address,
      permis,
    });

    await user.save();
    console.log("user ===> ", user);

    res.status(201).json({
      msg: "Utilisateur créé",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
});

const login = async (req, res) => {
  try {
    const { matricule, password } = req.body;
    console.log("-- invoking login --");

    if (!matricule || !password) {
      return res.status(400).json({ msg: "Matricule et mot de passe requis" });
    }

    // Trouver l'utilisateur par matricule
    const user = await Users.findOne({ matricule });
    if (!user)
      return res
        .status(400)
        .json({ msg: "Matricule ou mot de passe incorrect" });

    // Comparer mot de passe avec hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ msg: "Matricule ou mot de passe incorrect" });

    // Générer un token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    console.log("accesToken:", token);
    res.json({
      accesToken: token,
      user: {
        id: user._id,
        name: user.name,
        matricule: user.matricule,
        role: user.role,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        address: user.address,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Vérifier si l'utilisateur existe
    const user = await Users.findById(userId);
    if (!user) return res.status(404).json({ msg: "Utilisateur non trouvé" });

    // Supprimer l'utilisateur
    await Users.findByIdAndDelete(userId);

    res.json({ msg: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur" });
  }
};

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const user = await Users.find().lean();
    if (user) {
      console.log("user =>", user);
      res.status(200).json({
        data: user,
        count: user.length,
      });
    }
  } catch (error) {
    console.error(error);
  }
});

const getUsersByPermis = asyncHandler(async (req, res) => {
  try {
    const { type } = req.params;

    const users = await Users.find({ permis: type });
    if (users) {
      console.log("users =>", users);
    }

    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun utilisateur trouvé avec ce permis." });
    }

    res.status(200).json({ data: users, count: users.length });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des utilisateurs par permis :",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
});

const getTeacherUser = asyncHandler(async (req, res) => {
  try {
    const users = await Users.find({ role: "teacher" }).lean();
    console.log("users", users);
    const userMap = users.map((user) => ({
      name: user.firstName + " " + user.lastName,
      id: user._id,
    }));
    console.log("userMap =>", userMap);
    res.status(200).json({ data: userMap, count: users.length });
  } catch (error) {
    console.error(error);
  }
});

const getStudentUser = asyncHandler(async (req, res) => {
  try {
    const users = await Users.find({ role: "student" }).lean();
    console.log("users", users);
    res.status(200).json({ data: users, count: users.length });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createUser,
  login,
  deleteUser,
  getAllUsers,
  getUsersByPermis,
  getTeacherUser,
  getStudentUser,
};
