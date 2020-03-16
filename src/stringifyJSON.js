// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 
	if (typeof obj === "Null") {
      return null;
    }
	if (typeof obj === "Undefined") {
      return null;
    }
	if (typeof obj=== "String"){
	  return '"'+obj+'"';
    }

	if (typeof obj=== "Number") {
	  return obj;
    }

    if (Array.isArray(obj) === "Array"){
	  return '['+obj.map(function(el){
		return stringify(el)
	  }).join(",") + ']'
    }

	if (typeof obj === "Object"){
		var string = []
		Object.keys(obj).forEach(function(key) {
			var value = stringify(obj[key])
		
		if ( string !== null) {
			result.push('"'+key+'":' + val)
		}

	})
	
	return "{"+string.join(",")+"}";
  }

};
