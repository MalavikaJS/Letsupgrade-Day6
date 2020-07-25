console.log("malu")
function multiplicationTable()
{
     var myVar = prompt("Enter the number","");
     var myString = "";
     for (i=1; i<=10; i++) {
       myString += i+ " x " +myVar+ " = " +(i*myVar)+ "\n";
     }
     alert(myString);
}
multiplicationTable();



