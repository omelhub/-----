export function getProducts() {
    return fetch(`https://dummyjson.com/products`)
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => console.error('Error:', error));
}

export function getCategories() {
    return fetch(`https://dummyjson.com/products/categories`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export function fetchProductsByCategory(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => console.error('Error:', error));
}

export function fetchSearchByProducts(searchQuery) {
    return fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => console.error('Error:', error));
}
