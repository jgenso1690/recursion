// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var result = [] 
	
	

	var exist = function(element){
		var current = element.classList
		if (current && current.contains(className)){
			result.push(element);
		};
		
		if ( element.hasChildNodes()){
			element.childNodes.forEach(exist)
		  }
	};
	exist(document.body);

	return result;
	}