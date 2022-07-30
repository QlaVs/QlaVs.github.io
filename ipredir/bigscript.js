var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  function doCORSRequest(options) {
	var x = new XMLHttpRequest();
	x.open(options.method, cors_api_url + options.url);
	x.onload = x.onerror = function() {
		var result = JSON.parse(x.response);
		//console.log(result);
		//alert(JSON.stringify(x.response));
		//data = JSON.stringify(x.responseText, undefined, 2);
		document.getElementById("json").textContent = x.response;
	};

	if (/^POST/i.test(options.method)) {
		x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}

	x.send();
  }

(function() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var c = url.searchParams.get("addr");
	var final = 'https://ipqualityscore.com/api/json/ip/iWY48acUFG4aIun9wpZkIv8WpEeTycbp/';
	final = final.concat(c);

	var urlField = final;
	(function(){doCORSRequest({method: 'POST', url: urlField});})();
})();