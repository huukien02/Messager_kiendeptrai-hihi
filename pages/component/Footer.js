import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
            </Head>

            <h2>Message App <i className="fa-solid fa-comment-sms"></i></h2>
            <h4>
                FIFA Online 4 is a free-to-play massively multiplayer online football developed
                by EA Spearhead and published by Nexon. It was announced on 2 November 2017,
                and released on 17 May 2018 in South Korea. in various Southeast Asia published by Garena and China published by Tencent.
                No date has been revealed for an English version.
            </h4>
            <p>
                © 2018 Powered by FIFAaddict.com - Privacy Policy
                Contact us at fifaaddict.com@gmail.com
            </p>
        </div>
    )
}
