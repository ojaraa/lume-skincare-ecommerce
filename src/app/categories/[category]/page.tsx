import { categories, products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryProductsPage(props: {
  params: { category: string };
}) {
  const { params } = await props; 
  const { category } = params;
  console.log("Category:", category);
  const filteredCategories = products.filter(
    (product) =>
      product.categoryId ===
      categories.find(
        (cat) => cat.slug.toLowerCase() === category.toLowerCase()
      )?.id
  );

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">{category}</h1>

      <p className="text-lg text-gray-600 mb-4">
        Explore our collection of {category} products tailored to your skincare
        needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories?.map((product) => (
          <div className="cursor-pointer" key={product.id}>
            <Link href={`/products/${product?.slug}`} className="">
              <Image
                src={product?.image}
                alt={product?.name}
                width={400}
                height={400}
                className="h-[330px] w-full object-cover rounded"
              />
            </Link>
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col">
                <Link href={`/categories/${product?.name}`} className="">
                  <h4 className="text-base font-semibold  mt-2 ">
                    {product?.name}
                  </h4>
                </Link>
              </div>

              <p className="text-lg ">${product?.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
