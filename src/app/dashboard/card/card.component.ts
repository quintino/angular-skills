import { Component, OnInit, Input } from '@angular/core';
import { FakeApiService } from '../../fake-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private service: FakeApiService) { }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    let count = this.service.like(card.id);
    card.likes = count;
  }

  getLikeColor(count) {
    if (count > 9) {
      return 'verde';
    } else if (count > 4) {
      return 'azul';
    }
    return '';
  }

  onShare(card: any){
    let url = 'https://www.qsoft.eti.br';
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

}
