import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LaunchDetailsGQL} from '../services/spacexGraphql.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private launchDetails: LaunchDetailsGQL
  ) {
  }

  launchDetails$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      return this.launchDetails.fetch({id});
    }),
    map(res => res.data.launch)
  );

  openLink(link: string) {
    window.open(link);
  }
}
