function StateDecider(array) {
    let currentState="Nothing"
    let deciderRull = {
        "Nothing" : {
            "Like" : "Like",
            "Dislike" : "Dislike"
                    },

            "Like" : {
                        "Like" : "Nothing",
                        "Dislike" : "Dislike"
                                },
            "Dislike" : {
                        "Like" : "Like",
                        "Dislike" : "Nothing"
                                            }     
    }
    for (let index = 0; index < array.length; index++) {
        currentState = deciderRull[currentState][array[index]]
        }
    return currentState
}
const userActions=[]
while (true) {
    const but = prompt ("Like or Dislike (anything else will show result(you need to write first letter with Capitalletter Always !!!!))?")
    if ( ["Like","Dislike"].includes(but)) {
        userActions.push(but)
    }
    else {
        break
    }
}
alert(StateDecider(userActions))


