import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-loader',
  template: `
  <div class="bg-white p-3" style="position: fixed;left:1%;top:20%;">
    <h5 class="font-weight-bold text-uppercase">Don't</h5>
    <ul>
      <li>Refresh Page</li>
      <li>Switch Tabs</li>
    </ul>
  </div>
  <div class="progress-container d-flex flex-column">
      <h4 class="text-secondary font-weight-bold mb-3">
         {{ roundToMinutesAndSeconds(time).minutes }} Min {{ roundToMinutesAndSeconds(time).seconds }} Sec

      </h4>
      <svg [attr.width]="diameter" [attr.height]="diameter">
        <circle
          [attr.cx]="radius"
          [attr.cy]="radius"
          [attr.r]="radius - strokeWidth/2"
          fill="none"
          stroke="transparent"
          [attr.stroke-width]="strokeWidth"
          />
        <circle
          [attr.cx]="radius"
          [attr.cy]="radius"
          [attr.r]="radius - strokeWidth/2"
          fill="none"
          stroke="#FF69B4"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="progress"
          [attr.transform]="'rotate(-90 ' + radius + ' ' + radius + ')'"
          stroke-linecap="round"
        />
        <text 
          [attr.x]="radius" 
          [attr.y]="radius" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#FF69B4"
          font-size="24"
        >
          {{percentage}}%
        </text>
      </svg>
    </div>
  `,
  styles: [`
    .progress-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class LoaderComponent implements OnChanges {
  @Input() percentage = 0;
  @Input() time = 0;

  diameter = 160;
  radius = 80;
  strokeWidth = 10;
  circumference = 2 * Math.PI * this.radius;
  progress: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['percentage']) {
      const validPercentage = Math.min(100, Math.max(0, this.percentage));
      this.progress = this.circumference - (validPercentage / 100) * this.circumference;
    }
  }

  constructor() {
    this.progress = this.circumference;
  }
  roundToMinutesAndSeconds(time: number): { minutes: number; seconds: number } {
    return {
      minutes: Math.floor(time / 60),
      seconds: time % 60,
    };
  }

}