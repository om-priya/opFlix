import Mainbg from "../components/Mainbg";
import about1 from "../../public/about1.svg";
export default function Home() {
  return (
    <main>
      <Mainbg
        title={"Our Story"}
        description={"Through Various Hardwork I have completed this Website!!"}
        buttonText={"Explore Movies"}
        imgLink={about1}
      />
    </main>
  );
}
