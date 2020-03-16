// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	
	
  var arr = [];
  var body = document.body;
  var parent = body;
  // console.log('current: ' )
  if (parent.classList.contains(className)) {
    arr.push(parent);
  }
  function loop(parent) {

    if (!arr.includes(parent) && parent.classList.contains(className)) {
      arr.push(parent);
    }

    var children = Array.from(parent.childNodes).filter(item => item.nodeType != Node.TEXT_NODE);

    if (children.length !== 0 || children !== undefined) {
      for (let i = 0; i < children.length; i ++) {

        if (children[i].classList.contains(className)) {
          arr.push(children[i]);
        }

        var grandchildren = Array.from(children[i].childNodes).filter(item => item.nodeType != Node.TEXT_NODE);
        if (grandchildren.length !== 0 && grandchildren !== undefined) {
          for (let j = 0; j < grandchildren.length; j ++) {
            loop(grandchildren[j]);
          }
        }
      }

    }

  }
  loop(body);
  return arr;
}
  // your code here

