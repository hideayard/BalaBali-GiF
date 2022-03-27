import { Component, OnInit,Inject  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from 'src/app/service/git.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name: string = '';
  loading: boolean = false;

  detailRepo:any={full_name:'',owner:{avatar_url:'',login:''} };
  constructor(
    private gitService: GitService,
    public route: ActivatedRoute,
    public dialogref : MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.name = this.route.snapshot.paramMap.get('name');
    console.log("this.data=",this.data);
    if (this.data.name != '') {
      this.gitService.getDetailRepo(this.data.name)
      .subscribe((res: any) => {
          console.log(res);
          this.detailRepo = res;
      }, (err) => {
          console.log(err);
      });
    }
  }

  ngOnInit() {

  }

}
