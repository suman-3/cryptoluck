import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, sepolia, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';

export const config = getDefaultConfig({
  appName: 'RainbowKit Next.js App',
  projectId: projectId,
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
  ssr: true, 
});