export default function getHms (endtime) {
  var starttime = new Date(endtime)
  var nowtime = new Date()
  // alert(nowtime);
  var time = starttime - nowtime
  // var day = parseInt(time / 1000 / 60 / 60 / 24);//天
  var hour = parseInt(time / 1000 / 60 / 60 % 24)// 小时
  var minute = parseInt(time / 1000 / 60 % 60)// 分钟
  var seconds = parseInt(time / 1000 % 60)// 秒
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  };
  if (time <= 0) {
    hour = '00'
    minute = '00'
    seconds = '00'
  }
  return {
    hour,
    minute,
    seconds
  }
}
