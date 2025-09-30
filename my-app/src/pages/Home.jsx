import React from "react";
import './PageStyles.css';
import {motion} from 'framer-motion';
import VorschauKarten from '../components/VorschauKarten';
import SidebarPreview from "../components/SidebarPreview";

const Home = () => (
    <motion.div
        className="page"
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -30}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        >
        <h1>Herzlich willkommen</h1>
        <p>Ob historische Gewandung oder moderne Upcycling-Ideen – ich verwandle Stoffe in individuelle Lieblingsstücke. Änderungswünsche? Kein Problem – ich passe alles nach deinen Vorstellungen an.</p>
        <VorschauKarten/>
        <SidebarPreview/>
        <p className="aboutetext">Bei mir gibt es von Hand gefertigte und bestickte Gewandungen nach
        Wunsch des Kunden vom Mittelalter bis zur Renaissance, für Fantasy und
        Rollenspiel.

        Sie können bestellt und individuell auf bestehende Outfits oder ein neues
        Ensemble passend angefertigt werden.
        Von mir hergestellte Gewandungen und Zubehör sind immer Unikate, die
        von mir mit Herzblut ( Nadelstiche ) hergestellt werden.

        Die Träger können sich deshalb immer eines Einzelstückes sicher sein!
        Ich fertige grundsätzlich auf Wunsch des Kunden und versuche, möglichst
        nahe an Vorlagen ranzukommen

        Die Fotos sind Beispiele meiner Arbeiten. </p>
    </motion.div>
);

export default Home;