import { Container } from "reactstrap";

export default function Footer() {
  return (
    <footer className="bg-white p-3">
      <Container className="text-center">
        <h3 className="fw-bold text-primary-800">The Record</h3>
        <p className="text-gray">
          &copy; 2026 The Record. Built for long-form immersion.
        </p>
      </Container>
    </footer>
  );
}
