import Mainbg from "./components/Mainbg";
import home from "../public/home.svg";
export default function Home() {
  return (
    <main>
      <Mainbg
        title={"Let's Watch Movie Together"}
        description={
          "OpFlix your one stop destination for all the movie collections!!"
        }
        buttonText={"Explore Movies"}
        imgLink={home}
      />
    </main>
  );
}
