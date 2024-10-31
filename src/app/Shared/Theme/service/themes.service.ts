import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themeKey = 'theme';
  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    const savedTheme =
      (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem(this.themeKey, theme); // Save theme preference
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}
