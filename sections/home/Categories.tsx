import { courseFilters } from "@/data/categories";

export default function Categories() {
  return (
    <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap items-center justify-center gap-3">
      {courseFilters.map((category, index) => {
        const isFeatured = index === 0;

        return (
          <button
            key={category}
            type="button"
            className={
              isFeatured
                ? "rounded-full bg-secondary-400 px-5 py-2.5 text-sm font-medium text-neutral-950"
                : "rounded-full bg-neutral-50 px-5 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
            }
          >
            {category}
          </button>
        );
      })}

      <button
        type="button"
        className="px-2 py-2.5 text-sm font-medium text-primary-600"
      >
        + More
      </button>
    </div>
  );
}
