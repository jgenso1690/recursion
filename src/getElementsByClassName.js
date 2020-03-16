// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	result = [] 

	if (Element.className === null){
		return result;
	}

	Element.children.each{
		if (Element.children.className === className){
			result.push(Element.children);
		};
		getElementsByClassName(Element.children);
	}	

}
	/*if. el === null
		el.Nodechildren.each {
		if el.child.className == className {
			result << el.child
			
		}
		getElementsByClassName(el.child)
	}

		end 
		
	//console.log(list)
  // your code here
};


2
<body className = '1'>
	<h1 className = '2'>
		<p className = '1'>"lslads" </p>
	</h1>
	h2
<body>


body.childNodes
element.childNodes
element.children -> property of an element

document.childNodes.length -> how many childnodes theres are
*/