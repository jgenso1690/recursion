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
      return "null";
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

    if (typeof obj === "function") {
	  return ;
    }

    if (Array.isArray(obj)){
	  var string = "[";

	  for (var i = 0; i<obj.length; i++){
	  	
	  	if ( i !== obj.length-1 ){
	  		string+= stringifyJSON(obj[i])+",";
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
			string.push('"'+key+'":' + value)
		}

	})
	
	return "{"+string.join(",")+"}";
  }

};
