import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/data/restaurant';
import { Introduction, Experience, Reservation } from '@/components/restaurant/Sections';
export const Route=createFileRoute('/le-restaurant')({head:()=>pageHead('Le restaurant — La Chaumière à Poissy','Une adresse chaleureuse au cœur de Poissy : cuisine française faite maison et service attentionné à La Chaumière.'),component:RestaurantPage});
function RestaurantPage(){return <main id="contenu"><header className="page-heading"><p className="eyebrow section-kicker">6 RUE AU PAIN · POISSY</p><h1>L’esprit La Chaumière</h1><p>Le goût du partage et d’une cuisine sincère.</p></header><Introduction/><Experience/><Reservation/></main>;}
