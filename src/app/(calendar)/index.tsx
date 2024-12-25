import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexScreen(): import('react').JSX.Element | null {
  return (
    <SafeAreaView>
      <Calendar
        // Customize the appearance of the calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
        // Specify the current date
        current={'2012-03-01'}
        // Callback that gets called when the user selects a day
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Mark specific dates as marked
        markedDates={{
          '2012-03-01': { selected: true, marked: true, selectedColor: 'blue' },
          '2012-03-02': { marked: true },
          '2012-03-03': { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
    </SafeAreaView>
  );
}
