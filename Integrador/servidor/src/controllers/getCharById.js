const axios = require("axios")

// const { default: axios } = require("axios")

// function getCharById(res,id){
//     axios(`http://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         console.log(response.data);
//         debugger
//         const { name,image,species,gender,origin,status} = response.data;
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify({id,name,gender,species,status,origin,image}))
//     })
//     .catch((error)=>{
//         res.writeHead(500,{"Content-Type":"text/plain"})
//         res.end("mallllllll")
//     })
// }

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req,res) =>{
    const { id } = req.Params
    axios.get(URL+id)
        .then((response) => {
            if (response.status === 200){
                const { id, name, gender, species,origin,image,status} = response.data;
                res.json({ id, name, gender, species,origin,image,status})
            } else{
                res.status(404).send("Not found")
            }
        })
        .catch((error) => res.status(500).json({message:error.message}));
}

module.exports= getCharById;