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
​
// Schrijf meer testen voor de functie reverse
assertTrue (tools.reverse([1,2,3,4]) == [4,3,2,1]);