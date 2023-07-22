var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var test_cards = []

var fall_lines = ["The waning moon explodes in soft light",
"An empty field, bathed in silence",
"Skulls rolling down a hill, a broken bone in an overgrown field",
"Leaves limping lightly down gust-gilded air",
"Grass smooth and tawny, birthing into brown",
"Hoarfrost coating the lips like a frail tattoo",
"The emancipation of light into azure dawns",
"Moths mulling about in a flurry of flutter, a writhing dusty-winged typhoon",
"The lurch of slow sun into evening, perpetual fall, always falling",
"Brittle, creaking, an ancient staircase in the sky",
"The old house is derelict, abandoned, cast into eternity like a fish tossed back into the sea",
"A cold and rocky beach, empty, abandoned to its own void, motion only in the waves",
"Piles of bones, an ossuary in the forest, remnants of death scattered in the leaflitter like unread letters",
"Tired eyes lifting like prayersmoke towards moonlight"]

var spring_lines = ["Endless butterflies in a tornado of life, all burdened and blessed with innumerable wings",
"Regenerated limbs growing back on their own in spontaneous explosions of life",
"Isolated trees growing out, extending roots like broken fingers mending of their own accord",
"Fungi overflowing with love, intermingling, embracing the tired body of the earth, rejuvenating dirgeful soil",
"Petals peeling back the layers of the sun like an overripe orange, sucking out the juice and spitting out seeds",
"Maniacal laughter tears the sky like a paper screen——the moon is cracking up",
"And the stars spill out like joy into the night, like a bomb in the boisterous firmament",
"The darkness, even, carries light on its back, bearing the premonition of day like an overburdened mule",
"A long voyage, immeasurably long, but our feet carry us like birds back to their nests, warmed by an infinite levity",
"Emancipated dust motes, freed from constraining piles beneath the bed, swirl like angels around our addled heads",
"Bloated with life, the clouds above us hang heavy, sagging as if pregnant with a rushing waterfall of being",
"The grass sways with the humming rhythms of unseen lips, flecked with little golden eggs of pollen",
"A cock-crow, sudden and unexpected, pricks the ear with a pleasant sting of enjoyable discomfort——mild asceticism of the early morning",
"We can know nothing save our comforts in this slow tide of ripe becoming"]

var summer_lines = ["Rusted iron converging on plaited plains",
"Crispy bird corpse, dried in the gutter on a suburban road",
"Dried leaves engulfed in flame, tinder tilling blackened earth with tufts of awkward flame",
"Milky clouds congealed, hardened in the harsh, miniature hells of sunbeams",
"The birds are all red, burned and burnished by the violent warmth of the sun",
"An emptied glass sitsx abandoned on a porch strewn with corpses of moths, winged husks of sage-brushed brown",
"The lolling tongue of sun-scoured sky, light spilling like honey from its panting pink mass",
"The woodpecker’s looping pecking echoes like a death rattle over our heads",
"A broken bottle paints stained glass across sweltering pavement, threatening bare-footed walkers——and on its label smiles a nameless saint",
"Our bodies swelling in the heat, rising like yeast, hands too large to fit through our sleeves",
"The lilting forests sing our thoughts to sleep, slowly, until our heads sink into empty peace",
"The sand in our eyes stings, pulls tears from our eyes like sailors hauling rope",
"An orange, cut neatly into quarters, swallowed in four large gulps by a child with skinned knees",
"Our sweat pools like baptismal fonts in our armpits, bathing us in the grace of our unsteady life"]

var winter_lines = ["Snow like butterflies on the cusp of an ice-caked evening",
"Brown branches, bare, blessed with bark like armor",
"An empty bowl of rough ceramic rests atop a table built of peeling, smoke-scarred wood",
"A light rain dusting our bones with a dew that threatens to wake the dead",
"Earth hard as bricks, building up the Tower of Babel beneath our feet",
"The air echoes with the quiet nightmares of a man sleeping, entirely still, beneath cold sheets",
"A silent night, stars stilted, lying still in suffering silence",
"Limping rainfall, hobbled by the battering cold falling like bombs all around us",
"Anxious nights, empty-seeming skies overflowing with our wants———desires thwarted and twisted, brittle and base",
"Like alchemy, the pouring of leaden ice into veins, turning them into distended, frozen chalices",
"Elementary exegesis, explaining earth to angels in stumbling, mumbling tongues",
"Ladders falling, piling up in a pile of broken wood like treebones, firewood gathered and propped into a pyramid",
"Surrounded by a sea of dirt, of darkness, of a black never-ending and cool, like a blanket dried beneath an inverted sun",
"The crowns of brown and battered, broken branches adorn our heads like the last ashes of a wildfire"]


var card1_suit;
var card1_num;

var card2_suit;
var card2_num;

var card3_suit;
var card3_num;

var card4_suit;
var card4_num;

var card1_season;
var card2_season;
var card3_season;
var card4_season;

var card1_grid;
var card2_grid;
var card3_grid;
var card4_grid;

function shuffle2(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;

}

