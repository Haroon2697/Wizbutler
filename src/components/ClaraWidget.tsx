import { useCallback } from "react";
import { Mic } from "lucide-react";

export function ensureVapiScriptLoaded(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="vapi-ai/client-sdk-react"]') as HTMLScriptElement | null;
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = () => {
      // Fallback CDN (jsDelivr)
      const fallback = document.createElement("script");
      fallback.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
      fallback.async = true;
      fallback.type = "text/javascript";
      fallback.crossOrigin = "anonymous";
      fallback.onload = () => resolve();
      fallback.onerror = () => reject(new Error("Failed to load Vapi widget script from both CDNs"));
      document.head.appendChild(fallback);
    };
    document.head.appendChild(script);
  });
}

export function ensureVapiWidget(): void {
  const existing = document.querySelector("vapi-widget");
  if (existing) return;

  const widget = document.createElement("vapi-widget");
  widget.setAttribute("mode", "voice");
  widget.setAttribute("theme", "dark");
  widget.setAttribute("base-color", "#1e3a8a");
  widget.setAttribute("accent-color", "#3b82f6");
  widget.setAttribute("button-base-color", "#1d4ed8");
  widget.setAttribute("button-accent-color", "#ffffff");
  widget.setAttribute("radius", "large");
  widget.setAttribute("size", "full");
  widget.setAttribute("position", "bottom-right");
  widget.setAttribute("main-label", "TALK WITH CLARA");
  widget.setAttribute("start-button-text", "Start Call");
  widget.setAttribute("end-button-text", "End Call");
  widget.setAttribute("require-consent", "false");
  widget.setAttribute("local-storage-key", "vapi_widget_consent");
  widget.setAttribute("show-transcript", "true");
  widget.setAttribute("public-key", "ddba1cd1-b6bf-4634-80ff-4abb0427a405");
  widget.setAttribute("assistant-id", "aed2e685-88c3-429d-b9d5-f03b3245c59a");
  widget.setAttribute("button-label", "TALK WITH CLARA");
  widget.setAttribute("widget-label", "TALK WITH CLARA");

  document.body.appendChild(widget);
}

export async function openVapiWidget(): Promise<void> {
  await ensureVapiScriptLoaded();
  // Wait for the custom element definition to be registered by the script
  if (typeof (window as any).customElements?.whenDefined === "function") {
    try {
      await customElements.whenDefined("vapi-widget");
    } catch {
      // no-op
    }
  }
  ensureVapiWidget();
  // Query or create again just in case
  let w = document.querySelector("vapi-widget");
  if (!w) {
    ensureVapiWidget();
    w = document.querySelector("vapi-widget");
  }
  // Defer one frame to allow internal initialization
  await new Promise((r) => requestAnimationFrame(() => r(undefined)));
  if (w) {
    try {
      w.setAttribute("open", "true");
      // eslint-disable-next-line no-console
      console.debug("Vapi widget opened");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to open Vapi widget", e);
    }
  } else {
    // eslint-disable-next-line no-console
    console.error("Vapi widget element not found after initialization");
  }
}

export function ClaraWidget() {
  const handleClick = useCallback(async () => {
    try {
      await openVapiWidget();
      // If the widget injects its own floating button, no-op. Otherwise, keep ours visible.
    } catch (e) {
      // silently fail
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      aria-label="Talk to Clara"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-blue-600 text-white shadow-lg hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 font-sans"
    >
      <Mic className="h-5 w-5" />
      <span className="hidden sm:inline">Talk to Clara</span>
    </button>
  );
}

export default ClaraWidget;


