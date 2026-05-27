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

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read blog posts
async function getPosts(): Promise<BlogPost[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(BLOG_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save blog posts
async function savePosts(posts: BlogPost[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(BLOG_FILE, JSON.stringify(posts, null, 2));
}

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const posts = await getPosts();

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      status: body.status || "draft",
      featuredImage: body.featuredImage,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
    };

    posts.unshift(newPost);
    await savePosts(posts);

    return NextResponse.json({ post: newPost });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
