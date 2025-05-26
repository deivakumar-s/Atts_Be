const express = require("express");
const router = express.Router();
const { createPurity, getAllPurities, updatePurity, deletePurity ,getPuritiesByMetal} = require("../controller/purity");

router.post('/purities', createPurity);
router.get('/getallpurities', getAllPurities);
router.get('/getpurityname', getPuritiesByMetal);
router.put('/updatepurities/:id', updatePurity);
router.delete('/deletepurities/:id', deletePurity);

module.exports = router;
