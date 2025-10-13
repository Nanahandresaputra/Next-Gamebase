import { config } from "@/config";
import { NextResponse } from "next/server";

//https://www.gamespot.com/api/reviews/?api_key=6ea53aaf90e2377ec0dece60794b8d4bb85ccd0d&limit=10&format=json&sort=publish_date:desc&filter=categories:18,associations:19

export const GET = async () => {
  try {
    const response = await fetch(
      ` ${config.baseUrlGameSpot}/reviews?api_key=${config.keyGamespot}&limit=10&format=json&sort=publish_date:desc&filter=categories:18,associations:19`
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  } catch (error) {
    console.error("Error fetching GameSpot API:", error);
  }
};
