/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // My implementation of the function
  var count = 0; 
  var arr = preferences.slice();
  arr.unshift('shifted by 1');
  var n, k, l = 0;
  for (n = 1; n < arr.length; n++){
  	k = arr[n], l = arr[k];
    if (k != l && arr[k] == l && arr[l] == n && arr[n] == k) {
    	count++;
    	delete(arr[n]);
    }
  }
return count;
};
