//SQL Query문을 작성하지 않고 객체를 통해 
//데이터베이스를 간접적으로 데이터를 조작할 수 있게
const Sequelize = require('sequelize');
//config.json 객체의 키값
const env = process.env.NODE_ENV || 'development';
//config.json 객체의 키값에 맞는 객체 가져오기
const config = require('../config/config')[env];
//user.js 가져오기
const User = require('./user');

//db 객체 형태로 선언
const db = {};

//Sequelize 안에 4개의 매개변수 config.json에서 가져온 객체
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;