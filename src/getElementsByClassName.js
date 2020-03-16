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

	element.childNodes.forEach(function(element){
		if (element.className === className){
			result.push(element);
		};
		getElementsByClassName(element);
	})	
return result
}
