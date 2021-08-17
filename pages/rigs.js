import Image from "next/image";
import { Heading } from "grommet";

const Rigs = () => (
  <div>
    <Heading>Rigs</Heading>
    <Image src="/jeep_1.jpg" alt="Jeep photo" width="400" height="225" />
    <Image
      src="/sm_truck_1.jpg"
      alt="Small truck photo"
      width="400"
      height="225"
    />
    <Image
      src="/lg_truck_1.jpg"
      alt="Large truc photo"
      width="400"
      height="225"
    />
  </div>
);

export default Rigs;
