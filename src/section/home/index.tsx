import ConnectWallet from "@/components/connect-wallet";
import { demoValidators } from "@/constants";
import { ValidatorTable } from "./table";

export default function HomeSection() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-semibold">Your Validators</p>
        <div className="flex flex-col items-center justify-center border border-graydark dark:border-gray2 p-10 rounded-lg">
          <div className="flex flex-col items-center gap-5">
            <p>Connect your wallet to view your staked validators</p>
            <ConnectWallet />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <p className="text-2xl font-semibold">All Validators</p>
        <div className="flex flex-col gap-5 w-full lg:flex-row">
          {demoValidators.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-1/3 flex flex-col border border-graydark dark:border-gray2 rounded-lg p-5 gap-5"
              >
                <p>{item.title}</p>
                <h1 className="text-2xl font-semibold">{item.value}</h1>
              </div>
            );
          })}
        </div>
        <ValidatorTable />
      </div>
    </div>
  );
}
