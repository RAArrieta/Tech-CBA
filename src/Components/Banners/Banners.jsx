const Banners = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("./imgBanners/banner1.png")} className="d-block w-100" alt="Notebooks" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("./imgBanners/banner2.png")} className="d-block w-100" alt="Samsung" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("./imgBanners/banner3.png")} className="d-block w-100" alt="Pc TechCBA" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("./imgBanners/banner4.png")} className="d-block w-100" alt="Placas de Video" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banners;