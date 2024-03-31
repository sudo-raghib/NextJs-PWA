"use client";

import { MouseEvent, useEffect, useState } from "react";
import { CONFIGS } from "../configs";

export function Notification() {
  const [subscription, setSubscription] = useState<PushSubscription>();

  async function pushNotification(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!subscription) {
      console.error("web push not subscribed");
      return;
    }

    await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subscription,
        title: "Digilab App Notification",
        message: "Notification sent from Digilab App",
      }),
    });
  }

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        try {
          const register = await navigator.serviceWorker.register("/sw.js");

          const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: CONFIGS.WEB_PUSH_PUBLIC_KEY,
          });

          setSubscription(subscription);
        } catch (err) {
          console.error("ServiceWorker registration failed", err);
        }
      };
      handleServiceWorker();
    }
  }, []);

  return (
    <button className="p-2 notification-btn" onClick={pushNotification}>
      Send Notification
    </button>
  );
}
