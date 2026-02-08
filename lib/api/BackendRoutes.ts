export const baseURL = "";

// MESA API Base URL (Medical Expert System)
export const mesaBaseURL = process.env.NEXT_PUBLIC_MESA_API_URL || "http://localhost:8000/api";

export const BackendRoutes = {
  /* ----------------------------- HEALTH & META ----------------------------- */
  health: `${baseURL}/health`,
  ping: `${baseURL}/ping`,
  getModelInfo: `${baseURL}/models/info`,

  /* ----------------------------- AUTH (placeholder) ----------------------------- */
  me: `${baseURL}/auth/me`,
  login: `${baseURL}/auth/login`,
  loginFirstFactor: `${baseURL}/auth/login`,
  logout: `${baseURL}/auth/logout`,
  register: `${baseURL}/auth/register`,
  refresh: `${baseURL}/auth/refresh`,
  refreshToken: `${baseURL}/auth/refresh`,

  /* ----------------------------- CROPS ----------------------------- */

  // Predict single best crop
  predictCrop: (modelType: "random_forest" | "neural_network" = "random_forest") =>
    `${baseURL}/crops/predict?model_type=${modelType}`,

  // Predict top-K crops
  predictTopK: (
    k: number = 3,
    modelType: "random_forest" | "neural_network" = "random_forest"
  ) =>
    `${baseURL}/crops/predict/top-k?k=${k}&model_type=${modelType}`,

  // Detailed recommendation report
  recommendCrops: (
    topK: number = 5,
    modelType: "random_forest" | "neural_network" = "random_forest"
  ) =>
    `${baseURL}/crops/recommend?top_k=${topK}&model_type=${modelType}`,

  // Batch prediction
  predictBatch: `${baseURL}/crops/predict/batch`,
};

/* ----------------------------- MESA ROUTES ----------------------------- */
/* Medical Expert System Assistant API */

export const MesaRoutes = {
  /* -------- General -------- */
  root: `${mesaBaseURL}/`,
  ping: `${mesaBaseURL}/ping`,

  /* -------- Expert System -------- */
  diagnose: `${mesaBaseURL}/expert/diagnose`,
  symptoms: `${mesaBaseURL}/expert/symptoms`,
  diseases: `${mesaBaseURL}/expert/diseases`,
  disease: (name: string) => `${mesaBaseURL}/expert/diseases/${name}`,

  /* -------- AI Chat -------- */
  chatMessage: `${mesaBaseURL}/chat/message`,
  chatModels: `${mesaBaseURL}/chat/models`,
  validateModel: `${mesaBaseURL}/chat/validate-model`,
};
