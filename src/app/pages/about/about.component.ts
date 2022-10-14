import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('About us');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.',
      },
      {
        property: 'og:description',
        content:
          'Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.',
      },
      {
        name: 'twitter:description',
        content:
          'Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.',
      },
      {
        name: 'twitter:title',
        content:
          'Empowering the world to develop technology through collective knowledge',
      },
      {
        property: 'og:title',
        content:
          'Empowering the world to develop technology through collective knowledge',
      },
      { property: 'og:url', content: 'https://getsolvednow.com/' },
      { name: 'twitter:url', content: 'https://getsolvednow.com/' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/img/product/og/og-company.png' },
      { property: 'og:image', content: '/img/product/og/og-company.png' },
      { name: 'robots', content: 'Index, Follow' },
    ]);
  }

  ngOnInit(): void {}
}
