import { Button } from "react-bootstrap";
function Home() {
  return (
    <div className="home">
      <p className="p-4  mt-3 text-center">Welcome Home</p>
      <div className="text-center">
      <Button variant="primary" >Log Out</Button>
      </div>
    </div>
  );
}

export default Home;
