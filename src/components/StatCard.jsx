function StatCard({ title, value, icon }) {

  return (

    <div
      style={{
        background: "#ffffff",
        borderRadius: "30px",
        padding: "30px",
        width: "230px",
        boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
        transition: "0.3s ease"
      }}
    >

      <div
        style={{
          width: "65px",
          height: "65px",
          borderRadius: "20px",
          background: "#eff6ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          marginBottom: "20px"
        }}
      >
        {icon}
      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "15px",
          marginBottom: "10px"
        }}
      >
        {title}
      </p>

      <h1
        style={{
          color: "#0f172a",
          margin: 0,
          fontSize: "34px",
          fontWeight: "700"
        }}
      >
        {value}
      </h1>

    </div>

  );
}

export default StatCard;