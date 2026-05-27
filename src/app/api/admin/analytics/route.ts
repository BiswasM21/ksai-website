import { NextResponse } from "next/server";

const GA_PROPERTY_ID = process.env.GA_PROPERTY_ID;
const GA_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

export async function GET() {
  if (!GA_PROPERTY_ID || !GA_CREDENTIALS || GA_PROPERTY_ID === "") {
    return NextResponse.json({
      connected: false,
      totalViews: 0,
      uniqueVisitors: 0,
      avgSessionTime: "0:00",
      bounceRate: "0%",
      topPages: [],
      topKeywords: [],
      setupRequired: true,
      message: "Set GA_PROPERTY_ID and GOOGLE_APPLICATION_CREDENTIALS to enable.",
    });
  }

  try {
    const { BetaAnalyticsDataClient } = await import("@google-analytics/data");

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: JSON.parse(GA_CREDENTIALS),
    });

    // Get page views with type assertion
    const trafficReport: any = await analyticsDataClient.runReport({
      property: `properties/${GA_PROPERTY_ID}`,
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 10,
    });

    // Get summary stats with type assertion
    const summaryReport: any = await analyticsDataClient.runReport({
      property: `properties/${GA_PROPERTY_ID}`,
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      metrics: [
        { name: "totalUsers" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
      ],
    });

    const trafficRows = trafficReport.rows || [];
    const topPages = trafficRows.map((row: any) => ({
      path: row.dimensionValues?.[0]?.value || "/",
      views: parseInt(row.metricValues?.[0]?.value || "0"),
    }));

    const summaryTotals = summaryReport.totals?.[0];
    const totalUsers = parseInt(summaryTotals?.metricValues?.[0]?.value || "0");
    const avgDuration = parseFloat(summaryTotals?.metricValues?.[1]?.value || "0");
    const bounceRate = summaryTotals?.metricValues?.[2]?.value || "0";

    const minutes = Math.floor(avgDuration / 60);
    const seconds = Math.round(avgDuration % 60);

    return NextResponse.json({
      connected: true,
      totalViews: topPages.reduce((sum: number, p: { views: number }) => sum + p.views, 0),
      uniqueVisitors: totalUsers,
      avgSessionTime: `${minutes}:${seconds.toString().padStart(2, "0")}`,
      bounceRate: `${parseFloat(bounceRate).toFixed(1)}%`,
      topPages,
      topKeywords: [],
    });
  } catch {
    return NextResponse.json({
      connected: false,
      totalViews: 0,
      uniqueVisitors: 0,
      avgSessionTime: "0:00",
      bounceRate: "0%",
      topPages: [],
      topKeywords: [],
      error: "Failed to fetch analytics.",
    });
  }
}
