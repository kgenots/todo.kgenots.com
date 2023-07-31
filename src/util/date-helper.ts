const day = ['일', '월', '화', '수', '목', '금', '토']
function FormatDate(today: Date) {
  return (
    today.getFullYear() +
    '년 ' +
    (today.getMonth() + 1) +
    '월 ' +
    today.getDate() +
    '일 ' +
    day[today.getDay()] +
    '요일 ' +
    '/ ' +
    today.getHours() +
    '시 ' +
    today.getMinutes() +
    '분 ' +
    today.getSeconds() +
    '초'
  )
}

export const getCurrentDateString = () => FormatDate(new Date(Date.now()))
