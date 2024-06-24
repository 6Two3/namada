"use client";

import ConnectWallet from "@/components/connect-wallet";
import Divider from "@/components/divider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chainLists, sourceChain, tokenLists, transferTabs } from "@/constants";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const chainItems = (items: any) =>
  items.map((item: any, index: any) => (
    <SelectItem key={index} value={item.value}>
      <div className="flex flex-row items-center gap-2">
        <Image src={item.icon} alt={item.name} width={25} height={25} />
        {item.name}
      </div>
    </SelectItem>
  ));

export default function TransferSection() {
  const [exchange, setExchange] = useState(true);
  const [selectedSourceChain, setSelectedSourceChain] = useState(sourceChain);
  const [selectedDestinationChain, setSelectedDestinationChain] =
    useState(sourceChain);
  // const [selectedToken, setSelectedToken] = useState(tokenLists);
  const [selectedTab, setSelectedTab] = useState("shielded");

  // const handleExchange = () => {
  //     setExchange(!exchange);
  //     const tempSource = selectedSourceChain;
  //     setSelectedSourceChain(selectedDestinationChain);
  //     setSelectedDestinationChain(tempSource);
  // };

  useEffect(() => {
    if (selectedSourceChain[0].value === "namada") {
      setSelectedDestinationChain([
        { ...selectedDestinationChain[0], value: "cosmos" },
      ]);
    } else if (selectedSourceChain[0].value === "cosmos") {
      setSelectedDestinationChain([
        { ...selectedDestinationChain[0], value: "namada" },
      ]);
    }
  }, [selectedSourceChain]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col border border-graydark dark:border-gray2 rounded-lg p-8 gap-5 w-full max-w-[600px]">
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Transfer</p>
          <div className="flex flex-col w-full gap-5">
            <Tabs defaultValue="shielded" className="w-full">
              <TabsList className="w-full flex flex-row justify-around gap-2">
                {transferTabs.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    value={tab.value}
                    className={`w-1/3 rounded-lg ${selectedTab === tab.value ? "bg-graydark border border-transparent dark:bg-gray2" : "bg-transparent border border-graydark dark:border-gray2"}`}
                    onClick={() => setSelectedTab(tab.value)}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="shielded">
                <div className="p-2 h-[300px]">
                  <p>You have no shielded token balances</p>
                </div>
              </TabsContent>
              <TabsContent value="transparent">
                <div className="p-2 h-[300px]">
                  <p>You have no transparent token balances</p>
                </div>
              </TabsContent>
              <TabsContent value="ibc">
                <div className="p-2 flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Source chain</p>
                    <div className="flex flex-col gap-2">
                      <Select
                        value={selectedSourceChain[0].value}
                        onValueChange={(value) =>
                          setSelectedSourceChain([
                            { ...selectedSourceChain[0], value },
                          ])
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a chain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>{chainItems(sourceChain)}</SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <button className="w-full py-2.5 rounded-lg capitalize bg-black text-white dark:bg-yellow dark:text-black">
                      click to download extension
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Destination chain</p>
                    <div className="flex flex-col gap-2">
                      <Select
                        value={selectedDestinationChain[0].value}
                        onValueChange={(value) =>
                          setSelectedDestinationChain([
                            { ...selectedDestinationChain[0], value },
                          ])
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a chain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>{chainItems(sourceChain)}</SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <button className="w-full py-2.5 rounded-lg capitalize bg-black text-white dark:bg-yellow dark:text-black">
                      click to download extension
                    </button>
                  </div>
                  <div className="flex-col flex gap-2">
                    <p className="font-medium">Recipient</p>
                    <Input placeholder="Recipient" className="w-full" />
                  </div>
                  <div className="flex-col flex gap-2">
                    <p className="font-medium">Amount</p>
                    <Input placeholder="Amount" className="w-full" />
                  </div>
                  <div className="flex-col flex gap-2">
                    <p className="font-medium">Memo</p>
                    <Input placeholder="Memo" className="w-full" />
                  </div>
                  <button className="w-full py-2.5 rounded-lg capitalize bg-black text-white dark:bg-yellow dark:text-black">
                    submit
                  </button>
                </div>
              </TabsContent>
            </Tabs>
            {/* <div className="flex flex-col gap-5 bg-light-gray dark:bg-black2 rounded-lg p-5">
              <div className="flex flex-col gap-5">
                <p className="font-medium">Source address</p>
                <ConnectWallet className="w-32" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-medium">Destination address</p>
                <Input placeholder="0x..." className="w-full" />
              </div>
            </div> */}
            {/* <div className="flex flex-col w-full gap-5 bg-light-gray dark:bg-black2 rounded-lg p-5">
              <p className="font-medium">Destination address</p>
              <div className="flex md:flex-row flex-col gap-5">
                <Input placeholder="0x..." className="w-full" />
                <Select
                  value={selectedSourceChain[0].value}
                  onValueChange={(value) =>
                    setSelectedSourceChain([
                      { ...selectedSourceChain[0], value },
                    ])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {exchange
                        ? chainItems(sourceChain)
                        : chainItems(chainLists)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <button className="py-2.5 rounded-lg capitalize bg-black text-white dark:bg-yellow dark:text-black">
                transfer
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
