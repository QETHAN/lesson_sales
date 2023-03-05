import Lessons from "../components/lessons";
import FreeLessons from "../components/freeLessons";

function HomePage() {
  return (
    <>
      <Lessons />
      <div className="mt-10 bg-white">
        <FreeLessons />
      </div>
    </>
  );
}

export default HomePage;
