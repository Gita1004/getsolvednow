import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainserviceService } from 'src/app/mainservice.service';


@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {

  richTextForm: FormGroup = this._fb.group({
    title: ['', Validators.required],
    description: [
      ''
    ]
  });

  constructor(private _fb: FormBuilder,private service:MainserviceService) {
  }

  get descriptionRichControl() {
    return this.richTextForm.get('description') as FormControl;
  }

  submitAskQuestion(data:any){
    this.service.submitquestion(data).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
