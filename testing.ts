class CollectionTools {
	calculateAverage ( numbers : number []) : number {
		return 0;
	}
	
	reverse (numbers : number[]): number[] {
		return numbers
	}
}
​
function assertTrue (hasSucceeded : boolean, message = "Jammer joh" ) {
	if (!hasSucceeded) {
		console.log (message);
	}
}
​
let tools = new CollectionTools();
​
// Schrijf meer testen voor de functie calculate average
assertTrue (tools.calculateAverage([1,2,3,4]) == 2.5);
assertTrue (tools.calculateAverage([1,1,1,1]) == 1);
assertTrue (tools.calculateAverage([1]) == 1);
assertTrue (tools.calculateAverage([]) == null);
​
// Schrijf meer testen voor de functie reverse
assertTrue (tools.reverse([1,2,3,4]) == [4,3,2,1]);
assertTrue (tools.reverse([11,22,33,44]) == [44,33,22,11]);
assertTrue (tools.reverse([13]) == [13]);
assertTrue (tools.reverse([]) == []);