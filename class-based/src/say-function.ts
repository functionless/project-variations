import { Construct } from "constructs";
import { Function } from "functionless";

interface InputEvent {
  message: string;
}

export class SayFunction extends Construct {
  fn: Function<InputEvent, void>;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.fn = new Function(
      scope,
      "SayFunction",
      async (event: { message: string }) => {
        console.log(event.message);
        return;
      }
    );
  }
}
