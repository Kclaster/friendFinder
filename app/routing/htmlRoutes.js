var path = require('path');

var router = function(app) {
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};

module.exports = router;
