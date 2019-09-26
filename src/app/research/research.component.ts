import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'Adz-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      keywords: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  onClick() {
    if (this.searchForm.valid) {
      this.router.navigate(['/result', this.searchForm.controls.keywords.value]);
    }
  }
}
