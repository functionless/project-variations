import { Construct } from "constructs";
import { StepFunction } from "functionless";
import { SayFunction } from "./say-function";

export function Workflow(
  scope: Construct,
  props: {
    sayFunction: ReturnType<typeof SayFunction>;
  }
) {
  return new StepFunction(
    scope,
    "Workflow",
    async (event: { name: string }) => {
      await props.sayFunction({ message: `Hello ${event.name}` });
    }
  );
}
