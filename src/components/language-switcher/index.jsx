"use client";
import Globe from "../../../public/globe";
import "./styles.scss";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const currentLanguage = currentLocale === "en" ? "EN" : "RU";

  const handleChange = () => {
    const newLocale = currentLocale === "en" ? "ru" : "en";
    router.push(pathname, { locale: newLocale });
  };

  return (
    <button onClick={handleChange} className="dropdown-button">
      <Globe className="globe-icon" />
      <p className="language-text">{currentLanguage}</p>
    </button>
  );
}
