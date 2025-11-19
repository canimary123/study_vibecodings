document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.getElementById('product-table-body');
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    const productForm = document.getElementById('product-form');
    const productModalLabel = document.getElementById('productModalLabel');
    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productCategoryInput = document.getElementById('product-category');
    const productPriceInput = document.getElementById('product-price');
    const productDescriptionInput = document.getElementById('product-description');

    let products = [];
    const PRODUCTS_STORAGE_KEY = 'toolkit_products'; // Changed key for this project

    // Load products from localStorage or fetch from JSON file
    const loadProducts = async () => {
        const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
        if (storedProducts) {
            products = JSON.parse(storedProducts);
        } else {
            try {
                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error('products.json 파일을 불러올 수 없습니다.');
                }
                products = await response.json();
                saveProducts(); // Save initial data to localStorage
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
        renderProducts();
    };

    // Render products in the table
    const renderProducts = () => {
        productTableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price.toLocaleString()}원</td>
                <td>${product.description}</td>
                <td>
                    <button class="btn btn-sm btn-secondary edit-btn" data-id="${product.id}" style="background: #6b7280; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;">수정</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${product.id}" style="background: #ef4444; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;">삭제</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    };

    // Show modal for adding a new product
    document.querySelector('[data-bs-target="#productModal"]').addEventListener('click', () => {
        productModalLabel.textContent = '새 제품 추가';
        productForm.reset();
        productIdInput.value = '';
    });

    // Handle form submission for both add and edit
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = productIdInput.value;
        const newProduct = {
            id: id ? parseInt(id) : Date.now(), // Use timestamp for new product ID
            name: productNameInput.value,
            category: productCategoryInput.value,
            price: parseInt(productPriceInput.value),
            description: productDescriptionInput.value,
        };

        if (id) {
            // Update existing product
            products = products.map(p => p.id === newProduct.id ? newProduct : p);
        } else {
            // Add new product
            products.push(newProduct);
        }

        saveProducts();
        renderProducts();
        productModal.hide();
    });

    // Handle edit and delete button clicks
    productTableBody.addEventListener('click', (e) => {
        const target = e.target;
        const id = parseInt(target.dataset.id);

        if (target.classList.contains('edit-btn')) {
            const product = products.find(p => p.id === id);
            if (product) {
                productModalLabel.textContent = '제품 수정';
                productIdInput.value = product.id;
                productNameInput.value = product.name;
                productCategoryInput.value = product.category;
                productPriceInput.value = product.price;
                productDescriptionInput.value = product.description;
                productModal.show();
            }
        }

        if (target.classList.contains('delete-btn')) {
            if (confirm(`ID ${id} 제품을 정말로 삭제하시겠습니까?`)) {
                products = products.filter(p => p.id !== id);
                saveProducts();
                renderProducts();
            }
        }
    });

    // Save products to localStorage
    const saveProducts = () => {
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    };

    // Initial load
    loadProducts();
});
