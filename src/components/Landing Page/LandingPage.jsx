import LandingPageLayout from "../../LandingPageLayout";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LandingPageBody from "./LandingPageBody";

const LandingPageRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPageLayout/>}>
      <Route path="" element={<LandingPageBody/>} />
    </Route>
  )
)
export default function LandingPage() {
  return (
    <>
      <LandingPageLayout/>
    </>
  );
}
