
(function () {
  // Step 1: URL se UUID lo aur session mein save karo
  const params = new URLSearchParams(window.location.search);
  const urlUUID = params.get("uuid");

  if (urlUUID) {
    sessionStorage.setItem("shinbyte_uuid", urlUUID);
  }

  // Step 2: UUID na ho toh tracking mat karo
  const uuid = sessionStorage.getItem("shinbyte_uuid");
  if (!uuid) return;

  const apiUrl =
    "https://script.google.com/macros/s/AKfycbwUUaXsV0PUqPDY6caxnkAjqZmjixakI-KAsR1nF5TN9oxA1mBF63mlh-bvh6_gmdgb/exec";

  // Step 3: Country lookup aur API request
  (async function () {
    let country = "Unknown";

    try {
      const response = await fetch(
        "https://ipapi.co/country_name/"
      );

      if (response.ok) {
        country = (await response.text()).trim();
      }
    } catch (error) {
      console.error("Country lookup failed:", error);
    }
    
    const path = window.location.pathname;
    const page = path === "/" 
    ? "Homepage" 
    : path.split("/").pop().replace(/\.html$/, "");

    const query = new URLSearchParams({
      uuid: uuid,
      country: country,
      page: page
    });

    try {
      await fetch(`${apiUrl}?${query.toString()}`, {
        method: "GET",
        mode: "no-cors"
      });
    } catch (error) {
      console.error("Tracking request failed:", error);
    }
  })();
})();
