import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

export const content = {
  "data": {
    "areas": [{
      "sections": [{
        "htmltypes": [
          {
            "type": "heading",
            "text": "This is a sample heading",
            "inlineTags": [{
              "type": "LINK",
              "text": "link Element"
            }],
            "inlineStyle": [{
              "type": "BOLD",
              "text": "Bolded Text"
            }]
          },
          {
            "type": "paragraph",
            "text": "This a sample text /n",
            "inlineTags": [],
            "inlineStyle": []
          }
        ]
      }]
    }]
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';


  ngOnInit() {
    // content.data.areas.forEach(sectionBlock => {
    //   sectionBlock.sections.forEach(obj => {
    //     obj.htmltypes.forEach(val => {
    //       console.log(val);
    //       if (val.inlineTags.length > 0) {
    //         val.inlineTags.forEach(tag => {
    //           console.log(tag);
    //         })
    //       }
    //       if (val.inlineStyle.length > 0) {
    //         val.inlineStyle.forEach(style => {
    //           console.log(style);
    //         })
    //       }
    //     })
    //   })
    // })

    from(content.data.areas).pipe(
      concatMap(sectionBlock => sectionBlock.sections),
      concatMap(obj => obj.htmltypes)
    ).subscribe(tag => console.log(tag));


  }


}
