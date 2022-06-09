import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AmehSwap',
  description:
    'Discover AmehSwap, the leading fiat to crypto DEX on Binance Smart Chain (BSC), The fastest and seamless opportunity to trade on PANCAKESWAP DEX.',
  image: 'https://amehswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('AmehSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('AmehSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('AmehSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('AmehSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('AmehSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('AmehSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('AmehSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('AmehSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('AmehSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('AmehSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('AmehSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('AmehSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('AmehSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('AmehSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PancakeSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('AmehSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('PancakeSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('PancakeSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('AmehSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('AmehSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('AmehSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('AmehSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('AmehSwap')}`,
      }
    default:
      return null
  }
}
