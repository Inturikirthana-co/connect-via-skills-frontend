function Membership() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f4e8ff,#eef2ff)",
        display: "flex",
        justifyContent: "center",
        padding: "40px"
      }}
    >

      <div
        style={{
          width: "1000px"
        }}
      >

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(15px)",
            borderRadius: "35px",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h1
            style={{
              color: "#1e293b",
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            💎 Membership Plans
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >

            {/* Free Plan */}

            <div
              style={{
                background: "white",
                width: "320px",
                padding: "35px",
                borderRadius: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >

              <h2
                style={{
                  color: "#1e293b"
                }}
              >
                Free Plan
              </h2>

              <h1
                style={{
                  color: "#7c3aed",
                  marginTop: "20px"
                }}
              >
                ₹0
              </h1>

              <br />

              <p>✔ 30 Credits</p>
              <p>✔ Skill Matching</p>
              <p>✔ Chat Access</p>

              <button
                style={{
                  width: "100%",
                  marginTop: "30px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "15px",
                  background: "#e5e7eb",
                  color: "#1e293b",
                  fontWeight: "bold"
                }}
              >
                Current Plan
              </button>

            </div>


            {/* Premium Plan */}

            <div
              style={{
                background: "#1e293b",
                color: "white",
                width: "320px",
                padding: "35px",
                borderRadius: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
              }}
            >

              <h2>Premium Plan</h2>

              <h1
                style={{
                  color: "#c084fc",
                  marginTop: "20px"
                }}
              >
                ₹299
              </h1>

              <br />

              <p>✔ Unlimited Credits</p>
              <p>✔ Priority Matching</p>
              <p>✔ Premium Badge</p>

              <button
                style={{
                  width: "100%",
                  marginTop: "30px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "15px",
                  background: "#c084fc",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Upgrade
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Membership;