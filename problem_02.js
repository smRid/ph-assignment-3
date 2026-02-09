//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length !== 8) {
    return false;
  }

  if (!otp.startsWith("ph-")) {
    return false;
  } else return true;
}
