function firstNonRepeatedChar(str) {
 // Write your code here
	let i=0;
	let j=1;
	while (j<str.length()) {
		if(str.charAt(i)!=str.charAt(j))
			return str.charAt(i);
		else
			i=j;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
