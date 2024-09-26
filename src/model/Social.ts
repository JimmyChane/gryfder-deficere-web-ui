import YOUTUBE_ICON from '@/assets/icon/youtube-color.svg';
import TELEGRAM_ICON from '@/assets/icon/telegram-color.svg';
import TWITTER_ICON from '@/assets/icon/twitter-color.svg';
import DISCORD_ICON from '@/assets/icon/discord-color.svg';

import PFP_1_IMAGE from '@/assets/img/pfp.webp';
import PFP_2_IMAGE from '@/assets/img/pfp-2.webp';
import PFP_3_IMAGE from '@/assets/img/pfp-3.jpg';

export interface SocialModel {
  icon: string;
  title: string;
  thumbnail: string;
  handler: string;
  href: string;
}

export const YOUTUBE: SocialModel = {
  icon: YOUTUBE_ICON,
  thumbnail: PFP_2_IMAGE,
  title: 'Youtube',
  handler: '@Gryfder',
  href: '',
};
export const TELEGRAM: SocialModel = {
  icon: TELEGRAM_ICON,
  thumbnail: PFP_1_IMAGE,
  title: 'Telegram',
  handler: '@Gryfder',
  href: '',
};
export const INSTAGRAM: SocialModel = {
  icon: '',
  thumbnail: PFP_1_IMAGE,
  title: 'Instagram',
  handler: '@gryfderaven',
  href: '',
};
export const BLUESKY: SocialModel = {
  icon: '',
  thumbnail: PFP_2_IMAGE,
  title: 'Bluesky',
  handler: '@gryfder.bsky.social',
  href: '',
};
export const TWITTER: SocialModel = {
  icon: TWITTER_ICON,
  thumbnail: PFP_3_IMAGE,
  title: 'Twitter',
  handler: '@gryfder',
  href: '',
};
export const DISCORD: SocialModel = {
  icon: DISCORD_ICON,
  thumbnail: PFP_1_IMAGE,
  title: 'Discrod',
  handler: '@gryfder',
  href: '',
};
