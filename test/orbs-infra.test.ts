import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as OrbsInfra from "../lib/orbs-infra-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/orbs-infra-stack.ts
describe("Domain management", () => {
  test("TON hosted zone", () => {
    const app = new cdk.App();
    const stack = new OrbsInfra.OrbsInfraStack(app, "MyTestStack");

    const template = Template.fromStack(stack);
    console.log("template :", template);

    template.hasResourceProperties("AWS::Route53::HostedZone", {
      Name: "luke.com.",
    });
  });
});
