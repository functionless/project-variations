import { Function } from "../../impl";

export default Function(async (event: { message: string }) => {
  console.log(event.message);
  return;
});
