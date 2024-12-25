import { atomWithMMKV } from '@infrastructure/storage/mmkv';
import { StoreKeys } from '@application/store/constants';

export type PerDayEventItem = {
  startTime: string; // HH:mm 포맷
  endTime: string; // HH:mm 포맷
  isHighlight: boolean;
};

export type CalendarEventItem = {
  date: string; // YYYY-MM-DD 포맷
  eventsPerDay: PerDayEventItem[];
};

export type CalendarEventModel = {
  events: CalendarEventItem[];
};

export const calendarEventsAtom = atomWithMMKV<CalendarEventModel | undefined>(
  StoreKeys.CALENDAR_EVENTS,
  undefined,
);
