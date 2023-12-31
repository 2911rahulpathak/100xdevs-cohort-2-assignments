//filtering

/*  
what if I tell you given an input array, give me back all the even values
from it
*/

const arr = [1, 2, 3, 4, 5];

//[2,4]

function filteringlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans = arr.filter(filteringlogic);
