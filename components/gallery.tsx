 "use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

type GalleryProps = {
  categories: string[];
  images: GalleryImage[];
};

export function Gallery({ categories, images }: GalleryProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [activeCategory, images]);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="py-12 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* <div className="mb-6 flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4 py-2 text-xs md:text-sm shadow-sm hover:shadow-md transition-all gap-2"
            onClick={() => router.push("/")}
          >
            <span className="text-lg leading-none">←</span>
            <span>Back to main screen</span>
          </Button>
        </div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Browse project photos and device shots. Click any image to open a
            large gallery view with navigation and thumbnails.
          </p>
        </motion.div> */}

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full text-xs md:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredImages.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No images found for <span className="font-semibold">{activeCategory}</span>.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <motion.button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => openViewer(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="text-left"
              >
                <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border border-border/60">
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                  </div>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <p className="text-[10px] xs:text-xs md:text-xs text-muted-foreground truncate">
                      {image.alt}
                    </p>
                    <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-[9px] uppercase tracking-wide text-muted-foreground">
                      {image.category}
                    </span>
                  </div>
                </Card>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {isViewerOpen && filteredImages[currentIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 text-white text-sm">
            <span>
              {currentIndex + 1} / {filteredImages.length}
            </span>
            <button
              onClick={closeViewer}
              className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wide"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-4">
            <button
              onClick={showPrev}
              className="text-white/70 hover:text-white px-2 text-2xl"
            >
              ‹
            </button>

            <div className="relative max-w-5xl w-full max-h-[70vh] aspect-video">
              <Image
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={showNext}
              className="text-white/70 hover:text-white px-2 text-2xl"
            >
              ›
            </button>
          </div>

          <div className="px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto">
              {filteredImages.map((img, index) => (
                <button
                  key={`${img.src}-thumb-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-16 aspect-video border ${
                    index === currentIndex
                      ? "border-white"
                      : "border-white/20 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


