import { getProducts } from "./requests.js";
import { getCategories } from "./requests.js";
import { fetchProductsByCategory } from "./requests.js";
import { fetchSearchByProducts } from "./requests.js";

const products = document.querySelector('.js-list')

getProducts().then(data => {
    data.forEach(product => {
        const productCard = createProductCard(product);
        products.innerHTML += productCard;
    });
});

getCategories().then(categories => {
    const select = document.querySelector('.js-select');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
});

select.addEventListener('change', function() {
    const selectedCategory = this.value;

    fetchProductsByCategory(selectedCategory).then(data => {
        products.innerHTML = '';
        data.forEach(product => {
            const productCard = createProductCard(product);
            products.innerHTML += productCard;
        });
    })
});

search.addEventListener('input', function() {
    const searchQuery = this.value;
    fetchSearchByProducts(searchQuery)
        .then(data => {
            products.innerHTML = '';
            data.forEach(product => {
                const productCard = createProductCard(product);
                products.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error:', error));
});

function createProductCard(product) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const price = formatter.format(product.price);

    return `
        <div class="product">
            <img class="product__img" src="${product.thumbnail}" alt="">
            <div class="product__body">
                <p class="product__price">${price}</p>
                <h2 class="product__title">${product.title}</h2>
                <p class="product__descr">${product.description}</p>
                <p class="product__brand">Brand: <span>${product.brand}</span></p>
                <p class="product__category">Category: <span>${product.category}</span></p>
                <div class="rating product__rating">
                    <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <p class="rating__value">${product.rating}</p>
                </div>
            </div>
        </div>
    `;
}
