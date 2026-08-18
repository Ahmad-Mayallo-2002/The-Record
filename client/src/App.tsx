import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Login = lazy(() => import("./pages/auth/Login"));
const Post = lazy(() => import("./pages/Post"));
const Posts = lazy(() => import("./pages/Posts"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const VerificationCode = lazy(() => import("./pages/auth/VerificationCode"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
