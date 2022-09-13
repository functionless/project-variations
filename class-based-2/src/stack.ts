import { App, Stack } from "aws-cdk-lib";
import { Function, StepFunction } from "functionless";

export class MyStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    const sayFunction = new Function(
      this,
      "SayFunction",
      async (event: { message: string }) => {
        console.log(event.message);
        return;
      }
    );

    new StepFunction(this, "Workflow", async (event: { name: string }) => {
      await sayFunction({ message: `Hello ${event.name}` });
    });
  }
}
