import { Component, ViewEncapsulation } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'mono-nav-bar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    encapsulation: ViewEncapsulation.None // Setze ViewEncapsulation auf None
})
export class NavBarComponent {}
