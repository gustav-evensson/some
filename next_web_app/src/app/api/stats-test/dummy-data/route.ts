import { NextResponse } from "next/server";
import { platforms } from "@/lib/dummy-data";
export type PlatformMetrics = {
  views: number;
  likes: number;
  followers: number;
};

export type DummyResponse = {
  timestamps: string[];
  platforms: {
    platform: string;
    metrics: PlatformMetrics;
  }[];
};

// Funktion för att generera tidsstämplar baserat på tidsramens längd
function generateTimestamps(timeframe: string, steps: number = 7): string[] {
  const timestamps: string[] = [];
  // Använd lokal tid för att undvika tidzonsproblem
  const now = new Date();

  // Hantera olika tidsramar
  switch (timeframe) {
    case "1d": // En dag (24 timmar)
      // Beräkna exakt hur många timmar som har gått idag (använd lokal tid)
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const hoursToSubtract = Math.floor(currentHour / 4) * 4 + 4; // Avrunda till närmaste 4-timmars intervall

      // Lägg till tidigare tidsstämplar först
      for (let i = steps - 2; i >= 0; i--) {
        const date = new Date(now);
        // Använd lokala datummetoder för att undvika tidzonsproblem
        date.setHours(hoursToSubtract - i * (24 / (steps - 1))); // Dela upp 24 timmar i 'steps-1' steg
        date.setMinutes(currentMinute); // Behåll samma minuter som nu
        date.setSeconds(0, 0); // Sätt sekunder och millisekunder till 0
        timestamps.push(date.toISOString());
      }

      // Lägg till nuvarande tid som sista tidsstämpel
      timestamps.push(now.toISOString());
      break;

    case "1w": // En vecka (7 dagar)
      // Beräkna exakt hur många timmar som har gått idag (använd lokal tid)
      const currentHourWeek = now.getHours();
      const currentMinuteWeek = now.getMinutes();
      const hoursToSubtractWeek = Math.floor(currentHourWeek / 4) * 4 + 4; // Avrunda till närmaste 4-timmars intervall

      // Lägg till tidigare dagar först
      for (let i = steps - 2; i >= 0; i--) {
        const date = new Date(now);
        // Använd lokala datummetoder för att undvika tidzonsproblem
        date.setDate(date.getDate() - (i + 1));
        date.setHours(hoursToSubtractWeek); // Sätt till samma timme som idag
        date.setMinutes(currentMinuteWeek); // Behåll samma minuter som nu
        date.setSeconds(0, 0); // Sätt sekunder och millisekunder till 0
        timestamps.push(date.toISOString());
      }

      // Lägg till idag som sista tidsstämpel
      const today = new Date(now);
      today.setHours(hoursToSubtractWeek);
      today.setMinutes(currentMinuteWeek);
      today.setSeconds(0, 0);
      timestamps.push(today.toISOString());
      break;

    case "1m": // En månad (30 dagar)
      // Beräkna exakt hur många timmar som har gått idag (använd lokal tid)
      const currentHourMonth = now.getHours();
      const currentMinuteMonth = now.getMinutes();
      const hoursToSubtractMonth = Math.floor(currentHourMonth / 4) * 4 + 4; // Avrunda till närmaste 4-timmars intervall

      const daysInMonth = 30;
      const step = Math.floor(daysInMonth / (steps - 1)); // (steps - 1) steg för att få 'steps' punkter

      // Lägg till tidigare dagar först
      for (let i = 0; i < steps - 1; i++) {
        const date = new Date(now);
        // Använd lokala datummetoder för att undvika tidzonsproblem
        date.setDate(date.getDate() - (daysInMonth - i * step));
        date.setHours(hoursToSubtractMonth); // Sätt till samma timme som idag
        date.setMinutes(currentMinuteMonth); // Behåll samma minuter som nu
        date.setSeconds(0, 0); // Sätt sekunder och millisekunder till 0
        timestamps.push(date.toISOString());
      }

      // Lägg till idag som sista tidsstämpel
      const todayMonth = new Date(now);
      todayMonth.setHours(hoursToSubtractMonth);
      todayMonth.setMinutes(currentMinuteMonth);
      todayMonth.setSeconds(0, 0);
      timestamps.push(todayMonth.toISOString());
      break;

    default:
      // Standardfall: behandla som en vecka
      // Beräkna exakt hur många timmar som har gått idag (använd lokal tid)
      const currentHourDefault = now.getHours();
      const currentMinuteDefault = now.getMinutes();
      const hoursToSubtractDefault = Math.floor(currentHourDefault / 4) * 4 + 4; // Avrunda till närmaste 4-timmars intervall

      // Lägg till tidigare dagar först
      for (let i = steps - 2; i >= 0; i--) {
        const date = new Date(now);
        // Använd lokala datummetoder för att undvika tidzonsproblem
        date.setDate(date.getDate() - (i + 1));
        date.setHours(hoursToSubtractDefault); // Sätt till samma timme som idag
        date.setMinutes(currentMinuteDefault); // Behåll samma minuter som nu
        date.setSeconds(0, 0); // Sätt sekunder och millisekunder till 0
        timestamps.push(date.toISOString());
      }

      // Lägg till idag som sista tidsstämpel
      const todayDefault = new Date(now);
      todayDefault.setHours(hoursToSubtractDefault);
      todayDefault.setMinutes(currentMinuteDefault);
      todayDefault.setSeconds(0, 0);
      timestamps.push(todayDefault.toISOString());
  }

  return timestamps;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const timeframe = searchParams.get("timeframe");
  const platform = searchParams.get("platform");
  const steps = searchParams.get("steps") ? parseInt(searchParams.get("steps")!) : 7;

  if (!timeframe) {
    return NextResponse.json({ error: "timeframe is required" }, { status: 400 });
  }

  if (!platform) {
    return NextResponse.json({ error: "platform is required" }, { status: 400 });
  }

  if (
    platform !== "all" &&
    platform !== "instagram" &&
    platform !== "tiktok" &&
    platform !== "youtube"
  ) {
    return NextResponse.json({ error: "invaldig platform" }, { status: 400 });
  }

  if (timeframe !== "1d" && timeframe !== "1w" && timeframe !== "1m") {
    return NextResponse.json({ error: "invaldig timeframe" }, { status: 400 });
  }

  // Generera tidsstämplar baserat på tidsramens längd
  const timestamps = generateTimestamps(timeframe, steps);

  // Skapa dummy-data med de genererade tidsstämplarna
  if (platform === "all") {
    // Skapa chartConfig och chartData
    const chartConfig: { [key: string]: { label: string; color: string } } = {};
    const chartData: { [key: string]: { [key: string]: PlatformMetrics } } = {};

    // Skapa chartConfig
    platforms.forEach((p) => {
      chartConfig[p.value] = {
        label: p.name,
        color: p.color,
      };
    });

    // Skapa chartData
    timestamps.forEach((ts) => {
      chartData[ts] = {};
      platforms.forEach((p) => {
        // chartData[ts][p.value] = {
        //   views: Math.floor(Math.random() * 1000),
        //   likes: Math.floor(Math.random() * 500),
        //   followers: Math.floor(Math.random() * 200),
        // };
        // @ts-expect-error - chartData[ts][p.value] is not defined
        chartData[ts][p.value] = Math.floor(Math.random() * 800)
      });
    });

    return NextResponse.json({
      timestamps,
      platforms: platforms.map((p) => p.value),
      chartConfig,
      chartData: timestamps.map((ts) => ({
        timestamp: ts,
        ...chartData[ts],
      })),
    });
  }

  // Skapa dummy-data med de genererade tidsstämplarna
  const data = {
    timestamps,
    platforms: [platform],
    chartConfig: {
      [platform]: {
        label: platform.charAt(0).toUpperCase() + platform.slice(1),
        color: platforms.find((p) => p.value === platform)?.color,
      },
    },
    chartData: timestamps.map((ts) => ({
      timestamp: ts,
      // [platform]: {
      //   views: Math.floor(Math.random() * 1000),
      //   likes: Math.floor(Math.random() * 500),
      //   followers: Math.floor(Math.random() * 200),
      // },
      [platform]: Math.floor(Math.random() * 800),
    })),
  };

  return NextResponse.json(data);
}
