class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('DETAIL!!!');
    }
}
module.exports = new NewsController();
// const NewsController = require('./NewsController');
