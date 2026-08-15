import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner
        style={{ width: "4rem", height: "4rem", borderWidth: "7.5px" }}
        color="success"
      />
    </div>
  );
}
