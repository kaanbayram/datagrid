import { IDictionary } from "../entities";

interface ILanguage {
  culture: string;
  name: string;
  defaultCulture: boolean;
}

class LanguageManager {
  static currentLanguage: ILanguage = { culture: "", name: "", defaultCulture: false };
  static defaultLanguage: ILanguage = { culture: "", name: "", defaultCulture: false };
  static languages: Array<ILanguage> = [];

  static getText(languageObject: IDictionary<string>): string {
    if (LanguageManager.currentLanguage.culture && languageObject[LanguageManager.currentLanguage.culture]) {
      return languageObject[LanguageManager.currentLanguage.culture];
    }
    else if (LanguageManager.defaultLanguage.culture && languageObject[LanguageManager.defaultLanguage.culture]) {
      return languageObject[LanguageManager.defaultLanguage.culture];
    }
    else if (LanguageManager.languages?.length) {
      return languageObject[LanguageManager.languages.find((language) => language.defaultCulture)?.culture || ""] ||
        languageObject[LanguageManager.languages[0].culture];
    }
    return "";
  }
}

export { LanguageManager, ILanguage };