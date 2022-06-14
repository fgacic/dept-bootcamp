var compareNumbers = (a, b) => b - a;

class Array {
  constructor() {
    (this.list = []), (this.sum = 0);
  }
  addValue(value) {
    this.list.push(value);
    this.calculateSum();
  }
  calculateSum() {
    this.sum = this.list.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }
}

//CHANGE THIS!
var numberofPartitions = 3;
var masterArray = [8, 1, 5, 2, 4, 1, 9, 8];

masterArray.sort(compareNumbers);
var list = [];
for (var i = 0; i < numberofPartitions; i++) {
  list.push(new Array());
}

while (masterArray.length > 0) {
  var shiftedValue = masterArray.shift(0);
  //search for the lower/higher sum array to put in next positive/negative value
  var nextArray = list.reduce((prev, curr) => {
    if (shiftedValue > 0) return curr.sum < prev.sum ? curr : prev;
    else return curr.sum > prev.sum ? curr : prev;
  });
  nextArray.addValue(shiftedValue);
}

list.forEach((array) => {
  console.log(array.list + " sum: ", array.sum);
});
