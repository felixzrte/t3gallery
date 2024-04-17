import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="px-4">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
