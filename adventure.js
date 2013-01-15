
var SUPPORTS_ENTROPY = !!Object.defineProperty;

if (!SUPPORTS_ENTROPY){
    document.body.className = 'show-warning';
}

// Text adventure
(function(){
	if (!SUPPORTS_ENTROPY) return;
	var Output = document.querySelector('#adventure');

	var Variables = Entropy.watch({

	});
	
	var Adventure = Entropy.watch({
		start: "I'm half sleeping. Environment : soft, warm, clean, but not reassuring. #Where#where# am I?",
		where: "A bed. I'm on a bed. This is not MY bed. This is another fucking bed. I'm #awake#awake# now.",
		awake: "Eyes now opened. Can't see shit it's dark. I feel strange. I'm losing my words. Like I'm thinking in a foreign language. I must #focus#focus#.",
		focus: "Ok. My eyes are now used to darkness. Ceiling seems to be white. White walls. At my right, a window is glowing. Must be dawn of a new day. Another bed. At my left, a door. Closed. I #sit#sit# down on the bed.",
		sit: "This is an hospital room. I'm on an hospital. I'm a patient in an hospital. What the fuck, I'm not hurt. There is someone in the other bed. He's tied to his bed. This is a madhouse. I start to #remember#remember# some things. I must focus on my #actions#actions#.",
		remember: "I experienced blackouts. People said I was acting strange. Kids watched me like a stranger. It was after I stopped taking drugs. I was clean then. Now I really feel my mind going. I must #hurry#actions#.",
		actions: "Hesitating between going to the other #bed#otherbed#, the #window#window# and the #door#roomdoor#. My body responds well to my mind, but I lose control on my mind.",
		otherbed: "I stand up and start to observe the other guy. He has a childish, calm face, reminding me 'normal' times. Have a good night. Nothing more to #do#actions# there.",
		window: "I walk to the window. Can't see the sun but see it's glowing. I'm afraid to #open#windowopen# the window. Might be better to go #back#windowback#.",
		windowopen: "Window opened without problem. Shouldn't it be locked in a madhouse? Someone want me dead. Someone hate me. I did something terribly wrong. Violence. I feel a cool #breeze#breeze#. #Window#windowsit# is wide opened. Going #back#windowback# is more secure.",
		breeze: "This breeze feels like coast air. Fish smell. Seagull cries. Have to keep an eye on children. Don't go too far. Where's the sunscreen cream? Don't drink sea water. Is this a plastic bag or a jellyfish? Don't touch it. Get back closer. Towels. Ball games. All of this can't be lost. I can almost see the sun. If I keep calm I could go #back#windowback#. #Window#windowsit# is so close.",
		windowsit: "Sitting on the edge of window. Turning #back#windowback# is still possible. Feet above empty #space#space#. Last floor. I don't think I'll be me again.",
		space: "Strong acceleration. Time is not slowing down. Huge noise of wind in ears. This is usually the moment I wake up.",
		windowback: "I'm afraid of the ideas I just got. My #bed#bedback# is much more inviting now. #Door#roomdoor# is still there.",
		bed: "Soft, warm, clean, reasuring. I give up the fight. My mind is going, maybe this is the good end. No more pressure. My only concern is 'who will control my body now?'. Anyway, not me.",
		roomdoor: "I stand up and go to the door. Not locked. Open carefully. Hall is darker than the room. There is a switch. #press#lighthall# switch. #Go#darkhall# in the hall.",
		lighthall: "I switch on the light. Why the fuck did I did that? I can already hear people screaming. '#Who#who#'s there?' 'Go #back#backlight# to your room!'. I want to #run#run# and escape.",
		lightback:"I follow their order. I come back in the room. I go back to the bed. Soon they will make me forget all of this. It will be easy, I'm not sure I remember how to speak.",
		who: "I don't even know who I am, my mind is not mine anymore. I must #run#run#.",
		run: "#Running#running# in the hall. Lights look like a #highway#highway#.",
		highway: "It was the begining of the holiday. Going to peaceful place. Far from the city, the noise, the people. Riding at night to avoid traffic jam. Everybody's sleeping. Crossing cities. '#When#running# do we get there?'. 'Soon'. Cars going too fast. Cars going too slow. Stop, for a coffee.",
		running: "I just ran into a nurse. Both fall down. Screams again. People #holding#holding# me tight.",
		holding: "I felt a needle in my arm. I know what it means. I feel sleepy. I must not give up. Keep #focus#needlefocus#. Not #give#needlegiveup# up.",
		needlefocus: "My eyes are still open. I see and understand what is around me. Three nurse holding me. I can't #fight#needlefight#. I must not #give#needlegiveup# up.",
		needlefight: "I struggle. It's #hopeless#needlegiveup#. Sudden pain. Head hit wall. It was an accident. Didn't want to hurt anyone.",
		needlegiveup: "I give up. And let the drug flow in me.",
		darkhall: "Light still off I carefully walk in the hall. Muffled voices of nurses. Almost at #stairs#darkstairs#. Still time to go #back#backdark#, nobody heared me.",
		darkback: "Back to the #room#actions#.",
		stairs: "I open the stairs' door, and hit something lying down. Metalic. Shitload of sounds. Nurses screaming. Like a house #fire#housefire#. Go #up#stairsup# or #down#stairsdown#?",
		fire: "My house was burning. Someone left the gas on or didn't pay attention to the fireplace. I was out, they were in, but I couldn't make a decision, I was not myself. They said it was the #drugs#drugs# but I was clean. They said people could have died because of me. They got out in extremis. Family said 'more frightened than hurt' but looked strange at me. No time to think. #Up#stairsup# or #down#stairsdown#?",
		drugs: "I'm clean now. I was not myself. It wasn't me. 'Why he's looking at? void?'. Another 'me'. I'm a better me. 'He did it again'. 'You should make a therapy'. Two nurses catch me. it's too late now.",
		stairsup: "I quickly climb the stairs. This lead me to the top of building, I was on last floor. Why did I did that? There is no escape here! I'm #trapped#trapped# on the top of the hospital!",
		trapped: "I hear people screaming, but nobody follow me. They supposed I went down. Everything is #calm#topcalm# here.",
		topcalm: "Cool breeze. Distant lights of the city. I can almost see the sun. Birds singing for the morning. I've never been so peaceful in my life. I'm forgotting all what I've done. The responsibilities, the pressure carry no sense anymore. I'm on the grass. A picnic. Beautiful view of the city. We forgot the bread knife, it's not a problem. Speaking about future, projects. All of this can be true, I just have to let reality flow down. I give up and dream.",
		stairsdown: "I'm running #downstairs#flooraaee#, they are after me. 'Floor 5', shit I was at the last floor.",
		flooraaee: "«Floor 4» If I'm #fast#flooraadd# enough I can do it.",
		flooraadd: "«Floor 3» I'm afraid now. Will I be #better#flooraacc#?",
		flooraacc: "«Floor 2» These stairs are #infinite#flooraabb#.",
		flooraabb: "«Floor 1» I can't hear my own #footsteps#flooraaaa# now.",
		flooraaaa: "«Floor 0» This is not ground #floor#floorbbbb#.",
		floorbbbb: "«Floor -1» I'm #dreaming#floorbbcc#.",
		floorbbcc: "«Floor -2» They #caught#floorbbdd# me even before I reach the stairs",
		floorbbdd: "«Floor -3» They hit me, and #gave#floorbbee# me an injection.",
		floorbbee: "«Floor -4» this is #hell#floorzzzz# I don't even know where I will be next floor."
	}, 0.15);

	var Current = "start";
	

	//based on: http://en.wikibooks.org/wiki/Algorithm_implementation/Strings/Levenshtein_distance
	//and:  http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance
	var levenshtein = function( a, b ) {
		var i;
		var j;
		var cost;
		var d = new Array();
		
		if ( a.length == 0 )
		{
			return b.length;
		}
		
		if ( b.length == 0 )
		{
			return a.length;
		}
		
		for ( i = 0; i <= a.length; i++ )
		{
			d[ i ] = new Array();
			d[ i ][ 0 ] = i;
		}
		
		for ( j = 0; j <= b.length; j++ )
		{
			d[ 0 ][ j ] = j;
		}
		
		for ( i = 1; i <= a.length; i++ )
		{
			for ( j = 1; j <= b.length; j++ )
			{
				if ( a.charAt( i - 1 ) == b.charAt( j - 1 ) )
				{
					cost = 0;
				}
				else
				{
					cost = 1;
				}
				
				d[ i ][ j ] = Math.min( d[ i - 1 ][ j ] + 1, d[ i ][ j - 1 ] + 1, d[ i - 1 ][ j - 1 ] + cost );
				
				if(
					i > 1 && 
						j > 1 &&  
						a.charAt(i - 1) == b.charAt(j-2) && 
						a.charAt(i-2) == b.charAt(j-1)
				){
					d[i][j] = Math.min(
						d[i][j],
						d[i - 2][j - 2] + cost
					)
					
				}
			}
		}
		
		return d[ a.length ][ b.length ];
	}

	var updateScreenAndFade = function(newCurrent) {
		$(Output).fadeOut(200, function() {
			Current = newCurrent;
			Output.innerHTML = '';
			Output.appendChild(parseText(getText(Current, Adventure)))		
			$(Output).fadeIn(200);
		});
	}

	var updateScreenLoop = function(onlyOne) {
		Output.innerHTML = '';
		Output.appendChild(parseText(getText(Current, Adventure)))
		setTimeout(updateScreenLoop, 1000 * Math.random() + 1000);
	}

	var getText = function(searchKey, table) {
		var min = Infinity
		var text = "lost"
		var noText = "no"
		for(var realKey in table) {
			var dist = levenshtein(searchKey, realKey)
			var candidate = table[realKey]; // to ensure decaying
			if(dist <= min) {
				min = dist;
				text = candidate;
			};
		};
		return text;
	}

	var sc = "[^a-zA-Z0-9 \.,]";

	var parseLink = function(string) {
		var parts = string.split(/[^a-zA-Z., ?!]/);
		return {
			text: parts[1],
			destination: parts[2]
		}
	}
	
	var parseText = function(text) {
		//var exp = /\[\w+\|\w+\]/g;
		var exp = new RegExp(sc+"\\w+"+sc+"\\w+"+sc,"g");
		var transitions = text.match(exp);
		var paragraph = document.createElement("p");
		
		var parsedText = text;
		
		if(transitions) {
			$.each(transitions, function(i, transition) {
				var splitedText = parsedText.split(transition);

				var textDiv = document.createElement("span");
				textDiv.className = "adventure";
				textDiv.appendChild(document.createTextNode(splitedText.shift()));
				paragraph.appendChild(textDiv);
				parsedText = splitedText.join(transition);
				
				var link = document.createElement("span");
				link.className = "adventure transition";
				var parsedLink = parseLink(transition);

				$(link).click(function(e) {
					updateScreenAndFade(parsedLink.destination);
				});
				
				link.appendChild(document.createTextNode(" "+parsedLink.text+" "));
				paragraph.appendChild(link);
			});
		}
		paragraph.appendChild(document.createTextNode(parsedText));
		return paragraph;
	}

	updateScreenLoop();
})();
