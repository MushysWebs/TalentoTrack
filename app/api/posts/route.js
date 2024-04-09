import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { employeeName, employeePosition, employeeComments } = body;
    const newPost = await client.post.create({
      data: {
        employeeName,
        employeePosition,
        employeeComments
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating post", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {

    const posts = await client.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(posts);
  } catch (error) {

    return NextResponse.json({ message: "Error getting posts", error },
      { status: 500 });
  }
};
