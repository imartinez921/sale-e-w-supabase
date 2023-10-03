"use client"

const productCatalog = {
    1: {itemName: "Green tea", price: 5.50},
    2: {itemName: "Rose tea", price: 5.50},
    3: {itemName: "Dark chocolate", price: 6.50},
    4: {itemName: "Resistance bands", price: 15},
}

export default function CatalogTable({productCatalog}) {
    return (
        <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {catalog.map((product) => (
            <tr key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
                <td>{product.id}</td>
                <td>{product.itemName}</td>
                <td>{product.price}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )
    }