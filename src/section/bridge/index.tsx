"use client";

import Divider from "@/components/divider";
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

export default function BridgeSection() {
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
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-semibold">Find a Bridge</p>
            <button
              className="flex flex-row items-center gap-2 bg-graydark dark:bg-gray2 rounded-lg p-1"
              onClick={handleExchange}
            >
              <ArrowUpDown />
            </button>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex md:flex-row flex-col gap-5">
              <div className="flex flex-col gap-5 md:w-1/2 w-full">
                <p className="font-medium">Source chain</p>
                <div className="w-full">
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
                      <SelectGroup>
                        {exchange
                          ? chainItems(chainLists)
                          : chainItems(sourceChain)}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:w-1/2 w-full">
                <p className="font-medium">Destination chain</p>
                <div className="w-full">
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
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-5">
                <p className="font-medium">Token</p>
                <div className="w-full">
                  <Select
                    value={selectedToken[0].value}
                    onValueChange={(value) =>
                      setSelectedToken([{ ...selectedToken[0], value }])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {tokenLists.map((token, index) => (
                          <SelectItem key={index} value={token.value}>
                            <div className="flex flex-row items-center gap-2">
                              <Image
                                src={token.icon}
                                alt={token.name}
                                width={25}
                                height={25}
                              />
                              {token.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <button className="py-2.5 rounded-lg capitalize bg-black text-white dark:bg-yellow dark:text-black">
              find bridge providers
            </button>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">
            Disclaimer: Third-Party Bridge Services
          </p>
          <p className="text-[#868e96] text-sm font-light">
            The Sei Foundation is not responsible for the operation or security
            of third-party bridge services. Use at your own risk. By using this
            link you expressly indemnify and hold Sei and its Affiliates
            harmless for any loss or damage incurred.
          </p>
        </div>
      </div>
    </div>
  );
}
