import { PacmanLoader } from "react-spinners";

export default function () {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      <PacmanLoader color="#de3333" />
      <p>Loading...</p>
    </div>
  );
}
