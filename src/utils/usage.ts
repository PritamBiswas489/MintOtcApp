import AsyncStorage from '@react-native-async-storage/async-storage';

export type Usage = { transferCount: number; requestCount: number; lastUsed: number };
export type UsageMap = Record<string, Usage>; // key = normalized digits (countryCode + nationalNumber)

const KEY = '@contactUsage_v1';

export async function getUsage(): Promise<UsageMap> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
}

export async function bumpUsage(mobileDigits: string, kind: 'transfer' | 'request') {
  if (!mobileDigits) return;
  const now = Date.now();
  const map = await getUsage();
  const prev = map[mobileDigits] ?? { transferCount: 0, requestCount: 0, lastUsed: 0 };
  if (kind === 'transfer') prev.transferCount += 1;
  else prev.requestCount += 1;
  prev.lastUsed = now;
  map[mobileDigits] = prev;
  await AsyncStorage.setItem(KEY, JSON.stringify(map));
}
