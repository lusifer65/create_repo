function validateform(){
    var name=document.f1.productName.value;
    var price=document.f1.price.value;
    var quantity=document.f1.quantity.value;
    var rating=document.f1.rating.value;
    var discount=document.f1.discount.value;
    var purchaseDate=document.f1.purchaseDate.value;
    var supplierEmail=document.f1.supplierEmail.value;
    var supplierPhone=document.f1.supplierPhone.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name==null || name=="" || name.length<3)
        {
            alert("Product name is empty");
            return false;
        }
    else if(price<1 || price >500000)
    {
        alert("range of price is invalid");
        return false;
    }
    else if(quantity<1 || quantity>1000)
    {
        alert("range of quantity is invalid");
        return false;
    }
    else if(rating<1 || rating>5)
    {
        alert("invalid rating");
        return false;
    }
    else if(discount<1 || discount>100 || discount==NaN)
    {
        alert("invalid discount");
        return false;
    }

    else if((supplierEmail.match(mailformat)))
    {
        alert("invalid email id");
        return false;
    }
    
}