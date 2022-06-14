//CHANGE THIS
var pyramidHeight = 6;

var k = pyramidHeight - 1;
for (var i = 0; i < pyramidHeight; i++) {
  for (var j = 0; j < k; j++) {
    process.stdout.write("  ");
  }
  for (var j = 0; j < i * 2 + 1; j++) {
    if (i != 0 && j != 0) process.stdout.write("," + (pyramidHeight - i));
    else process.stdout.write("" + (pyramidHeight - i));
  }
  for (var j = 0; j < k; j++) {
    process.stdout.write(" ");
  }
  k--;
  console.log();
}
