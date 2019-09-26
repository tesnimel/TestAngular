import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchServiceService} from '../service/search-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'Adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  listBooks: any;
  listBooksForFilter: any;
  selectedBook: any;
  charged = false;
  listCategories = [];

  constructor(private route: ActivatedRoute,
              private searService: SearchServiceService,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.searService.getBooks(this.route.snapshot.paramMap.get('words')).subscribe(data => {
      this.listBooksForFilter = data;
      this.listBooks = this.listBooksForFilter;
      this.getListCategories(data);
    });
  }

  getListCategories(data) {
    for (let i = 0; i < data.items.length; i++) {
      let checked = false;
      this.listCategories.map(element => {
        if (data.items[i].volumeInfo.categories !== undefined) {
          data.items[i].volumeInfo.categories.map(book => {
            if (element === book) {
              checked = true;
            }
          });
        }
      });
      if (checked === false && data.items[i].volumeInfo.categories !== undefined) {
        this.listCategories.push(data.items[i].volumeInfo.categories);
      }
    }
    this.listCategories.push('NONE');
  }

  openDialog(identifier) {
    let dialogRef: MatDialogRef<DialogDataExampleDialogComponent, any> = null;
    this.searService.getBookByISBN(identifier).subscribe(data => {
      this.selectedBook = data;
      this.charged = true;
      dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
        width: '700px',
        data: this.selectedBook
      });
    });
  }

  onChangeFilter($event, categorie) {
    if ($event.isUserInput) {
      this.listBooks = this.listBooksForFilter;
      if (categorie !== 'NONE') {
        this.listBooks = {
          ...this.listBooks,
          items: this.listBooks.items.filter(book => book.volumeInfo.categories === categorie)
        };
      }
    }
  }

  onClickReturn() {
    this.router.navigate(['/research']);
  }
}

@Component({
  selector: 'Adz-dialog',
  templateUrl: './dialog.html',
})
export class DialogDataExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
