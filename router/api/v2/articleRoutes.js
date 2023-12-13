const express = require("express");
const router = express.Router();
const articles = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

//article index
router.get("/", (req, res) => {
  res.json({ articles });
});

//article show
router.get("/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  const article = articles.find((article) => article.id == articleId);
  res.json({ article });
});

router.post("/", (req, res) => {
  res.json({method: 'post'})
})
module.exports = router;
