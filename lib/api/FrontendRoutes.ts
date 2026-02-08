// These are routes to basically every view in app

// Development Routes
export const Routes = {
    home: "/",
    login: "/login",
    loginSecondFactor: "/login/2fa",
    register: "/register",
    dashboard: "/dashboard",
    
    // MESA Routes
    mesa: "/mesa",
    mesaChat: "/mesa?mode=chat",
    mesaExpert: "/mesa?mode=expert",
    mesaVoice: "/mesa?mode=voice",
}

export const FrontendRoutes = Routes;