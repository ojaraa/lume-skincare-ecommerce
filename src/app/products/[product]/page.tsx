import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function Page({ params }: { params: { product: string } }) {
  const { product } = params;
  console.log("Product Name:", product);
  const productDetail = products.find(
    (prod) => prod.slug.toLowerCase() === product.toLowerCase()
  );

  console.log("Product Detail:", productDetail);
  return (
    <div className="min-h-screen grid sm:grid-cols-2 sm:px-6 py-10">
      <div className="h-full">
        {productDetail && (
          <Image
            src={productDetail.image}
            alt={productDetail.name}
            width={500}
            height={500}
            className="h-[500px] object-cover rounded"
          />
        )}
      </div>

      <div className="flex flex-col py-6">
        <h2 className="font-semibold text-3xl">{productDetail?.name}</h2>
        <p className="text-lg text-gray-600 mt-4">{productDetail?.description}</p>

        <p className="text-xl font-bold mt-4">
          ${productDetail?.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Suitable for: {productDetail?.skinType?.join(", ")}
        </p>
        <div className="grid grid-cols-[1fr_3fr_1fr] mt-4 w-[200px]">
          <Button variant="outline" className="!rounded-none">-</Button>
          <div className="px-8 border flex items-center justify-center text-center">0</div>
          <Button variant="outline" className="!rounded-none">+</Button>
        </div>
        <Button className="mt-6 w-[300px]">
          Add to Cart
          <span className="ml-2">→</span>
        </Button>
      </div>
    </div>
  );
}
