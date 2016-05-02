var Xray = require('x-ray');
var x = Xray();
var i = 4;

	x('http://www.futhead.com/16/players/' + i, 'body', [{
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
  console.log(title);  
  console.log("json file created");
}).write('results.json')


