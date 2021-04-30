const {Router} = require("express")
const auth = require('../middleware/auth.middleware')
const Grass = require("../models/Grass.js")
const router = Router()

router.get("/:id", async (req, res) => {
    try{
        const link = await Grass.findById(req.params.id)
        res.json(link)
    } catch (e) {
        res.status(501).json({message: "Ошибка"})
    }
})

router.get("/", auth, async (req,res) => {
    try{
        const links = await Grass.find({owner: req.user.userID});
        res.json(links);
    } catch (e) {
        res.status(501).json({message: "Ошибка"})
    }
})

module.exports = router
