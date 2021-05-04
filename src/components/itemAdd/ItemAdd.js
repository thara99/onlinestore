import "./ItemAdd.css"

const itemAdd = () =>{
    return(

        <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        

        <form class="form-horizontal">
        <fieldset>

        {/* <!-- Form Name --> */}
        <legend>PRODUCTS</legend>



        {/* <!-- Text input--> */}
        <div class="form-group">
            <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>  
            <div class="col-md-4">
                <input id="product_name" name="product_name" placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text"/>
            </div>
        </div>



        {/* <!-- Select Basic --> */}
        <div class="form-group">
            <label class="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
            <div class="col-md-4">
                <select id="product_categorie" name="product_categorie" class="form-control"></select>
            </div>
        </div>


        {/* <!-- Textarea --> */}
<       div class="form-group">
            <label class="col-md-4 control-label" for="product_description">PRODUCT DESCRIPTION</label>
            <div class="col-md-4">                     
                <textarea class="form-control" id="product_description" name="product_description"></textarea>
            </div>
        </div>

        {/* <!-- Text input--> */}
        <div class="form-group">
            <label class="col-md-4 control-label" for="price">PRODUCT PRICE</label>  
            <div class="col-md-4">
                <input id="price" name="price" placeholder="PRODUCT PRICE" class="form-control input-md" required="" type="text"/>
    
            </div>
        </div>


        {/* <!-- Text input--> */}
        <div class="form-group">
            <label class="col-md-4 control-label" for="author">SELLER NAME</label>  
            <div class="col-md-4">
                <input id="sName" name="author" placeholder="NAME" class="form-control input-md" required="" type="text"/>
    
            </div>
        </div>


        {/* <!-- File Button -->  */}
        <div class="form-group">
            <label class="col-md-4 control-label" for="filebutton">IMAGE</label>
            <div class="col-md-4">
                <input id="filebutton" name="filebutton" class="input-file" type="file"/>
            </div>
        </div>


        {/* <!-- Button --> */}
        <div class="form-group">
            <div class="col-md-4">
                <button id="singlebutton" name="singlebutton" class="btn btn-primary PAddBtn">ADD</button>
            </div>
        </div>

        </fieldset>
        </form>
        </div>
    )
}
export default itemAdd