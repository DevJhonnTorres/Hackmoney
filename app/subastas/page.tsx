// app/(subastas)/landing/page.tsx
"use client";

import Link from "next/link";

export default function LandingSubastas() {
  const BASE_DATE = new Date(Date.UTC(2026, 1, 5));
  const now = new Date();
  const diff = now.getTime() - BASE_DATE.getTime();
  const currentWeek = Math.max(1, Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1);
  const images = [
    "/subastas/ALH_Taller_Edificio_E_Cam_01_2025_06_07.jpg",
    "/subastas/ALH_Taller_Edificio_E_Cam_03_2025_06_07.jpg",
    "/subastas/ALH_Taller_Edificio_E_Cam_04_2025_06_07.jpg",
    "/subastas/ALH_Taller_Edificio_E_Cam_05_2025_06_07.jpg",
    "/subastas/ALH_Taller_Edificio_E_Cam_06_2025_06_07.jpg",
  ];

  return (
    <main style={{ minHeight: "100vh", background: "black", color: "white", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#67e8f9" }}>Subastas Inmobiliarias Semanales</h1>
        <p style={{ marginTop: 20, fontSize: "1.1rem", color: "#ccc" }}>
          Cada semana desbloqueamos una nueva propiedad. Participa, puja y gana en tiempo real.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link
            href="/marketplace"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              border: "1px solid #67e8f9",
              borderRadius: "999px",
              color: "#67e8f9",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Ver Subastas Activas →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "3rem" }}>
          {[1, 2, 3, 4, 5].map((week) => (
            <div key={week} style={{
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}>
              <img
                src={images[week - 1]}
                alt={`Propiedad semana ${week}`}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  opacity: week <= currentWeek ? 1 : 0.3,
                  filter: week <= currentWeek ? "none" : "blur(2px)",
                }}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ color: week <= currentWeek ? "#86efac" : "#67e8f9", fontWeight: 600 }}>
                  {week <= currentWeek ? "Disponible ahora" : `Disponible semana ${week}`}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, fontSize: 14, color: "#aaa" }}>
          📅 Revisa cada lunes para conocer la próxima propiedad
        </div>
      </div>
    </main>
  );
}
