# Happy MPU Plugin

## Installation
Include the necessary script tag and iframe in your HTML file. Here are examples for different website frameworks.
Please make sure that the iframe has the ID `hmpu-plugin-iframe`.

### Iframe

#### Configuration
Add one of the snippets below to your website to display the iframe. Replace `{YOUR_IFRAME_URL}` with the URL of the iframe.

#### Embedding

Include this to the end of your HTML body.
```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/tamerxkilinc/hmpu-plugin@main/dist/hmpu-plugin.min.js"></script>
```

Put this where you want to display the iframe. Replace YOUR_IFRAME_URL with the URL of the iframe.
```html
    <iframe
        id="hmpu-plugin-iframe"
        width="100%"
        src="YOUR_IFRAME_URL"
        style="border:none;"
    ></iframe>
```

### Tags

#### Configuration
Add one of the snippets below to your website to display the tags. Replace `{CONSULTANT_ID}` with the id of the consultant.

#### Embedding
```html
    <div class="hmpu-consultant-tag" data-consultant-id="{CONSULTANT_ID}"></div>
```
Put this where you want to display the consultant's tags.