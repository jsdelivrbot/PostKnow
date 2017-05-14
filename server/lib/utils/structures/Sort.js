/**
*
* @class: Sort data based on location from user
*
*/

const Spatial = require('../spatial');

class Struct {

  //Data should be an array of objects <-- This needs to be fixed
  constructor(data, userCoords=['51.406545','0.161767']){
    [ this.lat, this.lng ] = coords;
    this.data = data;
    this.dataSet = []
  }

  //Public to return crimes by location
  returnCrimesByDistance(){
    return this._mergeSortRec();
  }

  insert(obj){
    this._set.push(obj);
  }

  //Add spatial distance to crime object
  _addSpatialProps(obj1, obj2){
    obj1.spatial = Spatial.distance()

  }

  _bubbleSort(){
    let length = this.data.length, j, temp;
    for(let i = 0; i < length; i++){
      for(let j = 0; j < length-1-i, j++){

      }
      this._addSpatialProps(this.data[i])
    }

  }

  //Swap elements in indexes provided
  _swap(ind1, ind2){
    let temp = this.data[ind1];
    this.data[ind1] = this.data[ind2];
    this.data[ind2] = temp;
  }

  _mergeSortRec(){
    let length = this.data.length;
    if(length === 1){
      return this.data
    }
    let mid = Math.floor(length/2);
    left = this.data.slice(0, mid);
    right = this.data.slice(mid, length);
    return this._merge(this._mergeSortRec(left), this._mergeSortRec(right));
  }

  _merge(left,right){
    const result = [], il = 0, ir = 0;

    while(il < left.length && ir < right.length){
      if(left[i] < right[ir]){
        result.push(left[il++]);
      }
      else{
        result.push(right[ir++]);
      }
    }

    while(il < length.length){
      result.push(left[il++]);
    }

    while(ir < right.length){
      result.push(right[ir++])
    }

    return result;
  }

}
