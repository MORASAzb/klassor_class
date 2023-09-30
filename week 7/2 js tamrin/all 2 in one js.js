
function practiceOne(methodsArray,inputsArray)
    {  
        class MyHashSet {
                constructor() {
                this.set = {};
                }
            
                add(key) {
                this.set[key] = true;
                return null;
                }
            
                remove(key) {
                delete this.set[key];
                return null;
                }
            
                contains(key) {
                return this.set[key] === true;
                }
            }
        const myHashset = new MyHashSet()
        const answer =[null]
        for (let index = 0; index < methodsArray.length; index++) {
            switch (methodsArray[index]) {
                case 'add':
                    answer.push(myHashset.add(inputsArray[index]))
                    break;
                case 'remove':
                    answer.push(myHashset.remove(inputsArray[index]) )
                    break;
                case 'contains':
                    answer.push(myHashset.contains(inputsArray[index]))
                    break;
                default:
                    break;
            }             
        }
        return answer
    }


console.log(practiceOne(["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"],[[], [1], [2], [1], [3], [2], [2], [2], [2]]))


function fetchData(url) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject(new Error("Request timed out"));
      }, 5000);
  
      fetch(url)
        .then((response) => {
          clearTimeout(timeout);
  
          if (!response.ok) {
            reject(new Error(`Failed to fetch data. Status: ${response.status}`));
          }
  
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/-2';

fetchData(apiUrl)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  }); 




