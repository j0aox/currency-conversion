const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
});

app.get("/moedas", async(req, res) => {
    try {
        const data = await api.get();

        return res.send({ dados: data.data });
    } catch(error) {
        res.send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Servidor Funcionando!");
});