import NavigationBar from "./component/NavigationBar"
import Welcome from "./component/Welcome"
import Novel from "./component/Novel"
import Manga from "./component/Manga"
import "./landingpage.css"
import logo from "../src/assets/images/bg/logo.png"
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact"

function App() {
  return (
    <div>
      <div className="myBg border">
        <NavigationBar />
        <Welcome />
      </div>

      <div className="novel">
        <Novel />
      </div>

      <div className="manga">
        <Manga />
      </div>

      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src={logo} width="30px" />
                <span className="ml-5 h5 font-weight-bold">Bookworm</span>
              </a>
              <p className="my-3" style={{ width: "250px" }}>
                We provide online e-books for free
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Bookworm
              </p>
              <CDBBox
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink href="/">Resources</CDBFooterLink>
                <CDBFooterLink href="/">About Us</CDBFooterLink>
                <CDBFooterLink href="/">Contact</CDBFooterLink>
                <CDBFooterLink href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink href="/">Support</CDBFooterLink>
                <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                <CDBFooterLink href="/">Sign In</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Books
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink href="#novel">Novel</CDBFooterLink>
                <CDBFooterLink href="#manga">Manga</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: "100%" }}
            className="mx-auto mt-4"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Bookworm Indonesia, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  )
}

export default App
