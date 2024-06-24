"use client";

import React from "react";
import Header from "@/section/layouts/header";
import Sidebar from "@/section/layouts/sidebar";
import Loader from "@/components/loading";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    <div className="dark:bg-gray dark:text-white">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <ScrollArea className="h-[calc(100vh-85px)] flex">
                <div className="mx-auto w-full py-10 px-10 md:px-15 2xl:px-20">
                  {children}
                </div>
              </ScrollArea>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
