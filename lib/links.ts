// Booking — sistema externo (Cloudbeds)
// Formato real aceito: A7Jj9X/?currency=brl&checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&guests=N
const BOOKING_BASE = 'https://hotels.cloudbeds.com/pt-br/reservas/A7Jj9X/';

export function bookingUrl(opts?: {
    checkin?:  string;   // YYYY-MM-DD
    checkout?: string;
    guests?:   number;   // soma total de adultos + crianças
}) {
    const url = new URL(BOOKING_BASE);
    url.searchParams.set('currency', 'brl');
    if (opts?.checkin)  url.searchParams.set('checkin',  opts.checkin);
    if (opts?.checkout) url.searchParams.set('checkout', opts.checkout);
    if (opts?.guests)   url.searchParams.set('guests',   String(opts.guests));
    return url.toString();
}

// Redes sociais oficiais
export const SOCIAL = {
    facebook: 'https://www.facebook.com/pousadavilapraiana',
    youtube:  'https://www.youtube.com/@pousadavilapraiana',
    tiktok:   'https://www.tiktok.com/@pousadavilapraiana',
};

// Contato oficial da pousada
export const CONTACT = {
    phone:    '5522992199311',          // formato wa.me
    phoneFmt: '+55 (22) 99219-9311',    // formato display
    email:    'reservas@vilapraiana.com.br',
};
