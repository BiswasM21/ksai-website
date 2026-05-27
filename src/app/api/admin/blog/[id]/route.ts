import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const BLOG_FILE = path.join(DATA_DIR, "blog.json");

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: "draft" | "published";
  featuredImage?: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(BLOG_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function savePosts(posts: BlogPost[]): Promise<void> {
  await fs.writeFile(BLOG_FILE, JSON.stringify(posts, null, 2));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const posts = await getPosts();
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const posts = await getPosts();
    const index = posts.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    posts[index] = {
      ...posts[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await savePosts(posts);
    return NextResponse.json({ post: posts[index] });
  } catch {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const posts = await getPosts();
    const filteredPosts = posts.filter((p) => p.id !== id);

    if (filteredPosts.length === posts.length) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await savePosts(filteredPosts);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
