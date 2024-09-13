// widget.ts
import FeedbackWidget from "@/components/feedback-widget";
import React from "react";
import { createRoot } from "react-dom/client";

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

      const root = createRoot(mountPoint);
      root.render(
        <React.StrictMode>
          <FeedbackWidget projectId={projectId} />
        </React.StrictMode>,
      );
    } else {
      console.error("Shadow root is null");
    }
  }
}

if (typeof window !== "undefined") {
  window.customElements.define("feedbackthing-widget", FeedbackThingWidget);
}
