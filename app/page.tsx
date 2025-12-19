import { ChartBarInteractive } from "@/components/common/Chart";
import { ChartMini } from "@/components/common/ChartMini";
import { ChartMini2 } from "@/components/common/ChartMini2";

export default function Home() {
  return (
    <div className="mt-30">
      <h1>Data Example</h1>

      <ChartBarInteractive />
      <div className="flex justify-center gap-4 mt-30">
        <div className="">
          <h1>Data Example</h1>
          <ChartMini />
        </div>
        <div className="">
          <h1>Data Example</h1>
          <ChartMini2 />
        </div>
      </div>
    </div>
  );
}
