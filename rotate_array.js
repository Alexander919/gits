function rotate(arr) {
	for (let i = 0; i < arr.length; i++) {
  	let save = arr[0];
      {//explicit scope to bind 'j'(can be omitted though)
       let j = 1;
       for (j; j < arr.length; j++) {
  			arr[j-1] = arr[j];
 		}
  		 	arr[j-1] = save; 
      }//end of explicit scope
  	console.log(arr);
	}
}
let arr = [10, 20, 30, 40, 50, 60];
rotate(arr);
