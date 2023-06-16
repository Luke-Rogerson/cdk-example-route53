import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_route53, aws_certificatemanager } from "aws-cdk-lib";

import { HostedZone, HostedZoneProps } from "./constructs/hosted-zone";

const hostedZoneProps: HostedZoneProps = {
  zoneName: "luke.com",
  aRecords: [
    {
      target: aws_route53.RecordTarget.fromIpAddresses("1.1.1.1"),
      recordName: "test",
    },
  ],
};

export class OrbsInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new HostedZone(this, "LukeHostedZone", hostedZoneProps);
  }
}
