import { useEffect, useState } from 'react';
import './App.css';
import { Document } from 'mongodb';


const { MongoClient } = require("mongodb");

const username = encodeURIComponent("<username>");
const count = encodeURIComponent("<count>");
const cluster = "<Cluster>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";
let uri =
  `mongodb+srv://${username}:${count}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("<panad_database>");
    const ratings = database.collection("<User>");
    const cursor = ratings.find();
    await cursor.forEach((doc: Document) => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

 declare global {
      interface Window {
        Telegram: any;
      }
    }
function App() {
    const [count, setCount] = useState(10000000000);
    const [width, setWidth] = useState(5);
    const [isUpgraded, setIsUpgraded] = useState(false);
    const [threshold, setThreshold] = useState(1000);
    const [thresholde, setThresholde] = useState(1000);
    const [increment, setIncrement] = useState(1);
    const [incremente, setIncremente] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
    const [isInviteOpen, setIsInviteOpen] = useState(false);
    const [upgradeCounter, setUpgradeCounter] = useState(0);
    const [upgradeCharger, setUpgradeCharger] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [time, setTime] = useState(10000);
    const [username, setUsername] = useState<string | null>(null); // state برای username تلگرام
    const incrementThrehold = 5;
   
    const handleClick = () => {
        setAnimate(true);
        setCount(count + 1);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
        if (isUpgraded) {
            setCount(count + increment);
        }
        if (width < increment) {
            setCount(count);
        }
        if (width >= increment) {
            setWidth(width - increment);
        }
    };

    useEffect(() => {
        // دریافت username کاربر از WebApp تلگرام
        if (window.Telegram && window.Telegram.WebApp) {
            const user = window.Telegram.WebApp.initDataUnsafe?.user;
            if (user) {
                setUsername(user.username);  // ذخیره کردن username
            }
        }

        const interval = setInterval(() => {
            setWidth((prevCharge) => Math.min(prevCharge + 1, 500));
        }, time);
        return () => clearInterval(interval);
    }, [time]);

    const handleUpgradeCounter = () => {
        if (upgradeCounter < 7 && count >= threshold) {
            setCount(count - threshold);
            setThreshold(threshold * incrementThrehold);
            setIncrement(increment + 1);
            setIsUpgraded(true);
            setUpgradeCounter(upgradeCounter + 1);
        }
    };

    const handleUpgradeCharger = () => {
        if (upgradeCharger < 7 && count >= thresholde && width === width) {
            setCount(count - thresholde);
            setThresholde(thresholde * incrementThrehold);
            setIncremente(incremente + 1);
            setIsUpgraded(true);
            setUpgradeCharger(upgradeCharger + 1);
            setTime(time / 2);
        }
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleWalletOpen = () => {
        setIsWalletOpen(true);
    };

    const handleWalletClose = () => {
        setIsWalletOpen(false);
    };

    const handleUpgradeOpen = () => {
        setIsUpgradeOpen(true);
    };

    const handleUpgradeClose = () => {
        setIsUpgradeOpen(false);
    };

    const handleInviteOpen = () => {
        setIsInviteOpen(true);
    };

    const handleInviteClose = () => {
        setIsInviteOpen(false);
    };

    return (
        <div className="app">
            <header className="header">
                <div className="user-info">
                    <img src="https://img-9-jtddddd.vercel.app/images/user.png" alt="User Icon" className="user-icon" />
                    <span className="user-name">{username || 'Loading...'}</span> {/* نمایش username یا پیام Loading */}
                </div>
                {isModalOpen && (
                    <div className="league-banner">
                        <div className="league-content">
                            <span className="close-button" onClick={handleModalClose}>X</span>
                            <h1>league</h1>
                        </div>
                    </div>
                )}
                {isInviteOpen && (
                    <div className="league-banner">
                        <div className="league-content">
                            <span className="close-button" onClick={handleInviteClose}>X</span>
                            <button className="telegram-button"><p id="p2">telegarm channel</p></button>
                            <a href=""><button className="invite-button"><p id="p2">invite friend</p></button></a>
                        </div>
                    </div>
                )}
                {isWalletOpen && (
                    <div className="wallet-banner">
                        <div className="wallet-content">
                            <span className="close-button" onClick={handleWalletClose}>X</span>
                            <a href="http://www.youtube.com"><button className="youtube-button"><p id="p2">youtube channel</p></button></a>
                        </div>
                    </div>
                )}
                {isUpgradeOpen && (
                    <div className="wallet-banner">
                        <div className="wallet-content">
                            <span className="close-button" onClick={handleUpgradeClose}>X</span>
                            <button onClick={handleUpgradeCounter} className="count-button"><p id="p2">count upgarde</p></button>
                            <p id="pok">level:{increment === 8 ? "max" : increment} needs:{threshold === 78125000 ? "max" : threshold}</p>
                            <button onClick={handleUpgradeCharger} className="charge-button"><p id="p2">charge upgarde</p></button>
                            <p id="pok">level:{incremente === 8 ? "max" : incremente} needs:{thresholde === 78125000 ? "max" : thresholde}</p>
                        </div>
                    </div>
                )}
            </header>
            <main className="main-content">
          <div className="controls">
            <p id="paragraph"><img src="https://img-9-jtddddd.vercel.app/images/ban.png" alt="" id="bamboo"/>{count}</p>
          </div>
        <div className="content">
        <button className="button" onClick={handleClick}>
              <img src="https://img-9-jtddddd.vercel.app/images/panda.png" alt="Panda image" className="panda-img" />
              </button>{animate && <div className="coin-animation">+{increment}</div>}
        </div>
        <div> 
          <div className="charge-bar-container">
            <div className="charge-bar" style={{ width:`${width}% ` }} /><h3 id="h3">{width}/500</h3>
            </div>
          </div>
        <div className="spans">
        
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span1" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span1" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span1" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span2" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span1" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        <span><img className="span3" src="https://img-9-jtddddd.vercel.app/images/bambo.png"/></span>
        
        </div>
      </main>
      
      <footer className="footer">
        <nav className="navigation">
          <ul>
            <li><a className="league-button" onClick={handleModalOpen} href="#"><img src="https://img-9-jtddddd.vercel.app/images/league.png" alt="" className="league"/><p id="p">league</p></a></li>
            <li><a className="league-button" onClick={handleUpgradeOpen} href="#"><img src="https://img-9-jtddddd.vercel.app/images/upgrade.png" alt="" className="league"/><p id="p">upgrade</p></a></li>
            <li><a className="league-button" onClick={handleInviteOpen} href="#"><img src="https://img-9-jtddddd.vercel.app/images/invite.png" alt="" className="league"/><p id="p">invite friend</p></a></li>
            <li><a className="league-button" onClick={handleWalletOpen} href="#"><img src="https://img-9-jtddddd.vercel.app/images/weekly-reward.png" alt="" className="league"/><p id="p">weekly reward</p></a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
