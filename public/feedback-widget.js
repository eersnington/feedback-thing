// @ts-nocheck
(function () {
  // Dynamically load React and ReactDOM from CDN
  function loadScript(src, onLoad) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = onLoad;
    document.head.appendChild(script);
  }

  // Load React and ReactDOM from CDN if they are not present
  if (typeof React === "undefined") {
    loadScript("https://unpkg.com/react@18/umd/react.production.min.js", () => {
      loadScript(
        "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
        initializeWidget,
      );
    });
  } else {
    initializeWidget();
  }

  // Function to initialize and mount the React component
  function initializeWidget() {
    // Check if the custom element is already defined to avoid redefinition
    if (!customElements.get("feedbackthing-widget")) {
      class FeedbackThingWidget extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
          const projectId = this.getAttribute("project-id");
          const mountPoint = document.createElement("div");

          if (this.shadowRoot) {
            this.shadowRoot.appendChild(mountPoint);

            // Dynamically create and render the FeedbackWidget
            const root = ReactDOM.createRoot(mountPoint);
            root.render(
              React.createElement(
                React.StrictMode,
                null,
                React.createElement(window.FeedbackWidget, {
                  projectId: projectId,
                }),
              ),
            );
          }
        }
      }

      customElements.define("feedbackthing-widget", FeedbackThingWidget);
    }
  }
})();
