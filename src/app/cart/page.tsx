// import { ShoppingCartIcon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import {  Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>
        <span className="">0 items</span>
      </div>

      <div className="grid ">
        {/* cart */}
        <div className="grid">
          <div className="flex items-center justify-between py-4 border-b">
            <span className="text-lg font-semibold">Product Name</span>
            <span className="text-lg font-semibold">Price</span>
            <span className="text-lg font-semibold">Quantity</span>
            <span className="text-lg font-semibold">Total</span>
          </div>

          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex ">
              <Image
                src="/assets/images/mask1.jpg"
                alt="Product 1"
                className="w-16 h-16 object-cover rounded mr-4"
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <span className="text-lg">Product 1</span>
                <button className="outline-none focus:outline-none text-red-500 hover:text-red-700 flex items-center text-sm">
                     <Trash size={12} />
                  <span className="text-xs"> Remove</span>
                 
                </button>
              </div>
            </div>

            <span>$20.00</span>
            <span>1</span>
            <span>$20.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
