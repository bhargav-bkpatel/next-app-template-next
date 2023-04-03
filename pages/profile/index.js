import React from 'react'
import Head from 'next/head'

import Header from '../../components/header/index'
import Counter from '../../components/counter/index'
import PrimaryButton from '../../components/primary-button/index'
import SecondaryButton from '../../components/secondary-button/index'
import Footer from '../../components/footer/index'

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
        <Head>
          <title>Profile - Notus Pro</title>
          <meta property="og:title" content="Profile - Notus Pro" />
        </Head>
        <div className="profile-image">
          <Header></Header>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="profile-image1"
          />
          <div className="profile-bg"></div>
        </div>
        <div className="profile-container01">
          <div className="profile-container02">
            <div className="profile-container03">
              <Counter></Counter>
              <Counter type="Photos" number="10"></Counter>
              <Counter type="Comments" number="89"></Counter>
            </div>
            <img
              alt="image"
              src="/playground_assets/team2-200h.jpg"
              className="profile-image2"
            />
            <div className="profile-container04">
              <div className="profile-container05">
                <PrimaryButton button="connect"></PrimaryButton>
              </div>
              <SecondaryButton button="message"></SecondaryButton>
            </div>
          </div>
          <div className="profile-container06">
            <h3 className="profile-text text2XL">Jenna Stones</h3>
            <div className="profile-container07">
              <svg viewBox="0 0 1024 1024" className="profile-icon">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="profile-text1 textSM">
                LOS ANGELES, CALIFORNIA
              </span>
            </div>
            <div className="profile-container08">
              <svg viewBox="0 0 1024 1024" className="profile-icon2">
                <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="profile-text2 textSM">
                Solution Manager - Creative Tim Officer
              </span>
            </div>
            <div className="profile-container09">
              <div className="profile-container10">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="profile-icon4"
                >
                  <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
                </svg>
                <span className="profile-text3 textSM">
                  University of Computer Science
                </span>
              </div>
            </div>
            <div className="profile-container11"></div>
            <span className="profile-text4">
              <span className="profile-text5">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </span>
            </span>
            <span className="profile-text6">
              <span>Show more</span>
              <span></span>
            </span>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .profile-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f2f5f9ff;
          }
          .profile-image {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
          }
          .profile-image1 {
            left: auto;
            right: auto;
            width: 100%;
            bottom: -1px;
            z-index: 100;
            position: absolute;
            object-fit: cover;
          }
          .profile-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .profile-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            z-index: 100;
            max-width: 1320px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: -12rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .profile-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-around;
          }
          .profile-container03 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .profile-image2 {
            top: -60%;
            left: 0px;
            right: 0px;
            width: 150px;
            bottom: auto;
            margin: auto;
            position: absolute;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .profile-container04 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container05 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .profile-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .profile-text {
            color: var(--dl-color-secondary-300);
          }
          .profile-container07 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .profile-text1 {
            color: var(--dl-color-secondary-500);
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .profile-container08 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon2 {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .profile-text2 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-space-space-halfunit);
          }
          .profile-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .profile-container10 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .profile-icon4 {
            fill: var(--dl-color-secondary-500);
            width: 18px;
            height: 18px;
          }
          .profile-text3 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-space-space-halfunit);
          }
          .profile-container11 {
            flex: 0 0 auto;
            width: 90%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .profile-text4 {
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: 300;
            line-height: 1.625;
            margin-bottom: var(--dl-space-space-unit);
          }
          .profile-text5 {
            color: var(--dl-color-secondary-300);
          }
          .profile-text6 {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
          }
          .profile-text6:hover {
            color: var(--dl-color-pimary-300);
          }
          @media (max-width: 991px) {
            .profile-container02 {
              flex-direction: column;
            }
            .profile-container03 {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Profile
