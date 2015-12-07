function parseBible(text) {
	var lines = text.split("\n");
	
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		var space = line.indexOf(" ");
		
		// head parse
		var head = line.substr(0, space);
		console.log(head);
		var headRegex = /([가-힣]{1,})([1-9]{1,}):([1-9]{1,})/g;
		
		var match = headRegex.exec(head);
		var book = match[1];
		var chapter = match[2];
		var verse = match[3];
		console.log(book, chapter, verse);
		// body parse
		var body = line.substr(space + 1, line.length);
		var content = body.replace("<", "&lt;").replace(">", "&gt;");
		console.log(content);
		
	}
}

var text = "창1:1 <천지 창조> 태초에 하나님이 천지를 창조하시니라\n창1:2 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라\n창1:3 하나님이 이르시되 빛이 있으라 하시니 빛이 있었고";


parseBible(text);