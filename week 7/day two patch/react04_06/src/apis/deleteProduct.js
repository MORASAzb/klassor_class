export default function deleteProduct(data) {
    alert(data)

    const res = fetch(`http://localhost:3000/products/${data}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify()
    }).then((res) => res.json())

    console.log({res})

    return res
}