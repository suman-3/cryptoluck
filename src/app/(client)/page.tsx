

import { Metadata } from 'next';
import LandingPageContent from './_components/landing-page-content';

export const metadata: Metadata = {

    title: "Home | CryptoLuck",
};

const landingPage = () => {
    return (
        <LandingPageContent />
    )
}

export default landingPage