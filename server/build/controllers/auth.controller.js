"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require("../models/User");

var jwt = require("jsonwebtoken");

var SECRET = process.env.SECRET;

var Role = require("../models/Role"); // Signup User


var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fullname, username, email, password, roles, newUser, foundRoles, role, saveUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, fullname = _req$body.fullname, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = User;
            _context.t1 = fullname;
            _context.t2 = username;
            _context.t3 = email;
            _context.next = 7;
            return User.encryptPassword(password);

          case 7:
            _context.t4 = _context.sent;
            _context.t5 = {
              fullname: _context.t1,
              username: _context.t2,
              email: _context.t3,
              password: _context.t4
            };
            newUser = new _context.t0(_context.t5);

            if (!req.body.roles) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return Role.find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return Role.findOne({
              name: "user"
            });

          case 19:
            role = _context.sent;
            newUser.roles = [role._id];

          case 21:
            _context.next = 23;
            return newUser.save();

          case 23:
            saveUser = _context.sent;
            console.log(saveUser); // JWT Token

            token = jwt.sign({
              id: saveUser._id
            }, SECRET, {
              expiresIn: 43200 // Token expire in 12 hours

            });
            res.json({
              token: token
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Signin User


exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, comparePassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "User not Found!"
            }));

          case 5:
            _context2.next = 7;
            return User.matchPassword(req.body.password, userFound.password);

          case 7:
            comparePassword = _context2.sent;

            if (comparePassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Invalid Password!"
            }));

          case 10:
            // Token Emitting
            token = jwt.sign({
              id: userFound._id
            }, SECRET, {
              expiresIn: 43200 // 12 Hours expire Token

            });
            res.json({
              token: token
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;