import React from "react";
import './PageStyles.css';
import { motion } from "framer-motion";

const pageTransition = {
    initial: { opacity: 0, y: 40},
    animate: { opacity: 1, y: 0},
    exit: {opacity: 0, y: -40},
    transition: { duration: 0.6, ease: "easeInOut"}
};

const Impressum = () => {

    
    return (
        <motion.div
            className="page impressum-page"
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
            >
                <div className="impressumPage">
                    <h1>Impressum</h1>
                    <p>Pia's Nähstube<br/>
                    Pia Reitz<br/>
                    Hindenburgstraße 23<br/>
                    71272 Renningen<br/>
                    Deutschland</p>
                    <p>Telefon: +49 175 1611877<br/>
                    E-Mail: PiasNaehstube@gmx.de</p>
                    <p>Umsatzsteuer-ID: DE452564876</p>
                    <h1>Datenschutz</h1>
                    <h2>Allgemeines</h2>
                    <p>Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Diese Website verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO)</p>
                    <h2>Kontaktformular</h2>
                    <p>Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden die von Ihnen eingegebenen Daten(z.B. Name,E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden nach abgeschlossener Bearbeitung gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.</p>
                    <h2>Hosting</h2>
                    <p>Diese Website wird bei den externen Dienstleistern <strong>Vercel Inc.</strong> und <strong>Render</strong> gehostet.</p><br/>
                    Vercel Inc., 340  Lemon Ave #4133, Walnut, CA 91789, USA <br/>
                    Render, 1001 Page St, San Francisco, CA 94117, USA <p/>
                    <p>Beim Besuch dieser Website werden durch die Hosting-Anbieter automatisch technische Zugriffsdaten erfasst, darunter: IP-Adresse, Datum und Uhrzeit des Zugriffs, Browerstype und Betriebssystem, Referrer-URL. Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.</p>
                    <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 Zif. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Webauftritt)</p>
                    <p>Hinweis zur Datenübertragung in der USA: Die Datenverarbeitung erfolgt auf Basis sogenannter Standartvertragsklauseln gemäß Art. 46 Abs. 2 DSGVO, um ein angemessenes Datenschutzniveau sicherzustellen. Weitere Informationen finden Sie in den jeweiligen <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policies von Vercel</a> und <a href="https://render.com/privacy" target="_blank" rel="noopener noreferrer">Render</a>.</p>
                    <h2>Externe Links</h2>
                    <p>Diese Website enthält Links zu externen Webseiten Dritter. Auf deren Inhalte und Datenschutzpraktiken habe ich keinen Einfluss. Für die Verarbeitung personenbezogener Daten auf den verlinkten Seiten ist ausschließlich der jeweilige Betreiber verantwortlich.</p>
                    <h2>Keine Cookies & kein Tracking</h2>
                    <p>Diese Website verwendet keine Cookies, keine Analyse-Tools und keine Social-Media-Plugins.</p>
                    <h2>Ihre Rechte</h2>
                    <p>Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten, deren Berichtigung oder Löschung sowie das Recht auf Einschränkung der Verarbeitung und Datenübertragbarkeit. Sie können eine erteilte Einwilligung jederzeit widerrufen. Bei Fragen zum Datenschutz können Sie sich jederzeit an mich wenden: <strong>PiasNaehstube@gmx.de</strong></p>
                </div>
            </motion.div>
    );
};

export default Impressum