const roleMiddleware = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ msg: "Non authentifié" });

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Accès refusé: rôle non autorisé" });
    }

    next();
  };
};

module.exports = { roleMiddleware };
