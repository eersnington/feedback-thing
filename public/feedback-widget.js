// @ts-nocheck
(function () {
  const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  };

  const ensureReactLoaded = (callback) => {
    if (window.React && window.ReactDOM) {
      callback();
    } else {
      loadScript(
        "https://unpkg.com/react@18/umd/react.production.min.js",
        () => {
          loadScript(
            "https://unpkg.com/react-dom@18/umd/react-dom.client.min.js",
            callback,
          );
        },
      );
    }
  };

  class FeedbackThingWidget extends HTMLElement {
    connectedCallback() {
      const projectId = this.getAttribute("project-id");
      if (!projectId) {
        console.error("Project ID is required for the Feedback Widget.");
        return;
      }

      const container = document.createElement("div");
      this.appendChild(container);

      ensureReactLoaded(() => {
        loadScript("http://localhost:3000/feedback-widget-bundle.js", () => {
          const FeedbackWidget = window.FeedbackWidget;
          if (FeedbackWidget) {
            ReactDOM.createRoot(container).render(
              React.createElement(FeedbackWidget, { projectId }),
            );
          } else {
            console.error("FeedbackWidget component not found.");
          }
        });
      });
    }
  }

  customElements.define("feedbackthing-widget", FeedbackThingWidget);
})();
