var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

var leftColumn = document.getElementById('leftcolumn')
var rightColumn = document.getElementById('right-column');

 

var productImg = document.createElement('img');
productImg.className = 'product-img';
productImg.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
leftColumn.appendChild(productImg);
productDescription = document.createElement('div');
clothName = document.createElement('h1');
clothName.className = "name";
clothName.innerText = "Men Navy Blue Solid Sweatshirt";
productDescription.appendChild(clothName);
clothBrand = document.createElement('h4');
clothBrand.className = "brand";
clothBrand.innerText = "United Colors of Benetton";
productDescription.appendChild(clothBrand);
clothPrice = document.createElement('h3');
clothPrice.className = "price";
clothPrice.innerText = "Price:Rs 2599";
productDescription.appendChild(clothPrice);
descripTion = document.createElement('div');
descriptionHeader = document.createElement('h3');
descriptionHeader.innerText = "Description";
descriptionContent = document.createElement('p');
descriptionContent.innerText = "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
descripTion.appendChild(descriptionHeader);
descripTion.appendChild(descriptionContent);
productDescription.appendChild(descripTion);
rightColumn.appendChild(productDescription);
productPreview = document.createElement('div')
productPreview.className = "product-preview";
productImgheader = document.createElement('h3');
productImgheader.innerText = " Product Preview";
productPreview.appendChild(productImgheader);
productPreviewImg = document.createElement('div');
productPreviewImg.className = "previewImg"
img1 = document.createElement('img');
img1.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
img2 = document.createElement('img');
img2.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
img3 = document.createElement('img');
img3.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
img4 = document.createElement('img');
img4.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
img5 = document.createElement('img');
img5.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
productPreviewImg.appendChild(img1);
productPreviewImg.appendChild(img2);
productPreviewImg.appendChild(img3);
productPreviewImg.appendChild(img4);
productPreviewImg.appendChild(img5);
productPreview.appendChild(productPreviewImg);
productDescription.appendChild(productPreview);
button = document.createElement('button')
button.innerText = 'Add to cart';
rightColumn.appendChild(button);


function changeImage(){
    img1.addEventListener("click", function() {
        productImg.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
        img1.classList.add('active');
    });
    img2.addEventListener("click", function() {
        productImg.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
        img2.classList.add('active');
    });
    img3.addEventListener("click", function() {
        productImg.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
        img3.classList.add('active');
    });
    img4.addEventListener("click", function() {
        productImg.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
        img4.classList.add('active');
    });
    img5.addEventListener("click", function() {
        productImg.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
        img5.classList.add('active');
    });
}
changeImage();
$(document).on("click", ".previewImg img", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });




