const LOCAL_API_URL = "http://localhost:5000/api";
const PRODUCTION_API_URL =
  "https://digital-logics-studio-backend-three.vercel.app/api"; // production
const DEPRECATED_API_URL =
  "https://digital-logics-studio-backend.vercel.app/api";  // production

export function resolveApiBaseUrl() {
  const configured = process.env.REACT_APP_API_URL?.trim();
  let url = configured
    ? configured.replace(/\/+$/, "")
    : process.env.NODE_ENV === "production"
      ? PRODUCTION_API_URL
      : LOCAL_API_URL;

  if (url === DEPRECATED_API_URL) {
    url = PRODUCTION_API_URL;
  }

  return url;
}

export function resolveAiBaseUrl() {
  const configuredAi = process.env.REACT_APP_AI_URL?.trim();
  if (configuredAi) return configuredAi.replace(/\/+$/, "");
  return `${resolveApiBaseUrl()}/ai`;
}
