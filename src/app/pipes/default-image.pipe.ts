import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string | null | undefined, defaultImage: string = '../../../assets/images/default-image.png'): string {
    debugger;
    return value ? value : defaultImage;
  }

}