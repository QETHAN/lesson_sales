import PaidLessons from "../components/PaidLessons";
import FreeLessons from "../components/FreeLessons";

function HomePage() {
  return (
    <>
      <PaidLessons />
      <div className="mt-10 bg-white">
        <FreeLessons />
      </div>
    </>
  );
}

export default HomePage;
