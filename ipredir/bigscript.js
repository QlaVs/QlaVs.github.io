var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  function doCORSRequest(options, printResult) {
	var x = new XMLHttpRequest();
	x.open(options.method, cors_api_url + options.url);
	x.onload = x.onerror = function() {
		printResult(x.responseText);
	};

	if (/^POST/i.test(options.method)) {
		x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}

	x.send(options.data);
  }

  // Bind event
(function() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var c = url.searchParams.get("addr");
	var final = 'https://ipqualityscore.com/api/json/ip/iWY48acUFG4aIun9wpZkIv8WpEeTycbp/';
    
	final = final.concat(c);
	var urlField = final;
	(function() {
		doCORSRequest({ method: this.id === 'post' ? 'POST' : 'GET', url: urlField},
		function printResult(result) { document.getElementById("json").textContent = JSON.stringify(result, undefined, 2); });
	})();
})();