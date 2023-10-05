function Location({ title = "NAVIGATION", isBasic = false }) {
  return (
    <div className="location">
      <p
        style={{
          fontWeight: "600",
          fontSize: "2.4rem",
          lineHeight: "3.5rem",
        }}
      >
        00000000 2F 00000
      </p>
      <p
        style={{
          fontWeight: "600",
          fontSize: "1.8rem",
          lineHeight: "3.5rem",
        }}
      >
        000도 00시 000 000 000 (000 000-0)
      </p>
      <p
        style={{
          fontWeight: "300",
          fontSize: "1.8rem",
          lineHeight: "3.5rem",
        }}
      >
        TEL. 000-000-0000
      </p>
      <div
        className="navigation"
        style={{
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        <span>{title}</span>
        <a href="https://map.kakao.com/link/to/====" target="_blank">
          <i className="icon-kakaomap" />
          카카오내비
        </a>
        <a
          href="https://apis.openapi.sk.com/tmap/app/routes?====="
          target="_blank"
        >
          <i className="icon-tmap" />
          티맵
        </a>
      </div>
      <div
        style={{
          fontWeight: "300",
          fontSize: "1.5rem",
          lineHeight: "2rem",
          textAlign: "left",
        }}
      >
        <p>[버스 이용시]</p>
        <div className="traffic" style={{ marginTop: "2%" }}>
          <p style={{ display: "flex" }}>
            <span style={{ marginRight: ".8%" }}>➀</span> 000 0000000 00
            000000000 00 0 <br />
            택시 및 버스대중교통 이용
          </p>
          <p style={{ marginTop: "2%", display: "flex" }}>
            <span style={{ marginRight: ".8%" }}>➁</span> 00지방에서 이용 시
            000버스터미널 하차 후{isBasic ? <br /> : ` `}
            택시 및 버스대중교통 이용
          </p>
        </div>
        <p style={{ marginTop: "2%", display: "flex" }}>
          0000 및 000 방면 000(00방면) / 000-1~3(00방면) /
          {isBasic ? <br /> : ` `}
          000,000-1(000방면)
          <br />
          000(000방면) / 000(00방면) 내리실 때는{isBasic ? <br /> : ` `}
          0000 정류장에서 하차
        </p>
        <p style={{ marginTop: "8%" }}>[KTX 이용시]</p>
        <p style={{ marginTop: "2%" }}>
          000 00 0 00000000{isBasic ? <br /> : ` `}
          (000 이용 후 000000000에서 000,000번 환승) 및 택시
        </p>
      </div>
    </div>
  );
}

export default Location;
