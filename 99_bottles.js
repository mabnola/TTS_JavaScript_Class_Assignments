// 99_bottles.js

bottles = 99;

for (var i = bottles - 1; i >=0; i--) {
	bottlesNew = i+1;

	 if (i === 0) {
   	 console.log(bottlesNew + " bottles of beer on the wall. ",
	bottlesNew + " of beer. ",
	"Take one down and pass it around. Hey! We need more beer!");
 	 } else {
	 console.log(bottlesNew + " bottles of beer on the wall. ",
	bottlesNew + " of beer. ",
	"Take one down and pass it around. ",
	i + " bottles of beer on the wall.");
 	 }
};

