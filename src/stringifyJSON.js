// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 console.log(typeof obj)
	if (typeof obj === "null") {
      return null;
    }
	if (typeof obj === "undefined") {
      return null;
    }
	if (typeof obj === "string"){
	  return '"'+obj+'"';
    }

	if (typeof obj === "number") {
	  return obj;
    }

    if (Array.isArray(obj) === "array"){
	  return '['+obj.map(function(el){
		return JSONstringify(el)
	  }).join(",") + ']'
    }

	if (typeof obj === "object"){
		var string = []
		Object.keys(obj).forEach(function(key) {
			var value = stringifyJSON(obj[key])
		
		if ( string !== null) {
			result.push('"'+key+'":' + val)
		}

	})
	
	return "{"+string.join(",")+"}";
  }

};
