
function Product( {tag, image, name, price} ) {
    return (
        <article>
            <span>{tag}</span>
            <img src={image} alt="handbag-image"/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product;