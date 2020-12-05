import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import sample from "./Excerpt_1.png";

function IntroComponent(props) {
     
    return (
        <div className="App" style={{textAlign:"justify"}}> 
        Own an excerpt from the novel, Hope Runners of Gridlock.
        <img src={sample} style={{maxWidth: "100%", maxHeight: "100%"}} alt="Sample" />
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
