import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/data/restaurant';
import { Reviews, Reservation } from '@/components/restaurant/Sections';
export const Route=createFileRoute('/avis')({head:()=>pageHead('Avis clients — La Chaumière à Poissy','La Chaumière à Poissy : 4,4 sur 5 et 594 avis Google. Découvrez les retours sur la cuisine maison et l’accueil.'),component:ReviewsPage});
function ReviewsPage(){return <main id="contenu"><header className="page-heading"><p className="eyebrow section-kicker">LA CHAUMIÈRE, À TRAVERS VOS MOTS</p><h1>Vos avis</h1><p>Le plaisir de vous accueillir, et de vous retrouver.</p></header><Reviews/><Reservation/></main>;}
