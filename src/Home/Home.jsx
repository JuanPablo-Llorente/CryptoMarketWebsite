// Dependencies
import React from "react";
// Files
import Screenshots from "../img/Screenshots.png";
import styles from "./Home.module.css";
const {REACT_APP_DOWNLOAD_URL} = process.env;


function Home()
{
    return (
        <div className={styles.Container}>
            <div className={styles.ContentContainer}>
                <div className={styles.TextContainer}>
                    <p className={styles.Title}>Crypto Market</p>
                    <p className={styles.Text}>An app to stay up to date with the crypto prices.</p>
                    <p className={styles.SecondText}>You can see the price of +200 cryptos, including your favorites.</p>
                    <button className={styles.DownloadButton}>
                        <a href={REACT_APP_DOWNLOAD_URL} download="Crypto Market.apk">Download for Android</a>
                    </button>
                    {/* <p className={styles.WarningText}>At the moment, it isn't available on apps stores.</p> */}
                </div>
            </div>
            
            <div className={styles.ScreenshotsContainer}>
                <img className={styles.Screenshots} src={Screenshots} alt="Screenshots" />
            </div>
        </div>
    );
};


export default Home;