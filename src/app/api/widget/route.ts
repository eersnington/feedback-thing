import { env } from '@/env';
import { NextResponse } from 'next/server';

export async function GET() {
  const widgetScript = `
    (function() {
      var script = document.createElement('script');
      script.src = '${env.NEXT_PUBLIC_APP_URL}/widget-bundle.js';
      script.onload = function() {
        window.initFeedbackWidget();
      };
      document.head.appendChild(script);
    })();
  `;

  return new NextResponse(widgetScript, {
    headers: { 'Content-Type': 'application/javascript' },
  });
}