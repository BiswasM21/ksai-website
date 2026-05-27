"use client";

import { useState } from "react";
import { Upload, Search, Image, Film, FileText, Grid, List, Trash2, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mediaFiles = [
  { id: "1", name: "ksai-logo-clean.png", type: "image", size: "103 KB", date: "May 26, 2026", dimensions: "500x500" },
  { id: "2", name: "hero-image.jpg", type: "image", size: "245 KB", date: "May 25, 2026", dimensions: "1920x1080" },
  { id: "3", name: "team-photo.jpg", type: "image", size: "312 KB", date: "May 20, 2026", dimensions: "1600x900" },
  { id: "4", name: "case-study-1.jpg", type: "image", size: "189 KB", date: "May 18, 2026", dimensions: "1200x800" },
  { id: "5", name: "product-demo.mp4", type: "video", size: "15.2 MB", date: "May 15, 2026", dimensions: "1920x1080" },
  { id: "6", name: "whitepaper.pdf", type: "document", size: "2.4 MB", date: "May 10, 2026" },
  { id: "7", name: "services-icon.svg", type: "image", size: "4.2 KB", date: "May 5, 2026", dimensions: "64x64" },
  { id: "8", name: "favicon.png", type: "image", size: "103 KB", date: "May 1, 2026", dimensions: "495x504" },
];

export default function MediaLibrary() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const filteredFiles = mediaFiles.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFile = (id: string) => {
    setSelectedFiles((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "image":
        return Image;
      case "video":
        return Film;
      default:
        return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Media Library</h1>
          <p className="text-[var(--color-text-secondary)]">{mediaFiles.length} files</p>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
          <Input
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2 bg-[var(--color-surface)] rounded-lg p-1 border border-[var(--color-border)]">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${viewMode === "grid" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)]"}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${viewMode === "list" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)]"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selected Actions */}
      {selectedFiles.length > 0 && (
        <div className="flex items-center gap-4 p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/20">
          <span className="text-[var(--color-text)] font-medium">
            {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
          </span>
          <div className="flex-1" />
          <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-500/10">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      )}

      {/* Files Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredFiles.map((file) => {
            const Icon = getIcon(file.type);
            const isSelected = selectedFiles.includes(file.id);
            return (
              <div
                key={file.id}
                className={`relative group cursor-pointer rounded-xl border overflow-hidden transition-all ${
                  isSelected
                    ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]"
                    : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
                }`}
                onClick={() => toggleFile(file.id)}
              >
                <div className="aspect-square bg-[var(--color-surface)] flex items-center justify-center">
                  {file.type === "image" ? (
                    <img
                      src={`/images/${file.name}`}
                      alt={file.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <Icon className={`w-12 h-12 text-[var(--color-text-muted)] ${file.type === "image" ? "hidden" : ""}`} />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-[var(--color-text)] truncate">{file.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{file.size}</p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left p-4 w-8"></th>
                <th className="text-left p-4 text-sm font-medium text-[var(--color-text-muted)]">File</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--color-text-muted)]">Type</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--color-text-muted)]">Size</th>
                <th className="text-left p-4 text-sm font-medium text-[var(--color-text-muted)]">Date</th>
                <th className="text-right p-4 text-sm font-medium text-[var(--color-text-muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map((file) => {
                const Icon = getIcon(file.type);
                const isSelected = selectedFiles.includes(file.id);
                return (
                  <tr
                    key={file.id}
                    className={`border-b border-[var(--color-border)] last:border-0 cursor-pointer ${
                      isSelected ? "bg-[var(--color-primary)]/5" : "hover:bg-[var(--color-bg)]"
                    }`}
                    onClick={() => toggleFile(file.id)}
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleFile(file.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[var(--color-bg)] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[var(--color-text-muted)]" />
                        </div>
                        <span className="text-[var(--color-text)] font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[var(--color-text-secondary)] capitalize">{file.type}</td>
                    <td className="p-4 text-[var(--color-text-secondary)]">{file.size}</td>
                    <td className="p-4 text-[var(--color-text-secondary)]">{file.date}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {filteredFiles.length === 0 && (
        <div className="text-center py-12">
          <Image className="w-12 h-12 text-[var(--color-text-muted)] mx-auto mb-4" />
          <p className="text-[var(--color-text-secondary)]">No files found</p>
        </div>
      )}
    </div>
  );
}
