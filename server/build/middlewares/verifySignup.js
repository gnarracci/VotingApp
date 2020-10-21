"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Role = require("../models/Role");

var checkRolesExisted = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var Roles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Role.find();

          case 2:
            Roles = _context.sent;
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

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkRolesExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkRolesExisted = checkRolesExisted;