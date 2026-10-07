import { createFileRoute } from '@tanstack/react-router';
import { Hero, Introduction, SignatureDishes, Experience, Reviews, Reservation, Contact } from '@/components/restaurant/Sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/')({
 head:()=>({...pageHead('La Chaumière — Restaurant français fait maison à Poissy','Découvrez La Chaumière, restaurant français au 6 Rue au Pain à Poissy. Cuisine faite maison, accueil chaleureux. Réservez au 01 30 74 44 55.'),scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Restaurant',name:'La Chaumière',address:{'@type':'PostalAddress',streetAddress:'6 Rue au Pain',postalCode:'78300',addressLocality:'Poissy',addressCountry:'FR'},telephone:'+33130744455',servesCuisine:'Française',priceRange:'30–60 €',aggregateRating:{'@type':'AggregateRating',ratingValue:4.4,reviewCount:594,bestRating:5},hasMap:'https://www.google.com/maps/search/?api=1&query=La+Chaumiere+6+Rue+au+Pain+Poissy'})}]}),
 component:Index,
});
function Index(){return <main id="contenu"><Hero/><Introduction/><SignatureDishes/><Experience/><Reviews/><Reservation/><Contact/></main>;}
