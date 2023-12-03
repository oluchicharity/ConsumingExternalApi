const express= require("express")
const {createPoem, externalApI, readPoem, aPoem, updatePoem, deletePoem}= require('../controller/poemCont')

const router = express.Router()

router.get("/getApi",externalApI)

router.post('/create', createPoem)
router.get("/read", readPoem)

router.get("/getone/:id", aPoem)

router.put("/update/:id", updatePoem)

router.delete("/delete/:id",deletePoem)


module.exports= router



