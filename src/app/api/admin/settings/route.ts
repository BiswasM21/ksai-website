import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

interface Settings {
  siteName: string;
  tagline: string;
  email: string;
  whatsapp: string;
  address: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  github: string;
  primaryColor: string;
}

const defaultSettings: Settings = {
  siteName: "Kalinga Sovereign AI",
  tagline: "Web Dev, App Dev & AI Automation Company",
  email: "contact@kalingasovereignai.com",
  whatsapp: "919692000359",
  address: "Bhubaneswar, Odisha, India",
  linkedin: "https://linkedin.com/company/kalinga-sovereign-ai",
  twitter: "https://x.com/Kalinga_Sov_Ai",
  instagram: "https://www.instagram.com/kalingasovereignai/",
  github: "",
  primaryColor: "#0C6DA2",
};

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function getSettings(): Promise<Settings> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(SETTINGS_FILE, "utf-8");
    return { ...defaultSettings, ...JSON.parse(data) };
  } catch {
    return defaultSettings;
  }
}

async function saveSettings(settings: Settings): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2));
}

export async function GET() {
  try {
    const settings = await getSettings();
    return NextResponse.json({ settings });
  } catch {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const settings = await getSettings();
    const updatedSettings = { ...settings, ...body };
    await saveSettings(updatedSettings);
    return NextResponse.json({ settings: updatedSettings });
  } catch {
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
