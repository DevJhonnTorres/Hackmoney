"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Property {
  id: string;
  title: string;
  location: string;
  details: string;
  image: string;
  price: number;
  status: string;
}

export default function MarketplacePage() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const mockData: Property[] = [
        {
          id: "1",
          title: "Modern Family House",
          location: "San Francisco, CA",
          details: "5BR, 3BA",
          image: "/marketplace/ALH_Taller_Edificio_E_Cam_01_2025_06_07.jpg",
          price: 550000,
          status: "Activa"
        },
        {
          id: "2",
          title: "Luxurious Villa",
          location: "Miami, FL",
          details: "6BR, 6BA, Pool",
          image: "/marketplace/ALH_Taller_Edificio_E_Cam_03_2025_06_07.jpg",
          price: 1250000,
          status: "Activa"
        },
        {
          id: "3",
          title: "Country Cottage",
          location: "Denver, CO",
          details: "2BR, 2BA",
          image: "/marketplace/ALH_Taller_Edificio_E_Cam_04_2025_06_07.jpg",
          price: 350000,
          status: "Finalizada"
        },
        {
          id: "4",
          title: "Beachfront Mansion",
          location: "Malibu, CA",
          details: "6BR, 6BA",
          image: "/marketplace/ALH_Taller_Edificio_E_Cam_05_2025_06_07.jpg",
          price: 2300000,
          status: "Activa"
        },
        {
          id: "5",
          title: "Suburban House",
          location: "Seattle, WA",
          details: "3BR, 2BA",
          image: "/marketplace/ALH_Taller_Edificio_E_Cam_06_2025_06_07.jpg",
          price: 450000,
          status: "Activa"
        },
        {
          id: "6",
          title: "Mountain Retreat",
          location: "Aspen, CO",
          details: "4BR, 3BA",
          image: "/marketplace/AIN2402_AO_TTA_YAV_AV_947_ZonasComunes_04.jpg",
          price: 750000,
          status: "Activa"
        }
      ];
      setProperties(mockData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "1.25rem", opacity: 0.8 }}>Cargando propiedades...</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "black", color: "white", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#67e8f9" }}>Casa Marketplace</h1>
        <p style={{ marginTop: 20, fontSize: "1.1rem", color: "#ccc" }}>
          Explora las propiedades activas, revisa detalles y participa en subastas en tiempo real.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link
            href="/subastas"
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
            Volver a Subastas →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/casa/${property.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 10px",
                  textAlign: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: "#e5e7eb" }}>
                    {property.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                    {property.location}
                  </div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>
                    {property.details}
                  </div>
                  <div style={{ marginTop: 6, color: "#67e8f9", fontWeight: 600 }}>
                    ${property.price.toLocaleString()}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontWeight: 600,
                      color: property.status === "Activa" ? "#86efac" : "#fca5a5",
                    }}
                  >
                    {property.status}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        </div>

        <div style={{ marginTop: 40, fontSize: 14, color: "#aaa" }}>
          📍 Haz clic en una propiedad para ver más detalles
        </div>
      </div>
    </main>
  );
}
