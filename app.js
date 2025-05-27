// Importo il mio express
import express from "express"

// Importo il mio router
import router from "./router/posts.js";

// Invoco la funzione di express
const app = express()

// Dichiaro la porta
const port = 3000

// Rendo pubblica la cartella delle immagini
app.use(express.static("public"));

// Body parser
app.use(express.json());


// Rotta principale delle api
app.get("/", (req, res) => {
    const resData = {
        data: "Benvenuti nel mio blog"
    }
    res.json(resData)
})

// Imposto il router
app.use("/posts", router)









// Metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto su la porta ${port}`)
})