import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../component/shared/breadcrumb/breadcrumb';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, BreadcrumbComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout implements OnInit {
  quickQuery = '';
  isDarkMode = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Load saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    // Save preference to localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  goSearch(): void {
    const q = (this.quickQuery || '').trim();

    if (!q) return;

    this.router.navigate(['/busqueda'], {
      queryParams: { q }
    });
  }

}
