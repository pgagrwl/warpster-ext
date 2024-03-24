/*global chrome*/
import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css'
import App from "./App";
import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const config = {
  // For a production app, replace this with an Optimism Mainnet
  // RPC URL from a provider like Alchemy or Infura.
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "warpster.app",
  siweUri: "https://farcaster-auth-kit-vite-demo.replit.app/",
};
root.render(
  <React.StrictMode>
    <AuthKitProvider config={config}>
      <App />
    </AuthKitProvider>
  </React.StrictMode>,
);
