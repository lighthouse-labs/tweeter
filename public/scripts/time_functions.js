/** formatTime function pretty formats timestamp string to the format: xx `intervalType` ago
 examples 10 hours ago, 1 year ago,
 NOTE: to complete comment

**/
const formatTime = (date) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  let seconds = Math.floor((Date.now() - date) / 1000); // TODO: figure out why -1 seconds
  seconds = seconds >= 0 ? seconds : 0;
  let intervalType;
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
              interval = Math.floor(seconds / 3600);
              if (interval >= 1) {
                intervalType = 'hour';
              } else {
                  interval = Math.floor(seconds / 60);
                  if (interval >= 1) {
                    intervalType = 'minute';
                  } else {
                      interval = seconds;
                      intervalType = 'second';
                  }
              }
          }
      }
  }
  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }
  return `${interval} ${intervalType} ago`;
};

const updateTime = () => {
  $('time').each(function() {
    const dateStr = $(this).attr('datetime');
    $(this).text(formatTime(dateStr));
  });
};