import moment from 'moment';
import {
  format,
  parse,
  isSameDay,
  isToday,
  isYesterday,
  parseISO,
} from 'date-fns';
const TIME_FORMATTER = 'hh:mm a';

// Function to format opening time
export const getFormattedOpeningTime = current_opening_time => {
  if (
    !current_opening_time ||
    current_opening_time.toLowerCase() === 'closed'
  ) {
    return '';
  }

  return moment(current_opening_time, 'HH:mm:ss').format('hh:mm A');
};

export const convertTimeToTimeDate = time => {
  return format(new Date(time), 'HH:mm');
};

// export const dobFormatDate = dateString => {
//   if (!dateString) return '';
//   const [year, month, day] = dateString.split('-');
//   return `${day}/${month}/${year}`;
// };

export const dobFormatDate = dateString => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDate = dateTime => {
  if (!dateTime) return '';
  //return format(new Date(dateTime), 'yyyy-MM-dd hh:mm:ss a');
  return format(new Date(dateTime), 'dd-MM-yyyy HH:mm');
};

export const dateToDateAndTime = dateTime => {
  if (!dateTime) return '';

  const parsedDate = parse(dateTime, 'yyyy-MM-dd HH:mm:ss', new Date());
  return format(parsedDate, 'dd-MM-yyyy HH:mm');
};

export const dateToTimeOnly = dateTime => {
  return format(new Date(dateTime), TIME_FORMATTER);
};

// export const dateToDateAndTime = dateTime => {
//   return format(new Date(dateTime), 'yyyy-MM-dd HH:mm');
// };

export const dateToDateAndTimeAm = dateTime => {
  return format(new Date(dateTime), `yyyy-MM-dd ${TIME_FORMATTER}`);
};

export const dateToDate = dateTime => {
  return format(new Date(dateTime), 'yyyy-MM-dd');
};

export const dateToReadableDate = dateTime => {
  return format(new Date(dateTime), 'dd MMM, yyyy');
};

export const dateTimeStringToDateTime = dateTime => {
  const parsedDate = parse(dateTime, 'yyyy-MM-dd HH:mm:ss', new Date());
  return format(parsedDate, `dd MMM yyyy ${TIME_FORMATTER}`);
};

export const dateTimeStringToDateOnly = dateTime => {
  const parsedDate = parse(dateTime, 'yyyy-MM-dd HH:mm:ss', new Date());
  return format(parsedDate, 'dd MMM yyyy');
};

export const dateTimeStringToDate = dateTime => {
  return parse(dateTime, 'yyyy-MM-dd HH:mm:ss', new Date());
};

export const isoStringToLocalDate = dateTime => {
  return parseISO(dateTime);
};

export const isoStringToLocalString = dateTime => {
  return format(new Date(dateTime), 'yyyy-MM-dd HH:mm:ss');
};

export const isoStringToReadableString = dateTime => {
  return format(new Date(dateTime), 'dd MMMM, yyyy hh:mm a');
};

export const stringToReadableString = dateTime => {
  return format(new Date(dateTime), 'dd MMMM, yyyy');
};

export const isoStringToDateTimeString = dateTime => {
  // Parse the ISO string into a Date object
  const localDate = parseISO(dateTime);

  // Format the date and time
  return format(localDate, `dd MMM yyyy ${TIME_FORMATTER}`);
};

export const isoStringToLocalDateOnly = dateTime => {
  const localDate = this.isoStringToLocalDate(dateTime);
  return format(localDate, 'dd MMM yyyy');
};

export const stringToLocalDateOnly = dateTime => {
  const parsedDate = parse(dateTime, 'yyyy-MM-dd', new Date());
  return format(parsedDate, 'dd MMM yyyy');
};

export const localDateToIsoString = dateTime => {
  return format(new Date(dateTime), "yyyy-MM-dd'T'HH:mm:ss.SSS");
};

export const convertTimeToTime = time => {
  const formatString = time.length === 5 ? 'HH:mm' : 'HH:mm:ss';
  const parsedTime = parse(time, formatString, new Date());
  //return format(parsedTime, 'HH:mm:ss'); // Adjust the output format as needed
  return format(parsedTime, 'hh:mm a');
};

export const convertStringTimeToDate = time => {
  return parse(time, 'HH:mm', new Date());
};

