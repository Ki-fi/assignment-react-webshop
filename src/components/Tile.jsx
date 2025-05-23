

function Tile({ isImage, image, title, children }){
    if(isImage === true) {
        return (
            <section>
            <img src={image} alt="brand-image"/>
            </section>
        )
    } else {
        return (
            <>
            <section>
            <h2>{title}</h2>
            {children}
            </section>
            </>
        )
    }
}

export default Tile;