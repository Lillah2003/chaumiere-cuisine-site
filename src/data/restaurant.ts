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
export type MenuCategory = { category: string; items: MenuItem[] };
export const menu: MenuCategory[] = [
 {category:'Entrées',items:[
  {name:'Potimarron fumé et son blini',description:'Crème de vodka',price:13},
  {name:'Velouté de P-D-T grillée',description:'Œuf parfait et lentilles truffées',price:15},
  {name:'Karaage de chou-fleur',description:'Mayonnaise au sésame et wasabi',price:13},
  {name:'Foie gras de canard fermier',description:'Chutney de figues',price:21},
 ]},
 {category:'Plats',items:[
  {name:'Tartare de bœuf',description:'Frites / salade',price:24},
  {name:'Gambas poêlées à l’ail noir',description:'Jus de crustacés',price:29},
  {name:'Rognons de Vô',description:'Crème de moutarde douce',price:27},
 ]},
 {category:'Desserts',items:[
  {name:'Assiette de fromages',price:13},
  {name:'Glaces et sorbets',price:9},
  {name:'Fondant au chocolat et coco',description:'Glace rhum-coco',price:14},
  {name:'Entremet poire-verveine',price:13},
 ]},
];
export const threeCourseMenu: MenuCategory[] = [
 {category:'Entrées',items:[{name:'Guacamole aux épices et crevettes'},{name:'Assiette de charcuterie'}]},
 {category:'Plats',items:[{name:'Joue de bœuf confite',description:'Gratin aux topinambours'},{name:'Filet de truite saumonée',description:'Crème de crustacés et poêlée de légumes'}]},
 {category:'Desserts',items:[{name:'Salade de fruits frais',description:'Sorbet poire'},{name:'Tiramisu au café'}]},
];
export const lunchMenu: MenuCategory[] = [
 {category:'Entrées',items:[{name:'Assiette océane'},{name:'Velouté de carottes',description:'À la fève de tonka et cake au fromage'}]},
 {category:'Plats',items:[{name:'Contre filet de bœuf',description:'Sauce au poivre'},{name:'Dos de merlu meunière',description:'Beurre blanc et épinards'}]},
 {category:'Desserts',items:[{name:'Tarte d’ananas',description:'Infusion menthe et sorbet citron'},{name:'Tarte amandine',description:'Chocolat orange'},{name:'Tarte Tatin'}]},
];
export const wines: MenuCategory[] = [
 {category:'Rouges',items:[{name:'Gamay « 23 »',price:8},{name:'Bordeaux « 19 »',price:6},{name:'Côte du Rhône « 23 »',price:8},{name:'IGP Hérault « 23 »',price:7},{name:'Côteaux Bourguignons « 22 »',price:8}]},
 {category:'Blancs',items:[{name:'Vdp des Cévennes « 23 »',price:8},{name:'Touraine Sauvignon « 23 »',price:6},{name:'Petit Chablis « 23 »',price:8},{name:'Tariquet « 23 »',price:6},{name:'Naditan « 23 »',price:7}]},
 {category:'Rosé',items:[{name:'Provence « 24 »',price:6}]},
];
export const otherDesserts: MenuCategory[] = [
 {category:'Divers',items:[{name:'Fontainebleau',description:'Au coulis de fruits rouges'},{name:'Croushin!',description:'Aux framboises'}]},
];
export function pageHead(title: string, description: string) {
 return { meta: [{title}, {name:'description',content:description}, {property:'og:title',content:title}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] };
}
