// Importo il mio express
import express from "express"

// Invoco la funzione di express
const app = express()

// Dichiaro la porta
const port = 3000

// Rendo pubblica la cartella delle immagini
app.use(express.static("public"));

// Rotta principale delle api
app.get("/", (req, res) => {
    const resData = {
        data: "Benvenuti nel mio blog"
    }
    res.json(resData)
})











// Metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto su la porta ${port}`)
})