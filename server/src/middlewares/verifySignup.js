const Role = require("../models/Role");

export const checkRolesExisted = async (req, res, next) => {
  const Roles = await Role.find();

  console.log(Roles);

  /*if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!Roles.includes(req.body.roles[i])) {
                res.status(400).json({
                    message: "The Role what you want register doesn't exits!"
                });
            }
        }
    }*/

  next();
};
