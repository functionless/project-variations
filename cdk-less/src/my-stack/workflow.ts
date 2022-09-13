import { StepFunction } from "../../impl";
import sayFunction from "./say-function";

export default StepFunction(async (event: { name: string }) => {
  await sayFunction({ message: `Hello ${event.name}` });
});
