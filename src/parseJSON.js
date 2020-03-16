// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
	 result = {}
  "{a:1, {e:4}, b:2}" ||||| "e:4"
  "a:1, {e:4}, b:2"  obj.s plit(", ")
  ["a:1", "{e:4}" "b:2"]forEach |el|
  if  el[0] == "{" && el[-1] == "}"
  	parse(el)
  	b = el.split(:)
  	"
  	result[b[0]] = b[1]
  // your code goes here
};
