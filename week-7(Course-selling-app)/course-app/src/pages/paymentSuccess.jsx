import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      api.post("/payment/verify-payment", { sessionId });
    }
  }, [sessionId]);

  return <h1>Payment Successful 🎉</h1>;
}