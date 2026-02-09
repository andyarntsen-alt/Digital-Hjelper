/**
 * Sikker håndtering av localStorage med feiltoleranse
 */

/**
 * Henter en verdi fra localStorage og parser den som JSON
 * Returnerer defaultValue hvis parsing feiler eller verdien ikke finnes
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }

    const parsed = JSON.parse(item);

    // Valider at typen matcher forventet type
    if (Array.isArray(defaultValue) && !Array.isArray(parsed)) {
      console.warn(`Storage item "${key}" expected array but got ${typeof parsed}`);
      return defaultValue;
    }

    if (typeof defaultValue === 'object' && defaultValue !== null && typeof parsed !== 'object') {
      console.warn(`Storage item "${key}" expected object but got ${typeof parsed}`);
      return defaultValue;
    }

    return parsed as T;
  } catch (error) {
    console.warn(`Failed to parse localStorage item "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Lagrer en verdi i localStorage som JSON
 * Returnerer true hvis lagring var vellykket, false ellers
 */
export function setStorageItem<T>(key: string, value: T): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Failed to save localStorage item "${key}":`, error);
    return false;
  }
}
