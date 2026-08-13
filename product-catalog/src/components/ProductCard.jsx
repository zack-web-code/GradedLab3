function ProductCard({ product }) {
    return (
        <article className='product-card'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
        </article>
    )
}

export default ProductCard