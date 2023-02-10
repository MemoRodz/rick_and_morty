const axios = require("axios");
const fav = [];

const getFav = function (req, res) {
    res.status(200).end(JSON.stringify(fav));
};

const postFav = function (req, res) {
    fav.push(req.body);
    //console.log('post Favoritos:', fav);
    res.status(200).end(JSON.stringify(req.body));
};

const deleteFavId = function (req, res) {
    const { id } = req.params;
    const character = fav.find(ch => ch.id === Number(id))
    if (character) {
        fav = fav.filter(element => element.id !== Number(id))
        //console.log('Delete Favoritos: ', fav);
        res.status(200).end(JSON.stringify(character));
    } else {
        res.status(400).end('This character doesn\'t exist in Favorites');
    }
};

const getCharacterId = function (req, res) {
    const { id } = req.params;
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((data) => data.data)
        .then((data) => {
            const character = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id,
            };
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(character));
        })
        .catch((error) => {
            res.writeHead(500, { "Content-type": "text/plain" });
            res.end("Character not found.");
        });
};

const getDetailId = function (req, res) {
    const { detailId } = req.params;
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((data) => data.data)
        .then((data) => {
            const character = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                status: data.status,
                origin: data.origin,
                id: data.id,
            };
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(character));
        })
        .catch((error) => {
            res.writeHead(500, { "Content-type": "text/plain" });
            res.end("Character not found.");
        });
};

module.exports = {
    getCharacterId,
    getDetailId,
    getFav,
    postFav,
    deleteFavId,
};