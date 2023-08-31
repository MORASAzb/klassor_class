
function displayCurrency(value) {
    value = value + ""
    let dollarBalance =0
    let centBalance=0
    index=value.indexOf(".")
    if(index < 0 )
    {
        return `$${value} , 00 cent`
    }
    dollarBalance=value.substring(0,index)
    centBalance = value.substring(index+1,value.length)
    return `$${dollarBalance} , ${centBalance} cent`
}
const value = prompt("enter Your value")
alert(displayCurrency(value))