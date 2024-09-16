// rafce
import "./Info.css";
import React, { useState } from "react";

const huviHobiMassiiv = ["Dungeons & Dragons", "Guild Wars 2", "CRPG mängud", "andmeanalüüs", "psühholoogia", "anorgaaniline keemia", "krimisarjad", "rotid"];

function saada() {
    alert("Tahtsid saata, aga pole implementeeritud... :(");
}

const Info = ({ nimi }) => {
    return (
    <>
        <div className="App-header App-emph Info-item">{ nimi }</div>
        <div className="Info-flex">
            <ul className="Info-item">
                { huviHobiMassiiv.map(huviHobi => <li key={ huviHobi }>{ huviHobi }</li>) }
            </ul>
            <div className="Info-item">
                <label htmlFor="email">E-posti aadress:</label>
                <input id="email" type="email" />
                <label htmlFor="teade">Kirja sisu:</label>
                <textarea id="teade" />
                <button className="App-button Info-item-right" onClick={ saada }>Saada!</button>
            </div>
        </div>
    </>
)};

export default Info;
