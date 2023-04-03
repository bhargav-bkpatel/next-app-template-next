import Label from "../label";
import SecondaryButton from "../secondary-button";
import ServiceCard from "../service-card";

const Section3 = () => {
  return (
    <>
      {" "}
      <div className="home-container44">
        <h6 className="home-text40 textSM">
          <span>ON THE COASTLINE</span>
        </h6>
        <h3 className="home-text42 healine">We are missing the summer</h3>
        <span className="home-text43 textXL">
          <span className="home-text44">
            We&apos;re waiting for the weather to warm up so that we can go to
            the coastline. We really miss the summertime, our second home the
            coastline.
          </span>
          <br></br>
        </span>
        <div className="home-services">
          <ServiceCard></ServiceCard>
          <div className="home-container45">
            <div className="home-container46">
              <svg viewBox="0 0 1024 1024" className="home-icon41">
                <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
              </svg>
            </div>
            <h1 className="home-text45 textXL">Grow your market</h1>
            <span className="home-text46">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </span>
          </div>
          <div className="home-container47">
            <div className="home-container48">
              <svg viewBox="0 0 1024 1024" className="home-icon43">
                <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
              </svg>
            </div>
            <h1 className="home-text47 textXL">Launch time</h1>
            <span className="home-text48">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </span>
          </div>
        </div>
        <div className="home-contact">
          <Label text="MESSAGE US"></Label>
          <h2 className="home-text49">Type in the bellow form</h2>
          <span className="home-text50 textXL">
            They say there&apos;s no future for the street rascals, nothing for
            them, leave them to fall. But it isn&apos;t always how you would
            like it to be, especially when you do nothing for yourself.
          </span>
          <div className="home-form">
            <h1 className="home-text51">Want to work with us?</h1>
            <span className="home-text52 textXL">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="home-text53 textXS">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="home-textinput textSM input"
            />
            <span className="home-text54 textXS">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="home-textinput1 textSM input"
            />
            <span className="home-text55 textXS">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              disabled="true"
              placeholder="Type a message"
              className="home-textarea textSM textarea"
            ></textarea>
            <div className="home-container49">
              <SecondaryButton
                button="Send message"
                rootClassName="secondary-button-root-class-name"
              ></SecondaryButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/gray-vector.svg"
        className="home-image5"
      />
    </>
  );
};
export default Section3;
