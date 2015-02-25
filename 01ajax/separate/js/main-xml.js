//Ajax: Get data from XML 

(function() {

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {

		// 4 steps to generate Ajax function
			// Create XHR object

			var xhr = new XMLHttpRequest();


			// Callback function
				// Convert XML to HTML
			xhr.onreadystatechange = function() {
				if ((xhr.readyState == 4) && ( xhr.status == 200 || xhr.status == 304)) {

					var body = document.getElementsByTagName("body")[0];

					//Get heading value
					var heading = xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
					//createElement() the container to store the heading value
					var h2 = document.createElement("h2");
					//createTextNode
					var h2Text = document.createTextNode(heading);
					//Attach the TextNode to the Element
					h2.appendChild(h2Text);


					//Get the list value
					var list = document.createElement("ul");

					var items = xhr.responseXML.getElementsByTagName("items")[0];
					items = items.getElementsByTagName("item");

					for ( var i = 0; i < items.length ; i++) {
						var item = items[i].firstChild.nodeValue;

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
			xhr.open("GET", "files/ajax.xml", true);
			// Send Request
			xhr.send(null);


		//Prevent default behaviour 
		return false;
	};

})();