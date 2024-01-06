import { useState } from "react";

function App() {
  const [showShare, setShowShare] = useState(false);
  const mobile = window.matchMedia("(max-width: 1139px)");
  const desktop = window.matchMedia("(min-width: 1140px)");

  function handleSetShowShare() {
    setShowShare((share) => !share);
  }

  return (
    <div className="component">
      <div className="img__box">
        <img src="./images/drawers.jpg" alt="drawers" className="img" />
      </div>
      <div className="content__wrapper">
        <main className="main">
          <h3 className="heading">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h3>
          <p className="paragraph">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </main>

        {showShare && desktop.matches && (
          <div id="absolute-box" className=" absolute-box">
            <div className="dark__box">
              <p className="share__text">Share</p>
              <div className="icons__box">
                <img
                  src="./images/icon-facebook.svg"
                  alt="facebook icon"
                  className="icon"
                />
                <img
                  src="./images/icon-twitter.svg"
                  alt="twitter icon"
                  className="icon"
                />
                <img
                  src="./images/icon-pinterest.svg"
                  alt="pinterest icon"
                  className="icon"
                />
              </div>
            </div>
          </div>
        )}

        {(!showShare && mobile.matches) ||
          (desktop.matches && (
            <section className="share--white">
              <div className="details__box">
                <img
                  src="./images/avatar-michelle.jpg"
                  alt="avatar"
                  className="avatar"
                />
                <div className="share__details">
                  <div className="name">Michelle Appleton</div>
                  <div className="date">28 Jun 2020</div>
                </div>
              </div>
              <button
                onClick={handleSetShowShare}
                id="btn__share-1"
                className="btn__share"
              >
                <img
                  src="./images/icon-share.svg"
                  alt="icon share"
                  className="btn__share-icon btn--white"
                />
              </button>
            </section>
          ))}
      </div>

      {showShare && mobile.matches && (
        <section className="share--dark">
          <div className="dark__box">
            <p className="share__text">Share</p>
            <div className="icons__box">
              <img
                src="./images/icon-facebook.svg"
                alt="facebook icon"
                className="icon"
              />
              <img
                src="./images/icon-twitter.svg"
                alt="twitter icon"
                className="icon"
              />
              <img
                src="./images/icon-pinterest.svg"
                alt="pinterest icon"
                className="icon"
              />
            </div>
          </div>
          <button id="btn__share-2" className="btn__share btn--dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
          </button>
        </section>
      )}
    </div>
  );
}

export default App;

