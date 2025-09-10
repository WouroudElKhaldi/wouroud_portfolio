// import { NextResponse } from "next/server";
// import crypto from "crypto";
// import axios from "axios";
// import { AxiosError } from "axios";

export async function GET(request: Request) {
  //   try {
  //     const { searchParams } = new URL(request.url);
  //     const coin = searchParams.get("coin") || "BTC"; // default BTC
  //     const network = searchParams.get("network") || ""; // optional
  //     const apiKey = process.env.BINANCE_API_KEY!;
  //     const apiSecret = process.env.BINANCE_API_SECRET!;
  //     const baseUrl = "https://api.binance.com";
  //     const endpoint = "/sapi/v1/capital/deposit/address";
  //     // Build params
  //     const params = new URLSearchParams({
  //       coin,
  //       timestamp: Date.now().toString(),
  //     });
  //     if (network) params.append("network", network);
  //     // Generate signature
  //     const signature = crypto
  //       .createHmac("sha256", apiSecret)
  //       .update(params.toString())
  //       .digest("hex");
  //     // Final URL
  //     const url = `${baseUrl}${endpoint}?${params.toString()}&signature=${signature}`;
  //     // Make the request
  //     const response = await axios.get(url, {
  //       headers: {
  //         "X-MBX-APIKEY": apiKey,
  //       },
  //     });
  //     return NextResponse.json(response.data);
  //   } catch (error: unknown) {
  //     if (error instanceof AxiosError) {
  //       console.error(
  //         "Binance API Error:",
  //         error.response?.data || error.message
  //       );
  //       return NextResponse.json(
  //         { error: error.response?.data || error.message },
  //         { status: 500 }
  //       );
  //     }
  //     if (error instanceof Error) {
  //       console.error("Unexpected Error:", error.message);
  //       return NextResponse.json({ error: error.message }, { status: 500 });
  //     }
  //     console.error("Unknown error:", error);
  //     return NextResponse.json(
  //       { error: "Something went wrong" },
  //       { status: 500 }
  //     );
  //   }
}
