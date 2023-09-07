import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import GSTC, { Config, GSTCResult } from 'gantt-schedule-timeline-calendar';
import { Plugin as TimelinePointer } from 'gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js';
import { Plugin as Selection } from 'gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("myGantt")element!:ElementRef<HTMLDivElement>;
  gstc!: GSTCResult;

  ngAfterViewInit(): void {

    console.log(this.element.nativeElement)

    let start = GSTC.api.date().startOf('day').subtract(30, 'day');
    start = start.add(1, 'day');
    const id =  GSTC.api.GSTCID("1");
    console.log(id)

    const GSTCI = GSTC.api.GSTCID;
    const lab="use"
    const config:Config={
      licenseKey:'====BEGIN LICENSE KEY====\nXOfH/lnVASM6et4Co473t9jPIvhmQ/l0X3Ewog30VudX6GVkOB0n3oDx42NtADJ8HjYrhfXKSNu5EMRb5KzCLvMt/pu7xugjbvpyI1glE7Ha6E5VZwRpb4AC8T1KBF67FKAgaI7YFeOtPFROSCKrW5la38jbE5fo+q2N6wAfEti8la2ie6/7U2V+SdJPqkm/mLY/JBHdvDHoUduwe4zgqBUYLTNUgX6aKdlhpZPuHfj2SMeB/tcTJfH48rN1mgGkNkAT9ovROwI7ReLrdlHrHmJ1UwZZnAfxAC3ftIjgTEHsd/f+JrjW6t+kL6Ef1tT1eQ2DPFLJlhluTD91AsZMUg==||U2FsdGVkX1/SWWqU9YmxtM0T6Nm5mClKwqTaoF9wgZd9rNw2xs4hnY8Ilv8DZtFyNt92xym3eB6WA605N5llLm0D68EQtU9ci1rTEDopZ1ODzcqtTVSoFEloNPFSfW6LTIC9+2LSVBeeHXoLEQiLYHWihHu10Xll3KsH9iBObDACDm1PT7IV4uWvNpNeuKJc\npY3C5SG+3sHRX1aeMnHlKLhaIsOdw2IexjvMqocVpfRpX4wnsabNA0VJ3k95zUPS3vTtSegeDhwbl6j+/FZcGk9i+gAy6LuetlKuARjPYn2LH5Be3Ah+ggSBPlxf3JW9rtWNdUoFByHTcFlhzlU9HnpnBUrgcVMhCQ7SAjN9h2NMGmCr10Rn4OE0WtelNqYVig7KmENaPvFT+k2I0cYZ4KWwxxsQNKbjEAxJxrzK4HkaczCvyQbzj4Ppxx/0q+Cns44OeyWcwYD/vSaJm4Kptwpr+L4y5BoSO/WeqhSUQQ85nvOhtE0pSH/ZXYo3pqjPdQRfNm6NFeBl2lwTmZUEuw==\n====END LICENSE KEY====',
      list:{
        rows:{
          id:{id,expanded:false,parentId:undefined,label:"User "+id},

        },
        columns:{
          resizer:{
            inRealTime:true
          },
          data:{
            [GSTC.api.GSTCID('label')]:{data:"label",id:GSTC.api.GSTCID('label'),width:1,header:{content:"Room"},isHTML:true,
            minWidth: 100,expander: true,}
          }
        },

      },
      chart:{
        items:{
          id:{id:GSTC.api.GSTCID("1"),label:"tarea 1",time:{start:start.valueOf(),end:start.add(1, 'day').valueOf(),},rowId:id,}
        }
      },
      plugins: [TimelinePointer(), Selection()],
    }
    console.log(config.list?.rows!)
    console.log(config.chart?.items)
    console.log(config.list?.columns)

    const state = GSTC.api.stateFromConfig(config);
    //globalThis.state=state;
    this.gstc=GSTC({
      element:this.element.nativeElement,
      state
    })

  }


}
