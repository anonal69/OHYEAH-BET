import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://candace-x68syf-fast-mainnet.helius-rpc.com/"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('Eh8Qi5C5tyMwvEs8UxwcoJG3ag2Yy2jVFPRX472yUKPu')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'OH YEAH!!'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   image: "image url",
  //   decimals: 6,
  //   baseWager: 1 * 1e6,
  // }
]
