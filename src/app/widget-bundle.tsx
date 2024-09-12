import FeedbackModal from "@/components/feedback-modal";
import React from "react";
import { createRoot } from "react-dom/client";

const EmbeddableFeedbackWidget: React.FC = () => {
  return (
    <div id="feedback-widget-root">
      <FeedbackModal />
    </div>
  );
};

declare global {
  interface Window {
    initFeedbackWidget: () => void;
  }
}

window.initFeedbackWidget = () => {
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "feedback-widget-container";
  document.body.appendChild(widgetContainer);

  const root = createRoot(widgetContainer);
  root.render(<EmbeddableFeedbackWidget />);
};

export default EmbeddableFeedbackWidget;
