"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vote = exports.deletePollById = exports.updatePollById = exports.getPollById = exports.getPolls = exports.createPoll = exports.usersPolls = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require("../models/User");

var Poll = require("../models/Poll"); // User Polls


var usersPolls = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, userPolls;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.userId;
            _context.next = 4;
            return Poll.find({
              user: id
            }).populate("polls");

          case 4:
            userPolls = _context.sent;
            res.status(200).json(userPolls);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function usersPolls(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Create a Poll


exports.usersPolls = usersPolls;

var createPoll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, question, options, user, newPoll, pollSaved;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log(req.body);
            _req$body = req.body, question = _req$body.question, options = _req$body.options;
            user = req.userId;
            newPoll = new Poll({
              question: question,
              user: user,
              options: options.map(function (option) {
                return {
                  option: option,
                  votes: 0
                };
              })
            });
            _context2.next = 7;
            return newPoll.save();

          case 7:
            pollSaved = _context2.sent;
            res.status(201).json(pollSaved);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function createPoll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Get all Polls


exports.createPoll = createPoll;

var getPolls = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var Polls;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Poll.find().populate("user", ["username", "id"]);

          case 3:
            Polls = _context3.sent;
            res.status(200).json(Polls);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getPolls(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Get a Poll


exports.getPolls = getPolls;

var getPollById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var pollId, poll;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            pollId = req.params.pollId;
            _context4.next = 4;
            return Poll.findById(pollId).populate("user", ["username", "id"]);

          case 4:
            poll = _context4.sent;
            res.status(200).json(poll);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function getPollById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Update a Poll


exports.getPollById = getPollById;

var updatePollById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var updatedPoll;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Poll.findByIdAndUpdate(req.params.pollId, req.body, {
              "new": true
            });

          case 3:
            updatedPoll = _context5.sent;
            res.status(200).json(updatedPoll);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(400).json({
              message: "Something went wrong"
            }));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function updatePollById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Delete a Poll


exports.updatePollById = updatePollById;

var deletePollById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var pollId, deletePoll;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            pollId = req.params.pollId;
            _context6.next = 4;
            return Poll.findByIdAndDelete(pollId);

          case 4:
            deletePoll = _context6.sent;
            res.status(202).json({
              message: "Poll deleted!"
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function deletePollById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deletePollById = deletePollById;

var vote = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var pollId, userId, answer, poll, _vote;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            pollId = req.params.pollId;
            userId = req.userId;
            answer = req.body.answer;

            if (!answer) {
              _context7.next = 22;
              break;
            }

            _context7.next = 7;
            return Poll.findById(pollId);

          case 7:
            poll = _context7.sent;

            if (poll) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              message: "No poll found!"
            }));

          case 10:
            // Check vote's option
            _vote = poll.options.map(function (option) {
              if (option.option === answer) {
                return {
                  option: option.option,
                  _id: option._id,
                  votes: option.votes + 1
                };
              } else {
                return option;
              }
            }); // Check User if already voted

            if (!(poll.voted.filter(function (user) {
              return user.toString() === userId;
            }).length <= 0)) {
              _context7.next = 19;
              break;
            }

            poll.voted.push(userId);
            poll.options = _vote;
            _context7.next = 16;
            return poll.save();

          case 16:
            res.status(202).json(poll);
            _context7.next = 20;
            break;

          case 19:
            res.status(400).json({
              message: "Already voted!"
            });

          case 20:
            _context7.next = 23;
            break;

          case 22:
            return _context7.abrupt("return", res.status(400).json({
              message: "No answer provided!"
            }));

          case 23:
            _context7.next = 28;
            break;

          case 25:
            _context7.prev = 25;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", res.status(400).json({
              message: "Something went wrong!"
            }));

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 25]]);
  }));

  return function vote(_x13, _x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

exports.vote = vote;