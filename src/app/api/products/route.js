const { NextResponse } = require("next/server");

export function GET() {
  return NextResponse.json({
    status: "success",
    message: "All Products",
  });
}
