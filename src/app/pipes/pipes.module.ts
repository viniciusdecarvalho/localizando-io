import { NgModule } from '@angular/core';
import { PathResolverPipe } from './path-resolver.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ 
      PathResolverPipe
  ],
  imports: [
      CommonModule
  ],
  exports: [
      PathResolverPipe
  ]
})
export class PipesModule {}
