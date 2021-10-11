import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  id = this.route.snapshot.params['id'];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getBook(this.id);
    this.bookForm = this.formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required],
      'publisher': [null, Validators.required],
      'published_year': [null, Validators.required]
    });
  }

  getBook(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log('Edit page             ',data);
        // this.book = data;
        this.editBook(data);
      });
  }

  editBook(book) {
    this.bookForm.setValue({
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      author: book.author,
      publisher: book.publisher,
      published_year: book.published_year
    })
  }

  onSubmit(form: NgForm) {
    this.api.updateBook(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
