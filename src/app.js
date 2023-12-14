import express  from "express";


const app = express();
const PORT =8080;

app.get ("/", (req, res) => {
    res.send("hola xdd espress");
});

app.get ("/saludo", (req, res) => {
    res.send("Hola como estan esto si funciona :V");
});

app.get ("/productos", (req, res) => {
    const productos =[{
        id: 1,
        nombre: "Levi Carter",
        talle: "42",
        color: "Azul",
        tipo : "Pantalon",
    },
    {
        id: 2,
        nombre: "Lego T-shirt",
        talle: "xl",
        color:"negra",
        tipo:"Remera",

    },
    {
        id: 3,
        nombre: "Carthat Jacket",
        talle: "L",
        color:"Negra",
        tipo:"Campera",

    },
    {
        id: 4,
        nombre: "Serotonina Hoddie",
        talle: "Xl",
        color:"Negra",
        tipo:"Hoddie",

    },




];
    res.json(productos)
});

app.listen(PORT, () =>{
    console.log("si funnciono :V");
});
