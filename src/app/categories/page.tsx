import { categories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="py-10 ">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <p className="text-lg text-gray-600 mb-4">
        Explore our wide range of skincare categories to find the perfect
        products for your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div className="cursor-pointer" key={category.id}>
            <Link href={`/categories/${category.slug}`} className="">
              <Image
                src={category.image}
                alt={category.label}
                width={400}
                height={400}
                className="h-[320px] w-full object-cover rounded"
              />
            </Link>

            <Link href={`/categories/${category.label}`} className="">
              <h4 className="text-base text-center  mt-2">{category.label}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
