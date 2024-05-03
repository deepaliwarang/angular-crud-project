import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateage'
})
export class CalculateagePipe implements PipeTransform {

  transform(birthdate: string): number {
    const today = new Date();
    const doj = new Date(birthdate);
    let age = today.getFullYear() - doj.getFullYear();
    const monthDiff = today.getMonth() - doj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < doj.getDate())) {
      age--;
    }
    return age;
  }
}