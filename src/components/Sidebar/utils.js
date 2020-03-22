import { homePage, mainPage, catalogPage } from '@/lib/routing';
import Gear from '@/assets/svg/gear.svg';
import Info from '@/assets/svg/info.svg';
import Bell from '@/assets/svg/bell.svg';

export const SIDEBAR_LINKS = [
  {
    url:  catalogPage(),
    svg: Bell
  },
  {
    url: mainPage(),
    svg: Gear
  },
  {
    url: homePage(),
    svg: Info
  }
];
