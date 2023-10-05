import { useState, useEffect } from "react";

const Dday = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 현재 날짜와 targetDate 간의 시간 차이 계산
      const now = new Date();
      const diff = new Date(targetDate).getTime() - now.getTime();

      // 시간 차이를 일, 시, 분, 초로 변환
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      // state 업데이트
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="d-day">
      <img src={`${process.env.PUBLIC_URL}/assets/home-pic.png`} />
      <div className="text">
        <p
          style={{
            fontFamily: "Pretendard",
            fontWeight: "600",
            fontSize: "3.2rem",
          }}
        >
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </p>
      </div>
    </div>
  );
};

export default Dday;
