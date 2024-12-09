const {Router} = require("express")
const { indexController,
    addController,
    reduceController,
    addNewController,
    submitController
} = require("../controller/index.js")

const router = Router()

router.route('/').get(indexController)
router.route('/add').post(addController)
router.route('/reduce').post(reduceController)
router.route('/addNew').post(addNewController)
router.route('/submit').post(submitController)


module.exports= {router}