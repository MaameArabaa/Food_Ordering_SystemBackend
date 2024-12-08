const pool = require("../config/db")

const Login = async (req,res)=>{
    const {fullname, password} = req.body
    console.log(`Fullname: ${fullname} || password: ${password}`)

    const {rows} = await pool.query('SELECT * FROM users WHERE fullname = $1', [fullname])
    
    if(rows.length<1){
        console.log("No information found in our database")
        return res.status(404).send("No user found")
    }

    console.log(`User ${fullname} logged in succesfully`)
    res.status(200).send({message:"User login Successful",user:rows})
}
 
module.exports = { Login }