function shuffle()
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function selectCards() {
    var cards_drawn = [];
    var card1 = (deck.pop());
    var card2 = (deck.pop());
    var card3 = (deck.pop());
    var card4 = (deck.pop());
    cards_drawn.push(card1)
    cards_drawn.push(card2)
    cards_drawn.push(card3)
    cards_drawn.push(card4)

    var appendingText = document.getElementById("dealt")

    for(var i = 0; i < cards_drawn.length; i++)
        var icon = '';
		    if (card1.Suit == 'hearts')
		    icon='&hearts;';
		    else if (card1.Suit == 'spades')
		    icon = '&spades;';
		    else if (card1.Suit == 'diamonds')
		    icon = '&diams;';
		    else
		    icon = '&clubs;';

		document.getElementById("dealt").innerHTML = (card1.Value + '' + icon);

}
function selectCards() {
    var cards_drawn = [];
    var card1 = (deck.pop());
    var card2 = (deck.pop());
    var card3 = (deck.pop());
    var card4 = (deck.pop());

    cards_drawn.push(card1)
    cards_drawn.push(card2)
    cards_drawn.push(card3)
    cards_drawn.push(card4)


    for(var i = 0; i < cards_drawn.length; i++)
	{
		var card_new = document.createElement("div");
		var icon = '';
		if (cards_drawn[i].Suit == 'hearts')
		icon='&hearts;';
		else if (cards_drawn[i].Suit == 'spades')
		icon = '&spades;';
		else if (cards_drawn[i].Suit == 'diamonds')
		icon = '&diams;';
		else
		icon = '&clubs;';

		card_new.innerHTML = deck[i].Value + '' + icon;
		card_new.className = 'card_new';
		document.getElementById("dealt").appendChild(card_new);
		test_cards.push(deck[i].Value + '' + icon);
	}

assessCards()

}

