// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 console.log(typeof obj)


	if (obj=== null) {
      return "null";
    }
	if (typeof obj === "undefined") {
      return null.toString();
    }

    if (obj === true){
    	return "true";
    }

    if (obj === false){
    	return "false";
    }

	if (typeof obj === "string"){
	  return '"'+obj+'"';
    }

	if (typeof obj === "number") {
	  return obj.toString();
    }

    if (Array.isArray(obj)){
	  var string = "[";

	  for (var i = 0; i<obj.length; i++){
	  	
	  	if ( i > 0 && i < obj.length-1){
	  		string+= stringifyJSON(obj[i])+", ";
	  	}else{
	  		string+= stringifyJSON(obj[i]);
	  	}
	  }
	  return string + "]";
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
