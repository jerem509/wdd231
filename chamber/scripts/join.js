const url = "scripts/data/membershiplevel.json";
const dialogBox = document.querySelector("#dialog-box");
const benefitsList = document.querySelector("#benefits-list");
const membershipName = document.querySelector("#membership-name");
const closeBtn = document.querySelector("#close-btn");

const np = document.querySelector('#np-level');
const bronze = document.querySelector("#bronze-level");
const silver = document.querySelector("#silver-level");
const gold = document.querySelector("#gold-level");

np.addEventListener('click', () => {
    showMembership("NP");
    dialogBox.showModal();
    membershipName.classList = 'np-level';
})

bronze.addEventListener("click", () => {
    showMembership("Bronze");
    dialogBox.showModal();
    membershipName.classList = "bronze-level";
});

silver.addEventListener("click", () => {
    showMembership("Silver");
    dialogBox.showModal();
    membershipName.classList = "silver-level";
});

gold.addEventListener("click", () => {
    showMembership("Gold");
    dialogBox.showModal();
    membershipName.classList = "gold-level";
});

closeBtn.addEventListener("click", () => {
    dialogBox.close();
});

async function showMembership(level) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembership(data, level);
  } catch (error) {
    console.error(error);
  }
}

function displayMembership(membershipsData, level) {
    benefitsList.innerHTML = "";
    membershipName.innerHTML = '';
    membershipName.textContent = membershipsData[level].name;
    const benefitsArray = membershipsData[level].benefits;
    console.log(benefitsArray);
    benefitsArray.forEach((element) => {
      const li = document.createElement("li");
        li.innerHTML = element;
        // li.style.listStyleType = 'circle';
      benefitsList.appendChild(li);
    });
}