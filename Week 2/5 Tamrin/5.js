const anything=prompt("Anything ! ?");
const array = anything.split(","); 
array.shift(); 
array.pop();  
let result = array.join(" ");
if (result ==""){
    result=null;
}
alert(result);
