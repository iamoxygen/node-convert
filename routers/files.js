const { convertor } = require("../controller/files")

const router = require("express").Router()

const multer = require("../config/multer")

router.post("/converter", multer.single("file"), convertor)

module.exports = router