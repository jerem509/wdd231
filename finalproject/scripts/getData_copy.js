
const gallery = document.querySelector('#products-gallery');
const rProd = document.querySelector("#moving-banner");
let data;

async function fetchData(aLink) {
  try {
    const response = await fetch(aLink);
    if (response.ok) {
      data = await response.json();
      return data;
    }
    else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

export async function populateGallery(aLink, condition='') {
  // ------------------ populate gallery cards for eah product -------------------
  const nudata = await fetchData(aLink);
  const fData = filterData(nudata, condition);
  fData.forEach((product) => {
    //create a card for each product in the array of products
    const card = document.createElement("div");
    card.classList.add("card");
    //populate each card
    card.innerHTML = `<div class="img-container"><img src="${product.url_image}" alt="${product.name}" loading="lazy"></div>
                  <div class="pd-info-box">
                      <div class="prod-info pd-name"><strong>Product Name : </strong><span class="info-to-fill">${product.name}</span></div>
                      <div class="prod-info"><strong>Price : </strong>$ <span class="info-to-fill">${product.price}</span></div>
                      <div class="prod-info"><strong>Available : </strong><span class="info-to-fill">${product.available}</span></div>
                  </div>`;
    //append the card to the gallery
    gallery.appendChild(card);
  });
}

export async function populateBanner(aLink) {
  // ------------------ populate the banner of recommended products -------------------
  const nudata = await fetchData(aLink);
  nudata.forEach(product => {
    const rCard = document.createElement("div");
    rCard.classList.add("rProd-container");
    if (product.available > 0) {
      rCard.innerHTML = `<img src="${product.url_image}" alt="${product.name}" loading="lazy">`;
      rProd.appendChild(rCard);
    }
  });
  
}

function filterData(data, condition="") {
  if (condition === "" || condition === "all") {
    return data;
  } else {
    const newdata = data.filter((item) => {
      item.type == condition;
    });
    console.log(newdata);
    return newdata;
  }
}