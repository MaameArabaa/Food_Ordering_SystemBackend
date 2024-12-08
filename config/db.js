const { response } = require("express")
const {Pool} = require("pg")
const connectionString = 'postgresql://araba:dpvQrvttlSfWbSTaJxNIdf8i4bixsqMu@dpg-cta4qsqj1k6c738hkbpg-a.oregon-postgres.render.com/ordering_system'

const pool = new Pool({
    connectionString: connectionString,
    ssl:{
        rejectUnauthorized: false // Add this for SSL encryption

    }
},
)

// const pool = new Pool({
//     user:"araba",
//     host:"dpg-cta4qsqj1k6c738hkbpg-a.oregon-postgres.render.com",
//     database:"ordering_system",
//     password:"dpvQrvttlSfWbSTaJxNIdf8i4bixsqMu",
//     port:5432
// })

pool.connect().then(response=>console.log("Connected to Database")).catch(err=>console.log("Error",err))

module.exports = pool