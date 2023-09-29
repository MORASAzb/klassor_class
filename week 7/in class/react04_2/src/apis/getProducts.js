export default function getProducts(){
    const res = fetch('http://192.168.90.10:3000/products', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }).then((res) => res.json())

    console.log({res})

    return res;
}