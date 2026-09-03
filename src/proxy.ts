import { NextRequest, NextResponse } from "next/server";

const supportedLanguages = ["en", "de", "fr"] as const;
const defaultLanguage = "en";

function getLanguage(request: NextRequest) {
    const acceptLanguage = request.headers.get("accept-language") ?? "";

    const languages = acceptLanguage
        .split(",")
        .map((item) => {
            const [locale, q = "q=1"] = item.trim().split(";");

            return {
                locale: locale.toLowerCase(),
                quality: Number(q.replace("q=", "")),
            };
        })
        .sort((a, b) => b.quality - a.quality);

    for (const { locale } of languages) {
        const language = locale.split("-")[0];

        if (
            supportedLanguages.includes(
                language as (typeof supportedLanguages)[number]
            )
        ) {
            return language;
        }
    }

    return defaultLanguage;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const language = getLanguage(request);
    const url = request.nextUrl.clone();

    if (pathname === "/") {
        url.pathname = `/${language}`;
        return NextResponse.redirect(url);
    }

    if (pathname === "/the-67") {
        url.pathname = `/${language}/the-67`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/the-67"],
};