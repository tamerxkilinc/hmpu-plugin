document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("hmpu-plugin-iframe");

  if (!iframe) {
    console.warn(
      "hmpu-Plugin Error: Could not find the iframe. Please make sure the iframe is set and has the correct ID."
    );
    return;
  }

  window.addEventListener("message", (e) => {
    if (!e.data) {
      console.warn("hmpu-Plugin Error: Message is not defined.");
      return;
    }

    const messageType = e.data.type;

    if (!messageType) {
      console.warn("hmpu-Plugin Error: Message type is not defined.");
      return;
    }

    if (messageType === "resize") {
      iframe.style.minHeight = `${e.data.data.height + 50}px`;
    }
  });
});
