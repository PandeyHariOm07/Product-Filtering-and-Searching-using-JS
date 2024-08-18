let products = {
    data: [
        {
        productName: "Regular White TShirt",
        category: "Topwear",
        price: "30",
        image: "images/White-Tshirt.jpg",
        },
        {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "30",
        image: "images/short-skirt.jpg",
        },
        {
        productName: "Sporty Watch",
        category: "Watch",
        price: "30",
        image: "images/smart-watch.jpg",
        },
        {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "30",
        image: "images/black-leather-jacket.jpg",
        },
        {
        productName: "Stylish Yellow Trouser",
        category: "Bottomwear",
        price: "30",
        image: "images/comfy-grey-pant.jpg",
        },
        {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "30",
        image: "images/brown-jacket.jpg",
        },
        {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "30",
        image: "images/comfy-grey-pant.jpg",
        },
        {
        productName: "Knitted Tops",
        category: "Topwear",
        price: "30",
        image: "images/knitted-top.jpg",
        },
    ],
};

for(let i of products.data){
    //Create Card
    let card = document.createElement("div");
    //Card Should Have Category and should remain hidden initially
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerHTML = i.productName.toUpperCase();
    container.appendChild(name);

    //Price
    let price = document.createElement("h6");
    price.innerHTML = "$ "+i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as Category)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
            
        }
        else{
            button.classList.remove("active");
        }
    });

    //Select All Cards
    let elements = document.querySelectorAll(".card");
    //loop through all card
    elements.forEach((element) => {
        //display All Cards on 'all' button click
        if(value == "all"){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search Button Click
document.getElementById("search").addEventListener("click",() =>{
    let searchInput  = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //load through all elements
    elements.forEach((element,index)=>{
        //check if search input is in element
        if(element.innerText.toUpperCase().includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});

//Initially Display All Product
window.onload = () => {
    filterProduct("all");
}
