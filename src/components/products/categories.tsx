import { categories } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="flex flex-col items-center pt-15 pb-5 min-h-screen">
      <h3 className="font-medium tracking-widest">OUR CATEGORIES</h3>
      <p className="font-semibold text-2xl italic">
        Curated Skincare for everyone
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {categories.slice(0, 4).map((category) => (
          <div className="" key={category.id}>
            <Link href={`/categories/${category.label}`} className="">
              <Image
                src={category.image}
                alt={category.label}
                width={400}
                height={400}
                className="h-[320px] w-full object-cover "
              />
            </Link>

            <h4 className="text-base text-center  mt-2">{category.label}</h4>
          </div>
        ))}
      </div>

      <Link className="mt-6" href="/categories">
        <Button>
          View all categories
          <span className="ml-2">→</span>
        </Button>
      </Link>
    </div>
  );
};

export default Categories;
