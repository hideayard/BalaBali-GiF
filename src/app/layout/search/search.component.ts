import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GitService} from "../../service/git.service";
import {PageEvent} from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  myControl = new FormControl();
  dataRepo:any;
  loading: boolean = false;

  form:any={text:"Bali",sort:"updated",order:"desc"};
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  page = 1;

  // MatPaginator Output
  pageEvent: PageEvent;

  durationInSeconds = 2;

  constructor(
    private gitService: GitService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadData();
  }

  submit()
  {
    console.log("submit = ",this.form.text)
    if(this.form.text=="")
    {
      this.openSnackBar("Please enter name to search");
    }
    else
    {
      const params = {
        q : this.form.text,
        per_page : this.pageSize,
        page : this.page,
        sort : this.form.sort,
        order : this.form.order,
      };
      this.loading = true;
      this.gitService.searchRepo(params)
      .subscribe((res: any) => {
          this.loading = false;
          console.log(res);
          this.dataRepo = res.items;

      }, (err) => {
          this.loading = false;
          console.log(err);
      });
    }
  }

  openSnackBar(text) {
    this._snackBar.open(text, 'Okay', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  loadAllData(event?:PageEvent){
    this.loading = true;
    this.gitService.getAll()
    .subscribe((res: any) => {
        this.loading = false;
        console.log(res);
        this.dataRepo = res;

    }, (err) => {
        this.loading = false;
        console.log(err);
    });
  }

  onSortChange()
  {
    console.log("onSortChange");
    this.loadData();
  }

  loadData()
  {
    const params = {
      q : this.form.text,
      per_page : this.pageSize,
      page : this.page,
      sort : this.form.sort,
      order : this.form.order,
    };
    this.loading = true;
    this.gitService.searchRepo(params)
    .subscribe((res: any) => {
        this.loading = false;
        console.log(res);
        this.dataRepo = res.items;

    }, (err) => {
        this.loading = false;
        console.log(err);
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    console.log(setPageSizeOptionsInput);
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  public getServerData(event?:PageEvent){

    if(this.form.text=="")
    {
      this.openSnackBar("Please enter name to search");
    }
    else
    {
      this.page = event.pageIndex;
      const params = {
        q : this.form.text,
        per_page : event.pageSize,
        page : event.pageIndex,
        sort : this.form.sort,
        order : this.form.order,
      };
      this.loading = true;
      this.gitService.searchRepo(params)
      .subscribe((res: any) => {
          this.loading = false;
          console.log(res);
          this.dataRepo = res.items;

      }, (err) => {
          this.loading = false;
          console.log(err);
      });
    }
  }

}
