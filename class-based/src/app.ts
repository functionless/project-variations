import { App, Stack } from "aws-cdk-lib";
import { SayFunction } from "./say-function";
import { Workflow } from "./step-function";

const app = new App();

const stack = new Stack(app, "MyStack");

const { fn } = new SayFunction(stack, "SayFunction");

new Workflow(stack, "Workflow", {
  sayFunction: fn,
});
