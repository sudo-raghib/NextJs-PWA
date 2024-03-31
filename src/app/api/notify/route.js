import { NextResponse } from "next/server";
const wepPush = require("web-push");
import { CONFIGS } from "@/app/configs";

wepPush.setVapidDetails(
  `mailto:${CONFIGS.WEB_PUSH_EMAIL}`,
  CONFIGS.WEB_PUSH_PUBLIC_KEY,
  CONFIGS.WEB_PUSH_PRIVATE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();

    const { subscription, title, message } = body;
    const response = await wepPush.sendNotification(
      subscription,
      JSON.stringify({
        title: title || "Hello Web Push",
        message: message || "Your web push notification is here!",
      })
    );

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 500,
      err,
    });
  }
}
