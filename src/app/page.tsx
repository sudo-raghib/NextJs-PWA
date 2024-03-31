import Image from "next/image";

import { Ring } from "./components/Ring";
import { Notification } from "./components/Notification";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="flex header-container flex-col items-center justify-center mt-5">
        <h1 className="header-container title text-3xl">Lorem Ipsum...</h1>
        <p className="header-container sub-heading mt-2">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="notification-container flex justify-center items-center">
        <Ring />
        <Ring />
        <Ring />
        <Ring />
        <div className="notification-icon flex justify-center items-center">
          <Image
            src="/images/notification.svg"
            width={64}
            height={64}
            alt="notification icon"
          />
        </div>
      </div>
      <Notification />
    </main>
  );
}