function assessCards() {
    var one = test_cards[0]
    var two = test_cards[1]
    var three = test_cards[2]
    var four = test_cards[3]


    if (one.includes("diams")) {
    	card1_suit = "diamonds";
    	card1_season = "spring";
    	console.log(card1_suit);
    }
    else if (one.includes("hearts")) {
    	card1_suit = "hearts";
    	console.log(card1_suit);
    	card1_season = "summer";
    }
    else if (one.includes("spades")) {
    	card1_suit = "spades";
    	console.log(card1_suit);
    	card1_season = "fall";
    }
    else if (one.includes("clubs")) {
    	card1_suit = "clubs";
    	console.log(card1_suit);
    	card1_season = "winter";
    }

     if (one.includes("\b1\b")) {
    	card1_num = "1";
    	console.log(card1_num);
    	card1_grid = "1";
    }
    else if (one.includes("2")) {
    	card1_num = "2";
    	console.log(card1_num);
    	card1_grid = "2";
    }
    else if (one.includes("3")) {
    	card1_num = "3";
    	console.log(card1_num);
    	card1_grid = "3";
    }
    else if (one.includes("4")) {
    	card1_num = "4";
    	console.log(card1_num);
    	card1_grid = "4";
    }
        else if (one.includes("5")) {
    	card1_num = "5";
    	console.log(card1_num);
    	card1_grid = "5";
    }
    else if (one.includes("6")) {
    	card1_num = "6";
    	console.log(card1_num);
    	card1_grid = "6";
    }
    else if (one.includes("7")) {
    	card1_num = "7";
    	console.log(card1_num);
    	card1_grid = "7";
    }
        else if (one.includes("8")) {
    	card1_num = "8";
    	console.log(card1_num);
    	card1_grid = "8";
    }
    else if (one.includes("9")) {
    	card1_num = "9";
    	console.log(card1_num);
    	card1_grid = "9";
    }
    else if (one.includes("10")) {
    	card1_num = "10";
    	console.log(card1_num);
    	card1_grid = "10";
    }
      else if (one.includes("J")) {
    	card1_num = "jack";
    	console.log(card1_num);
    	card1_grid = "11";
    }
      else if (one.includes("Q")) {
    	card1_num = "queen";
    	console.log(card1_num);
    	card1_grid = "12";
    }
      else if (one.includes("K")) {
    	card1_num = "king";
    	console.log(card1_num);
    	card1_grid = "13";
    }
      else if (one.includes("A")) {
    	card1_num = "ace";
    	console.log(card1_num);
    	card1_grid = "14";
    }
    if (two.includes("diams")) {
    	card2_suit = "diamonds";
    	console.log(card2_suit);
    	card2_season = "spring";
    }
    else if (two.includes("hearts")) {
    	card2_suit = "hearts";
    	console.log(card2_suit);
    	card2_season = "summer";
    }
    else if (two.includes("spades")) {
    	card2_suit = "spades";
    	console.log(card3_suit);
    	card2_season = "fall";
    }
    else if (two.includes("clubs")) {
    	card2_suit = "clubs";
    	console.log(card3_suit);
    	card2_season = "winter";
    }
      if (three.includes("diams")) {
    	card3_suit = "diamonds";
    	console.log(card3_suit);
    	card3_season = "spring";
    }
    else if (three.includes("hearts")) {
    	card3_suit = "hearts";
    	console.log(card3_suit);
    	card3_season = "summer";
    }
    else if (three.includes("spades")) {
    	card3_suit = "spades";
    	console.log(card3_suit);
    	card3_season = "fall";
    }
    else if (three.includes("clubs")) {
    	card3_suit = "clubs";
    	console.log(card3_suit);
    	card3_season = "winter";
    }
       if (four.includes("diams")) {
    	card4_suit = "diamonds";
    	console.log(card4_suit);
    	card4_season = "spring";
    }
    else if (four.includes("hearts")) {
    	card4_suit = "hearts";
    	console.log(card4_suit);
    	card4_season = "summer";
    }
    else if (four.includes("spades")) {
    	card4_suit = "spades";
    	console.log(card4_suit);
    	card4_season = "fall";
    }
    else if (four.includes("clubs")) {
    	card4_suit = "clubs";
    	console.log(card4_suit);
    	card4_season = "winter";
    }

    // card 2
     if (two.includes("\b1\b")) {
    	card2_num = "1";
    	console.log(card2_num);
    	card2_grid = "1";
    }
    else if (two.includes("2")) {
    	card2_num = "2";
    	console.log(card2_num);
    	card2_grid = "2";
    }
    else if (two.includes("3")) {
    	card2_num = "3";
    	console.log(card2_num);
    	card2_grid = "3";
    }
    else if (two.includes("4")) {
    	card2_num = "4";
    	console.log(card2_num);
    	card2_grid = "4";
    }
        else if (two.includes("5")) {
    	card2_num = "5";
    	console.log(card2_num);
    	card2_grid = "5";
    }
    else if (two.includes("6")) {
    	card2_num = "6";
    	console.log(card2_num);
    	card2_grid = "6";
    }
    else if (two.includes("7")) {
    	card2_num = "7";
    	console.log(card2_num);
    	card2_grid = "7";
    }
        else if (two.includes("8")) {
    	card2_num = "8";
    	console.log(card2_num);
    	card2_grid = "8";
    }
    else if (two.includes("9")) {
    	card2_num = "9";
    	console.log(card2_num);
    	card2_grid = "9";
    }
    else if (two.includes("10")) {
    	card2_num = "10";
    	console.log(card2_num);
    	card2_grid = "10";
    }
      else if (two.includes("J")) {
    	card2_num = "jack";
    	console.log(card2_num);
    	card2_grid = "11";
    }
      else if (two.includes("Q")) {
    	card2_num = "queen";
    	console.log(card2_num);
    	card2_grid = "12";
    }
      else if (two.includes("K")) {
    	card2_num = "king";
    	console.log(card2_num);
    	card2_grid = "13";
    }
      else if (two.includes("A")) {
    	card2_num = "ace";
    	console.log(card2_num);
    	card2_grid = "14";
    }

      // card 3

     if (three.includes("\b1\b")) {
    	card3_num = "1";
    	console.log(card3_num);
    	card3_grid = "1";
    }
    else if (three.includes("2")) {
    	card3_num = "2";
    	console.log(card3_num);
    	card3_grid = "2";
    }
    else if (three.includes("3")) {
    	card3_num = "3";
    	console.log(card3_num);
    	card3_grid = "3";
    }
    else if (three.includes("4")) {
    	card3_num = "4";
    	console.log(card3_num);
    	card3_grid = "4";
    }
        else if (three.includes("5")) {
    	card3_num = "5";
    	console.log(card3_num);
    	card3_grid = "5";
    }
    else if (three.includes("6")) {
    	card3_num = "6";
    	console.log(card3_num);
    	card3_grid = "6";
    }
    else if (three.includes("7")) {
    	card3_num = "7";
    	console.log(card3_num);
    	card3_grid = "7";
    }
        else if (three.includes("8")) {
    	card3_num = "8";
    	console.log(card3_num);
    	card3_grid = "8";
    }
    else if (three.includes("9")) {
    	card3_num = "9";
    	console.log(card3_num);
    	card3_grid = "9";
    }
    else if (three.includes("10")) {
    	card3_num = "10";
    	console.log(card3_num);
    	card3_grid = "10";
    }
      else if (three.includes("J")) {
    	card3_num = "jack";
    	console.log(card3_num);
    	card3_grid = "11";
    }
      else if (three.includes("Q")) {
    	card3_num = "queen";
    	console.log(card3_num);
    	card3_grid = "12";
    }
      else if (three.includes("K")) {
    	card3_num = "king";
    	console.log(card3_num);
    	card3_grid = "13";
    }
      else if (three.includes("A")) {
    	card3_num = "ace";
    	console.log(card3_num);
    	card3_grid = "14";
    }

      // card 4

     if (four.includes("\b1\b")) {
    	card4_num = "1";
    	console.log(card4_num);
    	card4_grid = "1";
    }
    else if (four.includes("2")) {
    	card4_num = "2";
    	console.log(card4_num);
    	card4_grid = "2";
    }
    else if (four.includes("3")) {
    	card4_num = "3";
    	console.log(card4_num);
    	card4_grid = "3";
    }
    else if (four.includes("4")) {
    	card4_num = "4";
    	console.log(card4_num);
    	card4_grid = "4";
    }
        else if (four.includes("5")) {
    	card4_num = "5";
    	console.log(card4_num);
    	card4_grid = "5";
    }
    else if (four.includes("6")) {
    	card4_num = "6";
    	console.log(card4_num);
    	card4_grid = "6";
    }
    else if (four.includes("7")) {
    	card4_num = "7";
    	console.log(card4_num);
    	card4_grid = "7";
    }
        else if (four.includes("8")) {
    	card4_num = "8";
    	console.log(card4_num);
    	card4_grid = "8";
    }
    else if (four.includes("9")) {
    	card4_num = "9";
    	console.log(card4_num);
    	card4_grid = "9";
    }
    else if (four.includes("10")) {
    	card4_num = "10";
    	console.log(card4_num);
    	card4_grid = "10";
    }
      else if (four.includes("J")) {
    	card4_num = "jack";
    	console.log(card4_num);
    	card4_grid = "11";
    }
      else if (four.includes("Q")) {
    	card4_num = "queen";
    	console.log(card4_num);
    	card4_grid = "12";
    }
      else if (four.includes("K")) {
    	card4_num = "king";
    	console.log(card4_num);
    	card4_grid = "13";
    }
      else if (four.includes("A")) {
    	card4_num = "ace";
    	console.log(card4_num);
    	card4_grid = "14";
    }

    if (card1_season == "spring") {
    	console.log(card1_num);
    	if (card1_num == "1") {
    		document.getElementById("1").innerText = spring_lines.pop();}
    	else if (card1_num == "2") {
    	document.getElementById("2").innerText = spring_lines.pop();}
    		else if (card1_num == "3") {
    	document.getElementById("3").innerText = spring_lines.pop();}
    		else if (card1_num == "4") {
    	document.getElementById("4").innerText = spring_lines.pop();}
    		else if (card1_num == "5") {
    	document.getElementById("5").innerText = spring_lines.pop();}
    		else if (card1_num == "6") {
    	document.getElementById("6").innerText = spring_lines.pop();}
    		else if (card1_num == "7") {
    	document.getElementById("7").innerText = spring_lines.pop();}
    		else if (card1_num == "8") {
    	document.getElementById("8").innerText = spring_lines.pop();}
    		else if (card1_num == "9") {
    	document.getElementById("9").innerText = spring_lines.pop();}
    		else if (card1_num == "10") {
    	document.getElementById("10").innerText = spring_lines.pop();}
    		else if (card1_num == "jack") {
    	document.getElementById("11").innerText = spring_lines.pop();}
    		else if (card1_num == "queen") {
    	document.getElementById("12").innerText = spring_lines.pop();}
    		else if (card1_num == "king") {
    	document.getElementById("13").innerText = spring_lines.pop();}
    		else if (card1_num == "ace") {
    	document.getElementById("14").innerText = spring_lines.pop();}
    }
    else if (card1_season == "summer") {
    	console.log(card1_num);
    		if (card1_num == "1") {
    	document.getElementById("1").innerText = summer_lines.pop();}
    	else if (card1_num == "2") {
    	document.getElementById("2").innerText = summer_lines.pop();}
    		else if (card1_num == "3") {
    	document.getElementById("3").innerText = summer_lines.pop();}
    		else if (card1_num == "4") {
    	document.getElementById("4").innerText = summer_lines.pop();}
    		else if (card1_num == "5") {
    	document.getElementById("5").innerText = summer_lines.pop();}
    		else if (card1_num == "6") {
    	document.getElementById("6").innerText = summer_lines.pop();}
    		else if (card1_num == "7") {
    	document.getElementById("7").innerText = summer_lines.pop();}
    		else if (card1_num == "8") {
    	document.getElementById("8").innerText = summer_lines.pop();}
    		else if (card1_num == "9") {
    	document.getElementById("9").innerText = summer_lines.pop();}
    		else if (card1_num == "10") {
    	document.getElementById("10").innerText = summer_lines.pop();}
    		else if (card1_num == "jack") {
    	document.getElementById("11").innerText = summer_lines.pop();}
    		else if (card1_num == "queen") {
    	document.getElementById("12").innerText = summer_lines.pop();}
    		else if (card1_num == "king") {
    	document.getElementById("13").innerText = summer_lines.pop();}
    		else if (card1_num == "ace") {
    	document.getElementById("14").innerText = summer_lines.pop();}
    }
    else if (card1_season == "fall") {
    	console.log(card1_num);
    		if (card1_num == "1") {
    	document.getElementById("1").innerText = fall_lines.pop();}
    	else if (card1_num == "2") {
    	document.getElementById("2").innerText = fall_lines.pop();}
    		else if (card1_num == "3") {
    	document.getElementById("3").innerText = fall_lines.pop();}
    		else if (card1_num == "4") {
    	document.getElementById("4").innerText = fall_lines.pop();}
    		else if (card1_num == "5") {
    	document.getElementById("5").innerText = fall_lines.pop();}
    		else if (card1_num == "6") {
    	document.getElementById("6").innerText = fall_lines.pop();}
    		else if (card1_num == "7") {
    	document.getElementById("7").innerText = fall_lines.pop();}
    		else if (card1_num == "8") {
    	document.getElementById("8").innerText = fall_lines.pop();}
    		else if (card1_num == "9") {
    	document.getElementById("9").innerText = fall_lines.pop();}
    		else if (card1_num == "10") {
    	document.getElementById("10").innerText = fall_lines.pop();}
    		else if (card1_num == "jack") {
    	document.getElementById("11").innerText = fall_lines.pop();}
    		else if (card1_num == "queen") {
    	document.getElementById("12").innerText = fall_lines.pop();}
    		else if (card1_num == "king") {
    	document.getElementById("13").innerText = fall_lines.pop();}
    		else if (card1_num == "ace") {
    	document.getElementById("14").innerText = fall_lines.pop();}
    }
    else if (card1_season == "winter") {
    	console.log(card1_num);
    		if (card1_num == "1") {
    	document.getElementById("1").innerText = winter_lines.pop();}
    	else if (card1_num == "2") {
    	document.getElementById("2").innerText = winter_lines.pop();}
    		else if (card1_num == "3") {
    	document.getElementById("3").innerText = winter_lines.pop();}
    		else if (card1_num == "4") {
    	document.getElementById("4").innerText = winter_lines.pop();}
    		else if (card1_num == "5") {
    	document.getElementById("5").innerText = winter_lines.pop();}
    		else if (card1_num == "6") {
    	document.getElementById("6").innerText = winter_lines.pop();}
    		else if (card1_num == "7") {
    	document.getElementById("7").innerText = winter_lines.pop();}
    		else if (card1_num == "8") {
    	document.getElementById("8").innerText = winter_lines.pop();}
    		else if (card1_num == "9") {
    	document.getElementById("9").innerText = winter_lines.pop();}
    		else if (card1_num == "10") {
    	document.getElementById("10").innerText = winter_lines.pop();}
    		else if (card1_num == "jack") {
    	document.getElementById("11").innerText = winter_lines.pop();}
    		else if (card1_num == "queen") {
    	document.getElementById("12").innerText = winter_lines.pop();}
    		else if (card1_num == "king") {
    	document.getElementById("13").innerText = winter_lines.pop();}
    		else if (card1_num == "ace") {
    	document.getElementById("14").innerText = winter_lines.pop();}
    }

 	if (card2_season = "spring") {
    	console.log(card2_num);
    			if (card2_num == "1") {
    	document.getElementById("15").innerText = spring_lines.pop();}
    	else if (card2_num == "2") {
    	document.getElementById("16").innerText = spring_lines.pop();}
    		else if (card2_num == "3") {
    	document.getElementById("17").innerText = spring_lines.pop();}
    		else if (card2_num == "4") {
    	document.getElementById("18").innerText = spring_lines.pop();}
    		else if (card2_num == "5") {
    	document.getElementById("19").innerText = spring_lines.pop();}
    		else if (card2_num == "6") {
    	document.getElementById("20").innerText = spring_lines.pop();}
    		else if (card2_num == "7") {
    	document.getElementById("21").innerText = spring_lines.pop();}
    		else if (card2_num == "8") {
    	document.getElementById("22").innerText = spring_lines.pop();}
    		else if (card2_num == "9") {
    	document.getElementById("23").innerText = spring_lines.pop();}
    		else if (card2_num == "10") {
    	document.getElementById("24").innerText = spring_lines.pop();}
    		else if (card2_num == "jack") {
    	document.getElementById("25").innerText = spring_lines.pop();}
    		else if (card2_num == "queen") {
    	document.getElementById("26").innerText = spring_lines.pop();}
    		else if (card2_num == "king") {
    	document.getElementById("27").innerText = spring_lines.pop();}
    		else if (card2_num == "ace") {
    	document.getElementById("28").innerText = spring_lines.pop();}
    }
    else if (card2_season = "summer") {
    	console.log(card2_num);
    		if (card2_num == "1") {
    	document.getElementById("15").innerText = summer_lines.pop();}
    	else if (card2_num == "2") {
    	document.getElementById("16").innerText = summer_lines.pop();}
    		else if (card2_num == "3") {
    	document.getElementById("17").innerText = summer_lines.pop();}
    		else if (card2_num == "4") {
    	document.getElementById("18").innerText = summer_lines.pop();}
    		else if (card2_num == "5") {
    	document.getElementById("19").innerText = summer_lines.pop();}
    		else if (card2_num == "6") {
    	document.getElementById("20").innerText = summer_lines.pop();}
    		else if (card2_num == "7") {
    	document.getElementById("21").innerText = summer_lines.pop();}
    		else if (card2_num == "8") {
    	document.getElementById("22").innerText = summer_lines.pop();}
    		else if (card2_num == "9") {
    	document.getElementById("23").innerText = summer_lines.pop();}
    		else if (card2_num == "10") {
    	document.getElementById("24").innerText = summer_lines.pop();}
    		else if (card2_num == "jack") {
    	document.getElementById("25").innerText = summer_lines.pop();}
    		else if (card2_num == "queen") {
    	document.getElementById("26").innerText = summer_lines.pop();}
    		else if (card2_num == "king") {
    	document.getElementById("27").innerText = summer_lines.pop();}
    		else if (card2_num == "ace") {
    	document.getElementById("28").innerText = summer_lines.pop();}
    }
    else if (card2_season = "fall") {
    	console.log(card2_num);
    	if (card2_num == "1") {
    	document.getElementById("15").innerText = fall_lines.pop();}
    	else if (card2_num == "2") {
    	document.getElementById("16").innerText = fall_lines.pop();}
    		else if (card2_num == "3") {
    	document.getElementById("17").innerText = fall_lines.pop();}
    		else if (card2_num == "4") {
    	document.getElementById("18").innerText = fall_lines.pop();}
    		else if (card2_num == "5") {
    	document.getElementById("19").innerText = fall_lines.pop();}
    		else if (card2_num == "6") {
    	document.getElementById("20").innerText = fall_lines.pop();}
    		else if (card2_num == "7") {
    	document.getElementById("21").innerText = fall_lines.pop();}
    		else if (card2_num == "8") {
    	document.getElementById("22").innerText = fall_lines.pop();}
    		else if (card2_num == "9") {
    	document.getElementById("23").innerText = fall_lines.pop();}
    		else if (card2_num == "10") {
    	document.getElementById("24").innerText = fall_lines.pop();}
    		else if (card2_num == "jack") {
    	document.getElementById("25").innerText = fall_lines.pop();}
    		else if (card2_num == "queen") {
    	document.getElementById("26").innerText = fall_lines.pop();}
    		else if (card2_num == "king") {
    	document.getElementById("27").innerText = fall_lines.pop();}
    		else if (card2_num == "ace") {
    	document.getElementById("28").innerText = fall_lines.pop();}
    }
    else if (card2_season = "winter") {
    	console.log(card2_num);
    	if (card2_num == "1") {
    	document.getElementById("15").innerText = winter_lines.pop();}
    	else if (card2_num == "2") {
    	document.getElementById("16").innerText = winter_lines.pop();}
    		else if (card2_num == "3") {
    	document.getElementById("17").innerText = winter_lines.pop();}
    		else if (card2_num == "4") {
    	document.getElementById("18").innerText = winter_lines.pop();}
    		else if (card2_num == "5") {
    	document.getElementById("19").innerText = winter_lines.pop();}
    		else if (card2_num == "6") {
    	document.getElementById("20").innerText = winter_lines.pop();}
    		else if (card2_num == "7") {
    	document.getElementById("21").innerText = winter_lines.pop();}
    		else if (card2_num == "8") {
    	document.getElementById("22").innerText = winter_lines.pop();}
    		else if (card2_num == "9") {
    	document.getElementById("23").innerText = winter_lines.pop();}
    		else if (card2_num == "10") {
    	document.getElementById("24").innerText = winter_lines.pop();}
    		else if (card2_num == "jack") {
    	document.getElementById("25").innerText = winter_lines.pop();}
    		else if (card2_num == "queen") {
    	document.getElementById("26").innerText = winter_lines.pop();}
    		else if (card2_num == "king") {
    	document.getElementById("27").innerText = winter_lines.pop();}
    		else if (card2_num == "ace") {
    	document.getElementById("28").innerText = winter_lines.pop();}
    }

     if (card3_season = "spring") {
    	console.log(card3_num);
    		if (card3_num == "1") {
    	document.getElementById("29").innerText = spring_lines.pop();}
    	else if (card3_num == "2") {
    	document.getElementById("30").innerText = spring_lines.pop();}
    		else if (card3_num == "3") {
    	document.getElementById("31").innerText = spring_lines.pop();}
    		else if (card3_num == "4") {
    	document.getElementById("32").innerText = spring_lines.pop();}
    		else if (card3_num == "5") {
    	document.getElementById("33").innerText = spring_lines.pop();}
    		else if (card3_num == "6") {
    	document.getElementById("34").innerText = spring_lines.pop();}
    		else if (card3_num == "7") {
    	document.getElementById("35").innerText = spring_lines.pop();}
    		else if (card3_num == "8") {
    	document.getElementById("36").innerText = spring_lines.pop();}
    		else if (card3_num == "9") {
    	document.getElementById("37").innerText = spring_lines.pop();}
    		else if (card3_num == "10") {
    	document.getElementById("38").innerText = spring_lines.pop();}
    		else if (card3_num == "jack") {
    	document.getElementById("39").innerText = spring_lines.pop();}
    		else if (card3_num == "queen") {
    	document.getElementById("40").innerText = spring_lines.pop();}
    		else if (card3_num == "king") {
    	document.getElementById("41").innerText = spring_lines.pop();}
    		else if (card3_num == "ace") {
    	document.getElementById("42").innerText = spring_lines.pop();}
    }
    else if (card3_season = "summer") {
    	console.log(card3_num);
    	if (card3_num == "1") {
    	document.getElementById("29").innerText = summer_lines.pop();}
    	else if (card3_num == "2") {
    	document.getElementById("30").innerText = summer_lines.pop();}
    		else if (card3_num == "3") {
    	document.getElementById("31").innerText = summer_lines.pop();}
    		else if (card3_num == "4") {
    	document.getElementById("32").innerText = summer_lines.pop();}
    		else if (card3_num == "5") {
    	document.getElementById("33").innerText = summer_lines.pop();}
    		else if (card3_num == "6") {
    	document.getElementById("34").innerText = summer_lines.pop();}
    		else if (card3_num == "7") {
    	document.getElementById("35").innerText = summer_lines.pop();}
    		else if (card3_num == "8") {
    	document.getElementById("36").innerText = summer_lines.pop();}
    		else if (card3_num == "9") {
    	document.getElementById("37").innerText = summer_lines.pop();}
    		else if (card3_num == "10") {
    	document.getElementById("38").innerText = summer_lines.pop();}
    		else if (card3_num == "jack") {
    	document.getElementById("39").innerText = summer_lines.pop();}
    		else if (card3_num == "queen") {
    	document.getElementById("40").innerText = summer_lines.pop();}
    		else if (card3_num == "king") {
    	document.getElementById("41").innerText = summer_lines.pop();}
    		else if (card3_num == "ace") {
    	document.getElementById("42").innerText = summer_lines.pop();}
    }
    else if (card3_season = "fall") {
    	console.log(card3_num);
    		if (card3_num == "1") {
    	document.getElementById("29").innerText = fall_lines.pop();}
    	else if (card3_num == "2") {
    	document.getElementById("30").innerText = fall_lines.pop();}
    		else if (card3_num == "3") {
    	document.getElementById("31").innerText = fall_lines.pop();}
    		else if (card3_num == "4") {
    	document.getElementById("32").innerText = fall_lines.pop();}
    		else if (card3_num == "5") {
    	document.getElementById("33").innerText = fall_lines.pop();}
    		else if (card3_num == "6") {
    	document.getElementById("34").innerText = fall_lines.pop();}
    		else if (card3_num == "7") {
    	document.getElementById("35").innerText = fall_lines.pop();}
    		else if (card3_num == "8") {
    	document.getElementById("36").innerText = fall_lines.pop();}
    		else if (card3_num == "9") {
    	document.getElementById("37").innerText = fall_lines.pop();}
    		else if (card3_num == "10") {
    	document.getElementById("38").innerText = fall_lines.pop();}
    		else if (card3_num == "jack") {
    	document.getElementById("39").innerText = fall_lines.pop();}
    		else if (card3_num == "queen") {
    	document.getElementById("40").innerText = fall_lines.pop();}
    		else if (card3_num == "king") {
    	document.getElementById("41").innerText = fall_lines.pop();}
    		else if (card3_num == "ace") {
    	document.getElementById("42").innerText = fall_lines.pop();}
    }
    else if (card3_season = "winter") {
    	console.log(card3_num);
    	if (card3_num == "1") {
    	document.getElementById("29").innerText = winter_lines.pop();}
    	else if (card3_num == "2") {
    	document.getElementById("30").innerText = winter_lines.pop();}
    		else if (card3_num == "3") {
    	document.getElementById("31").innerText = winter_lines.pop();}
    		else if (card3_num == "4") {
    	document.getElementById("32").innerText = winter_lines.pop();}
    		else if (card3_num == "5") {
    	document.getElementById("33").innerText = winter_lines.pop();}
    		else if (card3_num == "6") {
    	document.getElementById("34").innerText = winter_lines.pop();}
    		else if (card3_num == "7") {
    	document.getElementById("35").innerText = winter_lines.pop();}
    		else if (card3_num == "8") {
    	document.getElementById("36").innerText = winter_lines.pop();}
    		else if (card3_num == "9") {
    	document.getElementById("37").innerText = winter_lines.pop();}
    		else if (card3_num == "10") {
    	document.getElementById("38").innerText = winter_lines.pop();}
    		else if (card3_num == "jack") {
    	document.getElementById("39").innerText = winter_lines.pop();}
    		else if (card3_num == "queen") {
    	document.getElementById("40").innerText = winter_lines.pop();}
    		else if (card3_num == "king") {
    	document.getElementById("41").innerText = winter_lines.pop();}
    		else if (card3_num == "ace") {
    	document.getElementById("42").innerText = winter_lines.pop();}
    }

     if (card4_season = "spring") {
    	console.log(card4_num);
    	if (card4_num == "1") {
    	document.getElementById("43").innerText = spring_lines.pop();}
    	else if (card4_num == "2") {
    	document.getElementById("44").innerText = spring_lines.pop();}
    		else if (card4_num == "3") {
    	document.getElementById("45").innerText = spring_lines.pop();}
    		else if (card4_num == "4") {
    	document.getElementById("46").innerText = spring_lines.pop();}
    		else if (card4_num == "5") {
    	document.getElementById("47").innerText = spring_lines.pop();}
    		else if (card4_num == "6") {
    	document.getElementById("48").innerText = spring_lines.pop();}
    		else if (card4_num == "7") {
    	document.getElementById("49").innerText = spring_lines.pop();}
    		else if (card4_num == "8") {
    	document.getElementById("50").innerText = spring_lines.pop();}
    		else if (card4_num == "9") {
    	document.getElementById("51").innerText = spring_lines.pop();}
    		else if (card4_num == "10") {
    	document.getElementById("52").innerText = spring_lines.pop();}
    		else if (card4_num == "jack") {
    	document.getElementById("53").innerText = spring_lines.pop();}
    		else if (card4_num == "queen") {
    	document.getElementById("54").innerText = spring_lines.pop();}
    		else if (card4_num == "king") {
    	document.getElementById("55").innerText = spring_lines.pop();}
    		else if (card4_num == "ace") {
    	document.getElementById("56").innerText = spring_lines.pop();}
    }
    else if (card4_season = "summer") {
    	console.log(card4_num);
    	if (card4_num == "1") {
    	document.getElementById("43").innerText = summer_lines.pop();}
    	else if (card4_num == "2") {
    	document.getElementById("44").innerText = summer_lines.pop();}
    		else if (card4_num == "3") {
    	document.getElementById("45").innerText = summer_lines.pop();}
    		else if (card4_num == "4") {
    	document.getElementById("46").innerText = summer_lines.pop();}
    		else if (card4_num == "5") {
    	document.getElementById("47").innerText = summer_lines.pop();}
    		else if (card4_num == "6") {
    	document.getElementById("48").innerText = summer_lines.pop();}
    		else if (card4_num == "7") {
    	document.getElementById("49").innerText = summer_lines.pop();}
    		else if (card4_num == "8") {
    	document.getElementById("50").innerText = summer_lines.pop();}
    		else if (card4_num == "9") {
    	document.getElementById("51").innerText = summer_lines.pop();}
    		else if (card4_num == "10") {
    	document.getElementById("52").innerText = summer_lines.pop();}
    		else if (card4_num == "jack") {
    	document.getElementById("53").innerText = summer_lines.pop();}
    		else if (card4_num == "queen") {
    	document.getElementById("54").innerText = summer_lines.pop();}
    		else if (card4_num == "king") {
    	document.getElementById("55").innerText = summer_lines.pop();}
    		else if (card4_num == "ace") {
    	document.getElementById("56").innerText = summer_lines.pop();}
    }
    else if (card4_season = "fall") {
    	console.log(card4_num);
    if (card4_num == "1") {
    	document.getElementById("43").innerText = fall_lines.pop();}
    	else if (card4_num == "2") {
    	document.getElementById("44").innerText = fall_lines.pop();}
    		else if (card4_num == "3") {
    	document.getElementById("45").innerText = fall_lines.pop();}
    		else if (card4_num == "4") {
    	document.getElementById("46").innerText = fall_lines.pop();}
    		else if (card4_num == "5") {
    	document.getElementById("47").innerText = fall_lines.pop();}
    		else if (card4_num == "6") {
    	document.getElementById("48").innerText = fall_lines.pop();}
    		else if (card4_num == "7") {
    	document.getElementById("49").innerText = fall_lines.pop();}
    		else if (card4_num == "8") {
    	document.getElementById("50").innerText = fall_lines.pop();}
    		else if (card4_num == "9") {
    	document.getElementById("51").innerText = fall_lines.pop();}
    		else if (card4_num == "10") {
    	document.getElementById("52").innerText = fall_lines.pop();}
    		else if (card4_num == "jack") {
    	document.getElementById("53").innerText = fall_lines.pop();}
    		else if (card4_num == "queen") {
    	document.getElementById("54").innerText = fall_lines.pop();}
    		else if (card4_num == "king") {
    	document.getElementById("55").innerText = fall_lines.pop();}
    		else if (card4_num == "ace") {
    	document.getElementById("56").innerText = fall_lines.pop();}
    }
    else if (card4_season = "winter") {
    	console.log(card4_num);
    if (card4_num == "1") {
    	document.getElementById("43").innerText = winter_lines.pop();}
    	else if (card4_num == "2") {
    	document.getElementById("44").innerText = winter_lines.pop();}
    		else if (card4_num == "3") {
    	document.getElementById("45").innerText = winter_lines.pop();}
    		else if (card4_num == "4") {
    	document.getElementById("46").innerText = winter_lines.pop();}
    		else if (card4_num == "5") {
    	document.getElementById("47").innerText = winter_lines.pop();}
    		else if (card4_num == "6") {
    	document.getElementById("48").innerText = winter_lines.pop();}
    		else if (card4_num == "7") {
    	document.getElementById("49").innerText = winter_lines.pop();}
    		else if (card4_num == "8") {
    	document.getElementById("50").innerText = winter_lines.pop();}
    		else if (card4_num == "9") {
    	document.getElementById("51").innerText = winter_lines.pop();}
    		else if (card4_num == "10") {
    	document.getElementById("52").innerText = winter_lines.pop();}
    		else if (card4_num == "jack") {
    	document.getElementById("53").innerText = winter_lines.pop();}
    		else if (card4_num == "queen") {
    	document.getElementById("54").innerText = winter_lines.pop();}
    		else if (card4_num == "king") {
    	document.getElementById("55").innerText = winter_lines.pop();}
    		else if (card4_num == "ace") {
    	document.getElementById("56").innerText = winter_lines.pop();}
}}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon='&hearts;';
		else if (deck[i].Suit == 'spades')
		icon = '&spades;';
		else if (deck[i].Suit == 'diamonds')
		icon = '&diams;';
		else
		icon = '&clubs;';

		card.innerHTML = deck[i].Value + '' + icon;
		card.className = 'card';
		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
	spring_lines = shuffle2(spring_lines);
	fall_lines = shuffle2(fall_lines);
	winter_lines = shuffle2(winter_lines);
	summer_lines = shuffle2(summer_lines);
	selectCards();

}

window.onload = load;
