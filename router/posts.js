// Importo i dati
import blogPosts from "../data.js";

// Importo express
import express from "express"

// Invoco il router 
const router = express.Router()


// Index
router.get("/", (req, res) => {
    const result = {
        data: "Questi sono i miei post"
    }
    res.send(result)
})

// Show
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    
    const result = {
        data: `Questo è il post con numero ${postId}`
    }

    res.json(result)
})

// Post
router.post("/", (req, res) => {
    const result = {
        data: "Qui posto nuovi dati"
    }

    res.json(result)
})

// Update
router.post("/:id", (req, res) => {
    const postId = req.params.id 
    const result = {
        data: `Qui modifico il parametro con id ${postId}`
    }

    res.json(result)
})

// Destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id 
    const result = {
        data: `Qui elimino il parametro con id ${postId}`
    }
})

export default router