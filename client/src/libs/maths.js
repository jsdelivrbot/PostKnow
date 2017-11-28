// @flow

type WeightRange = {
	low: Array<number>,
	med: Array<number>,
	high: Array<number>
};

export const weightedRange = (dataArr: Array<any>): WeightRange => {
	try {
		const range = [...new Set(filterOutliers(dataArr))];
		const min = range[0];
		const max = range[range.length - 1];
		const offenceRange = new Array(max + 1).fill(null).map((_, i) => i);
		return offenceRangeScale(min, range.length + 1, offenceRange);
	} catch (e) {
		console.log('weightedRange error', e);
		return {
			hi: Math.max(...dataArr),
			lo: Math.min(...dataArr)
		};
	}
};

export const filterOutliers = (someArray: Array<any>): Array<number> => {
	const values = someArray.concat();
	values.sort((a, b) => a - b);
	const q1 = values[Math.floor(values.length / 4)];
	const q3 = values[Math.ceil(values.length * (3 / 4))];
	const iqr = q3 - q1;
	const maxValue = q3 + iqr * 1.5;
	const minValue = q1 - iqr * 1.5;
	return values.filter(x => x < maxValue && x > minValue);
};

const offenceRangeScale = (
	min: number,
	length: number,
	array: Array<any>
): WeightRange => ({
	low: array.slice(min, Math.floor(length / 3)),
	med: array.slice(Math.floor(length / 3), Math.floor(2 * (length / 3))),
	high: array.slice(Math.floor(2 * (length / 3)), length)
});

/* Most recent -->

const weightedRange = (dataArr) => {
 try {
   // create unique sorted figures
   const range = [...new Set(dataArr.sort((a, b) => a - b))];
   const median = range[(range.length - 1) / 2];

   // Get lower and higher array medians based on initial median
   const lowerMedianArray = range.slice(0, median);
   const higherMedianArray = range.slice(median, range.length - 1);

   // Get the median of the hogher and lower arrays
   const lowPoint = lowerMedianArray[(lowerMedianArray.length - 1) / 2];
   const highPoint = higherMedianArray[(higherMedianArray.length - 1) / 2];

   console.log(lowPoint,highPoint)

   return lowDem(condensedScale(lowPoint, highPoint, range[0]));
 } catch (e) {
   console.log(e);
   return {
     hi: Math.max(dataArr),
     lo: Math.min(dataArr)
   };
 }
};

const getMedian = (array) => array[(array.length - 1) / 2];

const condensedScale = (
 lo,
 hi,
 firstValue
)  => ({
 hi: hi + 1.5 * (hi - lo),
 lo: firstValue
});

const lowDem = ({ lo, hi }) => console.log('hjh ', hi, ' ,,, ', lo) || ({
 low: Math.floor(lo + ((hi-lo)/3))

})


console.log(weightedRange(streets))

/* -->


/*

const streets = [9,2,4,3,5,4,2,4,0,0,1,5,7,8,27,45];

//const sum = streets.reduce((total, amount) =>total+ amount);
//const sort = streets.sort()
//console.log(new Set(sort))

/*
const median = {
  HI: 0,
  LOW: 0
}

const weightedRange = (dataArr) => {

  /*
  const range = [...new Set(dataArr.sort((a,b) => a - b))];
  console.log(range[0])
  const median = range[(range.length-1)/2];
  const lowerMedianArray = range.slice(0, median)
  const higherMedianArray = range.slice(median, range.length -1);
  const lLowerMed = lowerMedianArray[(lowerMedianArray.length-1)/2]
  const hHigherMed = higherMedianArray[(higherMedianArray.length-1)/2]
  const hiLo = computeOutliers(lLowerMed, median, hHigherMed);
//console.log( lLowerMed, higherMedianArray,hHigherMed)
  return median;
}

const computeOutliers = (lo,med,hi) => {
  console.log(lo,med,hi);
  const iqr = hi - lo;
  const lowerThresh = lo - 1.5 * iqr;
  const higherThresh = hi + 1.5 * iqr;
  console.log('-- ', lowerThresh, ' -- ', higherThresh)
}

console.log('....', )

 const weightedRange = (dataArr) => {
	try {
		// create unique sorted figures
		const range = [...new Set(dataArr.sort((a, b) => a - b))];
		const median = range[(range.length - 1) / 2];

		// Get lower and higher array medians based on initial median
		const lowerMedianArray = range.slice(0, median);
		const higherMedianArray = range.slice(median, range.length - 1);

		// Get the median of the hogher and lower arrays
		const lowPoint = lowerMedianArray[(lowerMedianArray.length - 1) / 2];
		const highPoint = higherMedianArray[(higherMedianArray.length - 1) / 2];

		console.log(lowPoint,highPoint)

		return lowDem(condensedScale(lowPoint, highPoint, range[0]));
	} catch (e) {
		console.err(
			'WeightedRange provided incorrect values :: default values being used'
		);
		return {
			hi: Math.max(dataArr),
			lo: Math.min(dataArr)
		};
	}
};

const getMedian = (array) => array[(array.length - 1) / 2];

const condensedScale = (
	lo,
	hi,
	firstValue
)  => ({
	hi: hi + 1.5 * (hi - lo),
	lo: firstValue
});

const lowDem = ({ lo, hi }) => console.log('hjh ', hi, ' ,,, ', lo) ({
  lo: lo + ((hi-lo)/3)

})


console.log(weightedRange(streets))

*/
