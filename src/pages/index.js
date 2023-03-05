import PaidLessons from "../components/paidLessons";
import FreeLessons from "../components/freeLessons";

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
