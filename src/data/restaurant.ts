export const restaurant = {
 name: 'La Chaumière', phone: '01 30 74 44 55', phoneHref: 'tel:+33130744455',
 address: '6 Rue au Pain', city: '78300 Poissy', priceRange: '30–60 € / personne',
 mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Chaumi%C3%A8re+6+Rue+au+Pain+78300+Poissy',
 directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=La+Chaumi%C3%A8re+6+Rue+au+Pain+78300+Poissy',
 // Fill only after verification; undefined entries are not displayed.
 legal: { operator: undefined as string | undefined, registration: undefined as string | undefined, publicationDirector: undefined as string | undefined, host: undefined as string | undefined },
 hours: { lunch: 'Service du midi jusqu’à environ 14 h', dinner: 'Service du soir à partir d’environ 19 h', verifiedDays: undefined as string | undefined },
};
export type MenuItem = { name: string; description?: string; price?: number };
export const menu: { category: string; items: MenuItem[] }[] = [
 {category:'Entrées',items:[{name:'Tartare de saumon'},{name:'Terrine de campagne'},{name:'Velouté de légumes'},{name:'Samosa de gambas'}]},
 {category:'Plats',items:[{name:'Dorade'},{name:'Gambas croustillantes'},{name:'Salade gourmande'},{name:'Pâté de tête maison'}]},
 {category:'Desserts',items:[{name:'Charlotte aux poires'},{name:'Trio à la crème de marron'}]},
];
export function pageHead(title: string, description: string) {
 return { meta: [{title}, {name:'description',content:description}, {property:'og:title',content:title}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] };
}
