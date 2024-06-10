const Article = require('../models/articles');
 const index = (req, res) => {
    res.render("../views/articles", { articles: Article.getArticles() });
}
module.exports = {
    index
};