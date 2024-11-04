import Image from "next/image"

const HomeView =()=>{
    return(
        <>
          <div className="box">
            <div className="col-4"></div>
            <div className="col-4 sign-text">
                Sign up and get 20% off on your first order.
                <a href="">Sign Up Now</a>
            </div>
            <div className="col-4">
                <Image src="../img/cross.svg" alt="" />
            </div>
        </div>

        {/* <!-- navbar --> */}
        <nav className="navbar">
            {/* <!-- Logo --> */}
            <div className="logo">Scentora</div>

            {/* <!-- Navigation Links --> */}
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Brands</a></li>
            </ul>

            {/* <!-- Search Bar --> */}
            <div className="search-bar">
                <input type="text" placeholder="Search for products..."/>
                <span className="search-icon"><Image src="/home/page/assets/icons/search-icon.png" alt=""/></span>
            </div>

            {/* <!-- Icons (Wishlist, Cart, Profile) --> */}
            <div className="icons">
                <div className="icon wishlist">
                    <span><Image src="../assets/icons/Vector.png" alt=""/></span>
                    <span className="badge">2</span>
                </div>
                <a href="../cart/cart.html">
                    <div className="icon cart">
                        <span><Image src="../assets/icons/Cart1.png" alt=""/></span>
                        <span className="badge">4</span>
                    </div>
                </a>
                <div className="icon profile">
                    <span><Image src="../assets/icons/person.png" alt=""/></span>
                </div>
            </div>
        </nav>

        <div className="main-content-wrapper">
            {/* <!-- Explore Block --> */}
            <div className="explore-block">
                <div className="image-container">
                    <Image src="../img/img-2.svg" alt="Explore Image" className="full-width-image" />
                </div>
            </div>
            {/* <!-- Explore Block --> */}

            {/* <!-- section left --> */}

            {/* <!-- Our Collections --> */}
            <div className="collections">
                <div className="collection-left">
                    <div className="left-box">
                        <div className="filter-main">
                            <p className="top-filter">Filter</p>
                            <p className="top-clear">Clear All</p>
                        </div>

                        <div>
                            <div className="tag">
                                <div>
                                    <span className="tag-text">Armani Code</span>
                                    <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="d-flex gp-10">
                                <div className="tag">
                                    <div>
                                        <span className="tag-text">Cool water</span>
                                        <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                </div>

                                <div className="tag">
                                    <div>
                                        <span className="tag-text">CK</span>
                                        <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Gucci Bloom</span>
                                    <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Lataffa</span>
                                    <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Channel No.5</span>
                                    <Image src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom">
                            <hr className="hr" />
                        </div>

                        <div className="">
                            <div className="gender-feild">
                                <div>Gender</div>
                                <Image src="../img/right-arrow.svg" alt="" />
                            </div>

                            <div className="gender-feild">
                                <div>Discount</div>
                                <Image src="../img/right-arrow.svg" alt="" />
                            </div>

                            <div className="gender-feild">
                                <div>Price</div>
                                <Image src="../img/right-arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className="border-bottom">
                            <hr className="hr" />
                        </div>

                        <div className="brand-wrapper">
                            <div className="brand-title">Brands</div>

                            <input type="text" placeholder="   Search Brand" className="search-field" />
                            {/* <!-- Search field --> */}

                            <div>
                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Ajmal
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Armani Code
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Cool water
                                    </label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Channel No. 5
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Calvin Klein
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Gucci Bloom
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        Lataffa
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        {/* <!-- Checkbox --> */}
                                        La French
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- section right our collections --> */}
                <div className="collection-right">
                    <div className="our-collections">Our Collections</div>
                    <div className="results-info">
                        <div className="results-count">Showing 06 results</div>
                        <div className="sort-by">
                            <span>Sorted by : <b>Popularity</b>
                                <Image className="mt-50" src="../img/down-arrow.svg" alt="" />
                            </span>
                        </div>
                    </div>

                    <div className="className-card">
                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/pf-1.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">DAVIDOFF</div>
                                <p className="sub-head-1">Cool Water Eau De Toilette for Men</p>
                                <p className="price">$ 40</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/sp-2.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">LATAFFA</div>
                                <p className="sub-head-1">Eau de Parfum</p>
                                <p className="price">$ 80</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/sp-3.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">CALVIN KLEIN</div>
                                <p className="sub-head-1">Cool Water Eau De Toilette for Men</p>
                                <p className="price">$ 50</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="className-card">
                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/sp-4.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">GIORGIO ARMANI</div>
                                <p className="sub-head-1">Code Le Parfum</p>
                                <p className="price">$ 120</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/sp-5.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">GUCCI</div>
                                <p className="sub-head-1">Bloom EDP Intense Eau de Parfum</p>
                                <p className="price">$ 100</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <Image src="../img/sp-6.svg" alt="Product" className="product-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                                <div className="heart-wrapper">
                                    <Image src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>

                                <div className="badge-wrapper">
                                    <Image src="../img/badge.svg" alt="Heart" className="badge-wrapper" />
                                    {/* <!-- Replace with your image source --> */}
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">Chanel No 5</div>
                                <p className="sub-head-1">Eau de Parfum</p>
                                <p className="price">$ 150</p>
                                <a href="../cart/cart.html">
                                    <button className="buy-button">Add to Cart</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Collections --> */}
        </div>


        {/* <!-- footer --> */}
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Scentora</h2>
                    <p>
                        We have perfumes that suits your <br />style and which you’re proud.
                    </p>
                    <div className="social-icons">
                        <a href="#"><Image src="../assets/icons/twitter.png" alt="" /></a>
                        <a href="#"><Image src="../assets/icons/fb2.png" alt="" /></a>
                        <a href="#"><Image src="../assets/icons/insta.png" alt="" /></a>
                        <a href="#"><Image src="../assets/icons/git.png" alt="" /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>FAQ</h3>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Manage Deliveries</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Payments</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Scentora © 2000-2023, All Rights Reserved</p>
                <div className="payment-icons">
                    <Image src="../assets/icons/visa.png" alt="Visa" />
                    <Image src="../assets/icons/master.png" alt="MasterCard" />
                    <Image src="../assets/icons/paypal.png" alt="PayPal" />
                    <Image src="../assets/icons/applepay.png" alt="Apple Pay" />
                    <Image src="../assets/icons/gpay.png" alt="Google Pay" />
                </div>
            </div>
        </footer>
        </>
    )
}
export default HomeView