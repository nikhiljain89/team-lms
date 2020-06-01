import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularCourse = [
    {
      courseImage: '~/../../../assets/images/courses/tcpl-introduction.png',
      courseCode: 'TC.IN.101',
      courseName: 'Team Computers: An Introduction',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
    {
      courseImage: '~/../../../assets/images/courses/email-etiquette.png',
      courseCode: 'IMS.EE.101',
      courseName: 'Are you aware of E2? E-Mail Etiquette',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
    {
      courseImage: '~/../../../assets/images/courses/leadership-series.png',
      courseCode: 'TC.LS.101',
      courseName: 'Leadership Series',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
    {
      courseImage: '~/../../../assets/images/courses/introduction-of-tde.png',
      courseCode: 'TDE.IN.101',
      courseName: 'Introduction of Team Digital Engineering',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
    {
      courseImage: '~/../../../assets/images/courses/enduser-computing-level1.png',
      courseCode: 'IMS.EUCL.101',
      courseName: 'End User Computing Level 1',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
    {
      courseImage: '~/../../../assets/images/courses/apple-mac-os-basics.png',
      courseCode: 'IMS.AMOS.101',
      courseName: 'Apple Mac OS Basics',
      startDate: 'April 8, 2020',
      learnMore: '/signin',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
