const getStringLength = function(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

const isPalindrome = function(string) {
  const normalized = string.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
};


const checkMeeting = function (startWork, endWork, startMeeting, duration) {
  const timeToMinutes = function (time) {
    const parts = time.split(':');
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    return hours * 60 + minutes;
  };

  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  return startMeetingMinutes >= startWorkMinutes &&
    endMeetingMinutes <= endWorkMinutes;
};


export { getStringLength, isPalindrome, checkMeeting };
