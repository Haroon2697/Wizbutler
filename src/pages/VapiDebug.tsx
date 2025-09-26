import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function VapiDebug() {
  const [status, setStatus] = useState<{
    scriptLoaded: boolean;
    widgetExists: boolean;
    logs: string[];
  }>({
    scriptLoaded: false,
    widgetExists: false,
    logs: [],
  });

  const addLog = (message: string) => {
    setStatus((prev) => ({
      ...prev,
      logs: [...prev.logs, `${new Date().toISOString().split("T")[1].split(".")[0]} - ${message}`],
    }));
  };

  const checkVapiStatus = () => {
    addLog("Checking Vapi status...");
    const scriptExists = !!document.querySelector('script[src*="vapi-ai/client-sdk-react"]');
    setStatus((prev) => ({ ...prev, scriptLoaded: scriptExists }));
    addLog(`Vapi script in DOM: ${scriptExists}`);
    const widgetExists = !!document.querySelector("vapi-widget");
    setStatus((prev) => ({ ...prev, widgetExists }));
    addLog(`Vapi widget element exists: ${widgetExists}`);
    const customElements = document.querySelectorAll("vapi-widget");
    addLog(`Found ${customElements.length} vapi-widget elements`);
    const windowKeys = Object.keys(window).filter((key) => key.toLowerCase().includes("vapi"));
    addLog(`Window properties containing 'vapi': ${windowKeys.join(", ") || "none"}`);
  };

  const manuallyCreateWidget = () => {
    addLog("Manually creating Vapi widget...");
    try {
      const existingWidgets = document.querySelectorAll("vapi-widget");
      existingWidgets.forEach((widget) => widget.remove());
      const widget = document.createElement("vapi-widget");
      widget.setAttribute("mode", "voice");
      widget.setAttribute("theme", "dark");
      widget.setAttribute("base-color", "#000000");
      widget.setAttribute("accent-color", "#9c8f00");
      widget.setAttribute("button-base-color", "#000000");
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
      widget.setAttribute("call-button-label", "TALK WITH CLARA");
      widget.setAttribute("widget-label", "TALK WITH CLARA");
      document.body.appendChild(widget);
      addLog("Widget created and added to DOM with updated configuration");
      setTimeout(checkVapiStatus, 1000);
    } catch (error) {
      addLog(`Error creating widget: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const loadVapiScript = () => {
    addLog("Loading Vapi script...");
    const existingScript = document.querySelector('script[src*="vapi-ai/client-sdk-react"]');
    if (existingScript) {
      existingScript.remove();
      addLog("Removed existing script");
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      addLog("Script loaded successfully");
      setTimeout(() => {
        checkVapiStatus();
        manuallyCreateWidget();
      }, 1000);
    };
    script.onerror = () => {
      addLog("Failed to load script");
    };
    document.head.appendChild(script);
    addLog("Script added to DOM");
  };

  useEffect(() => {
    checkVapiStatus();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Vapi Widget Debug</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className={`w-6 h-6 rounded-full mr-2 ${status.scriptLoaded ? "bg-green-500" : "bg-red-500"}`}></span>
              Script Loaded: {status.scriptLoaded ? "Yes" : "No"}
            </li>
            <li className="flex items-center">
              <span className={`w-6 h-6 rounded-full mr-2 ${status.widgetExists ? "bg-green-500" : "bg-red-500"}`}></span>
              Widget Exists: {status.widgetExists ? "Yes" : "No"}
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="space-y-4">
            <Button onClick={checkVapiStatus} className="w-full">Check Status</Button>
            <Button onClick={loadVapiScript} className="w-full">Load Script</Button>
            <Button onClick={manuallyCreateWidget} className="w-full">Create Widget</Button>
          </div>
        </div>
      </div>
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm">
        <h2 className="text-xl font-semibold mb-4 text-white">Debug Log</h2>
        <div className="h-64 overflow-y-auto">
          {status.logs.map((log, index) => (
            <div key={index} className="mb-1">&gt; {log}</div>
          ))}
        </div>
      </div>
      <div className="mt-8 p-6 border border-blue-300 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Current Configuration</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-800">
          <li>Accent Color: #9c8f00 (darker gold)</li>
          <li>Button Text: "Start Call" / "End Call"</li>
          <li>Consent Required: false</li>
          <li>Main Label: "TALK WITH CLARA"</li>
          <li>Theme: Dark with black base</li>
        </ul>
      </div>
    </div>
  );
}


