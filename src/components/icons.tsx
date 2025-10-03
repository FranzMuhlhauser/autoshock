import type { SVGProps } from 'react';

export const AutoShockLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.6 19.4L15.3 14.8H21.4L18.7 19.4L21.4 24H15.3L12.6 19.4ZM17 0C7.6 0 0 7.6 0 17C0 26.4 7.6 34 17 34C26.4 34 34 26.4 34 17C34 7.6 26.4 0 17 0ZM17 30C9.8 30 4 24.2 4 17C4 9.8 9.8 4 17 4C24.2 4 30 9.8 30 17C30 24.2 24.2 30 17 30Z" transform="translate(0 -5)" fill="currentColor" />
    <text x="40" y="17" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">
      AUTO SHOCK
    </text>
  </svg>
);

const TextLogo = ({ text, ...props }: SVGProps<SVGSVGElement> & { text: string }) => (
  <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" fontFamily="Poppins, sans-serif">{text}</text>
  </svg>
);

export const BilsteinLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="BILSTEIN" {...props} />;
export const CorvenLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="CORVEN" {...props} />;
export const GabrielLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="Gabriel" {...props} />;
export const SachsLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="SACHS" {...props} />;
export const DaherLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="DAHER" {...props} />;
export const BogeLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="BOGE" {...props} />;
export const EurotecLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="EUROTEC" {...props} />;
export const MoogLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="MOOG" {...props} />;
export const ThcLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="THC" {...props} />;

export const ChevroletLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="Chevrolet" {...props} />;
export const FordLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="Ford" {...props} />;
export const ToyotaLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="TOYOTA" {...props} />;
export const NissanLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="NISSAN" {...props} />;
export const HyundaiLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="HYUNDAI" {...props} />;
export const KiaLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="KIA" {...props} />;
export const SuzukiLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="SUZUKI" {...props} />;
export const MazdaLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="Mazda" {...props} />;


export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.074-.411.074c-.13.149-.534.636-.65.782s-.233.165-.434.09c-.2-.074-1.226-.449-2.336-1.435-.86-.777-1.446-1.728-1.666-2.015s-.02-.436.052-.562c.074-.127.165-.213.248-.297.083-.084.149-.149.213-.248s.03-.186-.018-.332c-.049-.149-.434-1.043-.593-1.435s-.314-.332-.434-.332-.282 0-.411 0c-.13 0-.348.05-.534.248s-.65.637-.65 1.562c0 .926.666 1.813.763 1.96s1.317 2.015 3.185 2.813.687.313 1.104.288c.616-.037 1.887-.777 2.158-1.516.271-.74.271-1.37.187-1.516s-.148-.213-.296-.36Z M12 0A12 12 0 1 0 0 12 12 12 0 0 0 12 0Z"/></svg>
);

export const GoogleMapsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.92 11.89 6.3 13.63a1 1 0 0 0 1.4 0C14.08 20.89 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const WazeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);
