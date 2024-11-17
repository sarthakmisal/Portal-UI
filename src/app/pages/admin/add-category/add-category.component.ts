import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/exam/category.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  private base_url = "http://[::1]:5500/category";
  constructor(private cService: CategoryService) { }

  cat: any = { "title": "", "description": "" };
  username: any;
  pass: any;
  handleSubmit() {
    if (!this.cat.title) { this.username = "danger"; return }
    else { this.username = ""; this.pass = "" }
    if (!this.cat.description) { this.pass = "danger"; return; }
    else this.pass = ""
    this.cService.saveCategory(this.cat).subscribe({
      next: (dat) => {
        Swal.fire({
          title: this.cat.title + ' Saved!',
          text: 'Category saved successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Cannot add Category.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
  }
}
