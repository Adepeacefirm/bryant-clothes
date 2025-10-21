const { NextResponse } = require("next/server");

export const GET = () => {
  return NextResponse.json({
    status: "success",
    message: "Users gotten successfully",
  });
};
export const POST = () => {
  return NextResponse.json({
    status: "success",
    message: "Users added successfully",
  });
};
export const PATCH = () => {
  return NextResponse.json({
    status: "success",
    message: "Users updated successfully",
  });
};
export const DELETE = () => {
  return NextResponse.json({
    status: "success",
    message: "Users deleted successfully",
  });
};
