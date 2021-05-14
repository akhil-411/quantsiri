import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;
  currentTheme: string;

  constructor(private darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
    this.getCurrentTheme();
  }

  onToggle(): void {
    this.darkModeService.toggle();
    this.getCurrentTheme();
  }

  getCurrentTheme() {
    if (JSON.parse(localStorage.getItem('dark-mode')).darkMode)
      this.currentTheme = 'Dark Mode'
    else
      this.currentTheme = 'Light Mode'
  }

}
