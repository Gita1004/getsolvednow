import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public isCollapsed = true;
  public currentItem = '';
  public searchResults: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.searchResults = [];
    if (term != '' || term.trim() != '') {
      // this.searchService
      //   .getSearchResultsForAutoComplete(term)
      //   .subscribe((results: any[]) => this.searchResults = results);
    }
  }

  onSearch($event: any, term: string) {
    //user press enter or choose item from autocomplete
    if ($event.keyCode === 13) {
      // this.searcherChange.emit(term);
    } else if ($event.keyCode === undefined) {
      let hiddenInput = <HTMLInputElement>document.getElementById('searcher-hidden');
      if (hiddenInput.value) {
        // this.searcherChange.emit(hiddenInput.value);
      }
    } else {
      this.search(term);
    }
  }

  onChange($event: any) {
    let input: HTMLInputElement = $event.target;
    let lst = input.getAttribute('list');
    let options = document.querySelectorAll('#' + lst + ' option');
    let hiddenInput = <HTMLInputElement>document.getElementById(input.id + '-hidden');
    let inputValue = input.value;

    hiddenInput.value = inputValue;

    for (var i = 0; i < options.length; i++) {
      var option = options[i] as HTMLElement;
      if (option.innerText.includes(inputValue)) {
        hiddenInput.value = option.getAttribute('data-val') || '';
        break;
      }
    }
  }

}
