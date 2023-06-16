import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_route53, aws_certificatemanager } from "aws-cdk-lib";

export class OrbsInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new aws_route53.HostedZone(this, "LukeHostedZone", {
      zoneName: "luke.com",
    });
  }
}
