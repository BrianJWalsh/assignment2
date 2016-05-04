var Xray = require('x-ray');

var futPlayer = function scrapePlayers(playerRating){
    var x = Xray();

        x('http://www.futhead.com/16/players/' + playerRating + '/test', 'body', [{
            player: 'h1 a',
            position: '.playercard-position',
            rating: '.playercard-rating',
            nation: '.playercard-nation img@src',
            club: '.playercard-club img@src',
            playerImage: '.playercard-picture img@src',
            workrates: '.playercard-workrates',
            stats: x('.card-large', {
              pace: '.playercard-attr1',
              shooting: '.playercard-attr2',
              passing: '.playercard-attr3',
              dribbling: '.playercard-attr4',
              defending: '.playercard-attr5',
              physical: '.playercard-attr6'
                })
           
    }])(function(err, title) {
      console.log("json file created for player with rank " + playerRating);
    }).write('results.json')

}


var futClubs = function scrapeClubs(club){
    var x = Xray();

        x('http://www.futhead.com/16/clubs/' + club + '/', '.player-page-listing', [{
            players: x('a',
                {
                    player: '.playercard-name',
                    position: '.playercard-position',
                    rating: '.playercard-rating',
                    nation: '.playercard-nation img@src',
                    club: '.playercard-club img@src',
                    playerImage: '.playercard-picture img@src',
                    workrates: '.playercard-workrates',
                    stats: x('.card-small', {
                      pace: '.playercard-attr1',
                      shooting: '.playercard-attr2',
                      passing: '.playercard-attr3',
                      dribbling: '.playercard-attr4',
                      defending: '.playercard-attr5',
                      physical: '.playercard-attr6'
                        })
                    })
           
           
           
    }])(function(err, title) {
      console.log("json file '" + club + "' created");
    }).write(club + '.json')

}
exports.scrapePlayers = futPlayer;
exports.scrapeClubs = futClubs;

