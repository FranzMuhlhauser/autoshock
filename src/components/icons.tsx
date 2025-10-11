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
export const BogeLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="BOGE" {...props} />;
export const EurotecLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="EUROTEC" {...props} />;
export const MoogLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="MOOG" {...props} />;
export const ThcLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="THC" {...props} />;
export const IBNLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="IBN" {...props} />;
export const KYBLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="KYB" {...props} />;
export const MonroeLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="MONROE" {...props} />;
export const StradaLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="STRADA" {...props} />;
export const OsungLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="OSUNG" {...props} />;


export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-1.003.164-.524.164-.97.114-1.074-.05-.104-.182-.168-.38-.265z"/>
    </svg>
);

export const GoogleMapsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.92 11.89 6.3 13.63a1 1 0 0 0 1.4 0C14.08 20.89 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const WazeLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 50 50" 
        fill="currentColor"
        width="28px"
        height="28px"
        {...props}
    >
      <path d="M43.23,13.29c-0.23-0.5-0.7-0.85-1.24-0.94c-2.8-0.48-4.9-2.08-5.9-4.33c-0.49-1.1-1.63-1.8-2.85-1.8H16.76 c-1.22,0-2.36,0.7-2.85,1.8c-1,2.25-3.1,3.85-5.9,4.33c-0.54,0.09-1.01,0.44-1.24,0.94c-0.23,0.5-0.19,1.08,0.1,1.54l5.3,8.34 c-0.27,0.59-0.43,1.24-0.43,1.91c0,2.9,2.35,5.25,5.25,5.25c2.42,0,4.45-1.64,5.08-3.84h0.04c0.63,2.2,2.66,3.84,5.08,3.84 c2.9,0,5.25-2.35,5.25-5.25c0-0.67-0.16-1.32-0.43-1.91l5.3-8.34C43.42,14.37,43.46,13.79,43.23,13.29z M25.88,27.38 c-1.07,0-1.94-0.87-1.94-1.94s0.87-1.94,1.94-1.94s1.94,0.87,1.94,1.94S26.95,27.38,25.88,27.38z M35.88,27.38 c-1.07,0-1.94-0.87-1.94-1.94s0.87-1.94,1.94-1.94s1.94,0.87,1.94,1.94S36.95,27.38,35.88,27.38z"/>
    </svg>
);


export const DaherLogo = (props: SVGProps<SVGSVGElement>) => <TextLogo text="DAHER" {...props} />;
