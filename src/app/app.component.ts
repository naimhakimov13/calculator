import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public requiredArea: number = 72; // площадь в квадратных метрах
  public length: number = 4; // длина в метрах
  public width: number = 10; // ширина в сантиметрах
  public piecesPerPackage: number = 10; // количество половой в одной упаковке

  public packagesNeeded: number = 0;
  public remainingFloorboards: number = 0;

  public hintLengths = [3,4,6]

  constructor() {
    this.calculatePackages();
  }

  calculatePackages() {
    let widthInMeters = this.width / 100;
    let singleFloorboardArea = this.length * widthInMeters;
    let totalFloorboardsNeeded = Math.ceil(this.requiredArea / singleFloorboardArea);

    this.packagesNeeded = Math.floor(totalFloorboardsNeeded / (this.piecesPerPackage || 1));
    this.remainingFloorboards = totalFloorboardsNeeded % (this.piecesPerPackage || 1);
  }
}
