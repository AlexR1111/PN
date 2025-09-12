import React, { useState } from 'react';
import './PageStyles.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';


const Galerie = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [theme, setTheme] = useState('mittelalter');
 

  const medievalSlides = [
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Wappenrock_kurz_repugn',
      title: 'Ein Kurzer Wappenrock',
      description: 'Ein kurz geschnittener Wappenrock aus Leinen. ⚜️Funfact: Der Wappenrock entstand vermutlich in der zweiten Hälfte des 12. Jahrhunderts während der Kreuzzüge als über dem Kettenpanzer getragener Sonnenschutz und blieb bis etwa 1300 nahezu einfarbig – erst später wurden die Wappen und Farben des Trägers prächtig darauf gezeigt. Und der rot-weiß-rote Bindenschild Österreichs soll laut Legende entstanden sein, als der weiße Waffenrock Leopolds des Tugendhaften nach der Belagerung von Akkon blutdurchtränkt war – nur ein weißer Streifen blieb sichtbar und wurde ihm als neues Banner erlaubt.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Zeltreparatur_rstocn',
      title: 'Zeltreperatur',
      description: 'Reperatur des von mir genähten, in die Jahre gekommenen Tarp - viele Quadratmeter Stoff um mich rum. ⚜️Funfact: Im Mittelalter kamen Händler, Pilger und Soldaten schon lange vor dem modernen „Tarp“ mit einfachen Leinwand- oder Hanfplanen aus, die sie großzügig mit Tierfett, Wachs oder pflanzlichen Ölen bestrichen, um provisorische Sonnenschutz- und Regenschutzdächer aufzuspannen.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Prunkgewandungen_mit_Nerz_ahoqjk',
      title: 'Prunkgewandung mit Nerz',
      description:'Von mir genähtes Edelgewand und passendes Höllenfesterkleid - Nachträglich mit Nerz verbrämt. ⚜️Funfact: Im Hochmittelalter war der purpurrote Mantel ein regelrechtes Statussymbol: Für einen einzigen Gramm Purpurfarbe aus der Purpurschnecke mussten bis zu 12 000 Schnecken gesammelt werden – so teuer wie reines Gold.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Lieblingsgugel_vbucdk',
      title:'Damengugel',
      description:'Damengugel aus geliefertem Stoff nach Wunsch. ⚜️Funfact: Im Spätmittelalter konnte der Zipfel (Liripipe) mancher Gugel über einen Meter lang werden – so absurd, dass das englische Parlament im Sumptuary Act von 1363 die maximale Länge auf 46 Zoll (≈ 117 cm) begrenzte, um Eitelkeit und Stolperfallen einzudämmen.'
      },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Tom_Hansen_Häs_bvrc77',
      title: 'Häs',
      description: 'Ein Häs für einen guten Freund - nach eigenem Wunsch maßgeschneidert - das Hemd ist aus sehr altem Leinen, mit dem auch der Klappenrock aus grünem Loden gefüttert ist. Passende Mütze aus einer alten Pelzjacke. ⚜️Funfact: Im Mittelalter waren Narrenkostüme oft mit Dutzenden kleiner Schellen besetzt, die laut ständischer Kleiderordnung ausschließlich dem Adel vorbehalten waren und in manchen Kirchen verboten wurden, weil ihr stetes Klingeln den Gottesdienst störte.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Klappenrock_für_Baby_ono6wo',
      title:'Baby Klappenrock ',
      description:'Klappenrock für Baby, dass der Enkel meiner Freundin fürs Lager authentisch eingekleidet ist. ⚜️Funfact: Im Mittelalter war der Klappenrock für Säuglinge nicht nur Wärmeschutz, sondern auch Stillhilfe: Die seitlichen Stoff­klappen konnten zur Seite geschlagen werden, sodass Mütter ihr Baby diskret versorgen konnten, ohne den ganzen Mantel abzulegen.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Pillbox_passend_zum_Kleid_js3qj2',
      title:'Pillbox',
      description:'Pillbox aus dem Reststoff vom Höllenfensterkleid. ⚜️Funfact: Im Mittelalter diente die so genannte Gebende als unmittelbarer Vorläufer des Pillbox-Huts: eine schlichte, runde, steife Haube ohne Krempe, die Frauen unter Schleiern trugen und mit Hutnadeln fixierten'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/2_Schamkapsel-Hosen_ppiunq',
      title:'Schamkapselhosen',
      description:'2 Schamkapselhosen - nach Maß und Kundenwunsch. ⚜️Funfact: Im 15. Jahrhundert entwickelte sich die Schamkapsel (Brayet) an engen Beinlingen von einem simplen Stofflatz zum provokanten Männlichkeits-Statement: Männer ließen sie mit Bändern, Schleifen und sogar kleinen Taschen verzieren und formten sie zu Bananen-, Gurken- oder Herzformen – ein offenkundiges Symbol ihrer Potenz.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Gewandung_für_Puppen_1_qdmgws',
      title:'Geburtstagsgeschenk',
      description:'Geburtstagsgeschenk für gute Freunde - aus Resten der von mir genähten Gewandung und selbst genähten Lederstiefel.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Gewandung_für_Puppe_2_c9a8qx',
      title:'Geburtstagsgeschenk',
      description:'Geburtstagsgeschenk nach einem Foto - komplett selbst gemacht - auch die Stiefel.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Gewandung_Puppen_3_lnyla6',
      title:'Hochzeitsgeschenk',
      description:'Hochzeitsgeschenk für meinen Sohn und seine Frau - aus Reststoffen der Gewandung.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Kleid_Mi-Parti_kvtrv9',
      title:'Mi-Parti Kleid',
      description:'Mi-Parti Kleid aus Diamantköper - komplett gefüttert. ⚜️Funfact: Im 11. Jahrhundert wurde die halbgeteilte Farbmode aus Byzanz erstmals am deutschen Hof populär, als Kaiser Otto II. 972 die byzantinische Prinzessin Theophanu heiratete und damit Mi-Parti-Gewänder in Mitteleuropa einführte.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Wams_Mi-Parti_nlzfsa',
      title:'Mi-Parti Wams',
      description:'Mi-Parti Wams - aus Wolle - komplett abgefüttert. ⚜️Funfact: Im 12. Jahrhundert trugen Bedienstete mi-parti Wamsen, um durch die vertikale Farbenteilung ihre Zugehörigkeit zu einem bestimmten Herrenhaus zu signalisieren – eine frühe Form von Uniform, lange bevor Wappenkleidung Mode wurde.'
     },
  ];

  const upcyclingSlides = [
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/maxi-cosy_-_Sack_rhfftp' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155316_eeecoa' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_154903_t3jor3' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155227_unbbc6' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155248_aeql6t' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155438_oti6pu' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155335_t3xle7' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155809_y7lm5t' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155507_dc17di' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155533_n2ubms' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Collage_2025-09-11_16_29_02_fa8wmj' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155911_nlyqgd' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/20250911_155941_dkhdzb' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Collage_2025-09-11_16_28_07_1_qs8tn8' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Collage_2025-09-11_16_29_57_pbfe32' },
  ];

   const slides = theme ==='mittelalter' ? medievalSlides : upcyclingSlides;

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const pageTransition = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.6, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className="page galerie-page"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <h1>🖼️Galerie</h1>
      <div className="theme-toggle">
  <button
    className={theme === 'mittelalter' ? 'active' : ''}
    onClick={() => setTheme('mittelalter')}
  >
    Mittelalter
  </button>

  <button
    className={theme === 'upcycling' ? 'active' : ''}
    onClick={() => setTheme('upcycling')}
  >
    Upcycling
  </button>
