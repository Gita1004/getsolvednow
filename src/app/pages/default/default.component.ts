import { getSafePropertyAccessString, ThisReceiver } from '@angular/compiler';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  questiondata: any;
  sanitizedValue: SafeHtml | undefined;
  sanitizedvalues: any;
  description: any;
  sanitizeddescription: any;
  allquestion: any;
 
  constructor(private service:MainserviceService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
        this.service.getAllQuestions().subscribe((res:any)=>{
         
          this.questiondata = res;
          this.questiondata.forEach((element:any) => {
            //console.log(element.description)
             this.allquestion = element;
             this.sanitizedValue = this.sanitizer.bypassSecurityTrustHtml(this.allquestion.description);
          });
        })
  }

  

}
