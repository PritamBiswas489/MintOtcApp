import { cardMaskRules } from "./constants/cardMaskRules";

export const getCardType = (cardNumber: string) => {
  const cleaned = cardNumber.replace(/\D/g, '');
  return (
    cardMaskRules.find(rule => rule.regex.test(cleaned)) ||
    cardMaskRules[cardMaskRules.length - 1]
  );
};
