import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export function getItem(key: string): string | null {
  const value = storage.getString(key);
  return value || null;
}

export function setItem(key: string, value: string): void {
  storage.set(key, value);
}

export function removeItem(key: string): void {
  storage.delete(key);
}

export function clearAll(): void {
  storage.clearAll();
}

export const atomWithMMKV = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(
    key,
    initialValue,
    createJSONStorage<T>(() => ({
      getItem,
      setItem,
      removeItem,
      clearAll,
    })),
  );
