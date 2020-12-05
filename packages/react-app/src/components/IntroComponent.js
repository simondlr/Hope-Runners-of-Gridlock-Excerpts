import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import excerpt_1 from "./Excerpt_1.png";
import excerpt_2 from "./Excerpt_2.png";
import excerpt_3 from "./Excerpt_3.png";
import excerpt_4 from "./Excerpt_4.png";
import excerpt_5 from "./Excerpt_5.png";
import excerpt_6 from "./Excerpt_6.png";
import excerpt_7 from "./Excerpt_7.png";
import excerpt_8 from "./Excerpt_8.png";
import excerpt_9 from "./Excerpt_9.png";
import excerpt_10 from "./Excerpt_10.png";
import excerpt_11 from "./Excerpt_11.png";
import excerpt_12 from "./Excerpt_12.png";
import excerpt_13 from "./Excerpt_13.png";
import excerpt_14 from "./Excerpt_14.png";
import excerpt_15 from "./Excerpt_15.png";

function IntroComponent(props) {
     
    return (
        <div className="App" style={{textAlign:"justify"}}> 
        <h2>Hope Runners of Gridlock Excerpts</h2>
        Own an excerpt from the novel, Hope Runners of Gridlock.
        <br />
        <img src={excerpt_1} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_2} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_3} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_4} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_5} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_6} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_7} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_8} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_9} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_10} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_11} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_12} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_13} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_14} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <img src={excerpt_15} style={{maxWidth: "100%", maxHeight: "100%"}} />
        <br />

        <hr />
        {/* TECHNICALS SECTION */}
        <div className="section">
        <h2>Technicals</h2>
        </div>
        <hr />
        {/* ARTIST SECTION */}
        <div className="section">
        <h2>About The Artist:</h2>
        I'm a creator at heart.
        I have created games, writing, music, code, companies, and new economics. Solving the problems of the creator 
        has always been important to me. In the past I co-founded Ujo Music,
        working with Grammy-winning artists such as Imogen Heap and RAC to launch the first music royalty projects using smart contracts. I've
        helped kickstart wholly new markets and economies. I helped to create the Ethereum ERC20 token standard and token bonding curves, technologies 
        that's currently facilitating economies worth several billion dollars of value.
        I enjoy creating new forms of art and experimenting with ways to empower the creative industry.
        <br />
        <br />
        Swing me a follow on Twitter! <a href="https://twitter.com/simondlr">@simondlr</a>.<br />
        <br />
        </div>
        </div>
    );
}

export default IntroComponent
