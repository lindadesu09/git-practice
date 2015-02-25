// Ajax: Load the text when the text-link is clicked without refresh the page

(function() {

	var link = document.getElementsByTagName("a")[0];

	//Create Ajax request Object
	link.onclick = function() {
		var xhr = new XMLHttpRequest();
		//Call back function

		xhr.onreadystatechange = function() {
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {

				//create container to hold the text
				var body = document.getElementsByTagName("body")[0];
				var p = document.createElement("p");
				var pText = document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p);
			}
		};

		//Open the request
		xhr.open("GET", "files/ajax.txt", true);
		//Send the request
		xhr.send(null);

		return false;
	};

})();
