import {Component} from '@angular/core';

enum SortTypes {
  square = 'square',
  cube = 'cube',
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public requiredArea: number = 72; // площадь в квадратных метрах
  public length: number = 4; // длина в метрах
  public width: number = 12; // ширина в сантиметрах
  public height: number = 10; // ширина в сантиметрах
  public piecesPerPackage: number = 6; // количество половой в одной упаковке

  public packagesNeeded: number = 0;
  public remainingFloorboards: number = 0;
  public amount: number = 0;
  public price = 72;

  public hintLengths = [2,3,4,6];
  public hintWidths = [9,12,15,20];
  public type: SortTypes = SortTypes.square;
  public sortType = SortTypes;

  constructor() {
    this.calculatePackages();
  }

  public calculatePackages(): void {
    let widthInMeters = this.width / 100;
    let heightInMeters = this.height / 100;
    let singleFloorboardArea = this.length * widthInMeters;
    if (this.type === SortTypes.cube) {
      singleFloorboardArea *= heightInMeters;
    }
    let totalFloorboardsNeeded = Math.ceil(this.requiredArea / singleFloorboardArea);
    const piecesPerPackage = this.piecesPerPackage || 1;

    this.packagesNeeded = Math.floor(totalFloorboardsNeeded / piecesPerPackage);
    this.remainingFloorboards = totalFloorboardsNeeded % piecesPerPackage;
    this.amount = (this.packagesNeeded * piecesPerPackage + this.remainingFloorboards) * singleFloorboardArea;
  }

  public typeChange(value: any): void {
    this.type = value;

    if (this.type === SortTypes.cube) {
      this.piecesPerPackage = 1;
    }

    this.calculatePackages();
  }
}
