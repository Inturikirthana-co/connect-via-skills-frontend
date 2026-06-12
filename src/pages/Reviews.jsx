import { useEffect, useState } from "react";
import API from "../services/api";

function Reviews() {

  const [teacherId, setTeacherId] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const submitReview = async () => {

    try {

      await API.post("/reviews", {
        teacher_id: teacherId,
        rating,
        review
      });

      alert("✅ Review submitted");

      fetchReviews();

      setReview("");

    } catch (err) {

      console.error(err);

      alert("Failed to submit review");
    }
  };

  const fetchReviews = async () => {

    if (!teacherId) return;

    try {

      const res = await API.get(
        `/reviews/${teacherId}`
      );

      setReviews(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  useEffect(() => {

    fetchReviews();

  }, [teacherId]);

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
          width: "950px"
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
              marginBottom: "35px"
            }}
          >
            ⭐ Reviews
          </h1>


          {/* Review Form */}

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
            }}
          >

            <input
              type="number"
              placeholder="Teacher ID"
              value={teacherId}
              onChange={(e) =>
                setTeacherId(e.target.value)
              }
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid #e2e8f0",
                marginBottom: "18px"
              }}
            />

            <select
              value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid #e2e8f0",
                marginBottom: "18px"
              }}
            >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>

            <textarea
              placeholder="Write your review..."
              value={review}
              onChange={(e) =>
                setReview(e.target.value)
              }
              rows="4"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid #e2e8f0"
              }}
            />

            <button
              onClick={submitReview}
              style={{
                marginTop: "25px",
                padding: "15px 30px",
                border: "none",
                borderRadius: "15px",
                background: "#1e293b",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Submit Review
            </button>

          </div>


          {/* Previous Reviews */}

          <div
            style={{
              marginTop: "40px"
            }}
          >

            <h2
              style={{
                color: "#1e293b",
                marginBottom: "20px"
              }}
            >
              Previous Reviews
            </h2>

            {reviews.length === 0 ? (

              <div
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "20px",
                  color: "#64748b"
                }}
              >
                No reviews available.
              </div>

            ) : (

              reviews.map((item) => (

                <div
                  key={item.id}
                  style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
                  }}
                >

                  <h3
                    style={{
                      color: "#1e293b"
                    }}
                  >
                    {item.learner_name}
                  </h3>

                  <p
                    style={{
                      color: "#7c3aed",
                      fontWeight: "600"
                    }}
                  >
                    Rating : ⭐ {item.rating}
                  </p>

                  <p
                    style={{
                      color: "#64748b"
                    }}
                  >
                    {item.review}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Reviews;