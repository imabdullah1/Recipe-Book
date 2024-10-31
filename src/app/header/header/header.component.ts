import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatastorageService } from 'src/app/Shared/datastorage.service';
import { ThemesService } from 'src/app/Shared/Theme/service/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public themeService: ThemesService,
    private dataStorageService: DatastorageService
  ) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  toggleTheme(theme: 'light' | 'dark') {
    this.themeService.setTheme(theme);
  }

  get currentTheme(): 'light' | 'dark' {
    return this.themeService.getTheme();
  }
}
