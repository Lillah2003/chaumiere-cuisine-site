import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/data/restaurant';
import { Contact, Reservation } from '@/components/restaurant/Sections';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact et réservation — La Chaumière, Poissy','Réservez par téléphone au 01 30 74 44 55. Retrouvez La Chaumière au 6 Rue au Pain, 78300 Poissy et préparez votre itinéraire.'),component:ContactPage});
function ContactPage(){return <main id="contenu"><header className="page-heading"><p className="eyebrow section-kicker">NOUS SERONS RAVIS DE VOUS ACCUEILLIR</p><h1>Contact & réservation</h1><p>Une question, une envie, une table à réserver.</p></header><Contact/><Reservation/></main>;}
