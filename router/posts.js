//Importo il controller
import { index, show, post, update, destroy } from "../controller/postController.js"
// Importo express
import express from "express"

// Invoco il router 
const router = express.Router()


// Index
router.get("/", index)

// Show
router.get("/:id", show)

// Post
router.post("/", post)

// Update
router.put("/:id", update)

// Destroy
router.delete("/:id", destroy)

export default router