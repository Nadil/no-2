function swap(...arr) {
    console.log(arr)
    let length = arr.length;
    for(i=0; i < length; i++){
         let next = i+1;
         let before = i-1;
         
	 if(arr[next] < arr[i]){
         [arr[next],arr[i]] = [arr[i], arr[next]]
	     console.log("[" + i + "," + next + "]" + "->" + arr);
         return arr;
	 } else if(arr[before] > arr[i]) {
	     arr[before] = arr[i];
	     console.log("[" + arr[i] + "," + arr[next] + "]" + "->" +  arr);
         return arr;
	 }
    }
    return arr;
}