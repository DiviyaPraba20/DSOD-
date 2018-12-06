import { Injectable } from '@angular/core';
import { Navigation } from '../models/navigation.model';

Injectable({ providedIn: 'root' });

export class NavbarService {
  getNavItems(): Navigation[] {
    return [
      { title: 'Home', link: './' },
      {
        title: 'Education',
        link: 'education',
        children: [
          { title: 'Latest', link: 'latest' },
          { title: 'Articles', link: 'articles' },
          { title: 'Videos', link: 'videos' },
          { title: 'Podcasts', link: 'pdcasts' },
          { title: 'Visual Essay', link: 'vEssay' },
          { title: 'Events', link: 'events' }
        ]
      },
      {
        title: 'Careers',
        link: 'careers',
        children: [
          { title: 'My Jobs', link: 'my-jobs' },
          { title: 'Job Alerts', link: 'job-alerts' },
          { title: 'Search', link: 'search' }
        ]
      },
      {
        title: 'From Our Sponsors',
        link: 'sponsors'
      },
      {
        title: 'DSO Practice',
        link: 'practice',
        children: [
          { title: 'Resources', link: 'recorcers' },
          { title: 'Legislation', link: 'legislation' }
        ]
      },
      {
        title: 'Development',
        link: 'development',
        children: [
          { title: 'My CE', link: 'myCE' },
          { title: 'Learning Tracks', link: 'learningTracks' }
        ]
      },
      {
        title: 'Community',
        link: 'community',
        children: [
          { title: 'Messaging / Wall', link: 'community/messaging' },
          { title: 'eNewsletter', link: 'community/enewsletter' },
          { title: 'UNITE Magazine', link: 'community/unite' }
        ]
      }
    ];
  }
}
