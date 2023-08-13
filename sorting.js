function sortList(unsortedList) {
		for (let i = 0; i < unsortedList.length; i++) {
    	if (unsortedList[i] < unsortedList[i - 1]) {      	
        const temp = unsortedList[i - 1];
	      unsortedList[i - 1] = unsortedList[i];
        unsortedList[i] = temp;
				i -= 2;
      }
    } 
    
    return unsortedList;
}

module.exports = sortList;
