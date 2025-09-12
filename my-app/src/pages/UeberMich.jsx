import React from 'react';
import './PageStyles.css';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

const UeberMich = () => (
  <motion.div
    className="page uebermich-page"
    initial={pageTransition.initial}
    animate={pageTransition.animate}
    exit={pageTransition.exit}
    transition={pageTransition.transition}
  >
  <div className='aboutmetext'>
    <h1>Über Mich</h1>
    <h2>Pia Reitz - Pia Ingrid vom Planbach </h2>
    <img src="https://res.cloudinary.com/dzlpy6osa/image/upload/WhatsApp_Image_2025-09-11_at_12.25.40_hpnord" alt="Pia Reitz" class="about-me-img" />
    <p>Nähen begleitet mich schon mein ganzes Leben. Alles begann um 1980, als meiner Mutter mir ihre alte Paff-Nähmaschine überließ. Mit viel Neugier und Kreativität fertigte ich damals aus alten Jeans und Leder die sogenannten "Ibiza-Jacken" - ein echtes Upcycling-Projekt, lange bevor der Begriff in Mode kam.<br/><br/> 
    Kurz darauf gönnte ich mir meine erste eigene neue Pfaff-Maschine, eine Tiptronic. Etwa zu dieser Zeit entdeckte ich gemeinsam mit meinem Mann das Westernhobby. Wir tauchten zuerst in die Epoche um 1860 ein, später verschlug es uns in die Zeit um 1740.<br/><br/> 
    Die ersten historischen Schnittmuster - sogenannte "Past Patterns" aus Amerika - musste ich noch mühsam von Hand übersetzzen. Doch genau diese Herausforderung entfachte meine Leidenschaft für historische Gewandungen.<br/><br/> 
    In den folgenden Jahren habe ich vor allem meine Familie für unser gemeinsames Hobby ausgestattet, Zelte genäht und auch für Freunde individuelle Kleidungsstücke angefertigt Seit nunmehr 16 Jahren bin ich mit dem historischem angelegten Verein die <strong>Freyen Rittersleut zu Randingen</strong> im Mittelalter unterwegs. Meine aktuellen Nähprojekte sind fest in dieser Epoche verwurzelt - mit viel Liebe zum Detail und historischer Genauigkeit.<br/><br/> 
    Seit meinem Eintritt in den Ruhestand habe ich beschlossen, mein Hobby in einen kleinen Beruf zu verwandeln - und so entstand <strong>Pia's Nähstube</strong>. Hier nähe ich nicht nur historische Gewandungen, sondern widme mich auch dem Upcycling moderner Materiealien.<br/><br/>
     In meiner Galerie findest du Beispiele meiner Arbeiten - von liebevoll restaurierten Einzelstücken bis hin zu kreativen Neuanfertigungen. Auch für Änderungen und Anpassungen bin ich jederzeit offen.<br/><br/> 
    Nähen ist für mich nicht nur Handwerk - es ist Ausdruck von Geschichte, Persönlichkeit und Nachhaltigkeit. Ich freue mich, wenn ich mit meiner Arbeit ein Stuck dieser Leidenschaft weitergeben kann.</p>
  <h2>Wo Geschichte beginnt</h2>
  <p>Du suchst nach Hochwertigen Stoffen, stilvollen Accessoires oder möchtest dich einfach inspirieren lassen? Ich möchte dir einige meiner liebsten Quellen ans Herz legen - Orte, an denen ich selbst gerne stöbere, einkaufe und mich inspirieren lasse. Vielleicht findest du dort genau das Material oder Inspiration, das deinem nächsten Projekt das gewisse etwas verleiht.</p>
  </div>
  <div className='contact-form'><ul className='aboutMe-ref'>
    <li className='contact-form-inside'>
      <a href='https://tuchundstoff.shop/' style={{color: '#7B4019'}}>🪡Stoffträume ~ TuchundStoff.shop</a>
      <div className='listDetail'>Qualitätsstoffe für zeitgenössische Mode und gelebte Geschichte. Ob Leinen, Loden oder Samt - hier findest du Naturmaterialien aus europäischen Webereien, ideal für Reenactment, Maßschneiderei oder kreative Projekte.</div>
    </li>
    <li className='contact-form-inside'>
      <a href='https://www.die-hutschmiede.de/' style={{color: '#7B4019'}}>👒Lieblingsstücke ~ Die Hutschmiede</a>
      <div className='listDetail'>Gewandmacherei, Alltagshüte und Dekoration mit mittelalterlichem Flair. Sie bieten liebevoll gefertigte Einzelstücke an und gehen individuell auf Kundenwünsche ein - ein echter Geheimtipp für stilvolle Gewänder und Accessoires.</div>
    </li>
    <li className='contact-form-inside'>
      <a href='https://www.freye-rittersleut.net/verein/' style={{color: '#7B4019'}}>🛡️Schatzkammer ~ Freye Rittersleut zu Randingen e.V.</a>
      <div className='listDetail'>Ein Mittelalterverein mit Herzblut und Hingabe. Wer sich für authentische Darstellung, historische Handwerkskunst und lebendige Geschichte interessiert, findet hier nicht nur Inspiration, sonder auch eine lebendige Gemeinschaft, die das Mittelalter auf Märkten und Burgbelebungen zum Leben erweckt.</div>
    </li>
  </ul>
  </div>
  </motion.div>
);

export default UeberMich;
