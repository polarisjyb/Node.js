'use strict';

const hello = (req, res) => {
  res.render('home/index');
};

// function hello(req, res) => {
//   res.render('home/index');
// }

const login = (req, res) => {
  res.render('home/login');
};

// function login(req, res) => {
//   res.render('home/login');
// }

module.exports = {
  hello,
  login,
};
