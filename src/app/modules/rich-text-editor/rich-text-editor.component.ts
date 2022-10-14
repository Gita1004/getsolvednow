import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuillConfiguration } from './quill.configuration';

@Component({
  selector: 'rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {

  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl;
  constructor() {
    this.control = new FormControl();
  }

}
