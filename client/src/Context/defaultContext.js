import {LOCALES} from "../i18n";
import {STORAGE_KEY} from "../utils/constants/locale";

export default {
    locale: localStorage.getItem(STORAGE_KEY) || LOCALES.SPANISH
}
