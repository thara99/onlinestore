import { Button } from "@material-ui/core";
import "./ItemPage.css";

const itemPage = () => {
    return(

        <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
					
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>

						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">men's shoes fashion</h3>
						
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span className="priceView">$180</span></h4>

						<h4 className="price">Seller Name: <span>Janitha Tharaka</span></h4>
						
						
						
						<div className="action">
							<button className="adcButton" type="button">add to cart</button>
							
                            <button className="buyNow" type="button">Buy Now</button>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
}
export default itemPage