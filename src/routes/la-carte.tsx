import { createFileRoute } from '@tanstack/react-router';
import { menu, threeCourseMenu, lunchMenu, wines, otherDesserts, pageHead, type MenuCategory } from '@/data/restaurant';
import { Reservation } from '@/components/restaurant/Sections';
export const Route=createFileRoute('/la-carte')({head:()=>pageHead('La carte et les menus — La Chaumière, Poissy','Découvrez les entrées, plats, desserts, menu en 3 temps, formules midi et vins de La Chaumière à Poissy, avec les tarifs de la carte.'),component:MenuPage});
const currency = new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'});
function MenuGroups({groups}:{groups:MenuCategory[]}) {
 return <div className="full-menu">{groups.map(group=><section className="menu-category" key={group.category}><h3>{group.category}</h3>{group.items.map(item=><div className="menu-item" key={item.name}><div className="menu-item-copy"><p>{item.name}</p>{item.description&&<p className="menu-item-description">{item.description}</p>}</div>{item.price!==undefined&&<span className="menu-item-price">{currency.format(item.price)}</span>}</div>)}</section>)}</div>;
}
function MenuPage(){return <main id="contenu"><header className="page-heading"><p className="eyebrow section-kicker">LA CUISINE DE LA CHAUMIÈRE</p><h1>La carte & les menus</h1><p>Des saveurs françaises, le plaisir du fait maison.</p></header><div className="container">
 <section className="menu-band" aria-labelledby="carte-title"><h2 id="carte-title">À la carte</h2><MenuGroups groups={menu}/></section>
 <section className="menu-band" aria-labelledby="trois-temps-title"><h2 id="trois-temps-title">Menu en 3 temps</h2><MenuGroups groups={threeCourseMenu}/><p className="menu-section-note">Tarif à confirmer auprès de notre équipe.</p></section>
 <section className="menu-band" aria-labelledby="midi-title"><h2 id="midi-title">Formules midi</h2><MenuGroups groups={lunchMenu}/><p className="menu-section-note">Tarifs à confirmer auprès de notre équipe.</p></section>
 <section className="menu-band" aria-labelledby="vins-title"><h2 id="vins-title">Les vins</h2><MenuGroups groups={wines}/></section>
 <section className="menu-band" aria-label="Autres desserts"><MenuGroups groups={otherDesserts}/></section>
 </div><p className="menu-disclaimer">Plats et disponibilités susceptibles d’évoluer. Pour toute question, contactez notre équipe.</p><Reservation/></main>;}
