import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real data from:
  // - Fundability model / underwriting engine
  // - User-specific session (NextAuth)
  // - Prisma metrics (pipeline value, approvals, lender count)

  // Generate realistic mock data
  const health = Math.floor(Math.random() * 20) + 75; // 75-95 range
  const opportunities = Math.floor(Math.random() * 11) + 5; // 5-15 range

  // Randomly include 0-2 alerts
  const possibleAlerts = [
    "New HELOC lender available",
    "Rate improvement detected on revolving LOC",
    "SBA express approval threshold lowered",
    "Equipment financing rates at 6-month low",
  ];

  const alertCount = Math.floor(Math.random() * 3); // 0-2 alerts
  const alerts: string[] = [];
  for (let i = 0; i < alertCount; i++) {
    const randomIndex = Math.floor(Math.random() * possibleAlerts.length);
    const alert = possibleAlerts[randomIndex];
    if (!alerts.includes(alert)) {
      alerts.push(alert);
    }
  }

  return NextResponse.json({
    health,
    opportunities,
    alerts,
  });
}
