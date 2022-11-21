import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.scss'

import Loading from '../pages/component/Loading';

function NotFound() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);


    return (
        <div className={styles.notFound}>
            <Head>
                <title>Not Found</title>
            </Head>
            <h1>404 Not Found</h1>
            <Loading />
            <p>
                Go to back the{" "}
                <strong>
                    <Link href="/">Home</Link>
                </strong>{" "}
                is 5 seconds ...
            </p>
        </div>
    );
}

export default NotFound;
