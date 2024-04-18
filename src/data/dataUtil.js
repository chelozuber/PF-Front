
// Obtener todos los productos de la DB
export const fetchProductsFromDatabase = async () => {
    const products = await Product.findAll();
    return products;
}

// Obtener un producto por su ID de la DB
export const fetchProductsByIdFromDatabase = async (productId) => {
    const product = await Product.findByPk(productId);
    return product;
};

// Guardar un nuevo producto en la DB
export const saveProductToDatabase = async (productData) => {
    const createdProduct = await Product.create(productData);
    return createdProduct;
};

// Actualizar un producto existente en la DB
export const updateProductInDatbase = async (productId, updatedProductData) => {
    await Product.update(updatedProductData, {where: {id: productId} });
    const updatedProduct = await Product.findByPk(productId);
    return updatedProduct;
};

// Eliminar un producto de la DB
export const deleteProductFromDatabase = async (productId) => {
    const product = await Product.findByPk(productId);
    return product;
};

// Buscar producto por nombre en la DB
export const searchProductsByNameFromDatabase = async (productName) => {
    try {
        const products = await Product.findAll({
            where: {
                name: productName
            }
        });
        return products;
    } catch (error) {
        console.error('El nombre de ese producto no existe', error);
        throw error;
    }
}

// Buscar producto por marca en la DB
export const searchProductsByBrandFromDatabase = async (brand) => {
    try {
        const products = await Product.findAll({
            where: {
            brand: brand
            }
        });
        return products;
    } catch (error) {
        console.error('El producto con esa marca es inexistene')
    }
}


