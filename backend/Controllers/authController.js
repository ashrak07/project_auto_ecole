const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { generateMatricule } = require("../Utils/counter");

const createUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, role, dateOfBirth, address } = req.body;

    if (!["student", "teacher", "manager"].includes(role)) {
      return res.status(400).json({ msg: "Rôle invalide" });
    }

    // Vérifier si email déjà utilisé (facultatif si email est obligatoire)
    if (email) {
      const existingEmail = await Users.findOne({ email });
      if (existingEmail)
        return res.status(400).json({ msg: "Email déjà utilisé" });
    }

    // Générer matricule
    const matricule = await generateMatricule(role);

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer utilisateur
    const user = new Users({
      name,
      email,
      password: hashedPassword,
      role,
      matricule,
      dateOfBirth,
      address,
    });

    await user.save();

    res.status(201).json({
      msg: "Utilisateur créé",
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        matricule: user.matricule,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        address: user.address,
      },
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

const User = require("../Models/userModel");

// Récupérer les utilisateurs par type de permis
const getUsersByPermis = async (req, res) => {
  try {
    const { type } = req.params;

    const users = await User.find({ permis: type });

    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun utilisateur trouvé avec ce permis." });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des utilisateurs par permis :",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  getUsersByPermis,
};

module.exports = {
  createUser,
  login,
  deleteUser,
};
