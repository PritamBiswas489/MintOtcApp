// @src/constants/cardMaskRules.ts
import {
  cardIconAmex,
  cardIconDiners,
  cardIconDiscover,
  cardIconJcb,
  cardIconMaestro,
  cardIconMastercard,
  cardIconUnionpay,
  cardIconVisa,
} from '@src/utils/images';

export const cardMaskRules = [
  {
    mask: '9999 999999 99999',
    regex: /^3[47]\d{0,13}/,
    cardtype: 'amex',
    cardIcon: cardIconAmex,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    cardtype: 'discover',
    cardIcon: cardIconDiscover,
  },
  {
    mask: '9999 999999 9999',
    regex: /^3(?:0[0-5]|09|[689]\d?)\d{0,11}/,
    cardtype: 'diners',
    cardIcon: cardIconDiners,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^(5[1-5]|2[2-7])\d{0,14}/,
    cardtype: 'mastercard',
    cardIcon: cardIconMastercard,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^4\d{0,15}/,
    cardtype: 'visa',
    cardIcon: cardIconVisa,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^62\d{0,14}/,
    cardtype: 'unionpay',
    cardIcon: cardIconUnionpay,
  },
  {
    mask: '9999-9999-9999-9999',
    regex: /^220[0-4]\d{0,12}/,
    cardtype: 'mir',
    cardIcon: null,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^35\d{0,14}/,
    cardtype: 'jcb',
    cardIcon: cardIconJcb,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /^(5[0678]|6304|67)\d{0,14}/,
    cardtype: 'maestro',
    cardIcon: cardIconMaestro,
  },
  {
    mask: '9999 9999 9999 9999',
    regex: /.*/,
    cardtype: 'unknown',
    cardIcon: null,
  },
];
