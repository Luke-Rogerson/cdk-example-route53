import { Construct } from "constructs";
import { aws_route53 } from "aws-cdk-lib";

export type RecordProps = {
  recordName: string;
  target: aws_route53.RecordTarget;
};

export type HostedZoneProps = {
  zoneName: string;
  aRecords?: RecordProps[];
};

export class HostedZone extends Construct {
  public readonly hostedZone: aws_route53.IHostedZone;

  constructor(scope: Construct, id: string, props: HostedZoneProps) {
    super(scope, id);

    this.hostedZone = new aws_route53.HostedZone(this, id, {
      zoneName: props.zoneName,
    });

    if (props.aRecords) {
      props.aRecords.forEach((record) => {
        new aws_route53.ARecord(this, `${id}ARecord`, {
          recordName: record.recordName,
          zone: this.hostedZone,
          target: record.target,
        });
      });
    }
  }
}
