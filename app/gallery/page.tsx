import fs from "fs";
import path from "path";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

function getGalleryImages(): { categories: string[]; images: GalleryImage[] } {
  const imagesRoot = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(imagesRoot)) {
    return { categories: ["All"], images: [] };
  }

  const dirEntries = fs.readdirSync(imagesRoot, { withFileTypes: true });

  const categoryDirs = dirEntries.filter((entry) => entry.isDirectory());

  const images: GalleryImage[] = [];

  for (const dir of categoryDirs) {
    const categoryName = dir.name;
    const categoryPath = path.join(imagesRoot, categoryName);

    const files = fs.readdirSync(categoryPath, { withFileTypes: true });

    for (const file of files) {
      if (!file.isFile()) continue;

      const isImage = /\.(jpe?g|png|gif|webp)$/i.test(file.name);
      if (!isImage) continue;

      images.push({
        src: `/images/${categoryName}/${file.name}`,
        alt: `${categoryName} - ${file.name}`,
        category: categoryName,
      });
    }
  }

  const uniqueCategories = Array.from(
    new Set(images.map((img) => img.category)),
  ).sort();

  return {
    categories: ["All", ...uniqueCategories],
    images,
  };
}

export default function GalleryPage() {
  const { categories, images } = getGalleryImages();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Gallery categories={categories} images={images} />
      </main>
      <Footer />
    </div>
  );
}

