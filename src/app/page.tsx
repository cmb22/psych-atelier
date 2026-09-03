import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") ?? "";

    const preferredLanguage = acceptLanguage
        .split(",")
        .map((language) => language.split(";")[0].trim().toLowerCase());

    if (preferredLanguage.some((language) => language.startsWith("de"))) {
        redirect("/de");
    }

    if (preferredLanguage.some((language) => language.startsWith("fr"))) {
        redirect("/fr");
    }

    redirect("/en");
}