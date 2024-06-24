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
import { chainLists, sourceChain, tokenLists } from "@/constants";
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
    useState(chainLists);
  const [selectedToken, setSelectedToken] = useState(tokenLists);

  const handleExchange = () => {
    setExchange(!exchange);
    const tempSource = selectedSourceChain;
    setSelectedSourceChain(selectedDestinationChain);
    setSelectedDestinationChain(tempSource);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col border border-graydark dark:border-gray2 rounded-lg p-8 gap-5 w-full max-w-[600px]">
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Transfer</p>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col gap-5 bg-light-gray dark:bg-black2 rounded-lg p-5">
              <div className="flex flex-col gap-5">
                <p className="font-medium">Source address</p>
                <ConnectWallet className="w-32" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-medium">Destination address</p>
                <Input placeholder="0x..." className="w-full" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-5 bg-light-gray dark:bg-black2 rounded-lg p-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
