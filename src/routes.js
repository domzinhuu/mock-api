const router = require("express").Router();
const authController = require("./controllers/auth");
const utilsController = require("./controllers/utils");
const transactionsController = require("./controllers/transactions");
const atmController = require("./controllers/atm");

router.use("/auth", authController);
router.use("/utils", utilsController);
router.use("/transactions", transactionsController);
router.use("/atm", atmController);

module.exports = router;
