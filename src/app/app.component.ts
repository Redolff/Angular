import { Component } from '@angular/core';
import { Icon } from '@iconify/vue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hobby Store';
}

export default {
  components: {
    Icon,
  },
};