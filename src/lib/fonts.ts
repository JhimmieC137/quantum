import { EB_Garamond, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const garamond = EB_Garamond({
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-garamond',
    subsets: ['latin'],
});
