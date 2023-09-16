
const users = require("../utils/users")
function login(req,res){
    const {email, password} = req.query 
    // const user = users.find((us)=> {
    //     us.email===email && user.password === password
    // })
    // some es un callback encargado de preguntar aquello que queremos dentro de un array
    const user = users.some(user => user.email === email && user.password === password)
    user ? res.json({access:true}) : res.json({access:false})
}   

module.exports = login;