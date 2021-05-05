const router = require("express").Router();
const authController = require("./controllers/auth");
const utilsController = require("./controllers/utils");
const transactionsController = require("./controllers/transactions");

router.use("/auth", authController);
router.use("/utils", utilsController);
router.use("/transactions", transactionsController);

module.exports = router;
