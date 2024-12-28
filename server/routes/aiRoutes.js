const express = require("express")
const router = express.Router()
const aiController = require("../controllers/aiController")
const aiSolution = require("../model/aiSolution")


router.get("/",aiController.getAllAiSolution)
router.post("/",aiController.addAiSolution)
router.delete("/:id",aiController.deleteById)
module.exports=router