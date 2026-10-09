FAVOURED ARCH — CUSTOM PORTRAIT SKETCH WEBSITE

1. Open index.html in a browser (or use VS Code Live Server).
2. The included images/ folder contains self-contained SVG placeholder artwork so the site works immediately.
3. Replace those SVGs with your real artwork later if desired; update the src paths in index.html accordingly.
4. IMPORTANT: Open script.js and replace:
   const whatsappNumber = "919876543210";
   with your real WhatsApp number, country code included, without +, spaces or dashes.

Example:
const whatsappNumber = "919876543210";

The order form validates the image upload, shows a preview, and opens WhatsApp with the order details. Browsers cannot automatically attach the selected local photo to WhatsApp, so the customer is instructed to send the reference photo separately.
