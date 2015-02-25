//Ajax: Get data from JSON

(function() {

	var link = document.getElementsByTagName("a")[0];

	// conver the JSON data from string to object

	link.onclick = function() {

		// 4 steps to generate Ajax function
			// Create XHR object

			var xhr = new XMLHttpRequest();

			//handle the "onreadystatechange" event
	 		// xhr.readyState property values
	 		// 0 = uninitialized
	 		// 1 = loading
	 		// 2 = loaded
	 		// 3 = Interactive (the sever is sending us the response back)
	 		// 4 = Complete
			xhr.onreadystatechange = function() {
				if ((xhr.readyState == 4) && ( xhr.status == 200 || xhr.status == 304)) {

					var json = JSON.parse(xhr.responseText);

					var body = document.getElementsByTagName("body")[0];

					//Get heading value
					var heading = json.heading;
					//createElement() the container to store the heading value
					var h2 = document.createElement("h2");
					//createTextNode
					var h2Text = document.createTextNode(heading);
					//Attach the TextNode to the Element
					h2.appendChild(h2Text);


					//Get the list value
					var list = document.createElement("ul");

					var items = json.items;

					for ( var key in items) {
						var item = items[key];

						//createElement to store list value
						var li = document.createElement("li");
						var liText = document.createTextNode(item);
						li.appendChild(liText);
						list.appendChild(li); 
					};

					//Append it to the body
					body.appendChild(h2);
					body.appendChild(list);

					body.removeChild(link);

				};
			};

			// Open Request
			xhr.open("GET", "files/ajax.json", true);
			// Send Request
			xhr.send(null);

		//Prevent default behaviour 
		return false;
	};

})(); 