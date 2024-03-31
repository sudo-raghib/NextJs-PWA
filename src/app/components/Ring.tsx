import Image from "next/image";

import "./ring.css";

export function Ring() {
  return (
    <Image
      className="absolute custom-ring"
      src="/images/circle.svg"
      width={100}
      height={100}
      alt="notificationcircle"
    />
  );
}
