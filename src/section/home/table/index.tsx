"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { demoValidatorsData } from "@/constants";

export function ValidatorTable() {
  return (
    <ScrollArea className="w-full overflow-x-auto border border-graydark dark:border-gray2 rounded-lg">
      <div className="min-w-[700px] w-full">
        <Table className="w-full">
          <TableHeader className="bg-graydark dark:bg-gray2">
            <TableRow>
              <TableHead className="w-1/5">Validators</TableHead>
              <TableHead className="w-1/5">Commissions</TableHead>
              <TableHead className="w-1/5">Delegator Shares</TableHead>
              <TableHead className="w-1/5 text-right">APR</TableHead>
              <TableHead className="w-1/5 text-center">Stake</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoValidatorsData.map((validator, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {validator.validators}
                </TableCell>
                <TableCell>{validator.commission}%</TableCell>
                <TableCell>{validator.delegator_share.join(", ")}</TableCell>
                <TableCell className="text-right">{validator.APR}%</TableCell>
                <TableCell className="text-center">
                  <button
                    className="bg-graydark dark:bg-gray2 py-1 px-2 rounded-lg disabled:cursor-not-allowed"
                    disabled={validator.stake === 1 ? false : true}
                  >
                    stake
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
