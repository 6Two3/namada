"use client";

import Divider from "@/components/divider";
import {
  demoGovernances,
  demoProposals,
  governanceFilterOptions,
} from "@/constants";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function GovernanceSection() {
  const [selectedOption, setSelectedOption] = useState(
    governanceFilterOptions[0],
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 w-full">
        <p className="text-2xl font-semibold">All Validators</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {demoGovernances.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col justify-center border border-graydark dark:border-gray2 items-center rounded-lg p-5 gap-5"
              >
                <p className="text-2xl font-medium flex gap-3 items-center">
                  {item.value}
                  <span className="text-sm">
                    {item.name === "deposit"
                      ? "NAM"
                      : item.name === "voting"
                        ? item.value === 1
                          ? "Day"
                          : "Days"
                        : ""}
                  </span>
                </p>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-5">
            <div className="lg:w-6/12 w-full">
              <Input placeholder="Search for proposals" className="w-64" />
            </div>
            <div className="flex md:flex-row flex-col gap-3 w-full lg:w-6/12 lg:justify-end">
              {governanceFilterOptions.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`bg-light-gray w-24 dark:bg-gray2 capitalize py-1 rounded-lg text-sm ${selectedOption === item ? "bg-primary" : ""}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-5">
            {demoProposals.map((item, index) => {
              return (
                <div
                  className="rounded-lg border border-graydark dark:border-gray2"
                  key={index}
                >
                  <div className="flex w-full justify-center items-center bg-graydark dark:bg-gray2 rounded-t-lg">
                    <p className="text-black dark:text-graydark text-xs p-2">
                      {item.proposed_date}
                    </p>
                  </div>
                  <div className="flex flex-col p-5 rounded-b-lg gap-5">
                    <div className="flex flex-row gap-3">
                      <button className="rounded-lg capitalize text-sm bg-graydark dark:bg-gray2 py-1 px-2">
                        voting
                      </button>
                      <button className="rounded-lg text-sm bg-graydark dark:bg-gray2 py-1 px-2">
                        WASM
                      </button>
                    </div>
                    <p>{item.proposal_title}</p>
                    <Divider />
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row w-full">
                        <p className="uppercase w-1/2 text-sm font-medium">
                          id
                        </p>
                        <p className="w-1/2 text-xs">
                          Proposal {item.proposal_id}
                        </p>
                      </div>
                      <div className="flex flex-row w-full">
                        <p className="uppercase w-1/2 text-sm font-medium">
                          type
                        </p>
                        <p className="w-1/2 text-xs">{item.proposal_type}</p>
                      </div>
                      <div className="flex flex-row w-full">
                        <p className="uppercase w-1/2 text-sm font-medium">
                          voting ends
                        </p>
                        <p className="w-1/2 text-xs">{item.voting_ended}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
