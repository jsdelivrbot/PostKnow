class QuickSort {

	constructor(data){
		this._data = data;
	}

	//swap elements position
	_swap(items, firstIndex, secondIndex){
		let temp = items[firstIndex];
		items[firstIndex] = items[secondIndex]
		items[secondIndex] = temp;
	}

}

module.exports = { QuickSort };
