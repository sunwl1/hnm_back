const express = require('express');
const router = express.Router();
const { sequelize, User} = require('../models');

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });


router.get('/', async (req, res) => {
    try {
    let _user = await User.findAll();
    console.log(_user);
    res.send({ user : _user});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/add', (req, res) => {
    const _user = User.create({
        nick: 'aa',
        password: 'sasdsaf'
    });
    try {
      res.send();
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;