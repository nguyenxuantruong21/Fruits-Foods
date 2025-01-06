/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products from "@/app/data/products.json";
import productsTabOnServer from "@/app/data/products_tab.json";
import tabs from "@/app/data/tabs.json";
import Product from "../../_components/product/product";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Products = () => {
  const [productTab, setProductTab] = useState([]);
  const [currentTab, setCurrenTab] = useState("all");
  const handleTabChange = (tab: string) => {
    setCurrenTab(tab);
  };

  useEffect(() => {
    const getProductByCategory = async () => {
      if (currentTab === "all") return;
      setProductTab(productsTabOnServer as []);
    };
    getProductByCategory();
  }, [currentTab]);

  return (
    <section className="lg:py-28">
      <div className="container">
        <Tabs
          defaultValue="all"
          onValueChange={handleTabChange}
          className="flex flex-col gap-16"
        >
          <div
            className={cn(
              "xl:flex xl:flex-row xl:align-center",
              "flex flex-col items-center justify-center gap-5"
            )}
          >
            <div className="xl:w-2/5">
              <h2 className="text-[4rem] font-[600] text-center">
                Our Organic Products
              </h2>
            </div>
            <div className="xl:w-3/5 w-full">
              <TabsList className="w-full flex flex-wrap gap-5 bg-white justify-end">
                <TabsTrigger
                  value="all"
                  className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  Tất cả
                </TabsTrigger>
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.slug}
                    className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          <div className="w-full mt-20">
            <TabsContent value="all">
              <div
                className={cn(
                  "grid gap-10",
                  "grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                )}
              >
                {products.map((product) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </TabsContent>
            {currentTab !== "all" && (
              <TabsContent value={currentTab}>
                <div className="grid-cols-4 grid gap-10">
                  {productsTabOnServer.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </TabsContent>
            )}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
