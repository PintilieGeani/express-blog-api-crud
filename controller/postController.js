import blogPosts from "../data.js";

// Index
const index = (req, res) => {
    let postsFiltrati = blogPosts
    const filtroTag = req.query.tag;

    if(filtroTag == undefined){
        return res.send({ data : blogPosts});
    }


    postsFiltrati = postsFiltrati.filter((curPos) => curPos.tag.includes(filtroTag));
    
    if (postsFiltrati.length == 0) {
        
            res.status(404)
            res.send({
                error: "Not Found",
                message: "Nessuna correlazione trovata"
            })
        }
    
    res.json({
        data: postsFiltrati
    })
}


// Show
const show = (req, res) => {
    const postId = req.params.id;
    let filtroId = blogPosts.find((curPost) => curPost.id === parseInt(postId))
    if (filtroId === undefined) {
        res.status(404)
        res.send({
            error: "Not Found",
            message: "Nessuna correlazione trovata"
        })
    }

    const result = {
        data: filtroId
    }

    res.json(result)
}


// Post
const post = (req, res) => {
    const result = {
        data: "Qui posto nuovi dati"
    }

    res.json(result)
}


// Update
const update = (req, res) => {
    const postId = req.params.id
    const result = {
        data: `Qui modifico il parametro con id ${postId}`
    }

    res.json(result)
}



// Destroy
const destroy = (req, res) => {
    const postId = req.params.id
    const index = blogPosts.findIndex((curPost) => curPost.id === parseInt(postId))
    if(index === -1){
        res.status(404)
        return res.send({
            data: "Post non trovato"
        })
    }

    blogPosts.splice(index, 1)
    res.sendStatus(204)
}

export {index, show, post, update, destroy}



