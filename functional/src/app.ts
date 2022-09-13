import { App, Stack } from "aws-cdk-lib";
import { SayFunction } from "./say-function";
import { Workflow } from "./workflow";

const app = new App();

const stack = new Stack(app, "MyStack");

const sayFunction = SayFunction(stack);

Workflow(stack, {
  sayFunction,
});
