const express = require('express');
const router = express.Router()
const webIndex = require('../../controller/web/index');

router.get("/", webIndex.index);
router.get("/error", webIndex.index);
router.get("/project/:id", webIndex.projectOne);
router.get("/news/:id", webIndex.newsOne); 
router.get("/servic/:id", webIndex.servicesOne);
router.get("/team/:id", webIndex.teamOne);

module.exports = router;