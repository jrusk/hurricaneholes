import Image from "next/image";
import { Anchor, Heading, Paragraph } from "grommet";

const Utilities = () => (
  <div>
    <Heading>Utilities</Heading>
    <Paragraph fill={true}>
      You must concact Arizona 811 (Arizona Bluestake) before we dig:{" "}
      <Anchor href="http://www.arizona811.com">Arizona 811</Anchor>.
    </Paragraph>
  </div>
);

export default Utilities;
