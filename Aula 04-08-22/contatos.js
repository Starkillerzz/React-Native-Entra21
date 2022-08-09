var express = require ('express')
var router = express.Router()
const pg = require('pg')
const pool = new pg.Pool({connectionString: process.env.DATABASE_URL })


//tenho em casa o arquivo para tentar implementar




module.exports = router;