import Image from "next/image";
import { Anchor, Heading, Paragraph } from "grommet";

const Index = () => (
  <div>
    <Heading>Welcome to Hurricane Holes</Heading>
    <Image src="/jeep.jpg" alt="Jeep photo" width="300" height="200" />
    <Paragraph>We drill holes in dirt.</Paragraph>
    <br />
    <Heading level="3">Contact</Heading>
    <p>
      <strong>Address:</strong> 1548 W. Northern Ave. Phoenix, AZ 85021
    </p>
    <p>
      <strong>Tel:</strong> (602) 943-3674
    </p>
    <p>
      <strong>Fax:</strong> (602) 944-2293
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <Anchor href="mailto:info@hurricaneholes.com" target="_top">
        info@hurricaneholes.com
      </Anchor>
    </p>
  </div>
);

export default Index;
