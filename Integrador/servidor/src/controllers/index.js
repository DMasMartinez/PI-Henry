const getCharById = require("./getCharById");
const login = require("./login");
const {postFav, deleteFav} = require("./handlefavorites")

module.exports = {
    login,
    postFav,
    deleteFav,
    getCharById
}