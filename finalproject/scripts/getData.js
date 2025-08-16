const myModal = document.querySelector('#my-modal');
const gallery = document.querySelector('#products-gallery');
const rProd = document.querySelector("#moving-banner");


export async function fetchData(aLink, fn, condition='') {
    try {
        const response = await fetch(aLink);
        if (response.ok) {
            const data = await response.json();
            filterData(data, fn, condition);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export function populateGallery(product) {
  // ------------------ populate gallery cards for eah product -------------------
  //create a card for each product in the array of products
  const card = document.createElement("div");
  card.classList.add("card");
  //populate each card
  card.innerHTML = ` <div class="img-container"><img src="${product.url_image}" alt="${product.name}" loading="lazy"></div>
                      <div class="pd-info-box">
                          <div class="prod-info pd-name"><strong>Product Name : </strong><span class="info-to-fill">${product.name}</span></div>
                          <div class="prod-info"><strong>Price : </strong>$ <span class="info-to-fill">${product.price}</span></div>
                          <div class="prod-info"><strong>Available : </strong><span class="info-to-fill">${product.available}</span></div>
                      </div>`;
  //append the card to the gallery
  gallery.appendChild(card);
  card.addEventListener('click', () => {
    myModal.innerHTML = ` <div class="img-container"><img src="${product.url_image}" alt="${product.name}" loading="lazy"></div>
                        <button id="close-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />  
                          </svg>
                        </button>
                        <div class="pd-info-box">
                            <div class="prod-info pd-name"><strong>Product Name : </strong><span class="info-to-fill">${product.name}</span></div>
                            <div class="prod-info"><strong>Description : </strong><span class="info-to-fill">${product.description}</span></div>
                        </div>`;
    myModal.showModal();

    const closeBtn = document.querySelector("#my-modal #close-btn");
    closeBtn.addEventListener("click", () => {
      myModal.close();
    });
  });

}

export function populateBanner(product) {
    // ------------------ populate the banner of recommended products -------------------
    const rCard = document.createElement("div");
    rCard.classList.add("rProd-container");
    if (product.available > 0) {
        rCard.innerHTML = `<img src="${product.url_image}" alt="${product.name}" loading="lazy">`;
        rProd.appendChild(rCard);
    }
}

function filterData(data, fn, condition="") {
    if (condition === "" || condition === "all") {
      data.forEach((product) => {
        fn(product);
      });
    } else {
      const newdata = data.filter((item) => {
        item.type === condition;
      });
      console.log(newdata);
      newdata.forEach((product) => {
        fn(product);
      });
    }
}
