import { useNavigate } from "react-router-dom";
import kontaktBild from '../images/the_visitation_1943.3.824.jpg';
import aboutMeBild from '../images/hagad-daurada-web-44671_57_540x335.jpg';
import galerieBild from '../images/morris_dancer_1943.3.835.jpg';
import blogBild from '../images/88d2fb17c3b97bab7fe1825d92f4338f--medieval-times-medieval-art.jpg'

function VorschauKarten() {
    const navigate = useNavigate();

    const cards= [
        {
            title: 'Über mich',
            image:aboutMeBild,
            description:'Lerne die Person hinter der Nähstube kennen.',
            link: '/ueber-mich',
        },
        {
            title:'Galerie',
            image:galerieBild,
            description: 'Entdecke meine bisherigen Arbeiten.',
            link: '/galerie',
        },
        {
            title:'Blog',
            image:blogBild,
            description:'Neuigkeiten und Anleitungen.',
            link:'/blog',
        },
        {
            title:'Kontakt',
            image: kontaktBild,
            description:'Ich freue mich auf deine Nachricht!',
            link:'/kontakt',
        },
    ];

    return (
        <div className='cardLinks'>
            {cards.map((card) => (
                <div className ="card" key={card.title}>
                    <img src={card.image} alt={card.title}/>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button onClick={() => navigate(card.link)}>Mehr erfahren</button>
                    </div>
            ))}
        </div>
    );
}

export default VorschauKarten;