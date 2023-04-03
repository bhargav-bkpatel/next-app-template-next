import React from 'react'
import Head from 'next/head'

import Header from '../../components/header/index'
import SecondaryButton from '../../components/secondary-button/index'
import PostReaction from '../../components/post-reaction/index'
import Label from '../../components/label/index'
import ArticleCard from '../../components/article-card/index'
import Footer from '../../components/footer/index'

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-post-container">
        <Head>
          <title>BlogPost - Notus Pro</title>
          <meta property="og:title" content="BlogPost - Notus Pro" />
        </Head>
        <div className="blog-post-hero">
          <div className="blog-post-fixed-header">
            <Header rootClassName="header-root-class-name"></Header>
          </div>
          <h1 className="blog-post-text text2XL">
            Miami Beah is looking different at night!
          </h1>
          <div className="blog-post-bg"></div>
        </div>
        <div className="blog-post-post-details">
          <div className="blog-post-container01">
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className="blog-post-icon"
            >
              <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
            </svg>
          </div>
          <span className="blog-post-text01 textXL">posted 18 Sept 2021</span>
          <span className="blog-post-text02">
            <span className="blog-post-text03">
              &apos;Started from the bottom now we here&apos;
            </span>
            <span className="blog-post-text04">
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="blog-post-text05">Mark Jonson</span>
            <br></br>
          </span>
          <span className="blog-post-text06">
            <span className="blog-post-text07">
              As a result of growing emeraldhouse gas emissions, climate models
              predict that our planet will get significantly warmer, that
              ecosystems will be changed or destroyed, and that enormous human
              and economic costs will be incurred. These scenarios aren’t
              guaranteed, but avoiding them will be very hard. We’re trying to
              take small steps to mitigate our impact.
            </span>
            <br></br>
          </span>
        </div>
        <div className="blog-post-container02">
          <div className="blog-post-story">
            <span className="blog-post-text08 textLG">
              <span>March 1, 2019</span>
            </span>
            <h3 className="blog-post-text10 text2XL">
              The Castle Looks Different at Night...
            </h3>
            <img
              alt="image"
              src="/playground_assets/new-york-city-1400w.jpg"
              className="blog-post-image"
            />
            <span className="blog-post-text11 textLG">
              <span className="blog-post-text12">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn&apos;t scroll to get here. Add a button if
                you want the user to see more. We are here to make life better.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text15">
                And now I look and look around and there’s so many Kanyes
                I&apos;ve been trying to figure out the bed design for the
                master bedroom at our Hidden Hills compound... and thank you for
                turning my personal jean jacket into a couture piece.
              </span>
              <br></br>
            </span>
            <div className="blog-post-container03">
              <span className="textLG">
                <span className="blog-post-text17">&quot;</span>
                <span className="blog-post-text18">
                  And thank you for turning my personal jean jacket into a
                  couture piece.
                </span>
                <span className="blog-post-text19">&quot;</span>
              </span>
              <span className="blog-post-text20">
                <span className="blog-post-text21">Kanye West, Producer.</span>
                <span className="blog-post-text22"></span>
              </span>
            </div>
            <h3 className="blog-post-text23 text2XL">
              Using Video Games To Generate Clicks
            </h3>
            <span className="blog-post-text24 textLG">
              <span className="blog-post-text25">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn&apos;t scroll to get here. Add a button if
                you want the user to see more. We are here to make life better.
              </span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/sofia-kuniakina-1100w.jpg"
              className="blog-post-image1"
            />
            <h3 className="blog-post-text26 text2XL">Rest of the Story</h3>
            <span className="blog-post-text27 textLG">
              <span className="blog-post-text28">
                We are here to make life better. And now I look and look around
                and there’s so many Kanyes I&apos;ve been trying to figure out
                the bed design for the master bedroom at our Hidden Hills
                compound... and thank you for turning my personal jean jacket
                into a couture piece. I speak yell scream directly at the old
                guard on behalf of the future. daytime All respect prayers and
                love to Phife’s family Thank you for so much inspiration
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text31">
                Thank you Anna for the invite thank you to the whole Vogue team
                And I love you like Kanye loves Kanye Pand Pand Panda I&apos;ve
                been trying to figure out the bed design for the master bedroom
                at our Hidden Hills compound...The Pablo pop up was almost a pop
                up of influence. All respect prayers and love to Phife’s family
                Thank you for so much inspiration daytime I love this new Ferg
                album! The Life of Pablo is now available for purchase I have a
                dream. Thank you to everybody who made The Life of Pablo the
                number 1 album in the world! I&apos;m so proud of the nr #1 song
                in the country. Panda! Good music 2016!
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="blog-post-text34">
                I love this new Ferg album! The Life of Pablo is now available
                for purchase I have a dream. Thank you to everybody who made The
                Life of Pablo the number 1 album in the world! I&apos;m so proud
                of the nr #1 song in the country. Panda! Good music 2016!
              </span>
              <br></br>
              <br></br>
            </span>
            <div className="blog-post-post">
              <span className="blog-post-text35 textXL">
                What people say...
              </span>
              <div className="blog-post-divider"></div>
              <div className="blog-post-container04">
                <div className="blog-post-container05">
                  <img
                    alt="image"
                    src="/playground_assets/team5-1400w.jpg"
                    className="blog-post-image2"
                  />
                  <div className="blog-post-container06">
                    <span className="blog-post-text36 textSM">JOHN SNOW</span>
                    <div className="blog-post-container07">
                      <span className="blog-post-text37 textXS">
                        3 days ago
                      </span>
                    </div>
                  </div>
                </div>
                <SecondaryButton button="FOLLOW"></SecondaryButton>
              </div>
              <span className="blog-post-text38 textMD">
                <span className="blog-post-text39">
                  Personal profiles are the perfect way for you to grab their
                  attention and persuade recruiters to continue reading your CV
                  because you’re telling them from the off exactly why they
                  should hire you.
                </span>
                <br></br>
              </span>
              <img
                alt="image"
                src="/playground_assets/new-york-city-1400w.jpg"
                className="blog-post-image3"
              />
              <div className="blog-post-container08">
                <div className="blog-post-container09">
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon2">
                    <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
                  </svg>
                  <span className="blog-post-text40 textXS">150</span>
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon4">
                    <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
                  </svg>
                  <span className="blog-post-text41 textXS">36</span>
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon6">
                    <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
                  </svg>
                  <span className="blog-post-text42 textXS">12</span>
                </div>
                <div className="blog-post-container10">
                  <img
                    alt="image"
                    src="/playground_assets/team5-1400w.jpg"
                    className="blog-post-image4"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/team6-200h.jpg"
                    className="blog-post-image5"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/team1-200h.jpg"
                    className="blog-post-image6"
                  />
                  <span className="blog-post-text43 textXS">and 30+ more</span>
                </div>
              </div>
              <div className="blog-post-divider1"></div>
              <span className="blog-post-text44 textSM">Load previous</span>
              <PostReaction
                name="Michael Lewis"
                likes="3"
                image_src="/playground_assets/team1-200h.jpg"
              ></PostReaction>
              <PostReaction
                name="Jessica Stones"
                text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down."
                shares="1"
                image_src="/playground_assets/team6-200h.jpg"
              ></PostReaction>
              <span className="blog-post-text45 textSM">Load next</span>
              <div className="blog-post-container11">
                <img
                  alt="image"
                  src="/playground_assets/team4-200h.png"
                  className="blog-post-image7"
                />
                <textarea
                  rows="1"
                  placeholder="Write your comment"
                  className="blog-post-textarea textarea textSM"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-posts">
          <div className="blog-post-container12">
            <Label text="STORIES"></Label>
            <h3 className="blog-post-text46 healine">
              <span className="blog-post-text47">Before I go </span>
            </h3>
            <span className="blog-post-text48 textXL">
              We&apos;ve got time, but we are only doing what they say and want.
              I do not want to live as I will never die, cause life&apos;s too
              short, and I do not want to drown myself, as others would like.
            </span>
          </div>
          <ArticleCard avatar_src="/playground_assets/team3-200h.jpg"></ArticleCard>
          <ArticleCard
            name="Paul Smith"
            time="Drawn on 23 April"
            title="MateLabs mixes learning with IFTTT"
            image_src="/playground_assets/team5-1400w.jpg"
            avatar_src="/playground_assets/team1-200h.jpg"
          ></ArticleCard>
          <ArticleCard
            name="Jasmine Taylor"
            time="Drawn on 23 April"
            title="US venture investment ticks up in Q2"
            image_src="/playground_assets/team3-200h.jpg"
            avatar_src="/playground_assets/team2-200h.jpg"
          ></ArticleCard>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .blog-post-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/photo-1-1500h.jpg');
          }
          .blog-post-fixed-header {
            width: 100%;
            display: flex;
            z-index: 200;
            position: fixed;
            box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-text {
            top: 0px;
            left: 276px;
            color: var(--dl-color-gray-white);
            right: auto;
            bottom: 0px;
            margin: auto;
            z-index: 100;
            text-align: center;
          }
          .blog-post-bg {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            display: flex;
            opacity: 0.4;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .blog-post-post-details {
            flex: 0 0 auto;
            width: 95%;
            display: flex;
            position: relative;
            max-width: 1320px;
            box-shadow: 0px 10px 15px -10px #626262;
            margin-top: -100px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius75);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-secondary-300);
          }
          .blog-post-container01 {
            top: -2rem;
            flex: 0 0 auto;
            left: auto;
            right: auto;
            width: 4rem;
            bottom: auto;
            height: 4rem;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-500);
          }
          .blog-post-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .blog-post-text01 {
            color: var(--dl-color-gray-white);
            align-self: center;
            margin-top: var(--dl-space-space-tripleunit);
          }
          .blog-post-text02 {
            color: #94a3b8ff;
            align-self: center;
          }
          .blog-post-text03 {
            white-space: normal;
          }
          .blog-post-text04 {
            white-space: normal;
          }
          .blog-post-text05 {
            font-style: italic;
          }
          .blog-post-text06 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .blog-post-text07 {
            text-align: center;
          }
          .blog-post-container02 {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }
          .blog-post-story {
            width: 100%;
            display: flex;
            max-width: 1320px;
            grid-column: 3/11;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .blog-post-text08 {
            color: #94a3b8ff;
          }
          .blog-post-text10 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
          }
          .blog-post-image {
            width: 100%;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: var(--dl-space-space-tripleunit);
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .blog-post-text11 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-post-text12 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text15 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-container03 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            border-left-width: 1px;
          }
          .blog-post-text17 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text18 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text19 {
            color: rgb(100, 116, 139);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text20 {
            color: var(--dl-color-secondary-400);
          }
          .blog-post-text21 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .blog-post-text22 {
            font-weight: 600;
          }
          .blog-post-text23 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-post-text24 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-post-text25 {
            white-space: normal;
          }
          .blog-post-image1 {
            width: 450px;
            align-self: center;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: var(--dl-space-space-tripleunit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .blog-post-text26 {
            color: var(--dl-color-secondary-400);
            font-size: 1.875rem;
            margin-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-post-text27 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .blog-post-text28 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text31 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-text34 {
            font-weight: 400;
            white-space: normal;
          }
          .blog-post-post {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 600px;
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-text35 {
            color: var(--dl-color-secondary-400);
            font-weight: 700;
          }
          .blog-post-divider {
            flex: 0 0 auto;
            width: 100%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-triplequarter);
            align-items: center;
            margin-bottom: var(--dl-space-space-triplequarter);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-container05 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .blog-post-image2 {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-container06 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-text36 {
            color: var(--dl-color-secondary-300);
            font-weight: 700;
            line-height: 20px;
            text-transform: uppercase;
          }
          .blog-post-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .blog-post-text37 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            line-height: 20px;
          }
          .blog-post-text38 {
            color: rgba(100, 116, 139, 1);
            font-weight: 300;
            line-height: 1.625;
          }
          .blog-post-text39 {
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .blog-post-image3 {
            width: 100%;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-container09 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
          }
          .blog-post-icon2 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-top: 1px;
          }
          .blog-post-text40 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-icon4 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-left: var(--dl-space-space-unit);
          }
          .blog-post-text41 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-icon6 {
            fill: rgba(148, 163, 184, 1);
            width: 14px;
            height: 14px;
            margin-top: 2px;
            margin-left: var(--dl-space-space-unit);
          }
          .blog-post-text42 {
            color: var(--dl-color-secondary-500);
            line-height: 1.75ren;
            margin-left: 0.25rem;
          }
          .blog-post-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .blog-post-image4 {
            width: 20px;
            object-fit: cover;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-image5 {
            width: 20px;
            object-fit: cover;
            margin-left: -10px;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-image6 {
            width: 20px;
            object-fit: cover;
            margin-left: -10px;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-text43 {
            color: var(--dl-color-secondary-400);
            margin-left: 0.25rem;
          }
          .blog-post-divider1 {
            flex: 0 0 auto;
            width: 100%;
            height: 0.5px;
            display: flex;
            opacity: 0.5;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-text44 {
            color: var(--dl-color-secondary-500);
            align-self: center;
          }
          .blog-post-text45 {
            color: var(--dl-color-secondary-500);
            align-self: center;
          }
          .blog-post-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .blog-post-image7 {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-textarea {
            color: var(--dl-color-secondary-400);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-halfunit);
            transition: 0.3s;
            border-color: rgba(203, 213, 225, 1);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .blog-post-textarea:focus {
            box-shadow: 0 0 0 2px #4AA4E3;
          }
          .blog-post-posts {
            display: flex;
            max-width: 1320px;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .blog-post-container12 {
            width: 66%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .blog-post-text46 {
            color: var(--dl-color-secondary-400);
          }
          .blog-post-text47 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .blog-post-text48 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          @media (max-width: 991px) {
            .blog-post-text {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .blog-post-post {
              width: 100%;
            }
            .blog-post-container12 {
              width: 100%;
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .blog-post-text02 {
              text-align: center;
            }
            .blog-post-story {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .blog-post-image1 {
              width: 80%;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog-post-container12 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-text02 {
              text-align: center;
            }
            .blog-post-container02 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogPost
