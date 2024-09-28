import YOUTUBE_ICON from '@/assets/icon/social/youtube-color.svg';
import TELEGRAM_ICON from '@/assets/icon/social/telegram-color.svg';
import TWITTER_ICON from '@/assets/icon/social/twitter-color.svg';
import DISCORD_ICON from '@/assets/icon/social/discord-color.svg';
import INSTAGRAM_ICON from '@/assets/icon/social/instagram-color.png';
import BLUESKY_ICON from '@/assets/icon/social/bluesky-color.svg';

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
  href: 'https://www.youtube.com/@Gryfder',
};
export const TELEGRAM: SocialModel = {
  icon: TELEGRAM_ICON,
  thumbnail: PFP_1_IMAGE,
  title: 'Telegram',
  handler: '@Gryfder',
  href: 'http://t.me/Gryfder',
};
export const INSTAGRAM: SocialModel = {
  icon: INSTAGRAM_ICON,
  thumbnail: PFP_1_IMAGE,
  title: 'Instagram',
  handler: '@gryfderaven',
  href: 'https://www.instagram.com/gryfderaven',
};
export const BLUESKY: SocialModel = {
  icon: BLUESKY_ICON,
  thumbnail: PFP_2_IMAGE,
  title: 'Bluesky',
  handler: '@gryfder.bsky.social',
  href: 'http://bsky.app/profile/gryfder.bsky.social',
};
export const TWITTER: SocialModel = {
  icon: TWITTER_ICON,
  thumbnail: PFP_3_IMAGE,
  title: 'Twitter',
  handler: '@gryfder',
  href: 'https://x.com/gryfder',
};
export const DISCORD: SocialModel = {
  icon: DISCORD_ICON,
  thumbnail: PFP_1_IMAGE,
  title: 'Discrod',
  handler: '@gryfder',
  href: 'https://discordapp.com/users/530395478819602482',
};
