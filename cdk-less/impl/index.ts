import * as cdk from "aws-cdk-lib";
import * as fl from "functionless";

// This is just a rough sketch and called impl so we don't anchor on it.

const app = new cdk.App();

let stack: cdk.Stack;

export const Stack = (props?: cdk.StackProps) => {
  stack = new cdk.Stack(stack, __dirname);
  return stack;
};

export const Function = <In, Out>(
  closure: fl.FunctionClosure<In, Out>,
  props?: fl.FunctionProps
) => {
  return new fl.Function(stack, __filename, closure);
};

export const StepFunction = <In extends Record<string, any>, Out>(
  closure: fl.StepFunctionClosure<In, Out>,
  props?: fl.StepFunctionProps
) => {
  return new fl.StepFunction(stack, __filename, closure);
};
