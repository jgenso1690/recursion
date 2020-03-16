// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var result = [] 
	
	if ( element.childNodes.className === null){
		return result;
	}

	var exist = function(element){
		if (element.classList && classList.includes(className)){
			result.push(element);
		};
		
		if ( element.hasChildNodes()){
			element.childNodes.forEach(exist)
		  }
	};
	exist(document.body);

	return result;
	}