export const isAvailable = (start, end, time = null) => {
  let currentTime = time ? moment(time) : moment(); // Use provided time or current time
  let startMoment = start ? moment(start, 'HH:mm') : moment().startOf('day');
  let endMoment = end ? moment(end, 'HH:mm') : moment().endOf('day');

  let startTime = moment(currentTime).set({
    hour: startMoment.hour(),
    minute: startMoment.minute(),
    second: startMoment.second(),
  });

  let endTime = moment(currentTime).set({
    hour: endMoment.hour(),
    minute: endMoment.minute(),
    second: endMoment.second(),
  });

  // Handle overnight times
  if (endTime.isBefore(startTime)) {
    if (currentTime.isBefore(startTime) && currentTime.isBefore(endTime)) {
      startTime = startTime.subtract(1, 'day');
    } else {
      endTime = endTime.add(1, 'day');
    }
  }

  return currentTime.isAfter(startTime) && currentTime.isBefore(endTime);
};
export const timeFormatter = configModel => {
  return configModel?.timeformat === '24' ? 'HH:mm' : 'hh:mm A';
};

export const convertFromMinute = (minMinute, maxMinute) => {
  let firstValue = minMinute;
  let secondValue = maxMinute;
  let type = 'min'; // Default type is 'minute'

  if (minMinute >= 525600) {
    firstValue = Math.floor(minMinute / 525600);
    secondValue = Math.floor(maxMinute / 525600);
    type = 'year';
  } else if (minMinute >= 43200) {
    firstValue = Math.floor(minMinute / 43200);
    secondValue = Math.floor(maxMinute / 43200);
    type = 'month';
  } else if (minMinute >= 10080) {
    firstValue = Math.floor(minMinute / 10080);
    secondValue = Math.floor(maxMinute / 10080);
    type = 'week';
  } else if (minMinute >= 1440) {
    firstValue = Math.floor(minMinute / 1440);
    secondValue = Math.floor(maxMinute / 1440);
    type = 'day';
  } else if (minMinute >= 60) {
    firstValue = Math.floor(minMinute / 60);
    secondValue = Math.floor(maxMinute / 60);
    type = 'hour';
  }

  // Assuming you have a translation function, replace `tr` with it
  // For now, we'll just return the raw type
  return `${firstValue}-${secondValue} ${type}`;
};
export const localDateToIsoStringAMPM = dateTime => {
  // Format string for AM/PM and date
  const formattedDate = format(new Date(dateTime), 'hh:mm a | d-MMM-yyyy');
  return formattedDate;
};

export const isBeforeTime = dateTime => {
  if (!dateTime) {
    return false;
  }

  const scheduleTime = new Date(dateTime);
  return scheduleTime < new Date(); // Checks if scheduleTime is before the current time
};

export const differenceInMinute = (
  deliveryTime,
  orderTime,
  processingTime,
  scheduleAt,
) => {
  let minTime = processingTime ?? 0;

  if (deliveryTime && deliveryTime.trim() !== '' && processingTime == null) {
    try {
      const timeList = deliveryTime.split('-'); // ['15', '20']
      minTime = parseInt(timeList[0], 10);
    } catch (error) {
      console.error('Error parsing delivery time:', error);
    }
  }

  // Use scheduleAt if available, otherwise use orderTime
  const baseTime = new Date(scheduleAt || orderTime);
  if (isNaN(baseTime)) {
    throw new Error('Invalid orderTime or scheduleAt provided');
  }

  // Add minTime to baseTime
  const deliveryTime0 = new Date(baseTime.getTime() + minTime * 60 * 1000);

  // Calculate the difference in minutes from the current time
  const now = new Date();
  const difference = Math.floor((deliveryTime0 - now) / 60000); // Convert milliseconds to minutes

  return difference;
};

export const convertOnlyTodayTime = createdAt => {
  const now = new Date();
  const createdAtDate = new Date(createdAt); // Parse the date string

  if (isSameDay(now, createdAtDate)) {
    // If the date is the same as today, return time in 'h:mm a' format
    return format(createdAtDate, 'h:mm a');
  } else {
    // Otherwise, return date in 'h:mm a | d-MMM-yyyy' format
    return format(createdAtDate, 'h:mm a | d-MMM-yyyy');
  }
};

export const convertTodayYesterdayFormat = createdAt => {
  const createdAtDate = new Date(createdAt); // Parse the createdAt date

  if (isToday(createdAtDate)) {
    // Format for today
    return `Today, ${format(createdAtDate, 'h:mm a')}`;
  } else if (isYesterday(createdAtDate)) {
    // Format for yesterday
    return `Yesterday, ${format(createdAtDate, 'h:mm a')}`;
  } else {
    // Format for other dates
    return format(createdAtDate, 'h:mm a | d-MMM-yyyy');
  }
};

export const formatServiceDate = dateTimeString => {
  const date = new Date(dateTimeString);

  const datePart = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const timePart = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${datePart} at ${timePart}`;
};
