function middle() {
  let els = Array.from(arguments), midlry = [], num = 0;
	let arrs = els.filter(e => {
    	if (typeof e === 'number') num = e;
      	if (Object.prototype.toString.call(e) === '[object Array]')
      	return e;
    });
  	arrs.forEach(arr => {
    	for (let i = num; i < arr.length-num; i++) {
        	midlry.push(arr[i]);
        }
	});
 return midlry;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];
let arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(middle(arr1, arr2, 1, arr3));
console.log(middle(2, arr1, arr2, arr3));
console.log(middle(arr1, arr2));
//[2, 3, 4, 7, 8, 9, "b", "c", "d"]
//[3, 8, "c"]
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
