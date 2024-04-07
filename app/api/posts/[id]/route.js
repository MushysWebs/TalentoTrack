import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
    try {
        const { id } = params;
        const post = await client.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return NextResponse.json({ status: 404, message: "Post not found" });
        }
        return NextResponse.json(post);
    } catch (error) {
        console.error("Error getting post:", error);
        return NextResponse.json({ status: 500, message: "Error getting post" });
    }
};

export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { employeeName, employeePosition, employeeWage } = body;

        const updatedPost = await client.post.update({
            where: {
                id
            },
            data: {
                employeeName,
                employeePosition,
                employeeWage
            }
        });
        if (!updatedPost) {
            return NextResponse.json({ status: 404, message: "Post not found" });
        }
        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error("Error updating post:", error);
        return NextResponse.json({ status: 500, message: "Error updating post" });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await client.post.delete({
            where: {
                id
            }
        });
        return NextResponse.json({ status: 200, message: "Post deleted" });
    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json({ status: 500, message: "Error deleting post" });
    }
};