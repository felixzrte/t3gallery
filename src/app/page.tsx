import { index } from "drizzle-orm/mysql-core";
import { url } from "inspector";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/88487f8e-fc86-4513-b0a1-4c1cdfe8be3c-ttbe2f.webp",
    "https://utfs.io/f/a599fa96-a2d0-4137-a0da-74b872644b7b-snnk5j.webp",
    "https://utfs.io/f/000c9442-17df-4270-b7ca-79f60f67fd14-7rywl7.webp",
    "https://utfs.io/f/88487f8e-fc86-4513-b0a1-4c1cdfe8be3c-ttbe2f.webp",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="px-4">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello gallery in progress
    </main>
  );
}
