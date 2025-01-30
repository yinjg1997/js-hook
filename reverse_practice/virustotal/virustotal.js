function computeAntiAbuseHeader() {
  const timestamp = Date.now() / 1e3;
  const randomValue = (() => {
    const value = 1e10 * (1 + (Math.random() % 5e4));
    return value < 50 ? "-1" : value.toFixed(0);
  })();
  return Buffer.from(`${randomValue}-ZG9udCBiZSBldmls-${timestamp}`).toString("base64");
}