</div>

      <p className='gallery-text'>Tauche ein in die Welt vergangener Jahrhunderte: <br/><br/>Diese Galerie zeigt handgefertigte Gewandungen, inspiriert von mittelalterlicher Kleidung und traditioneller Handwerkskunst. Die verwendeten Stoffe stammen direkt von meinen Kund*innen - so wird jedes Stück zu einem ganz persönlichen Unikat. Besonders hervorzuheben sind die Arbeiten mit echten Fellen, die aus alten Pelzjacken und Mänteln stammen. Durch sorgfältige Aufarbeitung erhalten diese Materialien ein neues Leben in historisch anmutenden Gewändern.
      <br/><br/>Nachhaltigkeit trifft Kreativität:<br/><br/>In dieser Rubrik findest du moderne Stücke, die aus alten Materialien neu gestaltet wurden. Ob Stoffreste, ausgediente Kleidung oder besondere Fundstücke - jedes Werk erzählt seine eigene Geschichte. Mit viel Liebe zum Detail entstehen daraus einzigartige Accessoires und Kleidungsstücke, die Umweltbewusstsein und Stil vereinen.<br/><br/></p>

      <div className="gallery-grid">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => handleClick(i)}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        render={{
          slide: ({slide}) => (
            <div className="lightbox-slide">
              <img
                src={slide.src}
                alt={slide.title || 'Bild'}
                className="lightbox-image"
                />
              <div className='lightbox-text'>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          )  
      }}
      />
    </motion.div>
  );
};

export default Galerie;
