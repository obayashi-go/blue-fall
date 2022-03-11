import React from "react"
import "../customCommon.css"
import Layout from "../components/layout";
import TopCarousel from "../components/topCarousel";
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone';

export default function Home() {
  return (
      <>
          <Layout>
              <TopCarousel />
              <section id="ao-profile" className="ao-myself">
                  <p className="section-title">
                      <ChildCareTwoToneIcon />
                      ぼくのおはなし
                  </p>
                  <div className="profile-box">
                      <p>
                          ぼくのなまえはあお<br/>
                          みんなからは　あおたん　ってよばれている<br/>
                          しゅみは　さいきんは　おさんぽ<br/>
                          ごはんをたべるのもすき<br/>
                          じゅーすっていうのみものをおぼえた<br/>
                          ままがいつもくれる<br/>
                          たくさんほしいけど　ちょっとずつしかくれない<br/>
                          くるまとか　おもちゃをならべるおしごとをしている<br/>
                          ほんっていう　えがたくさんかいてあるのを<br/>
                          よんでもらえると　うれしい<br/><br/>
                          ぼくは　あき　っていうきせつにうまれたらしい<br/>
                          ままの　おなかのなかも　よかったけど<br/>
                          そとのせかいも　いろんなものがあって　たのしい<br/>
                          でも　ままがよく　おおきな　おとがでる<br/>
                          ふしぎな　きかいで　へやのなかであそんでいるときは<br/>
                          すこし　こわい<br/>
                          ぱぱは　ずっと　ようふくが　たくさんあるへやで<br/>
                          じっとしている<br/>
                          おとなのすることは　よく　わからないけど<br/>

                          あそんでくれるから　すき<br/>
                      </p>
                  </div>
              </section>
          </Layout>
      </>
  )
}
