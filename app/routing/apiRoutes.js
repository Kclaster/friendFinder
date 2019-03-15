var path = require('path');
var friends = require('../data/friends');

var routing = function(app) {
  app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    let clientData = req.body;
    let scores = clientData.score;
    if (scores) {
      let bestSum = 100;
      let bestFriend = '';
      for (let friend of friends) {
        let currentSum = 0;
        friend.scores.forEach((cur, index) => {
          value = cur - scores[index];
          value = Math.abs(value);
          currentSum += value;
        });
        if (currentSum < bestSum) {
          bestSum = currentSum;
          bestFriend = friend;
        }
      }
      res.json(bestFriend);
    }
  });
};

module.exports = routing;
