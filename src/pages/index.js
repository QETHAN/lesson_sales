import Lessons from "../components/lessons";
import VideoList from "../components/videoList";

function HomePage() {
  return (
    <>
      <Lessons />
      <div className="mt-10 bg-white">
        <VideoList />
      </div>
    </>
  );
}

export default HomePage;
