import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  animations: [slideInAnimation],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public limitModalDialog: MatDialog) {
    console.log(
      '%c%s',
      'color: #939393; background: transparent; font-size: 24pt; background-clip: text; text-shadow: 0px 1px 3px rgba(243,243,243,.5);',
      'Hello stranger! Are you lost?',
    );
    document.onkeydown = (e) => {
      if (this.limitModalDialog.openDialogs.length > 0) return;
      if (e.ctrlKey && e.keyCode === 67) {
        this.openLimitDialog();
      }
    };
  }

  openLimitDialog(): void {
    this.limitModalDialog.open(LimitModal, {
      autoFocus: true,
      width: '350px',
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}

@Component({
  selector: 'app-limit-modal',
  template: `<i class="fas fa-times" (click)="dialogRef.close()"></i>
    <h2>Yours CTRL+C limit is over for today.</h2> `,
  styles: [
    `
      i {
        width: 100%;
        text-align: end;
        cursor: pointer;
      }
      h2 {
        margin: 20px 0;
        text-align: center;
      }
    `,
  ],
})
export class LimitModal {
  constructor(public dialogRef: MatDialogRef<LimitModal>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
