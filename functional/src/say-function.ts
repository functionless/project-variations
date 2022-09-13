import { Construct } from "constructs";
import { Function } from "functionless";

export function SayFunction(scope: Construct) {
  return new Function(
    scope,
    "SayFunction",
    async (event: { message: string }) => {
      console.log(event.message);
      return;
    }
  );
}
