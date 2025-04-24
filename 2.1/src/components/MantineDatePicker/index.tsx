import React, { FC } from 'react';
import { DateTimePicker as UIDateTimePicker, DatesProvider as UIDatesProvider } from '@mantine/dates';
import { DateTimePickerProps } from './types';

const MantineDateTimePicker: FC<DateTimePickerProps> = props => {
  const currentYear = new Date().getFullYear();
  return (
    <UIDatesProvider settings={{ consistentWeeks: true, locale: 'ru' }}>
      <UIDateTimePicker
        minDate={new Date(currentYear - 10, 0, 1)}
        maxDate={new Date(currentYear + 10, 11, 31)}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </UIDatesProvider>
  );
}

export default MantineDateTimePicker;