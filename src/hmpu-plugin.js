document.addEventListener("DOMContentLoaded", function () {
  hmpuIframeSettings();
  renderConsultantTags();
});

function renderConsultantTags() {
  const consultantTagElements = document.querySelectorAll(
    ".hmpu-consultant-tag-container"
  );

  if (!consultantTagElements) {
    console.warn(
      "hmpu-Plugin Error: Could not find any consultant tags. Please make sure the tags are set and have the correct class."
    );
    return;
  }

  consultantTagElements.forEach((tagElement) => {
    const consultantId = tagElement.getAttribute("data-consultant-id");

    if (!consultantId) {
      console.warn(
        "hmpu-Plugin Error: Could not find consultant ID. Please make sure the ID is set and has the correct attribute."
      );
      return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://happy-mpu.web.app/api/consultant/${consultantId}/tags`;
    xhr.open("GET", url, true);
    xhr.addEventListener("load", () => {
      if (xhr.status !== 200) {
        console.warn(
          "hmpu-Plugin Error: Could not load consultant tags. Please make sure the ID is correct."
        );
        return;
      }

      const { tags } = JSON.parse(xhr.responseText);

      let tagsHTML = "";
      tags.forEach((tag) => {
        tagsHTML += `<span class="hmpu-consultant-tag">${tag}<span class="Badge-Count">4x</span></span>`;
      });

      tagElement.innerHTML = `
        <div class="hmpu-consultant-tag-container">
            ${tagsHTML}
        </div>
        `;
    });
    xhr.send();
  });
}

function hmpuIframeSettings() {
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
}
