import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./NotFound.tsx";
import VayDuyetTuDong from "./pages/VayDuyetTuDong.tsx";
import VayTieuDung from "./pages/VayTieuDung.tsx";
import HoTroNoXau from "./pages/HoTroNoXau.tsx";
import VayTienOnline from "./pages/VayTienOnline.tsx";
import Blog from "./pages/Blog.tsx";
import CongTy from "./pages/CongTy.tsx";
import Registration from "./pages/Registration.tsx";
import "./globals.css";
const setupRouteChangeBridge = () => {
  if (typeof window === "undefined") {
    return;
  }
  const bridgeWindow = window as Window & {
    __coderocketRouteBridgeInitialized?: boolean;
  };
  if (bridgeWindow.__coderocketRouteBridgeInitialized) {
    return;
  }
  bridgeWindow.__coderocketRouteBridgeInitialized = true;
  const notifyParent = () => {
    try {
      window.parent?.postMessage(
        {
          type: "coderocket-route-change",
          path:
            window.location.pathname +
            window.location.search +
            window.location.hash,
        },
        "*",
      );
    } catch {
      // Ignore cross-origin access errors
    }
  };
  type HistoryMethod = typeof window.history.pushState;
  const wrapHistoryMethod = (method: "pushState" | "replaceState") => {
    const original = window.history[method] as HistoryMethod;
    window.history[method] = function (...args) {
      const result = original.apply(this, args as Parameters<HistoryMethod>);
      notifyParent();
      return result;
    } as HistoryMethod;
  };
  wrapHistoryMethod("pushState");
  wrapHistoryMethod("replaceState");
  window.addEventListener("popstate", notifyParent);
  window.addEventListener("hashchange", notifyParent);
  notifyParent();
};
setupRouteChangeBridge();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vay-duyet-tu-dong" element={<VayDuyetTuDong />} />
        <Route path="/vay-tieu-dung" element={<VayTieuDung />} />
        <Route path="/ho-tro-no-xau" element={<HoTroNoXau />} />
        <Route path="/vay-tien-online" element={<VayTienOnline />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cong-ty" element={<CongTy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);