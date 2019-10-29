const express = require('express');
const Post = require('../MODELS/post');
const router = express.Router();




router.get('/', async (req, res) => {
    try {
        // const posts = await Post.find();
        // res.json(posts);
        res.send("un post a été envoyé");
    } catch (err) {
        res.json({
            message: err
        });
    }


});



router.get('/MOON', (req, res) => {
    res.send("POSTS MOON")
});




router.post('/', async (req, res) => {

    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    // post.save()
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.json({
    //             message: err
    //         })
    //     })

    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }

});

module.exports = router;