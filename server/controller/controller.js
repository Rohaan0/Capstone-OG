const Sequelize = require('sequelize')
require('dotenv').config

const { CONNECTION_STRING } = process.env


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
      }
    })



let userId = 5


module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`
            SELECT * FROM users ORDER BY score DESC;
        `)
        .then((dbRes) => {
            res.send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },
    updateUserInfo: (req, res) => {
        let {
            userName,
            email,
            score
        } = req.body

        sequelize.query(`
            UPDATE users
            SET 
                user_name = '${userName}',
                email = '${email}',
                score = '${score}'
            WHERE 
                id = '${userId}';
        `)
        .then((dbRes) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },
}