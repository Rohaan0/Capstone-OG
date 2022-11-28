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


    module.exports = {
        seed: (req, res) => {
            sequelize.query(`
            DROP TABLE IF EXISTS users;


            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(40),
                email VARCHAR(40),
                password VARCHAR(80),
                score int);



            INSERT INTO users (username, email, password, score)
            VALUES (Bob, bob@gmail.com, asdfjklkjl;, 100), (Billy, billy@yahoo.com, ojdsirenbv, 80), (Tim, tim@hotmail.org, ouwrhbvdr, 70), (johnny, johnny@lookup.net, seepmate123, 50), (Ron, Ron@gmail.com, password123, 30);
            
            `).then(() => {
                console.log('DB seeded!')
                res.sendStatus(200)
            }).catch(err => console.log('error seeding DB', err))
        }
    }
    