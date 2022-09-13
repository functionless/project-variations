import { Construct } from "constructs";
import { StepFunction } from "functionless";
import { SayFunction } from "./say-function";

interface SayFunctionProps {
  sayFunction: SayFunction["fn"];
}

export class Workflow extends Construct {
  constructor(scope: Construct, id: string, props: SayFunctionProps) {
    super(scope, id);
    new StepFunction(scope, "Workflow", async (event: { name: string }) => {
      await props.sayFunction({ message: `Hello ${event.name}` });
    });
  }
}
