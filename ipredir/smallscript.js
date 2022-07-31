(function() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var c = url.searchParams.get("addr");
	var final = 'https://api.allorigins.win/raw?url=https://ipqualityscore.com/api/json/ip/iWY48acUFG4aIun9wpZkIv8WpEeTycbp/';
	final = final.concat(c);

	var urlField = final;

	var xmlHttp = new XMLHttpRequest();
    	xmlHttp.open( "GET", final, false ); // false for synchronous request
    	xmlHttp.send( null );
	document.getElementById("json").textContent = xmlHttp.responseText;
})();