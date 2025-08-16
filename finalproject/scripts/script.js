document.addEventListener("DOMContentLoaded", () => {
  const infoContainer = document.querySelector("#info-container");
  if (infoContainer) {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const email = params.get("email");
    const phoneNumber = params.get("phone");
    const message = params.get("message");

    infoContainer.innerHTML = `<p><strong>First Name</strong>: ${firstName};</p>
      <p><strong>Last Name</strong>: ${lastName};</p>
      <p><strong>Email</strong>: ${email};</p>
      <p><strong>Mobile Number</strong>: ${phoneNumber};</p>
      <p><strong>Message</strong>: "${message}"</p>`;
  }
});
