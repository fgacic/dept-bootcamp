//CHANGE THIS
var pyramidHeight = 4;

var k = pyramidHeight - 1;
for (var i = 0; i < pyramidHeight; i++) {
  var counter = 1;
  for (var j = 0; j < k; j++) {
    process.stdout.write("  ");
  }
  for (var j = 0; j < i * 2 + 1; j++) {
    if ((i * 2 + 1) / 2 > j)
      if (i != 0 && j != 0)
        process.stdout.write("," + (pyramidHeight * 2 - i * 2 - 1 + j));
      else process.stdout.write("" + (pyramidHeight * 2 - i * 2 - 1 + j));
    else {
      if (i != 0 && j != 0)
        process.stdout.write(
          "," + (pyramidHeight * 2 - i * 2 - 1 + j - counter * 2)
        );
      else
        process.stdout.write(
          "" + (pyramidHeight * 2 - i * 2 - 1 + j - counter * 2)
        );
      counter++;
    }
  }
  for (var j = 0; j < k; j++) {
    process.stdout.write(" ");
  }
  k--;
  console.log();
}
