export function setSectionSelection(item) {
    const sectionSelect = document.querySelector("#sectionNumber");
    item.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.sectionNumber;
      option.textContent = `${section.sectionNumber}`;
      sectionSelect.appendChild(option);
    });
}
