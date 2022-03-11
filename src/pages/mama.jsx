import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HappyBirthDay from "../components/happyBirthday";
import "./mama.css"

export default function Mama() {
    return (
        <Layout>
            <section id="mama-fv">
                <HappyBirthDay />
                <StaticImage src="../../static/img/IMG_2283.JPG" alt="ママハッピーバースデー" />
                <p className="message-for-mama">27歳おめでとう！<br/>僕にお祝いさせてくれて<br/><span>ありがとう</span></p>
            </section>
            <section id="promise">
                <p>
                    これからいくつ歳をとっても<br/>
                    ずっと今までの思い出の影を忘れずに<br/>
                    一緒に歩いて行こうね
                </p>
                <StaticImage src="../../static/img/IMG_4874.JPG" alt="影" />
            </section>
        </Layout>
    )
};